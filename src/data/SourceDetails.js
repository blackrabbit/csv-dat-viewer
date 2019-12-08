/**
 * Represents a data config that can be used to render the UI.
 */
class SourceDetails {
  constructor(papa_parse_results, config) {
    // Raw config for this source details.
    this.config_ = config;

    // Raw results of the parse from Papaparse.
    this.papa_parse_results_ = papa_parse_results;

    // Headers for the raw data downloaded.
    this.headers_ =
      "data" in papa_parse_results ? papa_parse_results.data.shift() : [];

    // Raw results of the parse from Papaparse.
    if ("data" in papa_parse_results) {
      this.data_ = cleanData(papa_parse_results.data, this.headers_.length);
    } else {
      this.data_ = [];
    }

    // Private for mapping header_name to row indices where that data is sorted.
    // We do this to save memory in the browser. These indices are created
    // on demand.
    this.sortIndexMap_ = new Map();
  }

  isEmpty() {
    return this.data_.length < 1;
  }

  getEstimatedSize() {
    let number = Number(this.config_.row_count);
    return isNaN(number) ? 0 : number;
  }

  getRawUrl() {
    return this.config_.url;
  }

  getRowForSortedByHeader(row_index, header_name, sort_direction) {
    const lookup_index =
      sort_direction > 0 ? this.getSize() - 1 - row_index : row_index;
    if (this.sortIndexMap_.has(header_name)) {
      return this.sortIndexMap_.get(header_name)[lookup_index];
    }
    const column_index = this.getColumnIndexFromHeaderName(header_name);
    const index_for_header_name = generateArrayWithIndices(this.getSize()).sort(
      (row_index1, row_index2) => {
        const cell1 = this.getCell(column_index, row_index1);
        const cell2 = this.getCell(column_index, row_index2);

        if (cell1.type == "number" || cell1.type == "date") {
          return cell1.content - cell2.content;
        } else {
          if (cell1.content < cell2.content) {
            return -1;
          }

          if (cell1.content > cell2.content) {
            return 1;
          }

          return 0;
        }

        // Fallback; should never happen.
        return 0;
      }
    );

    this.sortIndexMap_.set(header_name, index_for_header_name);
    return index_for_header_name[lookup_index];
  }

  getColumnIndexFromHeaderName(header_name) {
    for (let i = 0; i < this.getNumberOfColumns(); i++) {
      if (header_name == this.getHeaders()[i]) {
        return i;
      }
    }

    return -1;
  }

  getHeaders() {
    return this.headers_;
  }

  getHeaderAt(index) {
    return this.getHeaders()[index];
  }

  getColumn(header_name) {
    const column_index = this.getColumnIndexFromHeaderName(header_name);
    const column = [];
    for (let row_index = 0; row_index < this.getSize(); row_index++) {
      column.push(this.getCell(column_index, row_index));
    }

    return column.map(cell => cell.content);
  }

  getSummaryStats(numerical_header_name) {
    const column = this.getColumn(numerical_header_name);
    // NOTE(alishah): Watch out for overflows. Use a BigDecimal probably.
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    let sum = 0;
    let nulls = 0;

    // Let's go through these all at once to reduce the latency.
    for (let i = 0; i < column.length; i++) {
      const value = column[i];
      min = Math.min(min, value);
      max = Math.max(max, value);
      sum = sum + value;

      if (value == "" || value == null) {
        nulls += 1;
      }
    }

    const mean = sum / column.length;

    function average(data) {
      var sum = data.reduce(function(sum, value) {
        return sum + value;
      }, 0);

      var avg = sum / data.length;
      return avg;
    }

    const square_diffs = column.map(v => {
      var diff = v - mean;
      var sqrt_diff = diff * diff;
      return sqrt_diff;
    });

    const avg_square_diff = average(square_diffs);
    const std_dev = Math.sqrt(avg_square_diff);

    return {
      min: min.toFixed(2),
      max: max.toFixed(2),
      mean: mean.toFixed(2),
      null_count: nulls,
      std_dev: std_dev.toFixed(2)
    };
  }

  getCell(column_index, row_index) {
    const raw_cell = this.data_[Number(row_index)][column_index];
    let cell = raw_cell;
    if (cell == null) {
      return "";
    }

    let type = "string";
    if (!isNaN(cell)) {
      type = "number";
      cell = Number(cell);
    } else if (!isNaN(Date.parse(cell))) {
      type = "date";
      cell = Date.parse(cell);
    }
    return { content: cell, raw_content: raw_cell, type: type };
  }

  getNumberOfColumns() {
    return this.getHeaders().length;
  }

  getSize() {
    return this.data_.length;
  }
}

// Generate array where the values are the indices.
// We use this to generate an index for sorting.
function generateArrayWithIndices(size) {
  const array = new Array(size).fill(true);
  for (let i = 0; i < array.length; i++) {
    array[i] = i;
  }

  return array;
}

// Clean the downloaded data. We have a known bug in
// Papaparse where the last row is sometimes added
// empty when streaming.
function cleanData(parsed_data, number_of_headers) {
  const data = [];
  for (let i = 0; i < parsed_data.length; i++) {
    let row = parsed_data[i];
    if (row.length == number_of_headers) {
      data.push(row);
    }
  }

  return data;
}

export default SourceDetails;

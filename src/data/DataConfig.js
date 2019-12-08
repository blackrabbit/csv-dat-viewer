/**
 * Represents a data config that can be used to render the UI.
 */
class DataConfig {
  constructor(raw_json) {
    // Raw JSON for the data config.
    this.raw_json_ = raw_json;

    // Parsed entries map to make it easier to handle.
    this.data_config_ = new Map();

    // Parse the raw JSON aggressively now.
    this.parse_();
  }

  isEmpty() {
    return this.raw_json_ == [];
  }

  parse_() {
    for (let data_set of this.raw_json_) {
      this.data_config_.set(uuidv4(), data_set);
    }
  }

  getNames() {
    return Array.from(this.data_config_, ([key, value]) => value.name);
  }

  findByName(name) {
    for (let [uuid, source_details] of this.data_config_.entries()) {
      if (source_details.name === name) {
        return source_details;
      }
    }

    return null;
  }
}

// Generate a GUID.
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

export default DataConfig;

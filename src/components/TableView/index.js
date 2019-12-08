import React, { useState, useEffect } from "react";
import { VariableSizeGrid as Grid } from "react-window";
import {
  DATA_SOURCES_PANE_ID,
  VERTICAL_HEADER_FOOTER_MARGIN,
  ROW_HEIGHT_PX,
  LEFT_HAND_SIDE_COLUMN,
  PADDING_PIXELS_MARGIN
} from "constants.js";
import { debounce } from "utils.js";

import styles from "./styles.css";

function getWidth(window_width, num_columns) {
  return (
    Math.min(
      window_width -
        document.getElementById(DATA_SOURCES_PANE_ID).offsetWidth -
        PADDING_PIXELS_MARGIN,
      LEFT_HAND_SIDE_COLUMN * num_columns
    ) +
    PADDING_PIXELS_MARGIN / 3
  );
}

function getHeight(window_height) {
  return window_height - VERTICAL_HEADER_FOOTER_MARGIN;
}

const TableView = props => {
  // Dimensions tate
  //   width: the width of the browsers in pixels.
  //   height: the height of the browser in pixels.
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Sort state
  //   sort_header_name: the name of the header we are currently sorting by.
  //   direction: -1 or 1 to determine the direction we are currently sorting by.
  const [sortState, setSortState] = useState({
    sort_header_name: null,
    direction: 1
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", debounce(handleResize));
  });

  const HeaderCell = (style, column_index, first_column, last_column) => {
    const header_name = props.source_details.getHeaderAt(column_index);

    function changeSortOrder(e) {
      setSortState({
        sort_header_name: header_name,
        direction: sortState.direction * -1
      });
    }

    let sort_icon = undefined;
    if (sortState.sort_header_name == header_name && sortState.direction == 1) {
      sort_icon = <span>+</span>;
    } else if (
      sortState.sort_header_name == header_name &&
      sortState.direction == -1
    ) {
      sort_icon = <span>-</span>;
    }

    return (
      <div
        onClick={changeSortOrder}
        title={header_name}
        style={style}
        className={
          styles.cell +
          " " +
          styles.headercell +
          " " +
          last_column +
          " " +
          first_column
        }
      >
        <span>{header_name}</span>
        {sort_icon}
      </div>
    );
  };

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const first_column = columnIndex == 0 ? styles.firstcell : "";
    const last_column =
      columnIndex == props.source_details.getNumberOfColumns() - 1
        ? styles.lastcell
        : "";
    if (rowIndex == 0) {
      return HeaderCell(style, columnIndex, first_column, last_column);
    }
    // Update row index given header.
    rowIndex = rowIndex - 1;

    // If there's a sort header, use the rowIndex after the transformation.
    if (sortState.sort_header_name != null) {
      rowIndex = props.source_details.getRowForSortedByHeader(
        rowIndex,
        sortState.sort_header_name,
        sortState.direction
      );
    }

    const cell = props.source_details.getCell(columnIndex, rowIndex);
    const align = cell.type == "number" ? styles.right : styles.left;
    return (
      <div
        title={cell.raw_content}
        style={style}
        className={
          styles.cell + " " + last_column + " " + first_column + " " + align
        }
      >
        <span>{cell.content}</span>
      </div>
    );
  };

  return (
    <div>
      <Grid
        className={styles.table}
        columnCount={props.source_details.getNumberOfColumns()}
        columnWidth={_ => LEFT_HAND_SIDE_COLUMN}
        initialScrollLeft={0}
        initialScrollTop={0}
        height={getHeight(dimensions.height)}
        rowCount={props.source_details.getSize() + 1}
        rowHeight={() => ROW_HEIGHT_PX}
        width={getWidth(
          dimensions.width,
          props.source_details.getNumberOfColumns()
        )}
      >
        {Cell}
      </Grid>
    </div>
  );
};

export default TableView;

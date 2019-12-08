import React, { useState, useContext } from "react";
import DataConfigContext from "state/dataconfigcontext";
import { DATA_SOURCES_PANE_ID } from "constants.js";

import styles from "./styles.css";

const DataSourcesPane = () => {
  const [data_config, setDataConfig] = useContext(DataConfigContext);

  function changeSource(e) {
    let modeToChange = e.target.dataset.mode || data_config.mode || "";
    setDataConfig({
      selected_config: e.target.dataset.name,
      mode: modeToChange,
      data: data_config.data
    });
  }

  return (
    <div id={DATA_SOURCES_PANE_ID} className={styles.pane}>
      <ul>
        {data_config.data.getNames().map(name => (
          <li
            onClick={changeSource}
            data-mode="table"
            data-name={name}
            className={
              styles.sourcedetailslink +
              " " +
              (data_config.selected_config == name ? styles.selected : "")
            }
            key={name}
          >
            {name}
            <div className={styles.sourcedetailssubitem}>
              <span
                onClick={changeSource}
                className={
                  data_config.mode == "table" ? styles.selectedsubitem : ""
                }
                data-mode="table"
                data-name={name}
              >
                Table
              </span>
            </div>
            <div className={styles.sourcedetailssubitem}>
              <span
                onClick={changeSource}
                className={
                  data_config.mode == "summary" ? styles.selectedsubitem : ""
                }
                data-mode="summary"
                data-name={name}
              >
                Summary
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DataSourcesPane;

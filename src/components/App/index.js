import React, { useState, useEffect } from "react";
import DataConfigLoader from "data/DataConfigLoader";
import DataConfig from "data/DataConfig";
import DataConfigContext from "state/dataconfigcontext";
import DataSourcesPane from "components/DataSourcesPane";
import SourceDetailsPane from "components/SourceDetailsPane";

import styles from "./styles.css";

const URL_FOR_DATA_CONFIG =
  "https://s3-us-west-2.amazonaws.com/tecton.ai.public/coding_exercise_1/tables.json";

const App = () => {
  const [data_config, setDataConfig] = useState({
    selected_config: "",
    mode: "table",
    data: new DataConfig([])
  });

  useEffect(() => {
    const fetchDataConfig = async () => {
      const dataConfigLoader = new DataConfigLoader(URL_FOR_DATA_CONFIG);
      const result = await dataConfigLoader.load();

      if (result.status == DataConfigLoader.Status.SUCCESS) {
        setDataConfig({ data: result.data_config });
      }
      // TODO: Handle error states.
    };

    fetchDataConfig();
  }, []);

  return (
    <div>
      <DataConfigContext.Provider value={[data_config, setDataConfig]}>
        <header className={styles.header}>
          <div className={styles.pagetitle}>CSV Data Explorer</div>
        </header>
        <div className={styles.container}>
          <DataSourcesPane></DataSourcesPane>
          <SourceDetailsPane
            selected_name={data_config.selected_config}
          ></SourceDetailsPane>
        </div>
      </DataConfigContext.Provider>
    </div>
  );
};
export default App;

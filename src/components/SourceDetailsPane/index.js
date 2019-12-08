import React, { useState, useEffect, useContext } from "react";
import DataConfigContext from "state/dataconfigcontext";
import SourceDetailsLoader from "data/SourceDetailsLoader";
import SourceDetails from "data/SourceDetails";
import TableView from "components/TableView";
import Icon from "components/Icon";
import SummaryView from "components/SummaryView";

import styles from "./styles.css";

const SourceDetailsPane = props => {
  const [data_config] = useContext(DataConfigContext);

  const [source_details, setSourceDetails] = useState({
    selected_name: props.selected_name,
    details: new SourceDetails({})
  });

  useEffect(() => {
    const fetchSourceDetails = async () => {
      const source_details_config = data_config.data.findByName(
        data_config.selected_config
      );
      if (source_details_config === null) {
        return;
      }
      const sourceDetailsLoader = new SourceDetailsLoader(
        source_details_config
      );
      const result = await sourceDetailsLoader.load();

      if (result.status == SourceDetailsLoader.Status.SUCCESS) {
        setSourceDetails({
          selected_name: props.selected_name,
          details: result.details
        });
      }
      // TODO: Handle error states.
    };

    if (props.selected_name != source_details.selected_name) {
      fetchSourceDetails();
    }
  });

  const SelectedSourceDetailsFound = () => {
    return (
      <div>
        <h2>{props.selected_name}</h2>
        <span className={styles.filedetails}>
          {" "}
          (found {source_details.details.getSize().toLocaleString()}; estimated{" "}
          {source_details.details.getEstimatedSize().toLocaleString()})
        </span>
        <span className={styles.downloadicon}>
          <a href={source_details.details.getRawUrl()}>
            <Icon></Icon>
          </a>
        </span>
      </div>
    );
  };

  const PleaseSelectDetails = () => {
    return (
      <div>
        <h2>Please select a data source on the left.</h2>
      </div>
    );
  };

  const ChooseMode = () => {
    return data_config.mode == "table" ? (
      <TableView source_details={source_details.details}></TableView>
    ) : (
      <SummaryView source_details={source_details.details}></SummaryView>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {props.selected_name && !source_details.details.isEmpty() && (
          <SelectedSourceDetailsFound></SelectedSourceDetailsFound>
        )}
        {!props.selected_name && source_details.details.isEmpty() && (
          <PleaseSelectDetails></PleaseSelectDetails>
        )}
      </div>
      {props.selected_name && !source_details.details.isEmpty() && (
        <ChooseMode></ChooseMode>
      )}
    </div>
  );
};

export default SourceDetailsPane;

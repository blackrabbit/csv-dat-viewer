import React from "react";
import {
  Histogram,
  BarSeries,
  withParentSize,
  XAxis,
  YAxis
} from "@data-ui/histogram";
import { SUMMARY_VIEW_BAR_HEIGHT } from "constants.js";

import styles from "./styles.css";

const ResponsiveHistogram = withParentSize(({ parentWidth, ...rest }) => {
  return <Histogram width={parentWidth} {...rest}></Histogram>;
});

const StatisticHistogram = props => {
  return (
    <ResponsiveHistogram
      ariaLabel="Histogram"
      orientation="horizontal"
      cumulative={false}
      normalized={true}
      binCount={15}
      height={SUMMARY_VIEW_BAR_HEIGHT}
      valueAccessor={datum => datum}
      binType="numeric"
      renderTooltip={({ event, datum, data, color }) => (
        <div>
          <strong style={{ color }}>
            {datum.bin0} to {datum.bin1}
          </strong>
          <div>
            <strong>Count </strong>
            {datum.count}
          </div>
          <div>
            <strong>Cumlative </strong>
            {datum.cumulative}
          </div>
          <div>
            <strong>Density </strong>
            {datum.density}
          </div>
        </div>
      )}
    >
      <BarSeries animated={false} fill={"#193094"} rawData={props.raw_data} />
      <XAxis />
      <YAxis />
    </ResponsiveHistogram>
  );
};

const NumericalSummary = props => {
  return (
    <table className={styles.summarystats}>
      <thead>
        <tr>
          <th>Null counts</th>
          <th>Min</th>
          <th>Max</th>
          <th>Mean</th>
          <th>Standard Deviation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.data.null_count}</td>
          <td>{props.data.min}</td>
          <td>{props.data.max}</td>
          <td>{props.data.mean}</td>
          <td>{props.data.std_dev}</td>
        </tr>
      </tbody>
    </table>
  );
};

const StatisticSummary = props => {
  return (
    <div className={styles.onestatistic}>
      <h3>
        <span>{props.header_name}</span>
        <NumericalSummary data={props.summary_data}></NumericalSummary>
      </h3>
      <StatisticHistogram raw_data={props.column_data}></StatisticHistogram>
    </div>
  );
};

const SummaryView = props => {
  function splitColumns() {
    const numerical_and_date_column_names = [];
    const non_numerical_column_names = [];
    for (let header_name of props.source_details.getHeaders()) {
      const cell = props.source_details.getCell(
        props.source_details.getColumnIndexFromHeaderName(header_name),
        0
      );
      if (cell.type == "number" || cell.type == "date") {
        numerical_and_date_column_names.push(header_name);
      } else {
        non_numerical_column_names.push(header_name);
      }
    }

    return [numerical_and_date_column_names, non_numerical_column_names];
  }

  let [numerical_column_names, non_numerical_column_names] = splitColumns();

  return (
    <div className={styles.container}>
      {non_numerical_column_names.length > 0 && (
        <div>
          <em>Non-numerical columns were not summarized:</em>{" "}
          {non_numerical_column_names.map(
            (non_numerical_column_names, index) => {
              return (
                <span key={index}>
                  {non_numerical_column_names}
                  {index != non_numerical_column_names.length - 1 && ","}
                </span>
              );
            }
          )}
        </div>
      )}
      {numerical_column_names.map(numerical_header_name => {
        return (
          <StatisticSummary
            header_name={numerical_header_name}
            column_data={props.source_details.getColumn(numerical_header_name)}
            summary_data={props.source_details.getSummaryStats(
              numerical_header_name
            )}
          ></StatisticSummary>
        );
      })}
    </div>
  );
};

export default SummaryView;

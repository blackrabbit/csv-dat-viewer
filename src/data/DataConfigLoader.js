import DataConfig from "data/DataConfig";

/**
 * Manages loading and parsing a description of all the data to load.
 */
class DataConfigLoader {
  constructor(data_config_path) {
    // Path on S3 to JSON description of data to load into app.
    this.data_config_path_ = data_config_path;

    // The unparsed JSON when succesfully loaded off network.
    this.raw_response_ = [];

    // The parsed data
    this.data_config_ = new DataConfig(this.raw_response_);
  }

  async load() {
    let response = null;
    // Fetch config off network. This should be a JSON file.
    try {
      response = await fetch(this.data_config_path_);
    } catch (e) {
      return {
        status: DataConfigLoader.Status.NETWORK_ERROR,
        exception_if_thrown: e,
        data_config: this.data_config_
      };
    }

    // Fetch config off network. This should be a JSON file.
    try {
      this.raw_response_ = await response.json();
    } catch (e) {
      return {
        status: DataConfigLoader.Status.JSON_PARSE_ERROR,
        exception_if_thrown: e,
        data_config: this.data_config_
      };
    }

    // Parse the data into a wrapper object.
    this.data_config_ = new DataConfig(this.raw_response_);
    return {
      status: DataConfigLoader.Status.SUCCESS,
      data_config: this.data_config_
    };
  }
}

DataConfigLoader.Status = {
  UNSPECIFIED: "unspecified",
  SUCCESS: "success",
  NETWORK_ERROR: "network_error",
  JSON_PARSE_ERROR: "json_parse_error",
  DATA_PARSE_ERROR: "parse_error"
};

export default DataConfigLoader;

import SourceDetails from "data/SourceDetails";
import Papa from "papaparse";

const rawParsedJsonCache = new WeakMap();

class SourceDetailsLoader {
  constructor(source_details_config) {
    this.source_details_config_ = source_details_config;
  }

  async load() {
    let response = null;

    const parse = async file_path => {
      return new Promise(resolve => {
        if (rawParsedJsonCache.has(hashCode(file_path))) {
          resolve(rawParsedJsonCache.get(hashCode(file_path)));
        } else {
          Papa.parse(file_path, {
            download: true,
            delimiter: ",",
            keepEmptyRows: false,
            complete: results => {
              // rawParsedJsonCache.set(hashCode(file_path), results);
              resolve(results);
            }
          });
        }
      });
    };

    const results = await parse(this.source_details_config_.url);
    return {
      status: SourceDetailsLoader.Status.SUCCESS,
      details: new SourceDetails(results, this.source_details_config_)
    };
  }
}

SourceDetailsLoader.Status = {
  UNSPECIFIED: "unspecified",
  SUCCESS: "success",
  NETWORK_ERROR: "network_error",
  JSON_PARSE_ERROR: "json_parse_error",
  DATA_PARSE_ERROR: "parse_error"
};

function hashCode(str) {
  return str
    .split("")
    .reduce(
      (prevHash, currVal) =>
        ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
      0
    )
    .toString();
}

export default SourceDetailsLoader;

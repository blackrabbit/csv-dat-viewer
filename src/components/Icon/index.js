import React from "react";

const Icon = props => {
  const download_icon = (
    <img width="20px" height="20px" src="download_icon.png" />
  );
  // TODO(alishah): Change to switch when we have other icons.
  return props.name == "download" ? download_icon : <div></div>;
};
export default Icon;

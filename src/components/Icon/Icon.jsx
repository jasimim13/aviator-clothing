import React from "react";
import "../Icon/icon.styles.scss";
function Icon() {
  return <img src={require("../../assets/AVIATOR.svg").default} alt="Logo" className="logo" />;
}

export default Icon;

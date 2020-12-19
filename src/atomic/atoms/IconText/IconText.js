import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "../Icons/Icon";

export const IconText = ({ icon, text, link, color }) => {
  let colorFont;
  switch (color) {
    case "white":
      colorFont = "__white";
      break;
    case "dark":
      colorFont = "__black";
      break;
    case "primary":
      colorFont = "__primary";
      break;
  }

  return (
    <Link className={`icon-text${colorFont} link`} to={link}>
      <Icon svg={icon} classes="svg-icon__big" title={icon} />
      {text}
    </Link>
  );
};

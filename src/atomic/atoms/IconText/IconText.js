import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "../Icons/Icon";

export const IconText = ({ icon, text, link, color }) => {
  let colorFont;
  if (color) {
    colorFont = "__white";
  } else {
    colorFont = "__black";
  }

  return (
    <Link className={`icon-text${colorFont} link`} to={link}>
      <Icon svg={icon} classes="svg-icon__big" title={icon} />
      {text}
    </Link>
  );
};

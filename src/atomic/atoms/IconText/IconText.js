import React from 'react';

import { Icon } from "../Icons/Icon"

export const IconText = ({icon, text, link, color}) => {
  let colorFont;
  if (color) {
    colorFont = "__white"
  } else {
    colorFont = "__black";
  }
  
  return (
    <a className={`icon-text${colorFont}`}>
    <Icon svg={icon} classes="svg-icon__big" title={icon} />
    {text}
    </a>
  )
}
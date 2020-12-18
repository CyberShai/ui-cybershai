import React from "react";
import svgs from "./icons";

export const Icon = ({ svg, classes, title }) => {
  const svgRender = svgs[svg] || svgs.default;
  return (
    <svg
      viewBox={svgRender.viewBox}
      className={classes}
      title={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {svgRender.svg}
    </svg>
  );
};

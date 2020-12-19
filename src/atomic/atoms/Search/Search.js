import React from "react";

import { Icon } from "../Icons/Icon";
export const Search = () => {
  return (
    <span className="searchbar">
      <input type="text" className="searchbar-input" placeholder="Buscar..." />
      <Icon svg="search" classes="svg-icon__big" />
    </span>
  );
};

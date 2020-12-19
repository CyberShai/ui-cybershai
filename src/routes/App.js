import React from "react";

import { Hired } from "../atomic/molecules/Hired/Hired";
import Icon from "../assets/images/Icon.png";
import { FilterDropdown } from "../atomic/atoms/FilterDropdown/FilterDropdown";

const App = () => {
  const list = [
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "Opción 4",
    "Opción 5",
    "Opción 6",
    "Opción 7",
    "Opción 8",
  ];
  return (
    <>
      <h3>Atomos Héctor</h3>
      <Hired photo1={Icon} photo2={Icon} photo3={Icon} company="Platzi" />
      <FilterDropdown options={list} type="large" />
    </>
  );
};

export default App;

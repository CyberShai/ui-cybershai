import React from "react";
import { SimpleField } from "../../atoms/SimpleField/SimpleField";
import { FilterDropdown } from "../../atoms/FilterDropdown/FilterDropdown";
import { Search } from "../../atoms/Search/Search";

export const SearchFilter = () => {
  const options = [
    "Opción",
    "Opción",
    "Opción",
    "Opción",
    "Opción",
    "Opción",
    "Opción",
  ];
  return (
    <div className="searchfilter">
      <p>Filtros de búsqueda:</p>
      <form className="searchfilter-inputs">
        <FilterDropdown options={options} />
        <SimpleField placeholder="$ Min" size="small" />
        <SimpleField placeholder="$ Max" size="small" />
        <FilterDropdown options={options} />
        <Search />
      </form>
    </div>
  );
};

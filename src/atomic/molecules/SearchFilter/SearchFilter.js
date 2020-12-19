import React from "react";
import { SimpleField } from "../../atoms/SimpleField/SimpleField";
import { FilterDropdown } from "../../atoms/FilterDropdown/FilterDropdown";
import { Search } from "../../atoms/Search/Search";

export const SearchFilter = ({ locationOptions, skillsOptions }) => {
  return (
    <div className="searchfilter">
      <p>Filtros de búsqueda:</p>
      <form className="searchfilter-inputs">
        <FilterDropdown options={locationOptions} />
        <SimpleField placeholder="$ Min" size="small" />
        <SimpleField placeholder="$ Max" size="small" />
        <FilterDropdown options={skillsOptions} />
        <Search />
      </form>
    </div>
  );
};
SearchFilter.defaultProps = {
  locationOptions: [
    "Lugar 1",
    "Lugar 2",
    "Lugar 3",
    "Lugar 4",
    "Lugar 5",
    "Lugar 6",
    "Lugar 7",
  ],
  skillsOptions: [
    "Habilidad 1",
    "Habilidad 2",
    "Habilidad 3",
    "Habilidad 4",
    "Habilidad 5",
    "Habilidad 6",
    "Habilidad 7",
  ],
};

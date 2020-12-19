import React from "react";

export const FilterDropdown = ({ options, type }) => {
  const size = type === "large" ? "__large" : "__small";
  return (
    <label>
      <select
        readOnly="Seleccionar"
        className={`filter-dropdown filter-dropdown${size}`}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

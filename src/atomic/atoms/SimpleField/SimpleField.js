import React from "react";

export const SimpleField = ({ title, length, placeholder, inputName }) => {
  return (
    <label className="simplefield">
      {title}
      <input
        className="simplefield-input"
        type="text"
        maxLength={length}
        placeholder={placeholder}
        name={inputName}
      ></input>
    </label>
  );
};

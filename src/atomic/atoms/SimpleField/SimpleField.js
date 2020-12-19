import React from "react";

export const SimpleField = ({
  title,
  length,
  placeholder,
  inputName,
  size,
}) => {
  return (
    <label className="simplefield">
      {title}
      <input
        className={`simplefield-input simplefield-input__${size}`}
        type="text"
        maxLength={length}
        placeholder={placeholder}
        name={inputName}
      ></input>
    </label>
  );
};

import React from "react";

export const SimpleField = ({
  title,
  length,
  placeholder,
  inputName,
  size,
  type,
}) => {
  return (
    <label className="simplefield">
      {title}
      <input
        className={`simplefield-input simplefield-input__${size}`}
        type={type}
        maxLength={length}
        placeholder={placeholder}
        name={inputName}
      ></input>
    </label>
  );
};

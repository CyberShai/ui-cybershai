import React from "react";

export const TextArea = ({ title, inputName, length, placeholder }) => {
  return (
    <label className="text-area">
      {title}
      <input
        className="text-area__input"
        type="text"
        maxLength={length}
        placeholder={placeholder}
        name={inputName}
      ></input>
    </label>
  );
};

import React from "react";

export const Input = ({ type, value, placeholder, ...props }) => {
  return <input type={type} placeholder={placeholder}></input>;
};

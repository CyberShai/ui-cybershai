import React from "react";

export const TechLabel = ({ name, type, ...props }) => {
  return (
    <div className={`tech-label-container tech-label-${type}`}>
      <p>{name}</p>
    </div>
  );
};

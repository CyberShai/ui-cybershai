import React from "react";

export const Stats = ({ title, current, total }) => {
  return (
    <div className="stats-container">
      <div className="stats-container__title">{title}</div>
      <div className="stats-container__number">
        <h2>{current} |</h2>
        <p>{total}</p>
      </div>
    </div>
  );
};

Stats.defaultProps = {
  title: "Colocados",
  current: "298",
  total: "640",
};

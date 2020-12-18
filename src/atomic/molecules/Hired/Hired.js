import React from "react";
import { Avatar } from "../../atoms/Avatar/Avatar";

export const Hired = ({ photo1, photo2, photo3, company }) => {
  return (
    <div className="hired">
      <Avatar photo={photo1} size="small" alt="student" />
      <Avatar photo={photo2} size="small" alt="student" />
      <Avatar photo={photo3} size="small" alt="student" />
      <h6>+3 trabajan en {company}</h6>
    </div>
  );
};

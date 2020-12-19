import React from "react";

import { Avatar } from "../../atoms/Avatar/Avatar";

export const CompanyName = ({ logo, name }) => {
  return (
    <div className="company-name">
      <Avatar photo={logo} size="large" alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

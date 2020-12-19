import React from "react";

import { Avatar } from "../../atoms/Avatar/Avatar";
import Icon from "../../../assets/images/Icon.png";

export const CompanyName = ({ name }) => {
  return (
    <div className="company-name">
      <Avatar photo={Icon} size="large" alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

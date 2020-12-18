import React from "react";

import { Avatar } from "../../atoms/Avatar/Avatar";

export const UserInfo = ({ photo, name, job }) => {
  return (
    <div className="user-info">
      <Avatar photo={photo} size="medium" alt={name} />
      <div>
        <h4>{name}</h4>
        <h6>{job}</h6>
      </div>
    </div>
  );
};

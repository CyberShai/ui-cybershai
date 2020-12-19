import React from "react";

import { Icon } from "../../atoms/Icons/Icon";

export const NotificationCard = ({
  notificationType,
  icon,
  description,
  title,
}) => {
  let type;
  switch (notificationType) {
    case "green":
      type = "__green";
      break;
    case "yellow":
      type = "__yellow";
      break;
    case "red":
      type = "__red";
      break;
    case "blue":
      type = "__blue";
      break;
  }

  return (
    <div className={`notification-card notification-card${type}`}>
      <Icon svg={icon} classes="svg-icon__ultra" alt="Notificación" />
      <div>
        <h4>{title}</h4>
        <h6>{description}</h6>
      </div>
    </div>
  );
};

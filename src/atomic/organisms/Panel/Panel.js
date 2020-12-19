import React from "react";

import { UserInfo } from "../../molecules/UserInfo/UserInfo";
import { NotificationCard } from "../../molecules/NotificationCard/NotificationCard";
import { IconText } from "../../atoms/IconText/IconText";
import Icon from "../../../assets/images/Icon.png";

export const Panel = ({ userType }) => {
  let user;
  if (userType === "student") {
    user = "--black";
  } else {
    user = "--white";
  }

  let goPanel;
  if (userType === "student") {
    goPanel = "/vacantes-admin";
  } else {
    goPanel = "/";
  }

  return (
    <section className={`panel${user}`}>
      <div>
        <UserInfo photo={Icon} name="David Flores" job="Frontend Developer" />
        {/* Notification Cards */}
      </div>
      <div>
        <NotificationCard
          notificationType="green"
          icon="user"
          description="Revisa tu correo diario para evitar perderte una intro realizada."
          title="Nuevo Correo"
        />
        <NotificationCard
          notificationType="yellow"
          icon="warning"
          description="Completa tu perfil. No podrás postular hasta que lo hagas."
          title="Completa tu perfil"
        />
        <NotificationCard
          notificationType="red"
          icon="danger"
          description="Revisa tu correo diario para evitar perderte una intro realizada."
          title="Responde tu intro"
        />
        <NotificationCard
          notificationType="blue"
          icon="user"
          description="Te realizaron una intro nuevo. Revisa tu correo."
          title="Nueva Intro"
        />
      </div>
      <div className="panel-logout">
        <IconText icon="logout" text="Log out" link={goPanel} color="dark" />
      </div>
    </section>
  );
};

import React from "react";

import { UserInfo } from "../../molecules/UserInfo/UserInfo";
import { IconText } from "../../atoms/IconText/IconText";
import Icon from "../../../assets/images/Icon.png";

export const Panel = ({ userType }) => {
  let user;
  if (userType === "student") {
    user = "--black";
  } else {
    user = "--white";
  }
  return (
    <section className={`panel${user}`}>
      <div>
        <UserInfo photo={Icon} name="David Flores" job="Frontend Developer" />
        {/* Notification Cards */}
      </div>
      <div className="panel-logout">
        <IconText icon="logout" text="Log out" link="#" color="white" />
      </div>
    </section>
  );
};

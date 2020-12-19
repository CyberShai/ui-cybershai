import React from "react";

import { UserInfo } from "../../molecules/UserInfo/UserInfo";
import Shai from "../../../assets/images/cyberShai.png";

export const InfoCard = () => {
  return (
    <div>
      <UserInfo photo={Shai} name="Shaili Zappa" job="Talent Placement" />
    </div>
  );
};

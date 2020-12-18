import React from "react";

import { UserInfo } from "../atomic/molecules/UserInfo/UserInfo";
import Icon from "../assets/images/Icon.png";

const App = () => {
  return (
    <>
      <h3>Atomos Héctor</h3>
      <UserInfo photo={Icon} name="David Flores" job="Frontend Developer" />
    </>
  );
};

export default App;

import React from "react";

import { IconText } from "../atomic/atoms/IconText/IconText";
import { Avatar } from "../atomic/atoms/Avatar/Avatar";
import Icon from "../assets/images/Icon.png";

const App = () => {
  return (
    <>
      <h3>Atomos Héctor</h3>
      <IconText icon="github" text="Icono de Menú" link="#" color />
      <IconText icon="github" text="Icono de Menú" link="#" />
      <Avatar photo={Icon} size="small" alt="Quiero llorar" />
      <Avatar photo={Icon} size="medium" alt="Quiero llorar" />
      <Avatar photo={Icon} size="large" alt="Quiero llorar" />
    </>
  );
};

export default App;

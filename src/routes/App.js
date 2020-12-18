import React from "react";

import { IconText } from "../atomic/atoms/IconText/IconText"
import { StudentAvatar } from "../atomic/atoms/StudentAvatar/StudentAvatar"
import Icon from "../assets/images/Icon.png"

const App = () => {
  return <>
  <h3>Atomos Héctor</h3>
  <IconText icon="github" text="Icono de Menú" link="#" color/>
  <IconText icon="github" text="Icono de Menú" link="#" />
  <StudentAvatar photo={Icon} size="small" alt="Quiero llorar" />
  <StudentAvatar photo={Icon} size="medium" alt="Quiero llorar" />
  <StudentAvatar photo={Icon} size="large" alt="Quiero llorar" />
  </>
};

export default App;

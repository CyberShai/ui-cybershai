import React from "react";

import { Icon } from "../atomic/atoms/Icons/Icon";
import { Hired } from "../atomic/molecules/Hired/Hired";

const App = () => {
  return (
    <>
      <h3>Atomos Héctor</h3>
      <Hired photo1={Icon} photo2={Icon} photo3={Icon} company="Platzi" />
    </>
  );
};

export default App;

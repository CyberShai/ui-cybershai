import React from "react";

import { Hired } from "../atomic/molecules/Hired/Hired";
import Icon from "../assets/images/Icon.png";
import { SimpleField } from "../atomic/atoms/SimpleField/SimpleField";

const App = () => {
  return (
    <>
      <h3>Atomos Héctor</h3>
      <Hired photo1={Icon} photo2={Icon} photo3={Icon} company="Platzi" />
      <SimpleField />
    </>
  );
};

export default App;

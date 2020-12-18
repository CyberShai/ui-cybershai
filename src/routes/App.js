import React from "react";

import { Menu } from "../atomic/molecules/Menu/Menu";

const App = () => {
  return (
    <>
      <h3>Atomos Héctor</h3>
      <Menu user="student" />
      <Menu user="admin" />
    </>
  );
};

export default App;

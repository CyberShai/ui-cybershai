import React from "react";
import { render } from "react-dom";

import App from "./routes/App";
import "./assets/styles/Main.scss";
import { NewApplyContextProvider } from "./context/NewApplyContext";

render(
  <NewApplyContextProvider value="hidden">
    <App />
  </NewApplyContextProvider>,
  document.getElementById("root")
);

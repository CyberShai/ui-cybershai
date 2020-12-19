import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { VacantesPage } from "../pages/VacantesPage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={VacantesPage} />
        {/* <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/empresas" component={Empresas} />
        <Route exact path="/mis-postulaciones" component={MisPostulaciones} />
        <Route
          exact
          path="/informacion'personal"
          component={InformacionPersonal}
        />
        <Route exact path="/hector" component={ComponentesHector} />
        <Route component={NotFoundPage} /> */}
      </Switch>
    </BrowserRouter>
  );
};

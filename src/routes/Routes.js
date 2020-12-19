import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { VacantesPage } from "../pages/VacantesPage";
import { EmpresasPage } from "../pages/EmpresasPage";
import { MisPostulacionesPage } from "../pages/MisPostulacionesPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { InformacionPersonalPage } from "../pages/InformacionPersonalPage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={VacantesPage} />
        <Route exact path="/empresas" component={EmpresasPage} />
        <Route
          exact
          path="/mis-postulaciones"
          component={MisPostulacionesPage}
        />
        <Route
          exact
          path="/informacion-personal"
          component={InformacionPersonalPage}
        />
        <Route component={NotFoundPage} />
        {/* <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        */}
      </Switch>
    </BrowserRouter>
  );
};

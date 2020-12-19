import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { VacantesPage } from "../pages/VacantesPage";
import { VacantesAdminPage } from "../pages/VacantesAdminPage";
import { Estadisitcas } from "../pages/Estadisticas";
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
        <Route exact path="/vacantes-admin" component={VacantesAdminPage} />
        <Route exact path="/estadisticas" component={Estadisitcas} />
        {/* <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
      */}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

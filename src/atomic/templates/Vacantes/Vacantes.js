import React from "react";
import { Card } from "../../../atomic/organisms/Card/Card";

export const Vacantes = () => {
  return (
    <section className="layout__interno">
      <h2>Vacantes</h2>
      <h3>Bienvenido David Flores</h3>
      <p>
        Revisa las vacantes que tenemos para ti, aplica y da seguimiento a ellas
        hasta conseguir el trabajo de tus sueños.
      </p>
      <section className="grid-vacantes">
        <Card />
      </section>
    </section>
  );
};

import React from "react";
import { Card } from "../../../atomic/organisms/Card/Card";
import { SearchFilter } from "../../../atomic/molecules/SearchFilter/SearchFilter";
import { MiniJobCard } from "../../../atomic/organisms/MiniJobCard/MiniJobCard";

export const Vacantes = () => {
  return (
    <section className="layout__interno">
      <h2>Vacantes</h2>
      <h3>Bienvenido David Flores</h3>
      <p>
        Revisa las vacantes que tenemos para ti, aplica y da seguimiento a ellas
        hasta conseguir el trabajo de tus sueños.
      </p>
      <section>
        <SearchFilter />
      </section>
      <section className="grid-vacantes">
        <div>
          <MiniJobCard />
        </div>
        <div>
          <Card />
        </div>
      </section>
    </section>
  );
};

import React, { useState } from "react";
import { NewApply } from "../../organisms/NewApply/NewApply";
import { Card } from "../../../atomic/organisms/Card/Card";
import { SearchFilter } from "../../../atomic/molecules/SearchFilter/SearchFilter";
import { MiniJobCard } from "../../../atomic/organisms/MiniJobCard/MiniJobCard";
import { JobCardList } from "../../../atomic/organisms/JobCardList/JobCardList";

export const Vacantes = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  return (
    <section className="layout__interno">
      <div>
        <JobCardList company="Platzi" job="Frontend developer" />
      </div>
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
        <NewApply display={show} />
        <button onClick={handleClose}>Mostrar modal aplicar</button>
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

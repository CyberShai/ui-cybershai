import React, { useState } from "react";
import { NewApply } from "../../organisms/NewApply/NewApply";
import { Card } from "../../../atomic/organisms/Card/Card";
import { MiniJobCard } from "../../../atomic/organisms/MiniJobCard/MiniJobCard";

export const VacantesAdmin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  return (
    <section className="layout__interno">
      <h2>Vacantes</h2>
      <h3>Bienvenida Shaili Zappa</h3>
      <p>Bienvenida. Vacantes abiertas al día de hoy.</p>
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

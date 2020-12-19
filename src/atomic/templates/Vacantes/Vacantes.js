import React, { useState } from "react";
import { NewApply } from "../../organisms/NewApply/NewApply";
export const Vacantes = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  return (
    <section className="layout__interno">
      <h2>Vacantes</h2>
      <h3>Bienvenido David Flores</h3>
      <p>
        Revisa las vacantes que tenemos para ti, aplica y da seguimiento a ellas
        hasta conseguir el trabajo de tus sueños.
      </p>
      <section className="grid-vacantes"></section>
      <NewApply display={show} />
      <button onClick={handleClose}>Aplicar</button>
    </section>
  );
};

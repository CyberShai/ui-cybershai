import React from "react";

import construction from "../../../assets/images/construction.png";

export const MisPostulaciones = () => {
  return (
    <section className="layout__interno">
      <h2>Mis Postulaciones</h2>
      <h3>Bienvenido David Flores</h3>
      <p>
        Acá puedes ver todas las vacantes a las que has aplicado, en cuales
        llevas abierto el proceso, y las que cerraron.
      </p>
      <img
        className="construction"
        src={construction}
        alt="Estamos en construcción"
      />
    </section>
  );
};

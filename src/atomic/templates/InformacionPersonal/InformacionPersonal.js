import React from "react";
import construction from "../../../assets/images/construction.png";

export const InformacionPersonal = () => {
  return (
    <section className="layout__interno">
      <h2>Información Personal</h2>
      <h3>Bienvenido David Flores</h3>
      <p>Información Personal</p>
      <img
        className="construction"
        src={construction}
        alt="Estamos en construcción"
      />
    </section>
  );
};

import React from "react";

import { IconText } from "../../atoms/IconText/IconText";

export const Menu = ({ userType }) => {
  if (userType === "student") {
    return (
      <nav className="">
        <IconText icon="suitcase" text="Vacantes" color="white" />
        <IconText icon="building" text="Empresas" color="white" />
        <IconText icon="bookmark" text="Mis Postulaciones" color="white" />
        <IconText icon="info" text="Mi Información" color="white" />
      </nav>
    );
  } else {
    return (
      <nav className="">
        <IconText icon="suitcase" text="Vacantes" color="white" />
        <IconText icon="building" text="Empresas" color="white" />
        <IconText icon="chart" text="Estadísticas" color="white" />
        <IconText icon="user" text="Colocación" color="white" />
      </nav>
    );
  }
};

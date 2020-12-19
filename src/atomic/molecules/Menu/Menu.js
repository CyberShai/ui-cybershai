import React from "react";

import { IconText } from "../../atoms/IconText/IconText";

export const Menu = ({ userType }) => {
  if (userType === "student") {
    return (
      <nav>
        <IconText icon="suitcase" text="Vacantes" color="white" link="/" />
        <IconText
          icon="building"
          text="Empresas"
          color="white"
          link="/empresas"
        />
        <IconText
          icon="bookmark"
          text="Mis Postulaciones"
          color="white"
          link="mis-postulaciones"
        />
        <IconText
          icon="info"
          text="Mi Información"
          color="white"
          link="/informacion-personal"
        />
      </nav>
    );
  } else {
    return (
      <nav>
        <IconText icon="suitcase" text="Vacantes" color="white" link="#" />
        <IconText icon="building" text="Empresas" color="white" link="#" />
        <IconText icon="chart" text="Estadísticas" color="white" link="#" />
        <IconText icon="user" text="Colocación" color="white" link="#" />
      </nav>
    );
  }
};

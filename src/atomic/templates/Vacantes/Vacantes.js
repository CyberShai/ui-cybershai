import React from "react";

import { JobInfo } from "../../molecules/JobInfo/JobInfo";
import Icon from "../../../assets/images/Icon.png";
import { Card } from "../../organisms/Card/Card";

export const Vacantes = () => {
  return (
    <section>
      <h1> Pagina de Vacantess</h1>
      <JobInfo
        position="horizontal"
        photo={Icon}
        job="Frontend Developer"
        date="18/12/2020"
        location="México, CDMX"
      />
      <JobInfo
        position="vertical"
        photo={Icon}
        job="Frontend Developer"
        date="18/12/2020"
        location="México, CDMX"
      />
      <div>
        <Card />
      </div>
    </section>
  );
};

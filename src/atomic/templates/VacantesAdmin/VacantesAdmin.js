import React, { useState } from "react";
import { NewApply } from "../../organisms/NewApply/NewApply";
import { JobCardList } from "../../organisms/JobCardList/JobCardList";

export const VacantesAdmin = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(!show);
  return (
    <section className="layout__interno">
      <h2>Vacantes</h2>
      <h3>Bienvenida Shaili Zappa</h3>
      <p>Bienvenida. Vacantes abiertas al día de hoy.</p>
      <section>
        <NewApply display={show} />
        <button
          className="button button__primary button-type__simple"
          onClick={handleClose}
        >
          Nueva Vacante
        </button>
        <div>
          <JobCardList company="Platzi" job="Frontend Developer" />
          <JobCardList company="Platzi" job="Frontend Developer" />
          <JobCardList company="Platzi" job="Frontend Developer" />
          <JobCardList company="Platzi" job="Frontend Developer" />
          <JobCardList company="Platzi" job="Frontend Developer" />
        </div>
      </section>
    </section>
  );
};

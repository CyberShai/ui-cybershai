import React, { useState } from "react";
import { NewApply } from "../../organisms/NewApply/NewApply";
import { Card } from "../../../atomic/organisms/Card/Card";
import { SearchFilter } from "../../../atomic/molecules/SearchFilter/SearchFilter";
// import { MiniJobCard } from "../../../atomic/organisms/MiniJobCard/MiniJobCard";
import { useFetchApi } from "../../../hooks/useFetch";

export const Vacantes = () => {
  const { data } = useFetchApi("vacancy/list");
  console.log(data);

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
      <section>
        <SearchFilter />
      </section>
      <section className="grid-vacantes">
        <NewApply display={show} />
        <button onClick={handleClose}>Mostrar modal aplicar</button>

        {data?.map((vacancy) => (
          <div key={`${vacancy._id}`}>
            <Card
              job={vacancy.name}
              date={vacancy.modified}
              location={vacancy.vacancy_category.name}
              description={vacancy.vacancy_category.description}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

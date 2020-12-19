import React from "react";
import { Card } from "../../../atomic/organisms/Card/Card";
import { SearchFilter } from "../../../atomic/molecules/SearchFilter/SearchFilter";
import { useFetchApi } from "../../../hooks/useFetch";

export const Vacantes = () => {
  let { data } = useFetchApi("vacancy/list");
  if (data) {
    data = data.vacancies;
  }
  console.log(data);

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

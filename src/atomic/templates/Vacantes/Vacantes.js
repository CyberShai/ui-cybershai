import React, { useState, useContext } from "react";
import { NewApply } from "../../organisms/NewApply/NewApply";
import { Card } from "../../../atomic/organisms/Card/Card";
import { SearchFilter } from "../../../atomic/molecules/SearchFilter/SearchFilter";
import { Alert } from "../../organisms/Alert/Alert";
import { useFetchApi } from "../../../hooks/useFetch";
import NewApplyContext from "../../../context/NewApplyContext";
export const Vacantes = () => {
  const { data } = useFetchApi("vacancy/list");
  console.log(data);
  /* Hook para mostrar NewApply */
  const { showed, setShowed } = useContext(NewApplyContext);

  const handleClose = () => {
    setShowed(showed === "hidden" ? "active" : "hidden");
  };
  /* Hook para mostrar Alert */
  const [alertShow, setAlertShow] = useState(false);
  const handleAlert = () => {
    setAlertShow(true);
    setTimeout(() => {
      setAlertShow(false);
    }, 2000);
  };

  return (
    <section className="layout__interno">
      <Alert alertType="sucess" active={alertShow} />
      <h2>Vacantes</h2>
      <h3>Bienvenido David Flores</h3>
      <p>
        Revisa las vacantes que tenemos para ti, aplica y da seguimiento a ellas
        hasta conseguir el trabajo de tus sueños.
      </p>
      <section>
        <SearchFilter />
      </section>
      <button
        className="button button__primary button-type__simple"
        onClick={handleAlert}
      >
        Mostrar modal Alerta
      </button>
      <button
        className="button button__primary button-type__simple"
        onClick={handleClose}
      >
        Mostrar modal Vacante
      </button>
      <section className="grid-vacantes">
        <NewApply />

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

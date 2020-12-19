import React from "react";
import { useFetchApi } from "../../../hooks/useFetch";
import { CompanyCard } from "../../../atomic/organisms/CompanyCard/CompanyCard";
import Shai from "../../../assets/images/cyberShai.png";

export const Empresas = () => {
  let { data } = useFetchApi("company/list");
  console.log(data);
  if (data) {
    data = data.companies;
  }

  return (
    <section className="layout__interno">
      <h2>Empresas</h2>
      <h3>Bienvenido David Flores</h3>
      <p>
        Revisa las empresas que tenemos para ti, aplica y da seguimiento a ellas
        hasta conseguir el trabajo de tus sueños.
      </p>
      <section className="grid-vacantes">
        {data?.map((company) => (
          <div key={`${company._id}`}>
            <CompanyCard
              name={company.name}
              description={company.description}
              icon={Shai}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

import React from "react";
// import { useFetchApi } from "../../../hooks/useFetch";
// import { CompanyCard } from "../../../atomic/organisms/CompanyCard/CompanyCard";
// import Shai from "../../../assets/images/cyberShai.png";

export const Estadisticas = () => {
  //   let { data } = useFetchApi("company/list");
  //   console.log(data);
  //   if (data) {
  //     data = data.companies;
  //   }

  return (
    <section className="layout__interno">
      <h2>Estadisitcas</h2>
      <h3>Hola, Shai</h3>
      <p>Bienvenida. Estadisticas al día de hoy.</p>
      <section className="grid-estadisticas">
        {/* {data?.map((company) => (
          <div key={`${company._id}`}>
            <CompanyCard
              name={company.name}
              description={company.description}
              icon={Shai}
            />
          </div>
        ))} */}
      </section>
    </section>
  );
};

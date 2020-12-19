import React from "react";
// import { useFetchApi } from "../../../hooks/useFetch";
// import { CompanyCard } from "../../../atomic/organisms/CompanyCard/CompanyCard";
// import Shai from "../../../assets/images/cyberShai.png";
import { Stats } from "../../../atomic/atoms/Stats/Stats";
import { ListStats } from "../../../atomic/organisms/ListStats/ListStats";
import { StudentBar } from "../../../atomic/organisms/StudentBar/StudentBar";
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
        <div>
          <ListStats>
            <Stats title="Colocados Globales" current="298" total="640" />
          </ListStats>
        </div>
        <div>
          <ListStats>
            <Stats title="Cohort 1" current="45" total="84" />
            <Stats title="Cohort 2" current="28" total="87" />
            <Stats title="Cohort 3" current="45" total="84" />
          </ListStats>
        </div>
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
      <section className="grid-estadisticas">
        <div>
          <ListStats>
            <Stats
              title="Estudiantes listos a pagar"
              current="375"
              total="640"
            />
          </ListStats>
        </div>
        <div>
          <ListStats>
            <Stats title="Estudiantes Contratados" current="353" total="640" />
          </ListStats>
        </div>
      </section>
      <section className="layout__interno--estudiantes">
        <h3>Estudiantes</h3>
        <section>
          <div>
            <StudentBar></StudentBar>
            <StudentBar></StudentBar>
            <StudentBar></StudentBar>
          </div>
        </section>
      </section>
    </section>
  );
};

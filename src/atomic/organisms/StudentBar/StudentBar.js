import React from "react";
import { InfoCard } from "../InfoCard/InfoCard";
export const StudentBar = () => {
  return (
    <div className="student-bar-container">
      <div>
        <InfoCard />
      </div>
      <div className="student-bar-container__element">
        <p>Cohort</p>
        <h3>1</h3>
      </div>
      <div className="student-bar-container__element">
        <p>Intros</p>
        <h3>24</h3>
      </div>
      <div className="student-bar-container__element">
        <p>Aplicaciones</p>
        <h3>26</h3>
      </div>
      <div className="student-bar-container__element">
        <p>Fecha de inicio</p>
        <h3>26/11/20</h3>
      </div>
      <div className="student-bar-container__element">
        <p>Sueldo (USD)</p>
        <h3>600</h3>
      </div>
    </div>
  );
};

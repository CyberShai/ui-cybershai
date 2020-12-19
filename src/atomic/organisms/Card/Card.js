import React from "react";
import { JobInfo } from "../../molecules/JobInfo/JobInfo";
import { Hired } from "../../molecules/Hired/Hired";
import Icon from "../../../assets/images/Icon.png";
import Shai from "../../../assets/images/cyberShai.png";
import { TechLabel } from "../../../atomic/atoms/TechLabel/TechLabel";
import { Button } from "../../../atomic/atoms/Button/Button";

export const Card = ({ job, date, location, description, ...props }) => {
  return (
    <div className="card-container">
      <div>
        <JobInfo
          position="vertical"
          photo={Icon}
          job={job}
          date={date}
          location={location}
        ></JobInfo>
      </div>
      <div className="card-container__description">{description}</div>
      <div className="card-container__tech-labels">
        <div>
          <TechLabel name="JavaScript" type="primary" />
        </div>
        <div>
          <TechLabel name="Node" type="primary" />
        </div>
      </div>
      <Hired photo1={Shai} photo2={Shai} photo3={Shai} company="Platzi" />
      <div className="card-container__footer">
        <div className="separation">
          <Button
            label="Aplicar ahora"
            backgroundColor="primary"
            type="simple"
          />
        </div>
        <div>
          <Button
            label="Ver detalles"
            backgroundColor="secondary"
            type="simple"
          />
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  job: "Frontend Developer",
  date: "18/12/2020",
  location: "México, CDMX",
  description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
};

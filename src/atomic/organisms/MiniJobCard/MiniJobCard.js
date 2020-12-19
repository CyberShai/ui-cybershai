import React from "react";
import { JobInfo } from "../../molecules/JobInfo/JobInfo";
import Icon from "../../../assets/images/Icon.png";
import { Button } from "../../../atomic/atoms/Button/Button";

export const MiniJobCard = ({ job, date, location, datePublish, dateAdd }) => {
  return (
    <div className="mini-job-card-container">
      <div>
        <JobInfo
          position="horizontal"
          photo={Icon}
          job={job}
          date={date}
          location={location}
        ></JobInfo>
      </div>
      <div className="mini-job-card-container__dates">
        <div>
          <p>Publicado el: {datePublish}</p>
        </div>
        <div>
          <p>Añadido el: {dateAdd}</p>
        </div>
      </div>
      <div className="mini-job-card-container__footer">
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

MiniJobCard.defaultProps = {
  job: "Frontend Developer",
  date: "18/12/2020",
  location: "México, CDMX",
  description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  dateAdd: "15/12/2020",
  datePublish: "15/12/2020",
};

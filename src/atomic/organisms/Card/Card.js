import React from "react";
import { JobInfo } from "../../molecules/JobInfo/JobInfo";
import Icon from "../../../assets/images/Icon.png";
import { TechLabel } from "../../../atomic/atoms/TechLabel/TechLabel";
import { Avatar } from "../../../atomic/atoms/Avatar/Avatar";
import { Button } from "../../../atomic/atoms/Button/Button";

export const Card = ({ job, date, location, description }) => {
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
      <div className="mockClass">
        <div className="separation">
          <TechLabel name="JavaScript" type="primary" />
        </div>
        <div>
          <TechLabel name="Node" type="primary" />
        </div>
      </div>
      <div>
        <Avatar />
      </div>
      <div className="buttons">
        <div className="separation">
          <Button
            label="Aplicar ahora"
            backgroundColor="primary"
            type="simple"
          />
        </div>
        <div>
          <Button
            label="Aplicar ahora"
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

import React from "react";
import { Avatar } from "../../atoms/Avatar/Avatar";
import Shai from "../../../assets/images/cyberShai.png";
import { Button } from "../../../atomic/atoms/Button/Button";
import { IconText } from "../../atoms/IconText/IconText";

export const JobCardList = ({ company, job }) => {
  return (
    <div className="job-card-list-container">
      <div>
        <Avatar photo={Shai} size="medium" alt="company" />
      </div>
      <div className="job-card-list-container__info">
        <div>
          <h3>{company}</h3>
        </div>
        <p>{job}</p>
        <div></div>
      </div>
      <div className="job-card-list-container__date">
        <p>Publicado</p>
        <h4>15/12/2020</h4>
      </div>
      <div className="job-card-list-container__aplications">
        <p>Han Aplicado</p>
        <h4>77</h4>
      </div>
      <div className="job-card-list-container__button">
        <Button
          label="Editar Vacante"
          backgroundColor="primary"
          type="simple"
        />
      </div>
      <div>
        <IconText icon="trash" text="" link="#" color="dark" />
      </div>
    </div>
  );
};

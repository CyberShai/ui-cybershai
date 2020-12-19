import React from "react";

import { CompanyName } from "../../molecules/CompanyName/CompanyName";
import { Button } from "../../atoms/Button/Button";
import Icon from "../../../assets/images/Icon.png";
import { Hired } from "../../molecules/Hired/Hired";

export const CompanyCard = ({ name, description, icon }) => {
  return (
    <div className="company-card">
      <CompanyName name={name} logo={icon} />
      <p>{description}</p>
      <Hired photo1={Icon} photo2={Icon} photo3={Icon} company="Platzi" />
      <Button label="Ver vacantes" backgroundColor="primary" />
    </div>
  );
};

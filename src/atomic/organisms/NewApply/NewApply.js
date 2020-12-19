import React from "react";

import Icon from "../../../assets/images/Icon.png";

import { SimpleField } from "../../atoms/SimpleField/SimpleField";
import { UploadFile } from "../../atoms/UploadFile/UploadFile";
import { JobInfo } from "../../molecules/JobInfo/JobInfo";
import { Button } from "../../atoms/Button/Button";

export const NewApply = ({ job, date, location, display }) => {
  const isShowed = display ? "__active" : "__hidden";
  return (
    <div className={`newapply-curtain newapply-curtain${isShowed}`}>
      <div className="newapply">
        <JobInfo
          position="horizontal"
          photo={Icon}
          job={job}
          date={date}
          location={location}
        />
        <SimpleField
          type="big"
          title="Correo del Intro"
          placeholder="correo@mail.com"
        />
        <UploadFile />
        <div className="newapply-buttons">
          <div className="newapply-buttons-separation">
            <Button label="Atras" backgroundColor="tertiary" type="simple" />
          </div>
          <div>
            <Button
              label="Solicitar intro"
              backgroundColor="primary"
              type="simple"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

NewApply.defaultProps = {
  job: "Frontend Developer",
  date: "18/12/2020",
  location: "México, CDMX",
  display: false,
};

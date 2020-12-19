import React, { useState, useContext } from "react";

import Icon from "../../../assets/images/Icon.png";
import NewApplyContext from "../../../context/NewApplyContext";

import { SimpleField } from "../../atoms/SimpleField/SimpleField";
import { UploadFile } from "../../atoms/UploadFile/UploadFile";
import { JobInfo } from "../../molecules/JobInfo/JobInfo";
import { Button } from "../../atoms/Button/Button";
import { Alert } from "../../organisms/Alert/Alert";

export const NewApply = ({ job, date, location }) => {
  const { showed, setShowed } = useContext(NewApplyContext);

  const handleClose = () => {
    setShowed("hidden");
    console.log(showed);
  };
  /* Hook para mostrar Alert */
  const [alertShow, setAlertShow] = useState(false);
  const handleAlert = () => {
    setAlertShow(true);
    setTimeout(() => {
      setAlertShow(false);
    }, 2000);
  };
  return (
    <>
      <Alert alertType="sucess" active={alertShow} />
      <div className={`newapply-curtain newapply-curtain__${showed}`}>
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
            <div className="newapply-buttons-separation" onClick={handleClose}>
              <Button label="Atras" backgroundColor="tertiary" type="simple" />
            </div>
            <div
              onClick={function (event) {
                handleClose();
                handleAlert();
              }}
            >
              <Button
                label="Solicitar intro"
                backgroundColor="primary"
                type="simple"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

NewApply.defaultProps = {
  job: "Frontend Developer",
  date: "18/12/2020",
  location: "México, CDMX",
};

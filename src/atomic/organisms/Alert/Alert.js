import React from "react";
import { Icon } from "../../atoms/Icons/Icon";

export const Alert = ({ alertType, active }) => {
  return (
    <div className={`alert-container alert-container__${active}`}>
      <div className={`alert alert-${alertType}`}>
        <span className="alert-icon">
          <Icon
            svg={alertType === "sucess" ? "check" : "close"}
            classes="svg-icon__big"
          />
        </span>
        <p>
          {alertType === "sucess" ? "¡Proceso Exitoso!" : "Algo no salió bien"}
        </p>
      </div>
    </div>
  );
};

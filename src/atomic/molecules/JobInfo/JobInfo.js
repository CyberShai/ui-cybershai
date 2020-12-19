import React from "react";

import { Avatar } from "../../atoms/Avatar/Avatar";
import { IconText } from "../../atoms/IconText/IconText";

export const JobInfo = ({ photo, position, job, date, location }) => {
  let flex;
  console.log(position);
  if (position === "vertical") {
    flex = "--vertical";
  } else {
    flex = "--horizontal";
  }
  console.log(flex);

  return (
    <div className={`job-info__container${flex}`}>
      <Avatar photo={photo} size="large" alt="Company Name" />
      <div className="job-info__info">
        <div>
          <h3>{job}</h3>
          <div className="job-info__meta">
            <IconText icon="location" text={location} link="#" />
            <IconText icon="check" text="Remoto" link="#" />
          </div>
        </div>
        <h5>{date}</h5>
      </div>
    </div>
  );
};
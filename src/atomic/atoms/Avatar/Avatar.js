import React from "react";

export const Avatar = ({ photo, size, alt }) => {
  let photoSize;
  switch (size) {
    case "small":
      photoSize = "__small";
      break;
    case "medium":
      photoSize = "__medium";
      break;
    case "large":
      photoSize = "__large";
      break;
    case "extra-large":
      photoSize = "__estra-large";
      break;
  }
  return <img className={`avatar${photoSize}`} src={photo} alt={alt} />;
};

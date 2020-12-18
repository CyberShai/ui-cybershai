import React from 'react'

export const StudentAvatar = ({photo, size, alt}) => {
  let photoSize;
  switch (size) {
    case "small":
      photoSize="__small";
      break;
    case "medium":
      photoSize="__medium";
      break;
    case "large":
      photoSize="__large";
      break;
  } return (
    <img className={`student-avatar${photoSize}`} src={photo} alt={alt}/>

  )
}
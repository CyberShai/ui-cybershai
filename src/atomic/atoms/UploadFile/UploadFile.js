import React from "react";

export const UploadFile = () => {
  return (
    <div className="upload-file-container">
      <p>Subir Archivo</p>
      <label className="custom-file-upload " htmlFor="myfile">
        Elegir Archivo
      </label>
      <input type="file" id="myfile" name="myfile" />
    </div>
  );
};

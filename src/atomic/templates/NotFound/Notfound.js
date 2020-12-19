import React from "react";
import { Link } from "react-router-dom";

import image from "../../../assets/images/404.png";
import { Button } from "../../atoms/Button/Button";

export const NotFound = () => {
  return (
    <main className="not-found">
      <img src={image} alt="404 Not found" />
      <h2>Lo sentimos</h2>
      <p>No encontramos lo que buscas</p>
      <Link to="/">
        <Button label="Regresa con nosotros" backgroundColor="secondary" />{" "}
      </Link>
    </main>
  );
};

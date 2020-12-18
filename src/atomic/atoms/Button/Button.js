import React from "react";

export const Button = ({ label, backgroundColor, type, ...props }) => {
  return (
    <button
      className={`button button__${backgroundColor} button-type__${type}`}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: "Hola compa",
  backgroundColor: "primary",
  type: "simple",
};

/** ejemplos con parametros
 * <Button label="Aplica Ahora" backgroundColor="primary" />
      <Button label="Aplica Ahora" backgroundColor="secondary" />
      <Button label="Aplica Ahora" backgroundColor="tertiary" />
      <Button label="Atras" backgroundColor="back" type="back" />
      <Button />
      <Button
        label="Aplica Ahora form"
        backgroundColor="tertiary"
        type="form"
      />
 */

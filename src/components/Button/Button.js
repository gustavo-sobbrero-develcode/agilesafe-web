import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button", backgroundColor }) => {
  return (
    <C.Button type={Type} onClick={onClick} style={{ backgroundColor }}>
      {Text}
    </C.Button>
  );
};

export default Button;

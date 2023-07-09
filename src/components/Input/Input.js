import React from "react";
import * as C from "./styles";

const Input = ({ type, placeholder, value, onChange, label, onClick }) => {
  return (
    <C.Container>
      <C.Label>{label}</C.Label>
      <C.Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        onClick={onClick}
      />
    </C.Container>
  );
};

export default Input;

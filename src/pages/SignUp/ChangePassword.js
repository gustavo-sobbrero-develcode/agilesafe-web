import React, { useState } from "react";
import * as C from "./styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header/Header";

const ChangePassword = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangePassword = () => {
    if (!oldPassword || !newPassword) {
      setError("Preencha todos os campos");
      return;
    } else if (oldPassword === newPassword) {
      setError("As senhas não podem ser idênticas");
      return;
    }

    const res = signUp(oldPassword, newPassword);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <>
      <Header />
      <C.Container>
        <C.Label>Alterar senha</C.Label>
        <C.Content>
          <Input
            type="email"
            placeholder="Senha antiga"
            value={oldPassword}
            onChange={(e) => [setOldPassword(e.target.value), setError("")]}
          />
          <Input
            type="email"
            placeholder="Nova senha"
            value={newPassword}
            onChange={(e) => [setNewPassword(e.target.value), setError("")]}
          />
          <C.LabelError>{error}</C.LabelError>
          <Button Text="Confirmar" onClick={handleChangePassword} />
          {/* <C.LabelLogin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelLogin> */}
        </C.Content>
      </C.Container>
    </>
  );
};

export default ChangePassword;

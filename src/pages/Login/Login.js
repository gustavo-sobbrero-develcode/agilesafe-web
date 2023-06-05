import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { logIn } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!user || !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = await logIn(user, password);
    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <C.Container>
      <C.Content>
        <C.Label>Login</C.Label>
        <hr style={{ width: "80%", color: "lightgray" }} />
        <Input
          type="email"
          placeholder="Digite seu usuário"
          value={user}
          onChange={(e) => [setUser(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button
          Text="Entrar"
          onClick={handleLogin}
          backgroundColor={"#008080"}
        />
      </C.Content>
    </C.Container>
  );
};

export default Login;

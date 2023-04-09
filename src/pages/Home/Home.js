import React from "react";
import * as C from "./styles";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header/Header";

const Home = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <C.Container>
        <C.Title>Home Page</C.Title>
        <Button Text="Sair" onClick={() => [signOut(), navigate("/")]} />
      </C.Container>
    </>
  );
};

export default Home;
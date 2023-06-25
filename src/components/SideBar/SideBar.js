import React from "react";
import * as C from "./styles";
import { FaTimes } from "react-icons/fa";
import SidebarItem from "../SideBarItem";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/agile-logo.jpeg";

const SideBar = ({ active }) => {
  const { signOut } = useAuth();

  const navigate = useNavigate();
  const closeSideBar = () => {
    active(false);
  };

  return (
    <C.Container sidebar={active}>
      <FaTimes onClick={closeSideBar} />
      <C.Content>
        <C.ProfilePhotoDiv src={logo} alt="logo"></C.ProfilePhotoDiv>
        <SidebarItem Text="Home" onClick={() => navigate("/home")} />
        <SidebarItem
          Text="Instituição de Saúde"
          onClick={() => navigate("/institutions")}
        />
        <SidebarItem
          Text="Especialidades"
          onClick={() => navigate("/specialties")}
        />
        <SidebarItem
          Text="Alteração de credenciais"
          onClick={() => navigate("/changepassword")}
        />
      </C.Content>
      <C.Footer>
        <Button
          Text={"Sair"}
          backgroundColor={"#008080"}
          onClick={() => [signOut(), navigate("/")]}
        />
      </C.Footer>
    </C.Container>
  );
};

export default SideBar;

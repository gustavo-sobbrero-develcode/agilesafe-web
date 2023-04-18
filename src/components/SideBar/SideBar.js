import React, { useState } from "react";
import * as C from "./styles";
import { FaTimes } from "react-icons/fa";
import SidebarItem from "../SideBarItem";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

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
        <C.ProfilePhotoDiv />
        <SidebarItem Text="Home" onClick={() => navigate("/home")} />
        <SidebarItem Text="Hospital" />
        <SidebarItem Text="Especialidades" onClick={() => navigate("/cadastros/hospitais")} />
        <SidebarItem
          Text="Alteração de credenciais"
          onClick={() => navigate("/changepassword")}
        />
      </C.Content>
      <C.Footer>
        <Button Text={"Sair"} backgroundColor={"#046ee5"} onClick={() => [signOut(), navigate("/")]} />
      </C.Footer>
    </C.Container>
  );
};

export default SideBar;

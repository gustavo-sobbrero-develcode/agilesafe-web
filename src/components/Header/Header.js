import React, { useState } from "react";
import * as C from "./styles";
import { FaBars } from "react-icons/fa";
import SideBar from "../SideBar/SideBar";

const Header = ({title}) => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  return (
    <C.Container>
      <FaBars onClick={showSideBar} />
      {sideBar && <SideBar active={setSideBar} />}
      <C.Title>{title}</C.Title>
    </C.Container>
  );
};

export default Header;

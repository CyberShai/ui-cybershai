import React from "react";

import { Menu } from "../../molecules/Menu/Menu";
import Logo from "../../../assets/images/Logo Blanco.png";

export const SideBar = ({ userType }) => {
  return (
    <aside className="sidebar">
      <div>
        <img className="sidebar-logo" src={Logo} alt="CyberShai Logo" />
        <Menu userType={userType} />
      </div>
      <p>Para Platzi Master</p>
    </aside>
  );
};

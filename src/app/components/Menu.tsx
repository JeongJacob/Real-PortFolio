import React from "react";
import menu from "@/app/components/styles/Menu.module.scss";

const Menu = () => {
  return (
    <nav className={menu.wrapper}>
      <div>
        <p>Profile</p>
        <p>Introduce</p>
        <p>Project</p>
      </div>
    </nav>
  );
};

export default Menu;

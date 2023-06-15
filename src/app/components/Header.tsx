"use client";
import React, { useState } from "react";
import header from "@/app/components/styles/Header.module.scss";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [onMenu, setOnMenu] = useState(false);
  return (
    <header className={header.wrapper}>
      {!onMenu ? (
        <IoMenuOutline
          className={header.menu__button}
          onClick={() => setOnMenu(true)}
        />
      ) : (
        <IoCloseOutline
          className={header.menu__button}
          onClick={() => setOnMenu(false)}
        />
      )}
    </header>
  );
};

export default Header;

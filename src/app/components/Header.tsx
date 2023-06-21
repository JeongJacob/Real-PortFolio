"use client";
import React from "react";
import { useMenuStore } from "@/store";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import header from "@/app/styles/Header.module.scss";

const Header = () => {
  const onMenu = useMenuStore((state) => state.onMenu);
  const handleMenu = useMenuStore((state) => state.handleMenu);
  return (
    <header className={header.wrapper}>
      {!onMenu ? (
        <IoMenuOutline className={header.menu__button} onClick={handleMenu} />
      ) : (
        <IoCloseOutline className={header.close__button} onClick={handleMenu} />
      )}
    </header>
  );
};

export default Header;

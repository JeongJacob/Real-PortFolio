"use client";
import React from "react";
import header from "@/app/components/styles/Header.module.scss";
import { useMenuStore } from "@/store";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

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

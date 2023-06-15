"use client";
import React from "react";
import header from "@/app/components/styles/Header.module.scss";
import { IoMenuOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className={header.wrapper}>
      <IoMenuOutline cursor={"pointer"} className={header.menu__button} />
    </header>
  );
};

export default Header;

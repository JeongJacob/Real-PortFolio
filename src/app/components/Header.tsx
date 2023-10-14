"use client";
import React from "react";
import { useMenuStore } from "@/store";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import header from "@/app/styles/Header.module.scss";
import Link from "next/link";

const Header = () => {
  const onMenu = useMenuStore((state) => state.onMenu);
  const handleMenu = useMenuStore((state) => state.handleMenu);
  return (
    <header className={header.wrapper}>
      {/* {!onMenu ? (
        <IoMenuOutline className={header.menu__button} onClick={handleMenu} />
      ) : (
        <IoCloseOutline className={header.close__button} onClick={handleMenu} />
      )} */}
        <div className={header.menu__container}>
          <Link href="/" onClick={handleMenu}>
            <p>HOME</p>
          </Link>
          <Link href="/profile" onClick={handleMenu}>
            <p>PROFILE</p>
          </Link>
          <Link href="/skill" onClick={handleMenu}>
            <p>SKILL</p>
          </Link>
          <Link href="/project" onClick={handleMenu}>
            <p>PROJECTS</p>
          </Link>
        </div>
    </header>
  );
};

export default Header;

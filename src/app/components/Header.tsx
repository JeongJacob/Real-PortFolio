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
    <header className={onMenu ? header.wrapper__open : header.wrapper}>
      {!onMenu ? (
        <IoMenuOutline
          className={header.menu__button}
          onClick={() => handleMenu(true)}
        />
      ) : (
        <IoCloseOutline
          className={header.close__button}
          onClick={() => handleMenu(false)}
        />
      )}
      <div
        className={
          onMenu ? header.menu__container__open : header.menu__container
        }
      >
        <Link href="/" onClick={() => handleMenu(false)}>
          <p>HOME</p>
        </Link>
        <Link href="/profile" onClick={() => handleMenu(false)}>
          <p>PROFILE</p>
        </Link>
        <Link href="/skill" onClick={() => handleMenu(false)}>
          <p>SKILL</p>
        </Link>
        <Link href="/project" onClick={() => handleMenu(false)}>
          <p>PROJECTS</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;

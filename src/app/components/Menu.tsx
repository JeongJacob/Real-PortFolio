"use client";
import React from "react";
import menu from "@/app/styles/Menu.module.scss";
import { useMenuStore } from "@/store";
import Link from "next/link";

const Menu = () => {
  const onMenu = useMenuStore((state) => state.onMenu);
  const handleMenu = useMenuStore((state) => state.handleMenu);
  return (
    <nav className={onMenu ? menu.wrapper__open : menu.wrapper__close}>
      <div className={menu.container}>
        <Link href="/profile" onClick={handleMenu}>
          <p>Profile</p>
        </Link>
        <Link href="/introduce" onClick={handleMenu}>
          <p>Introduce</p>
        </Link>
        <Link href="/project" onClick={handleMenu}>
          <p>Project</p>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;

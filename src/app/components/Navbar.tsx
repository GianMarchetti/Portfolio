/* eslint-disable react/no-unescaped-entities */
"use client";
import "../styles/globals.css";
import logo from "../assets/imgs/firma.png";
import Link from "next/link";
import "../styles/Components.css";
import Image from "next/image";
import React from "react";
import { Button } from "@nextui-org/react";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "../config/site";
import DropdownMenuMobile from "./DropdownMenu";

export function NavBar() {
  return (
    <>
      <header className="fixed left-0 top-0 z-40 h-full w-40 border-r dark:border-zinc-900 bg-slate-50 dark:bg-zinc-950 p-2 overflow-hidden md:h-fit md:w-full md:border-r-0 md:p-4">
        <nav className="h-full w-full flex flex-col items-start justify-between md:flex-row">
          <div className=" flex flex-col h-fit w-full max-w-full items-start justify-between p-0 md:text-xs md:p-0 md:flex-row">
            {/* -------------------------- Links Navbar Mobile --------------- */}

            <DropdownMenuMobile />

            {/* ----------------- Logo --------------------------------------- */}
            <Link href="/" className="logo m-0">
              <Image
                alt="Logo de Gian Luca Marchetti"
                src={logo}
                width={500}
                height={500}
                className="h-16 w-36 p-4 sm:h-14 sm:w-14 sm:p-0"
              />
            </Link>

            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* --------------- Links Navbar Desktop ------------------------- */}
            <div className="flex items-start md:hidden">
              <ul className="relative h-fit w-fit top-auto items-start justify-center bg-transparent flex-col">
                {siteConfig.linksNav.map(({ label, route }) => (
                  <li
                    key={route}
                    className="relative h-fit top-auto flex-row text-black dark:text-white font-semibold hover:bg-gray-100 rounded-lg  hover:w-full hover:text-red-700  dark:hover:bg-zinc-900 "
                  >
                    <Link href={route}>{label}</Link>
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
          {/* ----------------- Buttons -------------------- */}

          <div className="Buttons">
            <ThemeToggle />
            <Link href={`#contact`} className="BtnContact">
              <Button className="w-fit text-white bg-zinc-950 dark:bg-slate-50 dark:text-black">
                Let's Talk
              </Button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

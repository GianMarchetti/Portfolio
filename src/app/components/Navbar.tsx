/* eslint-disable react/no-unescaped-entities */
'use client'
import '../styles/globals.css'
import logo from '../assets/imgs/firma.png'
import Link from 'next/link'
import '../styles/Components.css'
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import '../styles/dropdown.css'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { ThemeToggle } from './theme-toggle'

const linksNav = [
{
  label: 'Home',
  route: '/',
},{
  label: 'Work',
  route: '#work'
},{
  label: 'Experience',
  route: '#exp'
},{
  label: 'Skills',
  route: '#skills'
},{
  label: 'Contact',
  route: '#contact'
}
]


export function NavBar () {
  
  return (
    <>
      <header className="fixed left-0 top-0 z-40 h-full w-40 border-r bg-slate-50 dark:bg-zinc-950 p-2 overflow-hidden sm:h-fit sm:w-full sm:border-r-0 sm:p-4 sm:border-b">

        <nav className='h-full w-full flex flex-col items-start justify-between sm:flex-row'>

          <div className=" flex flex-col h-fit w-full max-w-full items-start justify-between p-0 sm:text-xs sm:p-0 sm:flex-row">

{/* -------------------------- Links Navbar Mobile --------------- */}

            <Dropdown>
              <DropdownTrigger>
                <Button 
                  variant="bordered" 
                  className='hidden sm:block font-bold bg-zinc-500 text-black dark:bg-zinc-800 dark:text-white m-0 w-fit text-center'
                >
                  Menu
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={linksNav}
                    className='h-fit bg-zinc-500  dark:bg-zinc-800'
                    >
                {linksNav.map(({route, label}) => (
                  <DropdownItem
                    key={route}
                    className='text-black dark:text-white font-bold'
                  >
                    <Link href={route}>
                      {label}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

{/* ----------------- Logo --------------------------------------- */}
            <Link href='/' className="logo m-0">
              <Image alt='Logo de Gian Luca Marchetti' src={logo} width={500} height={500} className="h-16 w-36 p-4 sm:h-14 sm:w-14 sm:p-0"/>
            </Link>

            <div className='hidden sm:block'>
              <ThemeToggle />
            </div>

{/* --------------- Links Navbar Desktop ------------------------- */}
            <div className="flex items-start sm:hidden">
              <ul className='relative h-fit w-fit top-auto items-start justify-center bg-transparent flex-col sm:flex-row' >
                  {linksNav.map(({ label, route }) => (
                  <li key={route} className='relative h-fit top-auto flex-row text-black dark:text-white font-semibold hover:bg-gray-100 rounded-lg  hover:w-full hover:text-red-700  dark:hover:bg-zinc-900 '>
                    <Link href={route}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
{/* ----------------- Buttons -------------------- */}

            <div className="Buttons">
              <ThemeToggle />
              <Link href={`#contact`} className="BtnContact"> 
                <Button className='w-fit text-white bg-zinc-950 dark:bg-slate-50 dark:text-black'>
                  Let's Talk
                </Button> 
              </Link>
            </div>

        </nav>

      </header>
    </>
  )
}
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
  label: 'About',
  route: '#about'
},{
  label: 'Work',
  route: '#work'
},{
  label: 'Contact',
  route: '#contact'
}
]


export function NavBar () {

  return (
    <>
      <header className="fixed left-0 top-0 z-40 h-full w-40 sm:w-24 border-r bg-background p-2 overflow-hidden">

        <nav className='h-full w-full flex flex-col items-start justify-between'>

          <div className="mx-auto flex flex-col h-fit max-w-full items-start justify-between p-4 sm:text-xs sm:p-0">

{/* ----------------- Logo --------------------------------------- */}
            <Link href='/' className="logo m-0">
              <Image alt='Logo de Gian Luca Marchetti' src={logo} width={500} height={500} className="h-16 w-36 p-4"/>
            </Link>
{/* --------------- Links Navbar Desktop ------------------------- */}
            <div className="flex items-start">
              <ul className='relative h-fit top-auto items-start justify-center bg-transparent flex-col' >
                  {linksNav.map(({ label, route }) => (
                  <li key={route} className='relative h-fit top-auto flex-row text-black dark:text-white'>
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
              <Link href={`#Contact`} className="BtnContact"> 
                <Button className='w-fit text-white bg-black dark:bg-white dark:text-black'>
                  Let's Talk
                </Button> 
              </Link>
            </div>

        </nav>

      </header>
    </>
  )
}
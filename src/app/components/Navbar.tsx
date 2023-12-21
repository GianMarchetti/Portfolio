/* eslint-disable react/no-unescaped-entities */
'use client'
import '../globals.css'
import logo from '../assets/imgs/firma.png'
import Link from 'next/link'
import './Components.css'
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import './dropdown.css'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import { ThemeToggle } from './theme-toggle'

const linksNav = [
{
  label: 'Home',
  route: '/',
},{
  label: 'About',
  route: '/components/About'
},{
  label: 'Services',
  route: '/components/services'
},{
  label: 'Proyects',
  route: '/components/proyects'
},{
  label: 'Contact',
  route: '/components/contact'
}
]


export function NavBar () {

  return (
    <>
      <header className="sticky top-0 z-40 w-full h-fit border-b bg-background flex flex-row p-2">

        <nav className='h-fit w-full'>

          <div className="mx-auto flex flex-row h-fit max-w-full items-center justify-between space-x-4 px-6 sm:space-x-0 sm:text-xs sm:p-0">
{/* ----------------- Links Navbar Mobile ------------------------ */}
          <div className="dropMob">
            <Dropdown className="dropMob">
              <DropdownTrigger className="dropMob">
                <Button 
                  variant="flat" 
                  className='bg-black text-white dark:bg-white dark:text-black'
                >
                  Menu
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Dynamic Actions" items={linksNav} className='border-2 border-black text-white dark:border-white'>
              {linksNav.map(({ label, route }) => (
                  <DropdownItem
                    key={route}
                    
                  >
                    <Link href={route}>
                    {label}
                  </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
{/* ----------------- Logo --------------------------------------- */}
            <Link href='/' className="logo">
              <Image alt='Logo de Gian Luca Marchetti' src={logo} width={500} height={500} className="h-16 w-36 p-2"/>
            </Link>
{/* --------------- Links Navbar Desktop ------------------------- */}
            <div className="dropDesk">
              <ul className='relative h-fit top-auto justify-center bg-transparent flex-row md:none' >
                  {linksNav.map(({ label, route }) => (
                  <li key={route} className='relative h-fit top-auto flex-row text-black dark:text-white'>
                    <Link href={route}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>{" "}
            </div>
{/* ----------------- Buttons -------------------- */}
            <div className="Buttons">
              <ThemeToggle />
              <Link href={`#contact`} className="BtnContact"> 
                <Button className='w-fit text-white bg-black dark:bg-white dark:text-black'>
                  Let's Talk
                </Button> 
              </Link>
            </div>

          </div>

        </nav>

      </header>
    </>
  )
}
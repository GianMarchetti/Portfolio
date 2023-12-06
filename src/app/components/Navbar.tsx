/* eslint-disable react/no-unescaped-entities */
'use client'
import '../globals.css'
import { usePathname } from 'next/navigation'
import logo from '../assets/imgs/firma.png'
import Link from 'next/link'
import styles from './Components.module.css'
import Image from 'next/image'
import Logo from '../assets/icons/firma2.png'
import logoMob from '../assets/icons/logo2.png'
import { Pixelify_Sans } from 'next/font/google'
import React, { useState, useEffect } from "react";
import './dropdown.css'
import { Button } from '@nextui-org/react'
import { ThemeToggle } from './theme-toggle'

const linkDesk = [{
  label: 'Home',
  route: '/',
},{
  label: 'About',
  route: '/components/About'
},{
  label: 'Services',
  route: '/components/services'
},{
  label: 'Portfolio',
  route: '/components/portfolio'
},{
  label: 'Contact',
  route: '/components/contact'
}]

const linksMob = [{
  label: 'Home',
  route: '/',
},{
  label: 'About',
  route: '/components/About'
},{
  label: 'Services',
  route: '/components/services'
},{
    label: 'Portfolio',
    route: '/components/portfolio'
},{
  label: 'Contact',
  route: '/components/contact'
}]


export function NavBar () {

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  return (
    <>
      <header className="sticky top-0 z-40 w-full h-fit border-b bg-background flex flex-row p-2">

{/* -----------------Menu Desktop------------------------------- */}
        <nav className='h-fit w-full'>

          <div className="mx-auto flex flex-row h-fit max-w-full items-center justify-between space-x-4 px-6 sm:space-x-0 md:flex-col sm:text-xs ">
            <Link href='/' className='w-fit h-fit pt-2'>
              <Image alt='Logo de Gian Luca Marchetti' src={logo} width={200} height={200} className="h-16 w-36 p-2"/>
            </Link>
            <ul className='relative h-fit top-auto justify-center bg-transparent flex-row' >
                {linkDesk.map(({ label, route }) => (
                <li key={route} className='relative h-fit top-auto flex-row text-black dark:text-white'>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>{" "}
            <div className='flex items-center justify-between'>
              <ThemeToggle />
              <Link href={``} className='w-fit'> 
                <Button className='w-fit text-white bg-black dark:bg-white dark:text-black'>
                  Let's Talk
                </Button> 
              </Link>
            </div>
          </div>

{/*---------------------- Menu Mobile ------------------------------------*/}

          {/* <div className={styles.dropMob}>
            <div className="menu" >
                  <ul style={{
                      pointerEvents: isOpen ? "auto" : "none",
                      clipPath: "inset(10% 50% 90% 50% round 10px)"
                    }} className="dropMob">
                      {linksMob.map(({ label, route }) => (
                      <li key={route}>
                        <Link href={route}>
                          {label}
                        </Link>
                      </li>
                    ))}
                    </ul>{" "}
            </div>
            
            <Link href='/' className={styles.logoMob}>
              <Image as={NextImage} alt='Logo de Gian Luca Marchetti' src='https://i.ibb.co/6bJchMC/firma.png' width={200} height={200} className={styles.logoImg}/>
            </Link>
          </div> */}

        </nav>

      </header>
    </>
  )
}
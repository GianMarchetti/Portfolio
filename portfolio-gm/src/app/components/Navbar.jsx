'use client'
import '../globals.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Components.module.css'
import Image from 'next/image'
import Logo from '../assets/icons/logov2.png'
import logoMob from '../assets/icons/logo2.png'
import { Pixelify_Sans } from 'next/font/google'
import React, { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import './dropdown.css'
import { Button } from '@nextui-org/react'


const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });


function useMenuAnimationMob(isOpen = boolean) {
  const [scopeMob, animateMob] = useAnimate();

  useEffect(() => {
    animateMob(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animateMob(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)"
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5
      }
    );

    animateMob(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0
      }
    );
  }, [isOpen]);

  return scopeMob;
}

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
  const scopeMob = useMenuAnimationMob(isOpen);  
  const pathname = usePathname()

  return (
    <>
      <header className={styles.header} >

{/* -----------------Menu Desktop------------------------------- */}
        <nav className='w-full'>

          <div className={styles.Desk}>
            <Link href='/' className={styles.logoDesk}>
              <Image as alt='Logo de Gian Luca Marchetti' src={Logo} className={styles.logoImg}/>
            </Link>
            <ul className='relative h-fit top-auto justify-center' >
                {linkDesk.map(({ label, route }) => (
                <li key={route} className='relative h-fit top-auto'>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>{" "}
            <Link href={``}> 
              <Button className='bg-white'>
                Let's Talk
              </Button> 
            </Link>
          </div>

{/*---------------------- Menu Mobile ------------------------------------*/}

          <div className={styles.dropMob}>
            <div className="menu" ref={scopeMob} >
            <motion.button 
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </div>
            </motion.button> 
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
              <Image as alt='Logo de Gian Luca Marchetti' src={logoMob} className={styles.logoImg}/>
            </Link>
          </div>

        </nav>

      </header>
    </>
  )
}
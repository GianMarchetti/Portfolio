'use client'
import '../globals.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Components.module.css'
import Image from 'next/image'
import gamepad from '../assets/icons/gamepad.svg'
import Cart from '../assets/imgs/2.jpg'
import { Pixelify_Sans } from 'next/font/google'
import { Big_Shoulders_Display } from 'next/font/google'
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import './dropdown.css'


const Font = Pixelify_Sans({
  weight: '400',
  subsets: ['latin']
})

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

// function useMenuAnimation(isOpen = boolean) {
//   const [scope, animate] = useAnimate();

//   useEffect(() => {
//     animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

//     animate(
//       "ul",
//       {
//         clipPath: isOpen
//           ? "inset(0% 0% 0% 0% round 10px)"
//           : "inset(10% 50% 90% 50% round 10px)"
//       },
//       {
//         type: "spring",
//         bounce: 0,
//         duration: 0.5
//       }
//     );

//     animate(
//       "li",
//       isOpen
//         ? { opacity: 1, scale: 1, filter: "blur(0px)" }
//         : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
//       {
//         duration: 0.2,
//         delay: isOpen ? staggerMenuItems : 0
//       }
//     );
//   }, [isOpen]);

//   return scope;
// }

// const linksDesk = [{
//   label: 'Productos',
//   route: '/components/products'
// },{
//   label: 'Asesorias',
//   route: '/components/asesorias'
// },{
//     label: 'Talleres',
//     route: '/components/talleres'
// }]

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

const linksMob = [{
  label: 'Home',
  route: '/',
},{
  label: 'About',
  route: '/components/products'
},{
  label: 'Service',
  route: '/components/asesorias'
},{
    label: 'Portfolio',
    route: '/components/talleres'
},{
  label: 'Contact',
  route: '/components/contact'
}]


export function Navigation ({navLinks}) {

  const [isOpen, setIsOpen] = useState(false);
  // const scope = useMenuAnimation(isOpen);  
  const scopeMob = useMenuAnimationMob(isOpen);  
  const pathname = usePathname()

  return (
    <>
      <header className={styles.header} >

{/* -----------------Menu Desktop------------------------------- */}
        <nav>

          <div className={styles.dropDesk}>
          <Link href='/' className={styles.logoDesk} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
          </svg>
          </Link>
            <Link href={`/`} >Home</Link>
            <Link href={`/components/contact`}>About</Link>
            <Link href={`/components/contact`}>Service</Link>
            <Link href={`/components/contact`}>Portfolio</Link>
            <Link href={`/components/contact`}>Contact</Link>
            <Link href={``}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg> Let's Talk
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
            <Link href='/' className={styles.logoMob}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
          </svg></Link>
            {/* <Link href={`/cart`}><Image src={Cart} className={styles.cart}/></Link> */}
          </div>

        </nav>

      </header>
    </>
  )
}
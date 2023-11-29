import styles from './Components.module.css'
import Image from 'next/image';
import { Pixelify_Sans } from 'next/font/google'
import { Instagram } from "lucide-react"

import Link from 'next/link';

const Font = Pixelify_Sans({
  weight: '400',
  subsets: ['latin']
})

export default function Footer(){
    return(
        <>
      <footer className={styles.footer}>
        <div className={styles.redes}>
          <p>Follow me</p>
            <Link href='https://www.instagram.com/yas.casabonita/'> 
              <Instagram className={styles.ig} />
            </Link>
        <Link href='https://www.linkedin.com/in/gian-marchetti-8713ba1b6/' className={styles.aLink}>
          <marquee className={Font.className}>Page created by 
          Gian Marchetti
          </marquee>
        </Link>
      </div>
      </footer>
    </>
    )
}

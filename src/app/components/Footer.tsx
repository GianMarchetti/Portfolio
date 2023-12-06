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
      <footer className='border-t border-slate-300 flex text-center mt-2 p-2 w-full'>
        <div className={styles.redes}>
          <p>Follow me</p>
            <Link href='https://www.instagram.com/gian_marchetti' className='mt-4'> 
              <Instagram className={styles.ig} />
            </Link>
        <Link href='https://www.linkedin.com/in/gian-marchetti-8713ba1b6/' className={styles.aLink}>
          <p className={Font.className}>Page created by Gian Marchetti</p>
        </Link>
      </div>
      </footer>
    </>
    )
}

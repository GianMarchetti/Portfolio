import '../styles/Components.css'
import Image from 'next/image';
import { Pixelify_Sans } from 'next/font/google'
import { Instagram, GithubIcon, LinkedinIcon, Dribbble } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

const Font = Pixelify_Sans({
  weight: '400',
  subsets: ['latin']
})

export default function Footer(){
    return(
      <>
      <footer className='footer border-t border-slate-300 dark:border-zinc-900 flex flex-col items-center text-center mt-2 p-2'>
        <p>Follow me</p>
        <div className="redes">
            <Link href='https://github.com/GianMarchetti' className='mt-4'> 
              <GithubIcon/>
            </Link>
            <Link href='https://www.linkedin.com/in/gian-marchetti-8713ba1b6/?locale=en_US' className='mt-4'> 
              <LinkedinIcon/>
            </Link>
            <Link href='https://dribbble.com/GLM8' className='mt-4'> 
              <Dribbble/>
            </Link>
            <Link href='https://www.behance.net/gianmarchetti' className='mt-4'> 
              <FontAwesomeIcon icon={faBehance} />
            </Link>
        </div>
        <Link href='https://linktr.ee/GianMarchetti' className="aLink">
          <p className={Font.className}>Page created by Gian Marchetti</p>
        </Link>
      </footer>
    </>
    )
}

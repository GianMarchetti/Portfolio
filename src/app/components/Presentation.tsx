import styles from '../home.module.css'

import { Button, Image } from "@nextui-org/react";
import { Github, Linkedin, Dribbble } from "lucide-react"
import NextImage from 'next/image'
import Link from "next/link"

export default function Presentation(){
    return(
            <section className="flex justify-center items-center p-6 w-full md:flex-col border-b border-red-800 dark:border-red-950">
                <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white from-50% via-red-800 via-55% to-white to-60% dark:from-black dark:via-red-950 dark:to-black z-10'>
                    <Image
                        as={NextImage} 
                        src='https://i.ibb.co/Lv9y4M1/me.png'
                        alt='personal image' 
                        width={600}
                        height={600} 
                        className={styles.mainImg}
                        // className='flex items-center z-10 p-2 opacity-1 rounded-none'
                    />
                </div>
                <div className="text-center p-2">
                    <h2 className="text-xl text-red-950">Gian Luca Marchetti</h2>
                    <h1 className="text-6xl mt-1 mb-3 text-red-700 dark:text-white">Front End Developer</h1>
                    <h3 className="text-lg text-red-950">Passionate about everything I do and willing to face challenges</h3>

                    <div className='flex justify-evenly mt-6'>
                        <Link href='https://www.linkedin.com/in/gian-marchetti-8713ba1b6/?locale=en_US'>
                            <Linkedin className='shadow-lg shadow-red-950 border-2 border-black dark:border-white rounded-full p-2 h-12 w-12' />
                        </Link>
                        <Link href='https://dribbble.com/GLM8'>
                            <Dribbble className='shadow-lg shadow-red-950 border-2 border-black dark:border-white rounded-full p-2 h-12 w-12' />
                        </Link>
                        <Link href='https://github.com/GianMarchetti'>
                            <Github  className='shadow-lg shadow-red-950 border-2 border-black dark:border-white rounded-full p-2 h-12 w-12' />
                        </Link>
                    </div>
                    <div className='flex justify-evenly mt-6'>
                        <Link href='https://drive.google.com/file/d/19o7DzwdXoGxI6RMhvEFphFY5_vrUS0Z-/view'><Button className='bg-black dark:bg-white text-white dark:text-black'>Download CV</Button></Link>
                        <Link href='https://linktr.ee/GianMarchetti'><Button className='bg-black dark:bg-white  text-white dark:text-black'>Hire Me</Button></Link>
                    </div>
                </div>
            </section>
    )   
}


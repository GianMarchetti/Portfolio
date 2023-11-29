import styles from '../home.module.css'

import { Button, Image } from "@nextui-org/react";
import { Github, Linkedin, Dribbble } from "lucide-react"
import NextImage from 'next/image'
import Link from "next/link"

export default function Presentation(){
    return(
            <div className="flex justify-around items-center w-full">
                <div className={styles.fondo}>
                    <Image
                        className='flex items-center'
                        as={NextImage} 
                        src={'https://i.ibb.co/Lv9y4M1/me.png'}
                        width={600}
                        height={600} 
                        alt='personal image' 
                    />
                </div>
                <div className="text-center">
                    <p className="text-xl text-red-950">Gian Marchetti</p>
                    <h1 className="text-6xl mt-1 mb-3 ">Front End Developer</h1>
                    <p className="text-lg text-red-950">Passionate about everything I do and willing to face challenges</p>

                    <div className='flex justify-evenly mt-6'>
                        <Link href='#'>
                            <Linkedin className='shadow-lg shadow-red-950 border-2 border-white rounded-full p-2 h-12 w-12' />
                        </Link>
                        <Link href='#'>
                            <Dribbble className='shadow-lg shadow-red-950 border-2 border-white rounded-full p-2 h-12 w-12' />
                        </Link>
                        <Link href='#'>
                            <Github  className='shadow-lg shadow-red-950 border-2 border-white rounded-full p-2 h-12 w-12' />
                        </Link>
                    </div>
                    <div className='flex justify-evenly mt-6'>
                        <Link href='#'><Button className='bg-white text-black'>Download CV</Button></Link>
                        <Link href='#'><Button className='bg-white text-black'>Hire Me</Button></Link>
                    </div>
                </div>
            </div>
    )   
}


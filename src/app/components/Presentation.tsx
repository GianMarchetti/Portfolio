import { Button, Image } from "@nextui-org/react";
import { Github, Linkedin, Dribbble, FileText } from "lucide-react"
import NextImage from 'next/image'
import Link from "next/link"

export default function Presentation(){
    return(
            <section className="flex lg:flex-row-reverse justify-evenly items-center w-full flex-col sm:text-xs mt-4 h-screen sm:h-auto">
                <div className='md:w-2/3 w-1/3 xxl:w-1/4 md:mt-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-50 from-60% via-red-800 via-65% to-slate-50 to-70% dark:from-zinc-950 dark:via-red-950 dark:to-zinc-950 z-10 flex justify-center'>
                    <Image
                        as={NextImage} 
                        src='https://i.ibb.co/Lv9y4M1/me.png'
                        alt='personal image' 
                        width={600}
                        height={600}
                        className='flex items-center z-10 opacity-1 rounded-none'
                    />
                </div>
                <div className="sm:text-center text-start w-2/3 p-4 lg:w-1/3 xxl:w-1/4">

                    <h2 className="text-xl text-red-950 sm:text-sm font-semibold">Hello</h2>

                    <h1 className="text-6xl mt-1 mb-3 text-red-700 dark:text-white sm:text-4xl font-semibold">{"I'm "}<strong className="block">Gian</strong> a Front End Developer</h1>
                    
                    <h3 className="text-lg text-red-950 sm:text-sm font-semibold">Passionate about everything I do and looking to face new challenges</h3>

                    <div className='flex justify-between items-start mt-6'>
                        <Link href='https://www.linkedin.com/in/gian-marchetti-8713ba1b6/?locale=en_US'>
                            <Linkedin className='shadow-md shadow-zinc-800 border-2 border-black dark:border-white rounded-full p-2 h-12 w-12' />
                        </Link>
                        <Link href='https://dribbble.com/GLM8'>
                            <Dribbble className='shadow-md shadow-zinc-800 border-2 border-black dark:border-white rounded-full p-2 h-12 w-12' />
                        </Link>
                        <Link href='https://github.com/GianMarchetti'>
                            <Github  className='shadow-md shadow-zinc-800 border-2 border-black dark:border-white rounded-full p-2 h-12 w-12' />
                        </Link>
                    </div>

                    <div className='flex justify-between items-start mt-6'>
                        <Link href='https://drive.google.com/file/d/1U5UgFKoqpdPFcwBXyuJ32nwlhefcYOQf/view?usp=drive_link' className='rounded-xl border-2 border-white dark:shadow-md dark:shadow-zinc-800'>
                            <Button className='bg-black font-bold text-white shadow-md shadow-zinc-800 dark:shadow-none'>CV <FileText/> </Button>
                        </Link>
                        <Link href='https://linktr.ee/GianMarchetti' className='rounded-xl border-2 border-white dark:shadow-md dark:shadow-zinc-800'>
                            <Button className='bg-black font-bold text-white shadow-md shadow-zinc-800 dark:shadow-none'>Hire Me</Button>
                        </Link>
                    </div>
                    
                </div>
            </section>
    )   
}


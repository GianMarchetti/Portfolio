import { Button, Image } from "@nextui-org/react";
import { Github, Linkedin, Dribbble, FileText } from "lucide-react"
import NextImage from 'next/image'
import Link from "next/link"

export default function Presentation(){
    return(
            <section className="flex justify-center items-center w-full md:flex-col-reverse sm:text-xs mt-4">
                <div className='sm:w-full w-2/4 xxl:w-1/4 md:mt-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white from-50% via-red-800 via-55% to-white to-60% dark:from-black dark:via-red-950 dark:to-black z-10 flex justify-center'>
                    <Image
                        as={NextImage} 
                        src='https://i.ibb.co/Lv9y4M1/me.png'
                        alt='personal image' 
                        width={600}
                        height={600}
                        className='flex items-center z-10 opacity-1 rounded-none'
                    />
                </div>
                <div className="text-center p-4  md:w-full xxl:w-1/4">
                    <h2 className="text-xl text-red-950 sm:text-xs font-semibold">I am Gian Luca Marchetti</h2>
                    <h1 className="text-6xl mt-1 mb-3 text-red-700 dark:text-white sm:text-4xl font-bold">Front End Developer</h1>
                    <h3 className="text-lg text-red-950 sm:text-xs font-semibold">Passionate about everything I do and looking to face new challenges</h3>

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
                        <Link href='https://drive.google.com/file/d/1U5UgFKoqpdPFcwBXyuJ32nwlhefcYOQf/view?usp=drive_link' className='rounded-xl border-2 border-white dark:shadow-lg dark:shadow-red-950'>
                            <Button className='bg-black text-white shadow-lg shadow-red-950 dark:shadow-none'>CV <FileText/> </Button>
                        </Link>
                        <Link href='https://linktr.ee/GianMarchetti' className='rounded-xl border-2 border-white dark:shadow-lg dark:shadow-red-950'>
                            <Button className='bg-black text-white shadow-lg shadow-red-950 dark:shadow-none'>Hire Me</Button>
                        </Link>
                    </div>
                    
                </div>
            </section>
    )   
}


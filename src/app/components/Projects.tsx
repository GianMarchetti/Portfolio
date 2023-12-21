import { Button, Image } from "@nextui-org/react";
import { Github, Linkedin, Dribbble, Download } from "lucide-react"
import NextImage from 'next/image'
import Link from "next/link"

export default function Projects(){
    return(
            <section className="flex flex-col justify-center items-center p-6 w-full">
                <div className='w-full'>
                     <h1 className="text-5xl text-center mt-3 mb-6 text-black dark:text-white sm:text-2xl">Projects</h1>
                </div>
                {/* <div className="text-center p-2 w-2/4 md:w-full xl:w-1/4"> */}
                     <div className='flex justify-center w-full md:flex-col'>
                        <Link href='https://tecno-fm.vercel.app/'
                            className="h-fit md:w-full p-4">
                            <Image src="https://i.ibb.co/qmxRfff/logo.jpg" 
                                className='h-64 w-64 rounded-3xl p-2 shadow-md shadow-red-950 border-2 border-black dark:border-white' 
                                width={800} height={800} 
                                alt="Project TecnoFM" 
                            />
                        </Link>
                        <Link href='https://tecno-fm.vercel.app/'
                            className="h-fit md:w-full p-4">
                            <Image src="https://i.ibb.co/C5TcSXP/Logo-casa-bonita.jpg" 
                                className='h-64 w-64 rounded-3xl p-2 shadow-md shadow-red-950 border-2 border-black dark:border-white' 
                                width={800} height={800} 
                                alt="Project CasaBonita" 
                            />
                        </Link>
                        <Link href='https://tecno-fm.vercel.app/' 
                            className="h-fit md:w-full p-4">
                            <Image src="https://i.ibb.co/g6x9dcW/logo-Ind-Mamba.png" 
                                className='h-64 w-64 rounded-3xl p-2 shadow-md shadow-red-950 border-2 border-black dark:border-white' 
                                width={800} height={800}
                                alt="Project Ind Mamba" 
                            />
                        </Link>
                    </div>
                     {/* <div className='flex justify-center w-full md:flex-col'>
                        <Link href='https://tecno-fm.vercel.app/'
                            className="h-fit md:w-full p-4">
                            <Image src="https://i.ibb.co/qmxRfff/logo.jpg" 
                                className='h-48 w-56 rounded-3xl p-2 shadow-md shadow-red-950 border-2 border-black dark:border-white' 
                                width={800} height={800} 
                                alt="Project TecnoFM" 
                            />
                        </Link>
                        <Link href='https://tecno-fm.vercel.app/'
                            className="h-fit md:w-full p-4">
                            <Image src="https://i.ibb.co/C5TcSXP/Logo-casa-bonita.jpg" 
                                className='h-48 w-56 rounded-3xl p-2 shadow-md shadow-red-950 border-2 border-black dark:border-white' 
                                width={800} height={800} 
                                alt="Project CasaBonita" 
                            />
                        </Link>
                        <Link href='https://tecno-fm.vercel.app/' 
                            className="h-fit md:w-full p-4">
                            <Image src="https://i.ibb.co/g6x9dcW/logo-Ind-Mamba.png" 
                                className='h-48 w-56 rounded-3xl p-2 shadow-md shadow-red-950 border-2 border-black dark:border-white' 
                                width={800} height={800}
                                alt="Project Ind Mamba" 
                            />
                        </Link>
                    </div> */}
                {/* </div> */}
            </section>
    )   
}


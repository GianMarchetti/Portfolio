import { Button, Image } from "@nextui-org/react";
import { Github, Linkedin, Dribbble, Download } from "lucide-react"
import NextImage from 'next/image'
import Link from "next/link"
import '../styles/projects.css'

export default function Projects(){
    return(
            <section className="flex flex-col justify-center items-center p-6 w-full">
                <div className='w-full'>
                     <h2 className="text-5xl text-center mt-3 mb-6 text-black dark:text-white sm:text-2xl">Projects</h2>
                </div>
                     <div className='flex justify-center flex-wrap w-full md:flex-col md:items-center'>
                        
                        <article className="containerIM">
                            <Link href='https://github.com/GianMarchetti/TecnoFm' 
                            className="h-fit w-fit p-4" >
                                <Image src="https://i.ibb.co/qmxRfff/logo.jpg" 
                                    className='image h-64 w-64 rounded-3xl p-2 shadow-md shadow-red-950 border-2 border-black dark:border-white' 
                                    width={800} height={800} 
                                    alt="Project TecnoFM" 
                                    as={NextImage}
                                />
                            </Link>
                            <div className="p-2">
                                <h2 className="text-2xl">TecnoFM</h2>
                                <p>Next Js</p>
                            </div>
                            <div className="middle w-full">
                                <div className="bg-white dark:bg-black text-black dark:text-white text-medium p-10 h-full w-full rounded-3xl">
                                    <p className='font-bold text-3xl pt-4'>Tecno FM</p>
                                    <p className='pt-2 text-lg mb-4'>a cellphone, computer and tablet repair site.</p>
                                    <Link href='https://github.com/GianMarchetti/TecnoFm' className="bg-green-800 p-2 mt-4 opacity-100">Source Code</Link>
                                </div>
                            </div>
                        </article> 
                        
                        <article className="containerIM">
                            <Link href='https://github.com/GianMarchetti/casabonita-app/'
                            className="h-fit w-fit p-4">
                                <Image src="https://i.ibb.co/C5TcSXP/Logo-casa-bonita.jpg" 
                                    className='image h-64 w-64 rounded-3xl p-2 shadow-md shadow-red-950 border-2 border-black dark:border-white' 
                                    width={800} height={800} 
                                    alt="Project CasaBonita" 
                                />
                            </Link>
                            <div className="p-2">
                                <h2 className="text-2xl">CasaBonita</h2>
                                <p>Next Js</p>
                            </div>
                            <div className="middle w-full">
                                    <div className="bg-white dark:bg-black text-black dark:text-white text-medium p-10 h-full w-full rounded-3xl">
                                        <p className='font-bold text-3xl pt-4'>CasaBonita</p>
                                        <p className='pt-2 text-lg mb-4'>an interior decoration site that sells products and services.</p>
                                        <Link href='https://github.com/GianMarchetti/casabonita-app' className="bg-green-800 p-2 mt-4">Source Code</Link>
                                    </div>
                                </div>
                        </article>

                        <article className="containerIM">
                            <Link href='https://github.com/GianMarchetti/Proyecto-Coder' 
                            className="h-fit md:w-full p-4">
                                <Image src="https://i.ibb.co/g6x9dcW/logo-Ind-Mamba.png" 
                                    className='image h-64 w-64 rounded-3xl p-2 shadow-md shadow-red-950 border-2 border-black dark:border-white' 
                                    width={800} height={800}
                                    alt="Project Ind Mamba" 
                                />
                            </Link>
                            <div className="p-2">
                                <h2 className="text-2xl">Indumentaria Mamba</h2>
                                <p>Javascript</p>
                            </div>
                            <div className="middle w-full">
                                <div className="bg-white dark:bg-black text-black dark:text-white text-medium p-10 h-full w-full rounded-3xl">
                                    <p className='font-bold text-3xl pt-4'>IND MAMBA</p>
                                    <p className='pt-2 text-lg mb-4'>a site selling basketball shoes and clothing.</p>
                                    <Link href='https://github.com/GianMarchetti/Proyecto-Coder' className="bg-green-800 p-2 mt-4">Source Code</Link>
                                </div>
                            </div>
                        </article>

                        {/* <article className="containerIM">
                            <Link href='https://github.com/GianMarchetti/TecnoFm' 
                            className="h-fit w-fit p-4" >
                                <Image src="https://i.ibb.co/qmxRfff/logo.jpg" 
                                    className='image h-64 w-64 rounded-3xl p-2 shadow-md shadow-red-950 border-2 border-black dark:border-white' 
                                    width={800} height={800} 
                                    alt="Project TecnoFM" 
                                    as={NextImage}
                                />
                            </Link>
                            <div className="p-2">
                                <h2 className="text-2xl">Title</h2>
                                <p>Next Js</p>
                            </div>
                            <div className="middle w-full">
                                <div className="bg-black text-white text-medium p-10 h-full w-full rounded-3xl">
                                    <p className='font-bold text-3xl pt-4'>Tecno FM</p>
                                    <p className='pt-2 text-lg mb-4'>a cellphone, computer and tablet repair site.</p>
                                    <Link href='https://github.com/GianMarchetti/TecnoFm' className="bg-green-800 p-2 mt-4 opacity-100">Source Code</Link>
                                </div>
                            </div>
                        </article> 
                        
                        <article className="containerIM">
                            <Link href='https://github.com/GianMarchetti/casabonita-app/'
                            className="h-fit w-fit p-4">
                                <Image src="https://i.ibb.co/C5TcSXP/Logo-casa-bonita.jpg" 
                                    className='image h-64 w-64 rounded-3xl p-2 shadow-md shadow-red-950 border-2 border-black dark:border-white' 
                                    width={800} height={800} 
                                    alt="Project CasaBonita" 
                                />
                            </Link>
                            <div className="p-2">
                                <h2 className="text-2xl">Title</h2>
                                <p>Next Js</p>
                            </div>
                            <div className="middle w-full">
                                    <div className="bg-black text-white text-medium p-10 h-full w-full rounded-3xl">
                                        <p className='font-bold text-3xl pt-4'>CasaBonita</p>
                                        <p className='pt-2 text-lg mb-4'>an interior decoration site that sells products and services.</p>
                                        <Link href='https://github.com/GianMarchetti/casabonita-app' className="bg-green-800 p-2 mt-4">Source Code</Link>
                                    </div>
                                </div>
                        </article>

                        <article className="containerIM">
                            <Link href='https://github.com/GianMarchetti/Proyecto-Coder' 
                            className="h-fit md:w-full p-4">
                                <Image src="https://i.ibb.co/g6x9dcW/logo-Ind-Mamba.png" 
                                    className='image h-64 w-64 rounded-3xl p-2 shadow-md shadow-red-950 border-2 border-black dark:border-white' 
                                    width={800} height={800}
                                    alt="Project Ind Mamba" 
                                />
                            </Link>
                            <div className="p-2">
                                <h2 className="text-2xl">Title</h2>
                                <p>Next Js</p>
                            </div>
                            <div className="middle w-full">
                                <div className="bg-black text-white text-medium p-10 h-full w-full rounded-3xl">
                                    <p className='font-bold text-3xl pt-4'>IND MAMBA</p>
                                    <p className='pt-2 text-lg mb-4'>a site selling basketball shoes and clothing.</p>
                                    <Link href='https://github.com/GianMarchetti/Proyecto-Coder' className="bg-green-800 p-2 mt-4">Source Code</Link>
                                </div>
                            </div>
                        </article> */}

                </div>
            </section>
    )   
}


'use client'
import styles from './home.module.css'
import { Image } from "@nextui-org/react";
import NextImage from 'next/image'
import Link from "next/link"
import Presentation from './components/Presentation';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';


export default function App() {
    return (
        <main>
            <div>
                <Presentation />
            </div>
            <div className='bg-red-800 dark:bg-red-900'>
                <WorkExperience />
            </div>
            <div>
                <Projects />
            </div>
            {/* <div className='bg-red-800 dark:bg-red-900'>

            </div> */}
            {/* <div>

            </div> */}
            {/* <div className='bg-red-800 dark:bg-red-900'>

            </div> */}
        </main>
        ); 
}


'use client'
import styles from './styles/home.module.css'
import { Image } from "@nextui-org/react";
import NextImage from 'next/image'
import Link from "next/link"
import Presentation from './components/Presentation';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';


export default function App() {
    return (
        <main>
            <div>
                <Presentation />
            </div>
            <div id='work'>
                <Projects />
            </div>
            <div id='exp'>
                <WorkExperience />
            </div>
            <div id='skills'>
                <Skills />
            </div>
            <div id='contact'>
                <Contact />
            </div>
        </main>
        ); 
}


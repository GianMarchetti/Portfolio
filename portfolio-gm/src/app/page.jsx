'use client'
import styles from './home.module.css'
import { Image } from "@nextui-org/react";
import NextImage from 'next/image'
import Link from "next/link"
import Presentation from './components/Presentation';


export default function App() {
    return (
        <main>
            <Presentation />
        </main>
        ); 
}


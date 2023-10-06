'use client'
import { Image } from "@nextui-org/react";
import Link from "next/link"
import me from '../app/assets/imgs/me.png'
import styles from './home.module.css'
import NextImage from 'next/image'


export default function App() {
    return (
        <main>
            <div className={styles.About}>
                <div className={styles.fondo}>
                    <Image as={NextImage} src={me} width={600} height={600} alt='personal image' />
                </div>
                <div>
                <h1>hola</h1>
                </div>
            </div>
        </main>
        ); 
}


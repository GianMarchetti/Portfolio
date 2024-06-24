import { Button, Image } from "@nextui-org/react";
import NextImage from 'next/image'
import '../styles/contact.css'
import axios from 'axios';
import React, { useState } from 'react';
import { MailIcon, Linkedin, PhoneIcon,  } from "lucide-react"
import Link from "next/link";

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = 'https://formspree.io/f/xpzvqqav';

        try {
        await axios.post(endpoint, {
            name,
            email,
            message,
        });

        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
        } catch (error) {
        console.error('Error sending message:', error);
        alert('Error sending message. Please try again later.');
        }
    };

    return(
    <>

        <section className="w-full flex flex-col items-center p-8" id="contact">
            <h2 className="text-3xl font-bold relative mb-4 uppercase border-b-5 border-red-700 dark:border-red-900">Reach me out via:</h2>
            <div className="flex flex-col items-start my-4 p-2">
                <div className="flex items-center justify-center gap-4 my-2">
                    <MailIcon className='shadow-inner shadow-zinc-800 rounded-2xl p-2 h-12 w-12' />
                    <span>gian11marchetti@gmail.com</span>
                </div>
                <Link className="flex items-center justify-center gap-4 my-2" href='https://www.linkedin.com/in/gian-marchetti-8713ba1b6/'>
                    <Linkedin className='shadow-inner shadow-zinc-800 rounded-2xl p-2 h-12 w-12' />
                    <span>@Gian-Marchetti</span>
                </Link>
            </div>
            <p className="text-xl font-semibold">or</p>
            <h3 className="text-2xl font-semibold text-center">Contact me by filling out this form!</h3>
            <form onSubmit={handleSubmit} className="form w-full justify-between items-center p-8">
                <input type="hidden" name="contact_number"/>
                <div className="flex justify-between items-center md:flex-col gap-2 w-full mb-2">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="bg-zinc-800 dark:bg-slate-200 h-10 mb-2 text-white dark:text-black rounded-md p-4 w-full sm:p-1 " />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-zinc-800 dark:bg-slate-200 h-10 mb-2 text-white dark:text-black rounded-md p-4 w-full sm:p-1 " />
                </div>
                <textarea aria-label="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="bg-zinc-800 dark:bg-slate-200 h-32 text-white dark:text-black rounded-md p-4 sm:p-1 w-full"></textarea>
                <input type="submit" value="Send" className="bg-zinc-800 dark:bg-slate-200 text-white dark:text-black rounded-md mt-4 p-2 sm:p-1 w-full" />
            </form>

        </section>
    </>
    )
}


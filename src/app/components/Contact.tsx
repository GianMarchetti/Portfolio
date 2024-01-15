import { Button, Image } from "@nextui-org/react";
import NextImage from 'next/image'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import '../styles/contact.css'


export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_w8yi5xq', 'contact_form', form.current, 'og-5Cvm6buO7hbbhM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        }); 
    }

    return(
    <>
        <section className="w-full flex flex-col items-center" id="contact">
            <h2 className="text-2xl mt-2 mb-8">Contact Me!</h2>
            <form id="contact-form" className="form">
                <input type="hidden" name="contact_number"/>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <input type="text" name="user_name" placeholder="Name" className="bg-black dark:bg-white h-10 mb-2 text-white dark:text-black rounded-md p-2" />
                    </div>
                    <div className="flex flex-col">
                        <input type="email" name="user_email" placeholder="Email" className="bg-black dark:bg-white h-10 mb-2 text-white dark:text-black rounded-md p-2" />
                    </div>
                </div>
                <textarea aria-label="text" name="message" placeholder="Message" className="bg-black dark:bg-white h-32 text-white dark:text-black rounded-md p-2"></textarea>
                <input type="submit" value="Send" className="bg-black dark:bg-white text-white dark:text-black rounded-md p-2 mt-2" />
            </form>
        </section>
    </>
    )
}

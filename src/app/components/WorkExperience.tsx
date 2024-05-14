import '../styles/work.style.css'

import { Button, Image } from "@nextui-org/react";
import { Github, Linkedin, Dribbble } from "lucide-react"
import NextImage from 'next/image'
import Link from "next/link"

export default function WorkExperience(){
    return(
        <section className="p-8 w-full flex justify-center text-left text-black dark:text-white">
        <div className="container border-2 p-4 sm:p-2">
            <div className="flex md:flex-col">

                <div className="col-lg-6 col-12 border-r dark:border-white p-4 w-2/4 md:w-full md:border-b md:border-r-0 sm:text-xs sm:p-0 sm:mb-2">
                  <h2 className="mb-4 text-3xl font-bold">Work Experience</h2>

                    <div className="timeline">
                        <div className="timelineWrapper">
                             <div className="timelineYR">
                                  <span>Present</span>
                             </div>
                             <div className="timelineInfo">
                                  <h3><span>Tutor Web Development</span><small>Coderhouse</small></h3>
                                  <p>In my role as a tutor, I play a pivotal role in guiding individuals through the intricacies of web development.</p>
                             </div>
                        </div>

                        <div className="timelineWrapper">
                            <div className="timelineYR">
                                <span>Present</span>
                            </div>
                            <div className="timelineInfo">
                                <h3><span>Freelance Front End Developer</span><small>Freelance</small></h3>
                                <p>My goal is to create websites with designs that are not only innovative, but also very interactive and easy to use.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-lg-6 col-12 p-4 w-2/4 md:w-full sm:text-xs sm:p-0">
                  <h2 className="mb-4 mobile-mt-2 text-3xl font-bold">Educations</h2>

                    <div className="timeline">
                    
                        <div className="timelineWrapper">
                            <div className="timelineYR">
                                <span>2021</span>
                            </div>
                            <div className="timelineInfo">
                                <h3><span>Front End Developer</span><small>Coderhouse</small></h3>
                                <p>Career composed of 3 courses, these are Web Development, JavaScript, React Js. I learned Html5, Css3, Scss, Git, GitHub, Bootstrap5 and Seo</p>
                            </div>
                        </div>

                        <div className="timelineWrapper">
                            <div className="timelineYR">
                                <span>2022</span>
                            </div>
                            <div className="timelineInfo">
                                <h3><span>Front End</span><small>Autonomous</small></h3>
                                <p>Complementary technologies courses that help me improve as a developer. Like Next JS, TailwindCSS, Sanity and learning more.</p>
                            </div>
                        </div>

                        {/* <div className="timelineWrapper">
                            <div className="timelineYR">
                                <span>2023</span>
                            </div>
                            <div className="timelineInfo">
                                <h3><span>WordPress</span><small>Udemy</small></h3>
                                <p>Course in which I learned to carry out the management and design of creative and high impact content and to use the main tools of the program, to carry out the content management in a professional and efficient way.</p>
                            </div>
                        </div> */}

                        {/* <div className="timelineWrapper">
                            <div className="timelineYR">
                                <span>2024</span>
                            </div>
                            <div className="timelineInfo">
                                <h3><span>Back End Developer</span><small>Autonomous</small></h3>
                                <p>Node.js, MongoDB, Server-side JavaScript, SQL and NoSQL course</p>
                            </div>
                        </div> */}

                    </div>
                </div>
                
            </div>
        </div>
    </section>
    )
}
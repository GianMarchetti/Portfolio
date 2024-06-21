import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faGit, faGithub, faSass, } from '@fortawesome/free-brands-svg-icons'
import { Figma } from 'lucide-react'

const icons = [faHtml5, faCss3Alt, faJs, faReact, faGit, faGithub, faBootstrap, faSass,]

export default function Skills() {
    return(
        <>
            <section className='flex flex-col justify-center items-center p-8 mb-20 sm:mb-0 h-fit'>
                <h2 className="text-3xl font-bold">Skills</h2>
                <div className='h-fit w-full flex flex-wrap items-center justify-center md:h-fit gap-4 p-8'>
                    {icons.map((icon, index) => {
                        return <FontAwesomeIcon key={index} icon={icon} size='3x' className='mx-2 p-4 rounded-lg shadow-inner shadow-zinc-900' />
                        })}
                    <Figma className='mx-2 p-4 rounded-lg shadow-inner shadow-zinc-900 h-20 w-20' />
                </div>
            </section>
        </>
    )
}


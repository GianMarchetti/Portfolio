import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faGit, faGithub, faSass, } from '@fortawesome/free-brands-svg-icons'
import { Figma } from 'lucide-react'

const icons = [faHtml5, faCss3Alt, faJs, faReact, faGit, faGithub, faBootstrap, faSass,]

export default function Skills() {
    return(
        <>
            <section className='flex flex-col justify-center items-center p-8'>
                <h2 className="text-3xl font-bold">Skills</h2>
                <div className='h-24 w-full flex flex-wrap items-center justify-center md:h-fit gap-4 p-8'>
                    {icons.map((icon, index) => {
                        return <FontAwesomeIcon key={index} icon={icon} size='3x' className='ml-2 mr-2' />
                        })}
                    <Figma className='ml-2 mr-2 h-11 w-11' />
                </div>
            </section>
        </>
    )
}


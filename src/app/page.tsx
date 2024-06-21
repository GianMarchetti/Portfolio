'use client'
import Presentation from './components/Presentation';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';


export default function App() {
    return (
        <main className='bg-slate-50 dark:bg-zinc-950'>
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


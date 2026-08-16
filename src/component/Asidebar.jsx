import React from 'react'
import { NavLink } from 'react-router-dom'


const navLinkClass = ({ isActive }) =>{
    return (
        `block px-3 py-1 rounded-lg font-medium text-[15px] 
        ${isActive 
            ? "bg-gray-200 dark:bg-zinc-800"
            : "hover:bg-gray-200 dark:hover:bg-zinc-800"
        }`
    )
}
    

function Asidebar() {
    return (
        <aside className='pl-6 px-4 py-10 h-full border-r border-gray-300 dark:border-zinc-800'>
            <ul className='flex flex-col gap-3'>
                <li className='font-semibold text-xl px-3 py-1 rounded-lg m-1'>Sections</li>

                <li><NavLink to="/" className={navLinkClass}>Introduction</NavLink></li>
                {/* <li><NavLink to="/about" className={navLinkClass}>About Me</NavLink></li> */}
                <li><NavLink to="/projects" className={navLinkClass}>Projects</NavLink></li>
                <li><NavLink to="/skills-tools" className={navLinkClass}>Skills & Tools</NavLink></li>
                <li><NavLink to="/experience" className={navLinkClass}>Experience</NavLink></li>
                <li><NavLink to="/education" className={navLinkClass}>Education</NavLink></li>
                <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            </ul>
        </aside>
    )
}

export default Asidebar

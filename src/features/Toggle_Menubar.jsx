import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Toggle_Menubar() {

    const [toggle, setToggle] = useState(false);
    
    const navLinkClass = ({ isActive }) => {
        return (
            `block px-3 py-1 rounded-lg font-medium text-[15px] 
        ${isActive
                ? "bg-gray-200 dark:bg-zinc-800"
                : "hover:bg-gray-200 dark:hover:bg-zinc-800"
            }`
        )
    }

    return (

        <>
            <div className='block md:hidden'>
                {
                    toggle ?
                        <div className='fixed top-0 px-5 py-6 
                            h-screen w-[85vw] sm:w-[60vw] md:w-[50vw] min-w-[240px] max-w-[420px]
                            border border-gray-300 dark:border-zinc-800 
                            bg-white dark:bg-black'>

                            <div className='flex items-center justify-between border-b border-gray-300 dark:border-zinc-800 '>
                                <h1 className='text-xl font-semibold'>Sections</h1>
                                <span onClick={() => setToggle(false)}
                                    className='px-3 py-3 rounded-full hover:bg-[#F5F4F4] cursor-pointer dark:hover:bg-[#1b1a1a]'>
                                    <X />
                                </span>
                            </div>

                            <ul className='mt-5 flex flex-col gap-5'>
                                <li><NavLink to="/" className={navLinkClass} onClick={()=>setToggle(false)}>Introduction</NavLink></li>
                                <li><NavLink to="/projects" className={navLinkClass} onClick={()=>setToggle(false)}>Projects</NavLink></li>
                                <li><NavLink to="/skills-tools" className={navLinkClass} onClick={()=>setToggle(false)}>Skills & Tools</NavLink></li>
                                <li><NavLink to="/experience" className={navLinkClass} onClick={()=>setToggle(false)}>Experience</NavLink></li>
                                <li><NavLink to="/education" className={navLinkClass} onClick={()=>setToggle(false)}>Education</NavLink></li>
                                <li><NavLink to="/contact" className={navLinkClass} onClick={()=>setToggle(false)}>Contact</NavLink></li>
                            </ul>

                        </div> :

                        <div className='px-3 py-3 hover:bg-[#F5F4F4] cursor-pointer dark:hover:bg-[#1b1a1a]'>
                            <Menu onClick={() => setToggle(true)} />
                        </div>

                }
            </div>

        </>

    )
}

export default Toggle_Menubar

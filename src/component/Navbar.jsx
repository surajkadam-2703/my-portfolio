import React, { useEffect, useState } from 'react'
import { Menu, Moon, MoveUpLeft, MoveUpRight, SquareArrowOutUpRight, Sun } from 'lucide-react';
import { setDigitalClockTime } from '../features/setDigitalClockTime';
// import ToggleDarkMode from '../features/toggleDarkMode';
import ToggleDarkMode from '../features/ToggleDarkMode';
import { NavLink } from 'react-router-dom';
import MusicPlayer from '../features/MusicPlayer';

function Navbar() {

    // setting time
    const [time, setTime] = useState(setDigitalClockTime());
    useEffect(() => {
        const interval = setInterval(() => setTime(setDigitalClockTime()), 1000);

        return (() => clearInterval(interval));
    }, []);


    return (
        <>
            <nav className='fixed top-0 left-0 z-50 w-full bg-white dark:bg-black dark:text-white border-b border-gray-300 dark:border-zinc-800 md:px-5 lg:px-7 py-1 text-[15px] flex justify-between items-center'>
                <ul className='hidden p-1 md:flex gap-8 items-center'>
                    <li>
                        <NavLink to={"/"} className='flex gap-2 items-center cursor-pointer'>
                            <MoveUpRight size={20} className='font-extralight' />
                            <span className='hidden lg:block text-lg font-bold'>suraj.is-dev</span>
                        </NavLink>
                    </li>
                    <li className='cursor-pointer font-medium'>
                        <NavLink to={"/"} className={({ isActive }) => isActive ? " opacity-100" : "opacity-50"}>Home</NavLink>
                    </li>
                    <li className='opacity-50 hover:opacity-100 cursor-pointer'>
                        <div className='flex gap-2 items-center group'>
                            <a href="https://www.linkedin.com/in/surajkadamofficial"
                                target="_blank" rel="noopener noreferrer"
                                className='font-medium'>
                                LinkedIn
                            </a>
                            <SquareArrowOutUpRight
                                size={12}
                                className='transition-transform duration-300 
                                group-hover:-translate-y-0.5 group-hover:translate-x-0.5'/>
                        </div>
                    </li>
                    <li className='opacity-50 hover:opacity-100 cursor-pointer'>
                        <div className='flex gap-2 items-center group'>
                            <a href='https://drive.google.com/file/d/1N66qn4PEq80JvYlhRkSGiCtE3mulSlRQ/view?usp=sharing'
                                target="_blank" rel="noopener noreferrer"
                                className='font-medium'>Resume
                            </a>
                            <SquareArrowOutUpRight
                                size={12}
                                className='transition-transform duration-300 
                                group-hover:-translate-y-0.5 group-hover:translate-x-0.5'/>
                        </div>
                    </li>
                </ul>
                {/* Mobile responsive navbar */}
                <ul className='block md:hidden cursor-pointer px-5 hover:bg-[#F5F4F4] '
                >
                    <Menu />
                </ul>

                <ul className=' p-1 flex gap-4 items-center'>
                    <li>

                        <input
                            type="text"
                            placeholder="Search sections"
                            className="hidden md:block md:w-30 lg:w-60 h-9 px-4 rounded-xl border border-gray-300
                            bg-white text-gray-800 placeholder:text-gray-400
                            outline-none hover:border-gray-400
                            focus:border-black focus:ring-2 focus:ring-gray-200 
                            dark:bg-zinc-900 dark:border-zinc-700
                            dark:text-white dark:placeholder:text-zinc-400 dark:hover:border-zinc-500
                            dark:focus:border-white dark:focus:ring-zinc-700"/>
                    </li>
                    <li className='dark:text-white dark:bg-[#1b1a1a] text-sm bg-[#F5F4F4] px-4 py-1 rounded-2xl'>{time}</li>

                    <li className='flex gap-2 justify-center items-center'>

                        {/* Music Button */}
                        <MusicPlayer />

                        {/* DarkMode functionality */}
                        <ToggleDarkMode></ToggleDarkMode>

                        {/* GitHub Link */}
                        <a href="https://github.com/surajkadam-2703" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                            className="cursor-pointer rounded-full px-2 py-2 hover:bg-[#F5F4F4] dark:hover:bg-[#1b1a1a]">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"
                                className="h-6 w-6 rounded-full p-[1px] transition-transform duration-300 hover:scale-105 dark:bg-white"/>
                        </a>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Navbar;

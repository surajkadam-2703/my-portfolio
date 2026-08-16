import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import hireMe from "../assets/hireMe.jpg";


function Experience() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight">Experience</h1>
                    <header className=''>
                        <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight text-gray-500 dark:text-gray-400">You need it to get the job, but the job’s what gives it! 😵‍💫</h1>
                        <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight text-gray-500 dark:text-gray-400">So, don't think too much. Just...</h1>
                    </header>
                </div>

                <div className="border border-zinc-200 overflow-hidden dark:border-zinc-800">
                    <img
                        src={hireMe}
                        alt="Hire me"
                        className="w-full h-full object-cover"
                    />
                </div>


            </section>


            {/* Links */}
            <div className='flex mt-10 lg:mt-20 justify-between'>
                <NavLink to={"/skills-tools"} className='text-sm md:text-[15px] xl:text-[16px] flex gap-2 items-center font-medium px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:dark:bg-zinc-800'> <ChevronLeft size={21} /> Skills & Tools</NavLink>
                <NavLink to={"/education"} className='text-sm md:text-[15px] xl:text-[16px] flex gap-2 items-center font-medium px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:dark:bg-zinc-800'>Education <ChevronRight size={21} /></NavLink>
            </div>
        </>
    )
}

export default Experience

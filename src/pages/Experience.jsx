import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import hireMe from "../assets/hireMe.jpg";
import { certificationArr } from '../data/certificationArr';


function Experience() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <>
            {/* Certification */}
            <section className="min-h-screen flex flex-col gap-6 sm:gap-8 lg:gap-10">
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight">Experience</h1>
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight text-gray-500 dark:text-gray-400">Knowledge is powerful. A certificate makes it official! 🏆</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {certificationArr.map((certification, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800"
                        >
                            <img
                                src={certification.image}
                                alt={certification.name}
                                className="block w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02] select-none"
                            />
                        </div>
                    ))}
                </div>


                <div className="flex flex-col gap-2">
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight text-gray-500 dark:text-gray-400">But then there's Experience...</h1>
                    <p className='mt-1 text-justify text-[13px] md:text-[15px] xl:text-[17px]'>You need it to get the job, but the job’s what gives it! 😵‍💫 So, don't think too much. Just...</p>
                </div>

                <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
                    <img
                        src={hireMe}
                        alt="Hire me"
                        className="block w-full h-auto object-cover"
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

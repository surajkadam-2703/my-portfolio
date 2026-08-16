import React, { useEffect } from 'react'
import projectsArr from '../data/projectsArr'
import { NavLink, useNavigate } from 'react-router-dom';
import { RiLiveFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <section className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight">Projects</h1>
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight text-gray-500 dark:text-gray-400">A lot of ideas, but some are still under construction!</h1>
                </div>

                <div className="grid gap-5 grid-cols-1 sm:gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {projectsArr.map((project, index) => {
                        return (
                            <div
                                key={index}
                                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                            >
                                {/* Project Image */}
                                <div className="h-48 w-full overflow-hidden sm:h-52 md:h-56">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Project Content */}
                                <div className="p-4">

                                    {/* Project Title */}
                                    <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl dark:text-white">
                                        {project.title}
                                    </h2>

                                    {/* Project Overview */}
                                    <p className="mt-2 text-xs leading-5 text-gray-500 sm:mt-3 sm:text-sm sm:leading-6 md:text-base dark:text-gray-400">
                                        {project.overview}
                                    </p>

                                    {/* Learn More */}
                                    <div className="mt-4 flex flex-wrap items-center gap-3 sm:mt-5 md:mt-6">
                                        {/* Live Demo */}
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-red-700 sm:px-5 sm:py-2.5 sm:text-sm"
                                        >
                                            <RiLiveFill className="text-sm sm:text-base" />
                                            <span>Live Demo</span>
                                        </a>

                                        {/* GitHub */}
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-xs font-medium text-gray-800 transition-all duration-300 hover:bg-gray-200 sm:px-5 sm:py-2.5 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                                        >
                                            <FaGithub className="text-sm sm:text-base" />
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>


            {/* Links */}
            <div className='flex mt-10 lg:mt-20 justify-between'>
                <NavLink to={"/"} className='text-sm md:text-[15px] xl:text-[16px] flex gap-2 items-center font-medium px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:dark:bg-zinc-800'> <ChevronLeft size={21} /> Introduction</NavLink>
                <NavLink to={"/skills-tools"} className='text-sm md:text-[15px] xl:text-[16px] flex gap-2 items-center font-medium px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:dark:bg-zinc-800'>Skills & Tools <ChevronRight size={21} /></NavLink>
            </div>
        </>
    )
}

export default Projects

import React, { useEffect } from 'react'
import skills_ToolsArr from '../data/skills_ToolsArr';
import { NavLink } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function SkillsTools() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <section className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight">Skills & Tools</h1>
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight text-gray-500 dark:text-gray-400">Learned by coding all night and debugging all day!</h1>

                    <p className='mt-1 text-justify text-[13px] md:text-[15px] xl:text-[17px]'>As a web developer, I specialize in building responsive and scalable web applications using modern technologies such as React.js, JavaScript, and Tailwind CSS. I’m also expanding my expertise in backend technologies and development practices to build efficient, maintainable, and robust web solutions.</p>
                </div>



                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                    {skills_ToolsArr.map((item, index) => {
                        return (
                            <article
                                key={index}
                                className="
                    group relative flex h-32 cursor-pointer flex-col
                    items-center justify-center gap-3 overflow-hidden
                    rounded-2xl border border-zinc-200
                    bg-white/70 p-5
                    shadow-sm backdrop-blur-sm
                    transition-all duration-300

                    hover:-translate-y-2
                    hover:border-zinc-300
                    hover:bg-white
                    hover:shadow-xl
                    hover:shadow-zinc-300/30

                    dark:border-zinc-800
                    dark:bg-zinc-900/70
                    dark:hover:border-zinc-700
                    dark:hover:bg-zinc-900
                    dark:hover:shadow-black/30
                "
                            >
                                {/* Background Glow */}
                                <div
                                    className="
                        pointer-events-none absolute -right-8 -top-8
                        h-20 w-20 rounded-full
                        bg-zinc-200/40 blur-2xl
                        transition-all duration-500
                        group-hover:scale-150
                        dark:bg-zinc-700/20
                    "
                                />

                                {/* Logo Container */}
                                <div
                                    className="
                        relative flex h-14 w-14 items-center justify-center
                        rounded-xl border border-zinc-200
                        bg-zinc-50 shadow-sm
                        transition-all duration-300

                        group-hover:scale-110
                        group-hover:-translate-y-1
                        group-hover:shadow-md

                        dark:border-zinc-800
                        dark:bg-zinc-800/80
                    "
                                >
                                    <img
                                        src={item.image}
                                        alt={`${item.name} logo`}
                                        className="
                            h-9 w-9 object-contain
                            transition-transform duration-300
                            group-hover:scale-110
                        "
                                    />
                                </div>

                                {/* Skill Name */}
                                <span
                                    className="
                        relative text-center text-sm font-semibold
                        text-zinc-700
                        transition-colors duration-300

                        group-hover:text-zinc-950

                        dark:text-zinc-300
                        dark:group-hover:text-white
                    "
                                >
                                    {item.name}
                                </span>

                                {/* Bottom Accent */}
                                <div
                                    className="
                        absolute bottom-0 left-1/2 h-0.5 w-0
                        -translate-x-1/2
                        rounded-full bg-zinc-900
                        transition-all duration-300
                        group-hover:w-12

                        dark:bg-white
                    "
                                />
                            </article>
                        );
                    })}
                </div>
            </section>

            {/* Links */}
            <div className='flex mt-10 lg:mt-20 justify-between'>
                <NavLink to={"/projects"} className='text-sm md:text-[15px] xl:text-[16px] flex gap-2 items-center font-medium px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:dark:bg-zinc-800'> <ChevronLeft size={21} /> Projects</NavLink>
                <NavLink to={"/experience"} className='text-sm md:text-[15px] xl:text-[16px] flex gap-2 items-center font-medium px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:dark:bg-zinc-800'>Experience <ChevronRight size={21} /></NavLink>
            </div>
        </>
    )
}

export default SkillsTools;

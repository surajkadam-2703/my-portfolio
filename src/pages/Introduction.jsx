import React, { useEffect } from 'react'
import Asidebar from '../component/Asidebar'
import { ReactTyped } from 'react-typed'
import { ChevronRight, Mail, SquareArrowOutUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import my_profile from '../assets/my_profile.jpeg';

function Introduction() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            {/* <div className='flex gap-10 m-5 md:flex-row'> */}
            <div className='flex flex-col-reverse gap-4 lg:flex-row'>

                {/* My Information */}
                <div className='lg:flex-1 flex flex-col gap-2'>
                    <p className="text-[11px] md:text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                        Welcome to my portfolio
                    </p>
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight">
                        Hello, I'm{" "}
                        <span className="text-[#B91C1C] dark:text-[#F87171]">
                            Suraj Kadam
                        </span>
                    </h1>

                    <div className="text-[16px] md:text-xl font-semibold text-gray-700 dark:text-gray-300">
                        I'm a{" "}
                        <span className="text-[#B91C1C] dark:text-[#F87171]">
                            <ReactTyped
                                strings={[
                                    "Developer.",
                                    "Programmer..",
                                    "Coder...",
                                ]}
                                typeSpeed={60}
                                backSpeed={40}
                                backDelay={1200}
                                loop
                            />
                        </span>
                    </div>


                    <p className='text-justify text-[13px] md:text-[15px] xl:text-[17px] mt-3'>Highly motivated and detail-oriented B.Sc. Information Technology graduate with a strong foundation in HTML5, CSS3, JavaScript, React, SQL, Java and JDBC. Certified as a Full Stack Java Developer from NetTech India, with a passion for building responsive, user-friendly web applications. A quick learner with strong problem-solving skills, eager to contribute to innovative software projects while continuously enhancing expertise in full-stack development.</p>

                    {/* buttons */}
                    <section className="mt-3 md:mt-5 flex items-center gap-5">
                        <a href='https://drive.google.com/file/d/1N66qn4PEq80JvYlhRkSGiCtE3mulSlRQ/view?usp=sharing'
                            target="_blank" rel="noopener noreferrer"
                            className="text-sm md:text-[15px] xl:text-[16px] group cursor-pointer flex items-center gap-2 text-white bg-[#9509e6] px-2.5 py-1.5 rounded-lg">
                            Get Resume
                            <SquareArrowOutUpRight
                                size={12}
                                className="transition-transform duration-300
                            group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </a>

                        <a href="mailto:surajkadam27.work@gmail.com"
                            className="text-sm md:text-[15px] xl:text-[16px] flex items-center gap-1.5 cursor-pointer px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800">
                            <Mail size={17} />
                            Send Mail
                        </a>
                    </section>

                </div>


                {/* Image */}
                <div className="lg:flex-1 flex items-center justify-center">
                    <div className="w-[40vh] h-[50vh] md:w-72 md:h-82 lg:w-80 lg:h-90 xl:w-120 xl:h-130 rounded-full border border-zinc-300 overflow-hidden">
                        <img
                            src={my_profile}
                            alt="Suraj Kadam"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>

            </div>


            {/* Links */}
            <div className='flex mt-10 lg:mt-20 justify-end'>
                <NavLink to={"/projects"} className='text-sm md:text-[15px] xl:text-[16px] flex gap-2 items-center font-medium px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:dark:bg-zinc-800'>Projects <ChevronRight size={21} /></NavLink>
            </div>
        </>
    )
}

export default Introduction

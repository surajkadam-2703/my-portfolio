import { BookOpen, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Education() {

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    return (
        <>
            <section className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight">Education</h1>
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight text-gray-500 dark:text-gray-400">I learned a lot, but the real learning happens in the code editor!</h1>

                    <article className='flex flex-col gap-2 mt-2'>
                        <p className='text-justify text-[13px] md:text-[15px] xl:text-[17px]'>
                            Education has been an important part of my journey into the tech world. I pursued a Bachelor of Science in Information Technology (B.Sc. IT) at D. D. Vispute College of Science, Commerce & Management, where I built a strong foundation in computer science, programming, and software development.
                        </p>import Education from './Education';


                        <p className='text-justify text-[13px] md:text-[15px] xl:text-[17px]'>
                            My academic journey has been complemented by hands-on projects and practical coursework, enabling me to develop technical skills and gain a deeper understanding of modern web technologies and software development practices.
                        </p>
                    </article>
                </div>



                {/* Qualifiaction */}
                <div className="flex flex-col gap-5">

                    {/* BSC IT */}
                    <article
                        className="group relative flex gap-5 rounded-2xl border border-zinc-200 bg-white p-5 transition-transform duration-800 ease-out hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                    >

                        <div className="flex flex-col items-center">
                            <span
                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-700 shadow-sm transition-transform duration-800 ease-out group-hover:scale-105 group-hover:border-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:group-hover:border-zinc-600 dark:group-hover:bg-white dark:group-hover:text-zinc-900 dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                            >
                                <GraduationCap size={22} />
                            </span>

                            <span className="w-px flex-1 bg-zinc-300 dark:bg-zinc-700"></span>

                        </div>

                        <header className="min-w-0 flex-1">
                            <h3 className="text-base font-semibold leading-snug text-zinc-900 md:text-lg dark:text-white">
                                Bachelor of Science in Information Technology (B.Sc. IT)

                                <span className="mx-2 text-zinc-400">·</span>

                                <time dateTime="2023/2026" className="inline-block whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                                    2022 – 2025
                                </time>
                            </h3>

                            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                D. D. Vispute College of Science, Commerce & Management
                                <span className="mx-1.5">·</span>
                                Navi Mumbai, India
                            </p>

                            <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                Completed B.Sc. IT with a focus on programming, web development, Practices & more,.. [CGPA: 8.20]
                            </p>

                        </header>

                    </article>


                    {/* Higher Education 11-12th */}
                    <article
                        className="group relative flex gap-5 rounded-2xl border border-zinc-200 bg-white p-5 transition-transform duration-800 ease-out hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                    >

                        <div className="flex flex-col items-center">
                            <span
                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-700 shadow-sm transition-transform duration-800 ease-out group-hover:scale-105 group-hover:border-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:group-hover:border-zinc-600 dark:group-hover:bg-white dark:group-hover:text-zinc-900 dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                            >
                                <BookOpen size={22} />
                            </span>

                            <span className="w-px flex-1 bg-zinc-300 dark:bg-zinc-700"></span>

                        </div>

                        <header className="min-w-0 flex-1">
                            <h3 className="text-base font-semibold leading-snug text-zinc-900 md:text-lg dark:text-white">
                                Higher Secondary Education

                                <span className="mx-2 text-zinc-400">·</span>

                                <time dateTime="2023/2026" className="inline-block whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                                    2020 – 2022
                                </time>
                            </h3>

                            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                Changu Kana Thakur Arts Commerce & Science College
                                <span className="mx-1.5">·</span>
                                Panvel, Navi Mumbai, India
                            </p>

                            <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                Completed Higher Secondary Education (12th) in the Science stream with PCM. [Overall: 60%].
                            </p>

                        </header>

                    </article>


                    {/* Secondary Education 11-12th */}
                    <article
                        className="group relative flex gap-5 rounded-2xl border border-zinc-200 bg-white p-5 transition-transform duration-800 ease-out hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                    >

                        <div className="flex flex-col items-center">
                            <span
                                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-700 shadow-sm transition-transform duration-800 ease-out group-hover:scale-105 group-hover:border-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:group-hover:border-zinc-600 dark:group-hover:bg-white dark:group-hover:text-zinc-900 dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                            >
                                <BookOpen size={22} />
                            </span>

                            <span className="w-px flex-1 bg-zinc-300 dark:bg-zinc-700"></span>

                        </div>

                        <header className="min-w-0 flex-1">
                            <h3 className="text-base font-semibold leading-snug text-zinc-900 md:text-lg dark:text-white">
                                Secondary Education

                                <span className="mx-2 text-zinc-400">·</span>

                                <time dateTime="2023/2026" className="inline-block whitespace-nowrap rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
                                    2019 – 2020
                                </time>
                            </h3>

                            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                                K. A. Banthiya High School
                                <span className="mx-1.5">·</span>
                                Panvel, Navi Mumbai, India
                            </p>

                            <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                                Completed Secondary Education (10th) with [78%]. & Developed a strong foundation in academics and basic computer skills.
                            </p>

                        </header>

                    </article>





                </div>






            </section>


            {/* Links */}
            <div className='flex mt-10 lg:mt-20 justify-between'>
                <NavLink to={"/experience"} className='text-sm md:text-[15px] xl:text-[16px] flex gap-2 items-center font-medium px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:dark:bg-zinc-800'> <ChevronLeft size={21} /> Experience</NavLink>
                <NavLink to={"/contact"} className='text-sm md:text-[15px] xl:text-[16px] flex gap-2 items-center font-medium px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:dark:bg-zinc-800'>Contact <ChevronRight size={21} /></NavLink>
            </div>
        </>
    )
}

export default Education

import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

function Contacts() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { register, reset, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = async (data) => {

        try {
            const response = await axios.post(
                "https://api.web3forms.com/submit",
                {
                    access_key: "4b563872-39bd-43b1-9dec-d138df68354b",
                    name: data.fullName,
                    email: data.email,
                    message: data.message,
                    subject: "From Portfolio: Get in touch request"
                }
            );

            if (response.data.success) {
                console.log("Message sent successfully!");
                reset();
            } else {
                console.log("Error:", response.data.message);
            }

        } catch (error) {
            console.log("Request failed:", error);
        }
    }

    return (
        <>
            <section className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight">Contact</h1>
                    <header className=''>
                        <h1 className="text-lg md:text-xl lg:text-3xl font-bold tracking-tight text-gray-500 dark:text-gray-400">Get in touch before I write another line of code!</h1>
                    </header>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            >
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                {...register("fullName", { required: true })}
                                placeholder="Your name"
                                className="h-11 w-full rounded-lg border border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none focus:transition-all focus:duration-300 placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-800"
                            />
                            {errors.fullName && (
                                <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-red-500 dark:text-red-400">
                                    <span>⚠️</span>
                                    Wow, your name seems to be in stealth mode! 😄 How about unleashing
                                    the full version this time?
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            >
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                {...register("email", { required: true })}
                                placeholder="you@example.com"
                                className="h-11 w-full rounded-lg border border-zinc-300 bg-white px-4 text-sm text-zinc-900 outline-none focus:transition-all focus:duration-300 placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-800"
                            />
                            <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                Temporary emails are also accepted, unless you wish to hear back 😉
                            </p>

                            {errors.email && (
                                <p className="mt-2 flex items-start gap-1.5 text-sm font-medium leading-5 text-red-500 dark:text-red-400">
                                    <span>⚠️</span>
                                    <span>
                                        Hmm, this email seems to be missing something 😅
                                        Please enter a valid email address so I can reach you.
                                    </span>
                                </p>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                {...register("message", { required: true })}
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full resize-none rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:transition-all focus:duration-300 placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-800"
                            ></textarea>
                            {errors.message && (
                                <p className="mt-2 flex items-start gap-1.5 text-sm font-medium leading-5 text-red-500 dark:text-red-400">
                                    That’s a bit brief! 😅 Let it flow—share the whole story!
                                </p>
                            )}
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#853ae0] py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#945bd9] active:scale-[0.98]"
                        >
                            Send Message
                        </button>

                        <button
                            type="reset"
                            className="w-full rounded-lg py-3 text-sm font-medium dark:text-black hover:transition-all hover:duration-300 border border-zinc-300 dark:border-zinc-700 bg-white active:scale-[0.98] hover:bg-zinc-200"
                        >
                            Reset
                        </button>

                    </form>
                </div>


            </section>


            {/* Links */}
            <div className='flex mt-10 lg:mt-20 justify-between'>
                <NavLink to={"/education"} className='text-sm md:text-[15px] xl:text-[16px] flex gap-2 items-center font-medium px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:dark:bg-zinc-800'> <ChevronLeft size={21} /> Education</NavLink>
                <NavLink to={"/"} className='text-sm md:text-[15px] xl:text-[16px] flex gap-2 items-center font-medium px-2.5 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:dark:bg-zinc-800'>Introduction <ChevronRight size={21} /></NavLink>
            </div>
        </>
    )
}

export default Contacts;

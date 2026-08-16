
import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-6 py-7">

                <div className="w-fit py-5 border-b border-gray-200 px-6 pt-4 dark:border-gray-800 mx-auto  flex gap-15 justify-center items-center">

                    {/* Name */}
                    <div className="">
                        <h2 className="text-sm md:text-[16px] lg:text-xl font-bold text-gray-900 dark:text-white">
                            Suraj Kadam
                        </h2>

                        <p className="mt-0 text-[12px] md:[14px] lg:text-[18px] text-gray-500 dark:text-gray-400">
                            Available on:
                        </p>
                    </div>


                    {/*Social Media Accounts */}
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                        <a href="#" aria-label="Facebook">
                            <FaFacebook className="size-5 sm:size-6 hover:scale-110 transition-transform" />
                        </a>

                        <a href="#" aria-label="Twitter">
                            <FaTwitter className="size-5 sm:size-6 hover:scale-110 transition-transform" />
                        </a>

                        <a href="#" aria-label="Instagram">
                            <LuInstagram className="size-5 sm:size-6 hover:scale-110 transition-transform" />
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            <FaLinkedinIn className="size-5 sm:size-6 hover:scale-110 transition-transform" />
                        </a>
                    </div>


                </div>

                {/* Bottom */}
                <div className="mt-5 flex flex-col items-center pt-1">
                    <div className="w-fit">
                        <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-500">
                            © 2026 Suraj Kadam. All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;


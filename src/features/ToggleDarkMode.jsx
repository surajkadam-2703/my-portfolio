import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

function ToggleDarkMode() {
    const [darkMode, setDarkMode] = useState(()=>{
        return localStorage.getItem("theme")== "dark";
    });

    useEffect(() => {
        console.log("Dark Mode:", darkMode);
        
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    }, [darkMode]);

    return (
        <>
            <div onClick={()=>setDarkMode(!darkMode)}
                className='dark:hover:dark:bg-[#1b1a1a] px-3 py-3 rounded-full hover:bg-[#F5F4F4] cursor-pointer'>
                {
                    darkMode ?
                    <Sun size={17} className='dark:bg-[#1b1a1a] hover:scale-110 transition-transform duration-300'/>
                    :
                    <Moon size={17} className='dark:bg-[#1b1a1a] hover:scale-110 transition-transform duration-300'/>
                }
            </div>
        </>
    );
}

export default ToggleDarkMode;
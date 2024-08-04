'use client';
import { FaLinkedin  } from "react-icons/fa";
import { FaSquareInstagram, FaFile } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, usePathname, useRouter } from "@/navigation";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const [cookieValue, setCookieValue] = useState();
    useEffect(() => {
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }
        setCookieValue(getCookie('NEXT_LOCALE'));
    }, [])
    const [languageOption, setLanguageOption] = useState(cookieValue || 'pt');
    console.log('cookieValue', cookieValue);
    console.log('languageOption', languageOption);

    /* useEffect(() => {
        router.push(pathname, { locale: 'pt' });
    }, [pathname, router]) */

    const handleLanguageChange = (e) => {
        const value = e.target.value;

        setLanguageOption(value);
        router.push(pathname, { locale: value });
    }
    
    return (
        <header className='w-full h-16 px-5 md:px-20 flex justify-between items-center shadow-sm bg-white text-black fixed z-50'>
            <div className="w-20 h-full flex flex-col justify-center items-center relative left-2 font-medium">
                <span className='absolute top-3 font-semibold'>Vandilson</span>
                <span className='absolute top-7'>Brito</span>
            </div>
            <nav className="">
                <ul className="flex gap-6 md:gap-10 items-center text-[1.35rem]">
                    <li>
                        <a
                        className='w-fit h-full flex flex-col items-center'
                        href="https://www.linkedin.com/in/vandilson-brito-b791b3216/"
                        target="_blank"
                        rel="noopener noreferrer">
                            <FaLinkedin className="hover:translate-x-[2px] ease-in-out duration-200"/>
                        </a>
                    </li>
                    <li className='hidden md:visible'>
                        <a
                        className='w-fit h-full flex flex-col items-center'
                        href="https://github.com/vandilsonbrito"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <SiGithub className="hover:translate-x-[2px] ease-in-out duration-200"/>
                        </a>
                    </li>
                    <li className='hidden md:visible'>
                        <a
                        className='w-fit h-full flex flex-col items-center'
                        href="https://www.instagram.com/frontendvan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <FaSquareInstagram  className="hover:translate-x-[2px] ease-in-out duration-200"/>
                        </a>
                    </li>
                    <li>
                        <a
                        className='w-fit h-full flex flex-col items-center'
                        href="mailto:vandilson25@outlook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <IoIosMail  className="hover:translate-x-[2px] text-[1.65rem] ease-in-out duration-200"/>
                        </a>
                    </li>
                    <li>
                        <a
                        className='w-fit h-full flex flex-col items-center relative'
                        href="/curriculo-vandilson.pdf" 
                        download="curriculo-vandilson.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            <FaFile className='hover:translate-x-[2px] ease-in-out duration-200'
        
                            />
                            <span className='absolute top-[5px] text-white text-[.65rem] font-bold'
                            >CV</span>
                        </a>
                    </li>
                    <li>
                        <form className='text-lg font-semibold border-2 border-black rounded-sm '>
                            <select onChange={(e) => handleLanguageChange(e)} value={languageOption}>
                                <option value="pt">PT</option>
                                <option value="en">EN</option>
                            </select>
                        </form>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

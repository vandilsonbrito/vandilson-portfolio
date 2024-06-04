import { FaLinkedin  } from "react-icons/fa";
import { FaSquareInstagram, FaFile } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { IoIosMail } from "react-icons/io";


export default function Header() {

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
                        
                </ul>
            </nav>
        </header>
    )
}

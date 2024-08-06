'use client';
import { FaLinkedin  } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import {useTranslations} from 'next-intl';


export default function Contact() {
    const t = useTranslations('Home');

    return (
        <section className='contact w-full h-full mt-16 pt-[8rem] px-5 lg:px-20 text-white'>
            <h2 className='title-h2'>{t("Contacts.title")}</h2>

            <nav>
                <ul className="w-full h-full flex items-center justify-evenly text-3xl lg:text-4xl py-20">
                    <li>
                        <a 
                        className='w-fit h-full flex flex-col items-center'
                        href="https://www.linkedin.com/in/vandilson-brito-b791b3216/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                            <FaLinkedin className="hover:translate-x-[2px] ease-in-out duration-200"/>
                            <p className='text-sm'>Linkedin</p>
                        </a>
                    </li>
                    <li>
                        <a 
                        className='w-fit h-full flex flex-col items-center'
                        href="https://github.com/vandilsonbrito"
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            <SiGithub className="hover:translate-x-[2px] ease-in-out duration-200"/>
                            <p className='text-sm'>Github</p>
                        </a>
                    </li>
                    <li>
                        <a 
                        className='w-fit h-full flex flex-col items-center'
                        href="https://www.instagram.com/frontendvan/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            <FaSquareInstagram  className="hover:translate-x-[2px] ease-in-out duration-200"/>
                            <p className='text-sm'>Instagram</p>
                        </a>
                    </li>
                    <li>
                        <a 
                        className='w-fit h-full flex flex-col items-center'
                        href="mailto:vandilson25@outlook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                            <MdOutlineMail  className="hover:translate-x-[2px] ease-in-out duration-200"/>
                            <p className='text-sm'>E-mail</p>
                        </a>
                    </li>
                </ul>
            
            </nav>

            <p className='text-sm text-center pb-3'>Vandilson Brito | vandilson25@outlook.com
            </p>
        </section>
    )
}

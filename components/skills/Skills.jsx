'use client';
import { HiComputerDesktop } from "react-icons/hi2";
import { IoBody } from "react-icons/io5";
import {useTranslations} from 'next-intl';

export default function Skills() {
    const t = useTranslations('Home');

    return (
        <section className='w-full h-full mt-12 xl:mt-24 px-7 lg:px-20'>
            <h2 className='title-h2'>Skills</h2>

            <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-12 mt-16 text-black">
                <div className="w-[340px] h-[310px] px-6 pt-8 pb-20  rounded-2xl shadow-2xl">
                    <span className="w-full flex items-center justify-center gap-2">
                        <HiComputerDesktop className='text-lg'/>
                        <h3 className='text-xl font-semibold text-center'>Hard Skills</h3>
                    </span>
                    <ul className="text-[1.07rem] font-medium w-fit h-fit grid grid-cols-2 mt-7 mx-auto gap-7 text-left">
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>CSS3/Sass</li>
                        <li>HTML5</li>
                        <li>Git/Github</li>
                    </ul>
                </div>
                <div className="w-[340px] h-[310px] px-7 pt-8 pb-20 rounded-2xl shadow-2xl">
                    <span className="w-full flex items-center justify-center gap-2">
                        <IoBody className='text-lg'/>
                        <h3 className='text-xl font-semibold'>Soft Skills</h3>
                    </span>
                    <ul className="text-[1.07rem] font-medium w-full h-full flex flex-wrap justify-center items-center mt-7 gap-5">
                        <li>{t("Skills.soft-skills.skill1")}</li>
                        <li>{t("Skills.soft-skills.skill2")}</li>
                        <li>{t("Skills.soft-skills.skill4")}</li>
                        <li>{t("Skills.soft-skills.skill3")}</li>
                        <li>{t("Skills.soft-skills.skill5")}</li>
                    </ul>
                </div>
            </div>

            <div className='w-full h-full flex justify-center mt-16 mb-10 py-1'>
                <a className='fill-button w-60 border-2 border-blueGreen100 py-2 text-center cursor-pointer  text-xl lg:text-2xl 2xl:text-3xl font-semibold bg-gradient-to-r from-bluePrimay to-greenBlue200 to-80%  text-transparent bg-clip-text hover:text-white' href="https://drive.google.com/drive/folders/1Pq_N0tVW2XpMWtB-co5DtkLg88Tbj4uV" /* download="curriculo-vandilson.pdf" */ target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
        </section>
    )
}

'use client';
import Image from "next/image";
import '@/data.json';
import {useTranslations} from 'next-intl';


export default function ProjectContainer({ projectName, imageSrc, description, deployUrl, githubUrl }) {
    
    const t = useTranslations('Home');

    return (
        <div className="w-full h-full flex flex-col xl:flex-row-reverse items-center md:items-start justify-center gap-1 xl:gap-10 rounded-xl py-2">

                <Image width={600} height={450} className='w-full max-w-[600px] lg:w-[600px] xl:w-[500px] shadow-2xl border-4 border-offWhite' src={imageSrc} alt="imagem do projeto" />
                
                <div className="w-full h-full flex flex-col gap-7 py-6 xl:py-0">
                    <div className="w-full h-[40%] flex flex-col gap-5">
                        <h3 className="font-bold text-xl xl:text-2xl text-left mt-2 tracking-wider">{projectName}</h3>
                        <p className="text-sm md:text-base text-left">{description}</p>
                    </div>
                    <div className="w-[70%] xl:w-1/2 h-full flex justify-between items-center text-sm md:text-base font-semibold ">
                        <a href={`${deployUrl}`} target='_blank' rel="noopener noreferrer">
                            <span className="fill-button  py-[6px] px-4 border-2 bg-gradient-to-r from-bluePrimay to-greenBlue200 to-80% text-transparent bg-clip-text hover:text-white" >
                                <span className=''>{t("Projects.buttons.buttonDemo")}</span>
                            </span>
                        </a>
                        <a className="mb-[6px]" href={`${githubUrl}`} target='_blank' rel="noopener noreferrer">
                            <span className='bg-gradient-to-r from-bluePrimay to-greenBlue200 to-150% text-transparent bg-clip-text'>{t("Projects.buttons.buttonCode")}</span>
                        </a>
                    </div>
                </div>
            </div>
    )
}

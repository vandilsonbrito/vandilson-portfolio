'use client';
import { useEffect, useState } from 'react';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import data from '../../data.json';
import {useTranslations} from 'next-intl';


export default function Projects() {

    const [displayProjects, setDisplayProjects] = useState(1);
    const [loading, setLoading] = useState(true);
    const t = useTranslations('Home');

    useEffect(() => {
        if(data) setLoading(false)
    }, [setLoading])

    const selectedProjects = {
        1: data.projects['1'],
        2: data.projects['2']
    }

    return (
        <section className='w-full h-full flex flex-col justify-center items-center px-7 text-black'>
            <h2 className='title-h2'>{t("Projects.title")}</h2>

            <div className="w-fit h-full flex justify-center items-center gap-8 lg:gap-20 mt-16 md:text-xl lg:text-xl 2xl:text-2xl font-medium px-6 py-2 rounded-md shadow-2xl">
                <button 
                className={`${displayProjects === 1 ? 'border-b-2 border-greenBlue200' : ''}`} 
                type="button"
                onClick={() => setDisplayProjects(1)}
                > 1 </button>
                <button 
                className={`${displayProjects === 2 ? 'border-b-2 border-greenBlue200' : ''}`}
                type="button"
                onClick={() => setDisplayProjects(2)}
                > 2 </button>
            </div>

            <p className='pt-4'>{t("Projects.description")}</p>
   
            <section className='w-full max-w-[1500px] h-full flex flex-col justify-center items-center gap-10 xl:gap-16 mt-16 sm:px-20 lg:px-32 xl:px-16'>
                { loading ? 
                    (
                        <div className="w-full h-full min-h-screen flex flex-col justify-center items-center">
                            <span className="loader"></span>
                        </div>
                    )
            
                :   
                    (   
                        selectedProjects[displayProjects].map((project, index) => (
                            project ? 
                            (
                                <ProjectContainer
                                key={index}
                                projectName={project.projectName}
                                description={t(project.description)}
                                imageSrc={project.imageSrc}
                                deployUrl={project.deployUrl}
                                githubUrl={project.githubUrl}
                            />
                            )
                            :
                            (
                                <>
                                    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center">
                                        <span  className="loader"></span>
                                    </div>
                                </>
                            )
                        ))
                    )
                }
            </section>
        </section>
    )
}

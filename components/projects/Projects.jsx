'use client';
import { useEffect, useState } from 'react';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import data from '../../data.json';


export default function Projects() {

    const [reversedProfessionalProjects, setReversedProfessionalProjects] = useState([]);
    const [reversedPersonalProjects, setReversedPersonalProjects] = useState([]);
    const [reversedOthersProjects, setReversedOthersProjects] = useState([]);
    const [displayProjects, setDisplayProjects] = useState(1);
    useEffect(() => {
        setReversedProfessionalProjects(data.projects.professional.reverse());
        setReversedPersonalProjects(data.projects.personal.reverse());
        setReversedOthersProjects(data.projects.others.reverse());
    }, [])

    const selectedProjects = {
        1: reversedProfessionalProjects,
        2: reversedPersonalProjects,
        3: reversedOthersProjects
    }


    return (
        <section className='w-full h-full flex flex-col justify-center items-center px-7 text-black'>
            <h2 className='title-h2'>Projetos</h2>

            <div className="w-full h-full flex justify-center items-center gap-8 lg:gap-20 mt-16 md:text-xl lg:text-xl 2xl:text-2xl font-medium">
                <button 
                className={`${displayProjects === 1 ? 'border-b-2 border-greenBlue200' : ''}`} 
                type="button"
                onClick={() => setDisplayProjects(1)}
                >Profissionais</button>
                <button 
                className={`${displayProjects === 2 ? 'border-b-2 border-greenBlue200' : ''}`}
                type="button"
                onClick={() => setDisplayProjects(2)}
                >Pessoais</button>
                <button 
                className={`${displayProjects === 3 ? 'border-b-2 border-greenBlue200' : ''}`}
                type="button"
                onClick={() => setDisplayProjects(3)}
                >Outros</button>
            </div>

            <section className='w-full max-w-[1500px] h-full flex flex-col justify-center items-center gap-10 xl:gap-16 mt-16 sm:px-20 lg:px-32 xl:px-16'>
                {
            
                    selectedProjects[displayProjects].map((project, index) => (
                        <ProjectContainer 
                            key={index}
                            projectName={project.projectName}
                            description={project.description}
                            imageSrc={project.imageSrc}
                            deployUrl={project.deployUrl}
                            githubUrl={project.githubUrl}
                        /> 
                ))  
                }
            </section>
        </section>
    )
}

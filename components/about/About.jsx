'use client'
import imgProfile from '../../public/img-profile.webp';
import img1 from '../../public/img1.webp';
import img2 from '../../public/img2.webp';
import img3 from '../../public/img3.webp';
import img4 from '../../public/img4.webp';
import img5 from '../../public/img5.webp';
import img6 from '../../public/img6.webp';
import img7 from '../../public/img7.webp';
import img8 from '../../public/img8.webp';
import img9 from '../../public/img9.webp';
import img10 from '../../public/img10.webp';
import Image from 'next/image';
import {useTranslations} from 'next-intl';


export default function About() {
    const t = useTranslations('Home');

    return (
        <section className='about  w-full h-full xl:min-h-[1100px] flex flex-col items-center py-7 px-9 lg:py-12 md:px-16 lg:px-20 lg:pb-40 xl:px-24 text-white ' id='/about'> 
            <h2 className='title-h2'>{t("About.title")}</h2>
            
            <div className="w-full h-full flex flex-col xl:flex-row justify-center items-center xl:items-start gap-10 xl:gap-20 mt-10 xl:mt-16  mb-36 lg:mb-0">
                <div>
                    <Image
                        className='w-56 lg:w-64 rounded-lg mt-1'
                        src={imgProfile}
                        alt="Foto de Vandilson"
                    />
                </div>
                <div className="w-full xl:w-[70%] max-w-[900px] flex flex-col gap-5 md:text-lg 2xl:text-2xl">
                    <p>{t("About.description.part1")}</p>
                    <p>{t("About.description.part2")}</p>
                    <p>{t("About.description.part3")}</p>
                </div>
            </div>
            <div className="hidden xl:flex w-full h-[350px] justify-center items-center xl:mt-14" >
                <div className="w-[800px] h-full relative">
                    <Image 
                        className='w-[120px] rounded-md absolute left-0 -rotate-3 saturate-0 hover:saturate-100' 
                        src={img1}
                        alt="Vandilson viajando pelo mundo"
                    />
                    <Image 
                        className='w-[120px] rounded-md absolute left-[170px] top-2 rotate-[6deg] saturate-0 hover:saturate-100' 
                        src={img2} 
                        alt="Vandilson viajando pelo mundo" 
                    />
                    <Image 
                        className='w-[120px] rounded-md absolute left-[330px] top-2 -rotate-[6deg] saturate-0 hover:saturate-100' 
                        src={img3} 
                        alt="Vandilson viajando pelo mundo" 
                    />
                    <Image className='w-[120px] rounded-md absolute left-[500px] top-2 rotate-[6deg] saturate-0 hover:saturate-100' src={img4} alt="Vandilson viajando pelo mundo" />
                    <Image 
                        className='w-[120px] rounded-md absolute left-[670px] top-2 -rotate-[6deg] saturate-0 hover:saturate-100' 
                        src={img5} 
                        alt="Vandilson viajando pelo mundo" 
                    />
                    <Image 
                        className='w-[120px] rounded-md absolute left-0 top-[190px] rotate-[6deg] saturate-0 hover:saturate-100' 
                        src={img6} 
                        alt="Vandilson viajando pelo mundo" 
                    />
                    <Image 
                        className='w-[140px] rounded-md absolute left-[150px] top-[220px] -rotate-[6deg] saturate-0 hover:saturate-100' 
                        src={img7} 
                        alt="Vandilson viajando pelo mundo" 
                    />
                    <Image 
                        className='w-[120px] rounded-md absolute left-[340px] top-[200px] rotate-[4deg] saturate-0 hover:saturate-100' 
                        src={img8} 
                        alt="Vandilson viajando pelo mundo" 
                    />
                    <Image 
                        className='w-[120px] rounded-md absolute left-[500px] top-[205px] -rotate-[6deg] saturate-0 hover:saturate-100' 
                        src={img9} 
                        alt="Vandilson viajando pelo mundo" 
                    />
                    <Image 
                        className='w-[117px] rounded-md absolute left-[660px] top-[193px] rotate-[5deg] saturate-0 hover:saturate-100' 
                        src={img10}
                        alt="Vandilson viajando pelo mundo" 
                    />
                </div>
            </div>
        </section>
    )
}
    
'use client';
import { Link } from 'react-scroll';

export default function Banner() {
  
  return (
    <section className='w-full h-full min-h-screen flex flex-col justify-center  px-10 lg:px-20 2xl:px-40 ' id='/banner'>
        <div className="w-full h-full flex flex-col justify-center items-center md:items-start xl:w-[75%]">
            <h1 className='text-[1.9rem] leading-[2.5rem] md:text-[2.5rem] md:leading-snug text-center lg:text-[3rem] lg:leading-[4.5rem] 2xl:text-7xl font-bold  md:text-left'>Olá, me chamo <span className='bg-gradient-to-r from-bluePrimay to-greenBlue200 to-80% text-transparent bg-clip-text'>Vandilson Brito</span>, Sou 
            Front-end Developer.</h1>
            
            <Link 
              to='/about' 
              smooth={true}
              offset={-65}
              duration={500} className='fill-button w-40 border-2 border-blueGreen100 px-2 py-1 mt-5 text-center cursor-pointer  text-xl lg:text-2xl 2xl:text-4xl font-semibold bg-gradient-to-r from-bluePrimay to-greenBlue200 to-80%  text-transparent bg-clip-text hover:text-white'>
              Saiba mais
            </Link>

        </div>
    </section>
  )
}

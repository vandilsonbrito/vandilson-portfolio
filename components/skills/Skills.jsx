import { HiComputerDesktop } from "react-icons/hi2";
import { IoBody } from "react-icons/io5";


export default function Skills() {
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
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Tailwind</li>
                    <li>Sass</li>
                    <li>Next</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Git/Github</li>
                </ul>
            </div>
            <div className="w-[340px] h-[310px] px-7 pt-8 pb-20 rounded-2xl shadow-2xl">
                <span className="w-full flex items-center justify-center gap-2">
                    <IoBody className='text-lg'/>
                    <h3 className='text-xl font-semibold'>Soft Skills</h3>
                </span>
                <ul className="text-[1.07rem] font-medium w-full h-full flex flex-wrap justify-center items-center mt-7 gap-5">
                    <li>Inglês</li>
                    <li>Autodidata</li>
                    <li>Boa Comunicação</li>
                    <li>Trabalho em Equipe</li>
                    <li>Inteligência Emocional</li>
                </ul>
            </div>
        </div>

        <div className='w-full h-full flex justify-center mt-12 mb-10'>
            <a className='fill-button w-56 h-[47px] border-2 border-blueGreen100 pt-2 mt-5 text-center cursor-pointer  text-xl lg:text-2xl 2xl:text-4xl font-semibold bg-gradient-to-r from-bluePrimay to-greenBlue200 to-80%  text-transparent bg-clip-text hover:text-white' href="/curriculo-vandilson.pdf" download="curriculo-vandilson.pdf" >Download CV</a>
        </div>
    </section>
  )
}

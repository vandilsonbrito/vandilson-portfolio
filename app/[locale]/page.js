'use client'
import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/Contact";
import Header from "@/components/header/Header";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import { useEffect, useState } from "react";
import { TbSquareRoundedArrowUp } from "react-icons/tb";
import { Link } from "react-scroll";


export default function Home() {

    const [scrollY, setScrollY] = useState(0);
  
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <main className="overflow-hidden relative">
        <Header/>
        <Banner/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Link to='/banner' smooth={true} duration={500} className={`${scrollY > 570 ? 'visible' : 'hidden'}`}>
          <TbSquareRoundedArrowUp className="hidden xl:block fixed bottom-16 right-6 text-4xl text-[#000000e5] cursor-pointer"/>
        </Link>
      </main>
    );
}

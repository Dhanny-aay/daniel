import Image from "next/image";
import html1 from '../images/html-5.png';
import tail from '../images/tailwind-css.svg';
import css1 from '../images/css-3.png';
import react from '../images/structure.png';
import js1 from '../images/js.png';
import next from '../images/nextjs.svg';



const About = () => {
    return ( 
        <>
        <div className=" mt-[150px] px-5 md:px-20 w-full">
            
            <div className=" flex flex-col space-y-6 lg:space-y-0 lg:flex-col w-full justify-between">
                <div className="w-full text-sm font-normal  text-[#797575] font-IBM">
                    <p className=" font-IBM font-semibold text-2xl text-[#121212]">Here's a little something about me</p>
                    <p className="mt-10">Welcome to my portfolio website! I'm Daniel Akintolu, a web developer with over a year of experience. My stack includes <span className=" text-[#121212]">Javascript</span>, <span className=" text-[#121212]">React</span>, <span className=" text-[#121212]">Tailwind CSS</span>, <span className=" text-[#121212]">Next.js</span>, and <span className=" text-[#121212]">Firebase</span>.  I approach every project with enthusiasm and strive for excellence in delivering intuitive user interfaces and optimized performance. Collaboration is at the heart of my work, and I thrive in dynamic team environments. Let's connect and create something exceptional together!</p>
                </div>
                <div className=" w-full text-sm font-normal text-[#666666] font-IBM">
                    <p className=" font-IBM font-semibold text-xl text-[#121212] ">Technologies I've Used</p>
                    <div className=" w-full flex mt-10">
                        <span className=" flex space-x-12">
                            <Image src={ html1 } alt="" />
                            <Image src={ css1 } alt="" />
                            <Image src={ js1 } alt="" />
                            <Image src={ react } alt="" />
                            <Image src={ tail } className=" w-8 h-8" alt="" />
                            <Image src={ next } className=" w-10 h-6" alt="" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default About;
import Link from "next/link";
import Image from "next/image";
import stickframe from '../images/stickframe.png';
import shoeframe from '../images/shoeframe.png';
import convertframe from '../images/convertframe.png';
import smartframe from '../images/smartframe.png';

const Projects = () => {
    return ( 
        <>
        <div className=" -mt-[200px] w-full px-5 md:px-20 lg:px-[18%] -z-[9999]">
            <p className=" lg:-ml-32 text-2xl font-IBM font-semibold">My Projects</p>
            <p className=" lg:-ml-32 mb-12 text-base mt-8 font-IBM text-[#797575]">Here are some of the things i've worked on</p>
            <div className=" space-y-10 md:space-y-16">
                <div className=" w-full lg:h-[500px] relative rounded-3xl bg-[#ffffff85] border border-[#f1f1f1] backdrop-blur-[3.7px] flex flex-col lg:flex-row justify-between items-center p-5">
                    <p className="hidden lg:block font-IBM text-xs text-[#666666] -rotate-90 -ml-28 font-medium">React, Framer-Motion, Tailwind, Firebase</p>
                    <div className=" w-full md:w-[350px] h-auto md:h-[400px] bg-slate-200 border border-[#fff] shadow-sm rounded-3xl lg:-ml-32">
                        <Image src={ stickframe } className=" rounded-3xl" alt="" />
                    </div>
                    <span className=" flex flex-col lg:mr-20 space-y-4 md:space-y-8">
                        <p className=" font-IBM text-lg mt-4 lg:mt-0 font-semibold">Stickify</p>
                        <p className=" font-IBM text-xs font-light w-full lg:w-36">Stickify allows users to create and organize digital sticky notes that can be customized to suit their needs.</p>
                        <button className=" text-xs mr-auto lg:mr-0 text-black bg-transparent hover:bg-black w-[150px] py-3 px-1 rounded-lg lg:-ml-8 font-IBM border border-black bg-black hover:text-[#fff] transition-all duration-300">Visit Website</button>
                    </span>
                </div>

                <div className=" w-full lg:h-[500px] relative rounded-3xl bg-[#ffffff85] border border-[#f1f1f1] backdrop-blur-[3.7px] flex flex-col lg:flex-row justify-between items-center p-5">
                    <p className=" hidden lg:block font-IBM text-xs text-[#666666] -rotate-90 -ml-20 font-medium">React, Framer-Motion, Tailwind</p>
                    <div className=" w-full md:w-[350px] h-auto md:h-[400px] bg-slate-200 border border-[#fff] shadow-sm rounded-3xl lg:-ml-32">
                        <Image src={ shoeframe } className=" rounded-3xl" alt="" />
                    </div>
                    <span className=" flex flex-col lg:mr-20 space-y-4 md:space-y-8">
                        <p className=" font-IBM text-lg mt-4 lg:mt-0 font-semibold">Shoes</p>
                        <p className=" font-IBM text-xs font-light lg:w-36">A captivating web animation exhibition, skillfully crafted to captivate and engage audiences.</p>
                        <button className="text-xs mr-auto lg:mr-0 text-black bg-transparent w-[150px] py-3 px-1 rounded-lg lg:-ml-8 font-IBM border border-black hover:bg-black hover:text-[#fff] transition-all duration-300">Visit Website</button>
                    </span>
                </div>

                <div className=" w-full lg:h-[500px] relative rounded-3xl bg-[#ffffff85] border-2 border-[#f1f1f1] backdrop-blur-[3.7px] flex flex-col lg:flex-row justify-between items-center p-5">
                    <p className=" hidden lg:block font-IBM text-xs text-[#666666] -rotate-90 -ml-28 font-medium">Next-Js, Tailwind, Firebase, ConvertAPI</p>
                    <div className=" w-full md:w-[350px] h-auto md:h-[400px] bg-slate-200 border border-[#fff] shadow-sm rounded-3xl lg:-ml-32">
                        <Image src={ convertframe } className=" rounded-3xl" alt="" />
                    </div>
                    <span className=" flex flex-col lg:mr-20 space-y-4 md:space-y-8">
                        <p className=" font-IBM text-lg mt-4 lg:mt-0 font-semibold">Convertify</p>
                        <p className=" font-IBM text-xs font-light lg:w-36">Convertify allows users to convert various file types to multiple formats, including PDFs, images.</p>
                        <button className=" text-xs mr-auto lg:mr-0 hover:text-white bg-transparent w-[150px] py-3 px-1 rounded-lg lg:-ml-8 font-IBM border border-black hover:bg-black text-[#000] transition-all duration-300">Visit Website</button>
                    </span>
                </div>

                <div className=" w-full lg:h-[500px] relative rounded-3xl bg-[#ffffff85] border-2 border-[#f1f1f1] backdrop-blur-[3.7px] flex flex-col lg:flex-row justify-between items-center p-5">
                    <p className=" hidden lg:block font-IBM text-xs text-[#666666] -rotate-90 -ml-28 font-medium">React, Tailwind, Framer-Motion, ChartJs</p>
                    <div className=" w-full md:w-[350px] h-auto md:h-[400px] bg-slate-200 border border-[#fff] shadow-sm rounded-3xl lg:-ml-32">
                        <Image src={ smartframe } className=" rounded-3xl" alt="" />
                    </div>
                    <span className="  w-full lg:w-auto flex flex-col lg:mr-20 space-y-4 md:space-y-8">
                        <p className=" font-IBM text-lg mt-4 lg:mt-0 font-semibold">Smart-learn</p>
                        <p className=" font-IBM text-xs font-light lg:w-36">Smart learning is a dashboard for a learning platform</p>
                        <button className=" text-xs mr-auto lg:mr-0 hover:text-white bg-transparent w-[150px] py-3 px-1 rounded-lg lg:-ml-8 font-IBM border border-black hover:bg-black text-[#000] transition-all duration-300">Visit Website</button>
                    </span>
                </div>
                <Link className=" w-[200px] block ml-auto font-IBM font-medium text-sm transition-all duration-300 hover:bg-black hover:text-white text-center border px-3 rounded-lg py-3 border-black p-1"  href='project'><button className=" ">View More Projects</button></Link>
            </div>
        </div>
        </>
     );
}
 
export default Projects;
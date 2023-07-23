import Navbar from "../comps/navbar";
import Image from "next/image";
import stickframe from '../images/stickframe.png';
import shoeframe from '../images/shoeframe.png';
import convertframe from '../images/convertframe.png';
import smartframe from '../images/smartframe.png';
import cocoframe from '../images/cocoframe.png';
import koreframe from '../images/koreframe.png';
import bloggyframe from '../images/bloggyframe.png';

const Project = () => {
    return ( 
        <>
        <Navbar/>
        <div className=" mt-32 w-full px-5 md:px-20 lg:px-[18%] -z-[9999]">
            <div className=" space-y-10 md:space-y-16">
                <div className=" w-full lg:h-[500px] relative rounded-3xl bg-[#ffffff85] border border-[#f1f1f1] backdrop-blur-[3.7px] flex flex-col lg:flex-row justify-between items-center p-5">
                    <p className="hidden lg:block font-IBM text-xs text-[#666666] -rotate-90 -ml-28 font-medium">React, Framer-Motion, Tailwind, Firebase</p>
                    <div className=" w-full md:w-[350px] md:h-[400px] h-auto bg-slate-200 border border-[#fff] shadow-sm rounded-3xl lg:-ml-32">
                        <Image src={ stickframe } className=" rounded-3xl" alt="" />
                    </div>
                    <span className=" flex flex-col lg:mr-20 md:mt-8 lg:mt-0 space-y-4 md:space-y-8">
                        <p className=" font-IBM text-lg mt-4 lg:mt-0 font-semibold">Stickify</p>
                        <p className=" font-IBM text-xs font-light w-full lg:w-36">Stickify allows users to create and organize digital sticky notes that can be customized to suit their needs.</p>
                        <a href="https://stickify.vercel.app/" target="blank" className=" text-xs mr-auto lg:mr-0 text-black bg-transparent text-center hover:bg-black w-[150px] py-3 px-1 rounded-lg font-IBM border border-black bg-black hover:text-[#fff] transition-all duration-300">Visit Website</a>
                    </span>
                </div>

                <div className=" w-full lg:h-[500px] relative rounded-3xl bg-[#ffffff85] border border-[#f1f1f1] backdrop-blur-[3.7px] flex flex-col lg:flex-row justify-between items-center p-5">
                    <p className=" hidden lg:block font-IBM text-xs text-[#666666] -rotate-90 -ml-20 font-medium">React, Framer-Motion, Tailwind</p>
                    <div className=" w-full md:w-[350px] md:h-[400px] h-auto bg-slate-200 border border-[#fff] shadow-sm rounded-3xl lg:-ml-32">
                        <Image src={ shoeframe } className=" rounded-3xl" alt="" />
                    </div>
                    <span className=" flex flex-col lg:mr-20 md:mt-8 lg:mt-0 space-y-4 md:space-y-8">
                        <p className=" font-IBM text-lg mt-4 lg:mt-0 font-semibold">Shoes</p>
                        <p className=" font-IBM text-xs font-light lg:w-36">A captivating web animation exhibition, skillfully crafted to captivate and engage audiences.</p>
                        <a href="https://shoes-orcin.vercel.app/" target="blank" className="text-xs text-center mr-auto lg:mr-0 text-black bg-transparent w-[150px] py-3 px-1 rounded-lg font-IBM border border-black hover:bg-black hover:text-[#fff] transition-all duration-300">Visit Website</a>
                    </span>
                </div>

                <div className=" w-full lg:h-[500px] relative rounded-3xl bg-[#ffffff85] border-2 border-[#f1f1f1] backdrop-blur-[3.7px] flex flex-col lg:flex-row justify-between items-center p-5">
                    <p className=" hidden lg:block font-IBM text-xs text-[#666666] -rotate-90 -ml-28 font-medium">Next-Js, Tailwind, Firebase, ConvertAPI</p>
                    <div className=" w-full md:w-[350px] md:h-[400px] h-auto bg-slate-200 border border-[#fff] shadow-sm rounded-3xl lg:-ml-32">
                         <Image src={ convertframe } className=" rounded-3xl" alt="" />
                    </div>
                    <span className=" flex flex-col lg:mr-20 md:mt-8 lg:mt-0 space-y-4 md:space-y-8">
                        <p className=" font-IBM text-lg mt-4 lg:mt-0 font-semibold">Convertify</p>
                        <p className=" font-IBM text-xs font-light lg:w-36">Convertify allows users to convert various file types to multiple formats, including PDFs, images.</p>
                        <a href="https://convertify-gamma.vercel.app/" target="blank" className=" text-center text-xs mr-auto lg:mr-0 hover:text-white bg-transparent w-[150px] py-3 px-1 rounded-lg font-IBM border border-black hover:bg-black text-[#000] transition-all duration-300">Visit Website</a>
                    </span>
                </div>

                <div className=" w-full lg:h-[500px] relative rounded-3xl bg-[#ffffff85] border-2 border-[#f1f1f1] backdrop-blur-[3.7px] flex flex-col lg:flex-row justify-between items-center p-5">
                    <p className=" hidden lg:block font-IBM text-xs text-[#666666] -rotate-90 -ml-28 font-medium">React, Tailwind, Framer-Motion, ChartJs</p>
                    <div className=" w-full md:w-[350px] md:h-[400px] h-auto bg-slate-200 border border-[#fff] shadow-sm rounded-3xl lg:-ml-32">
                        <Image src={ smartframe } className=" rounded-3xl" alt="" />
                    </div>
                    <span className="  w-full lg:w-auto flex flex-col lg:mr-20 md:mt-8 lg:mt-0 space-y-4 md:space-y-8">
                        <p className=" font-IBM text-lg mt-4 lg:mt-0 font-semibold">Smart-learn</p>
                        <p className=" font-IBM text-xs font-light lg:w-36">Smart learning is a dashboard for a learning platform</p>
                        <a href="https://smart-learn-sigma.vercel.app/" target="blank" className=" text-xs mr-auto lg:mr-0 hover:text-white bg-transparent w-[150px] py-3 px-1 rounded-lg font-IBM border border-black hover:bg-black text-[#000] transition-all text-center duration-300">Visit Website</a>
                    </span>
                </div>

                <div className=" w-full lg:h-[500px] relative rounded-3xl bg-[#ffffff85] border-2 border-[#f1f1f1] backdrop-blur-[3.7px] flex flex-col lg:flex-row justify-between items-center p-5">
                    <p className=" hidden lg:block font-IBM text-xs text-[#666666] -rotate-90 -ml-20 font-medium">React, Tailwind, Framer-Motion</p>
                    <div className=" w-full md:w-[350px] md:h-[400px] h-auto bg-slate-200 border border-[#fff] shadow-sm rounded-3xl lg:-ml-32">
                        <Image src={ cocoframe } className=" rounded-3xl" alt="" />
                    </div>
                    <span className="  w-full lg:w-auto flex flex-col lg:mr-20 md:mt-8 lg:mt-0 space-y-4 md:space-y-8">
                        <p className=" font-IBM text-lg mt-4 lg:mt-0 font-semibold">Coconatty</p>
                        <p className=" font-IBM text-xs font-light lg:w-36">Coconatty is a landing page for a e-commerce coconut store</p>
                        <a href='https://coconatty.vercel.app/' target='blank' className=" text-xs mr-auto lg:mr-0 hover:text-white bg-transparent w-[150px] py-3 px-1 rounded-lg font-IBM border border-black hover:bg-black text-[#000] transition-all duration-300 text-center">Visit Website</a>
                    </span>
                </div>

                <div className=" w-full lg:h-[500px] relative rounded-3xl bg-[#ffffff85] border-2 border-[#f1f1f1] backdrop-blur-[3.7px] flex flex-col lg:flex-row justify-between items-center p-5">
                    <p className=" hidden lg:block font-IBM text-xs text-[#666666] -rotate-90 -ml-28 font-medium">React, Framer-Motion, ChartJs, Firebase</p>
                    <div className=" w-full md:w-[350px] md:h-[400px] h-auto bg-slate-200 border border-[#fff] shadow-sm rounded-3xl lg:-ml-32">
                        <Image src={ bloggyframe } className=" rounded-3xl" alt="" />
                    </div>
                    <span className="  w-full lg:w-auto flex flex-col lg:mr-20 md:mt-8 lg:mt-0 space-y-4 md:space-y-8">
                        <p className=" font-IBM text-lg mt-4 lg:mt-0 font-semibold">Bloggy</p>
                        <p className=" font-IBM text-xs font-light lg:w-36">Bloggy is a dashboard page for a blog site</p>
                        <a href='https://dashboard-brown-nu.vercel.app/' target='blank' className=" text-xs mr-auto lg:mr-0 hover:text-white bg-transparent w-[150px] py-3 px-1 rounded-lg font-IBM border border-black hover:bg-black text-[#000] transition-all duration-300 text-center">Visit Website</a>
                    </span>
                </div>

                <div className=" w-full lg:h-[500px] relative rounded-3xl bg-[#ffffff85] border-2 border-[#f1f1f1] backdrop-blur-[3.7px] flex flex-col lg:flex-row justify-between items-center p-5">
                    <p className=" hidden lg:block font-IBM text-xs text-[#666666] -rotate-90 -ml-10 font-medium">Vanila Js, HTML, CSS</p>
                    <div className=" w-full md:w-[350px] md:h-[400px] h-auto bg-slate-200 border border-[#fff] shadow-sm rounded-3xl lg:-ml-32">
                        <Image src={ koreframe } className=" rounded-3xl" alt="" />
                    </div>
                    <span className="  w-full lg:w-auto flex flex-col lg:mr-20 md:mt-8 lg:mt-0 space-y-4 md:space-y-8">
                        <p className=" font-IBM text-lg mt-4 lg:mt-0 font-semibold">Kore-Ola</p>
                        <p className=" font-IBM text-xs font-light lg:w-36">Kore-Ola is a Photoghrapy portfolio site</p>
                        <a href='https://kore-two.vercel.app/' target='blank' className=" text-xs mr-auto lg:mr-0 hover:text-white bg-transparent w-[150px] py-3 px-1 rounded-lg font-IBM border border-black hover:bg-black text-[#000] transition-all duration-300 text-center">Visit Website</a>
                    </span>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Project;
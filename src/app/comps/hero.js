"use client"; // This is a client component 👈🏽
import Image from "next/image";
import git from '../images/github.png';
import IG from '../images/instagram.png';
import convertframe from '../images/convertframe.png';
import trans from '../images/trans.png';
import TW from '../images/twitter.png';
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    return ( 
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className=" mt-44 md:px-14 lg:px-20 px-5 flex flex-col lg:flex-row lg:justify-around lg:items-start items-center">
            <div>
                <p className=" text-[#000] text-2xl md:text-3xl md:w-[650px] font-IBM font-medium">Web Developer.</p>
                <p className=" text-[#666666] text-2xl md:text-3xl mt-5 md:w-[600px] font-IBM font-normal">Crafting captivating web interfaces that blend <span className=" text-black">code</span> and <span className="text-black">creativity</span> seamlessly</p>
                <div className="mt-10 lg:mt-32 flex flex-row items-center space-x-7">
                    <a href="mailto:danielakintolu@gmail.com" className=" text-sm rounded-lg text-[#fff] border border-black bg-black hover:bg-transparent py-4 px-5 font-IBM hover:text-[#000] transition-all duration-300">Get In Touch</a>
                    <a href="https://resume.io/r/nu6QOEbZr" target="blank" className=" text-sm text-black border rounded-lg border-black py-4 px-5 font-IBM hover:border-0 hover:text-[#fff] hover:bg-black transition-all duration-300">Resume</a>
                </div>
            </div>
            <div className=" mt-20 lg:-mt-0">
                <motion.div 
                initial={{rotateX:180}}
                animate={{translateY:'-40px', rotateX:0}}
                // whileHover={{rotateX:0}}
                transition={{delay:0.5, duration:.45}}
                className=" w-[250px] md:w-[300px] -translate-y-10 rounded-md h-[300px] md:h-[350px] bg-[#121212]">
                    <Image src={ convertframe } className=" rounded-md border shadow-md" alt="" />
                </motion.div>
                <motion.div 
                initial={{rotateY:180}}
                animate={{translateY:'-300px', translateX:'40px', rotateY:0}}
                whileHover={{rotateY:0}}
                transition={{delay:0.5, duration:.45}}
                className=" w-[250px] md:w-[300px] -translate-y-[300px] md:-translate-y-[300px] translate-x-10 bg-[#ffffff] rounded-md border border-[#f1f1f1] h-[300px] md:h-[350px] ">
                    <Image src={ trans } className=" rounded-md border shadow-md" alt="" />
                </motion.div>
            </div>
            
            
            <div className=" flex flex-row space-x-5 fixed md:right-24 md:bottom-10 bottom-5 right-5 z-[99999]">
                <span className="flex space-x-1 items-end">
                    <a href="https://github.com/Dhanny-aay" target="blank" className=" flex space-x-1 items-end">
                    <Image src={ git } className=" w-4 h-4" alt="" />
                    <p className=" font-IBM text-xs">GIT</p>
                    </a>
                </span>
                <span className="flex space-x-1 items-end">
                    <a href="https://instagram.com/tomi.codes?igshid=MzNlNGNkZWQ4Mg==" target="blank" className=" flex space-x-1 items-end">
                    <Image src={ IG } className=" w-4 h-4" alt="" />
                    <p className=" font-IBM text-xs">IG</p>
                    </a>
                </span>
                <span className="flex space-x-1 items-end">
                    <a href="https://www.linkedin.com/in/daniel-akintolu-a38138222/" target="blank" className=" flex space-x-1 items-end">
                    <Image src={ TW } className=" w-4 h-4" alt="" />
                    <p className=" font-IBM text-xs">LND</p>
                    </a>
                </span>
            </div>
            {/* <Image src={ splash1 } className=" absolute top-0 left-0  w-52 -translate-x-32" alt="" /> */}
            {/* <Image src={ splash1 } className=" absolute top-16 right-24 w-16 h-16" alt="" />
            <Image src={ splash1 } className=" absolute centered bottom-40 w-16 h-16" alt="" /> */}
        </motion.div>
     );
}
 
export default Hero;
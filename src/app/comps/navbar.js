"use client"; // This is a client component 👈🏽
import { motion } from "framer-motion";
import Link from "next/link";
const Navbar = () => {
    function overlay(){
        //check classlist
        const overlayDiv = document.getElementById('overlay');
        if(overlayDiv.classList.contains('-translate-y-[110vh]')){
            overlayDiv.classList.remove('-translate-y-[110vh]')
        }
        else if(!overlayDiv.classList.contains('-translate-y-[110vh]')){
            overlayDiv.classList.add('-translate-y-[110vh]')
        }
    };
    return ( 
        <>
         <div id="overlay" className=" w-[100%] top-0 left-0 bg-[#fff] backdrop-blur-sm h-[100vh] flex justify-center items-center -translate-y-[110vh] shadow transition-all duration-500 fixed z-[1]">
            <div className=" flex flex-col justify-center items-center space-y-5">
                <Link href='/'><p className=" font-normal cursor-pointer text-lg font-IBM">Home</p></Link>
                <Link href='project'><p className=" font-normal cursor-pointer text-lg font-IBM">Projects</p></Link>
            </div>
        </div>
       <div className=" fixed centered w-full z-[9999999]">
        <div className="  flex w-full justify-center items-center py-6 px-5">
            <motion.div className=" w-full md:w-[600px] h-[70px] rounded-xl bg-[#ffffff85] border-2 border-[#f1f1f1] backdrop-blur-[3.7px] flex items-center justify-between p-3">
                <Link href='/'><p className=" font-IBM text-lg font-normal text-[#000]">DanielCodes™</p></Link>
                <div onClick={ overlay } className="menu-icon">
                    <input className="menu-icon__cheeckbox" type="checkbox" />
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </motion.div>
        </div>
       </div>
       </>
     );
}
 
export default Navbar;
"use client"; // This is a client component 👈🏽
import Image from "next/image";
import menu from '../images/menu.png';
import { motion } from "framer-motion";
import Link from "next/link";
const Navbar = () => {
    return ( 
       <div className=" fixed centered w-full z-[9999999]">
        <div className="  flex w-full justify-center items-center py-6 px-5">
            <motion.div className=" w-full md:w-[600px] h-[70px] rounded-xl bg-[#ffffff85] border-2 border-[#f1f1f1] backdrop-blur-[3.7px] flex items-center justify-between p-3">
                <Link href='/'><p className=" font-IBM text-lg font-normal text-[#000]">DanielCodes™</p></Link>
                <div class="menu-icon">
                    <input class="menu-icon__cheeckbox" type="checkbox" />
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </motion.div>
        </div>
       </div>
     );
}
 
export default Navbar;
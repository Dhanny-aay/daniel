"use client"; // This is a client component 👈🏽
 import Image from "next/image";
 import message from '../images/message.png';

 const Contact = () => {
    return ( 
        <>
        <div className=" px-5 md:px-20 mt-[70px] ">
            <p className=" font-IBM text-2xl font-semibold">Hello!</p>
            <p className=" mt-5 font-IBM text-base">Thanks for stopping by, I’m currently looking to join a new team of creative developers. If you think we might be a good fit for one another, send me an  email</p>
            <button className=" mx-auto px-5 py-3 mt-8 bg-transparent border border-black rounded-md hover:text-opacity-80 transition-all text-[#121212] text-base flex font-medium font-IBM">
                <a href="mailto:danielakintolu@gmail.com" className=" w-[100%] h-[100%] flex items-center">
                <Image src={ message } className=" w-8 h-8 mr-1" alt="mail" />
                Say hi
                </a>
            </button>
        </div>
        </>
     );
}
export default Contact;
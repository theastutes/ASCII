import React from "react";
import { Link } from "react-router-dom";

export default function StudyMaterial() {
    return (

        <div className="flex fixed h-screen w-screen">



            {/* <div className="absolute flex flex-col 
                items-center  w-[75%] right-24
                 
                 ">

<div className="bg-white/50 px-[6px] p-[4px] rounded-lg  left-0  text-3xl mb-10"><i class="fa-solid fa-newspaper "></i></div> 

                    <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700 ">
                    <a href="../../uploads/ASP.NET.pdf" download >ASP.NET Book </a>
                    <i class="fa-solid fa-download"></i></div>

                    <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700">
                    
                    <a href="../../uploads/JavaScript Step by Step.pdf" download >JavaScript Step by Step </a>
                    <i class="fa-solid fa-download"></i></div>

                    <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700">
                    <a href="../../uploads/Modern Operating Systems (4th Edition).pdf"  download>Modern Operating Systems (4th Edition) </a>
                    <i class="fa-solid fa-download"></i></div>

                    <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700">


                    
                    <a href="../../uploads/Software Development from A to Z_ A Deep Dive Into All the Roles Involved in the Creation of Software.pdf"  donwload>Software Development from A to Z_ A Deep Dive Into All the Roles Involved in the Creation of Software.pdf </a>
                    <i class="fa-solid fa-download"></i></div>

                    <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700">
                   
                    <a href="../../uploads/Software Engineering (3rd ed.), By K.K Aggarwal & Yogesh Singh.pdf"  download>Software Engineering (3rd ed.), By K.K Aggarwal & Yogesh Singh </a>
                    <i class="fa-solid fa-download"></i></div>
                    
                    <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700 " >
                    <a href="../../uploads/MongoDB_Architecture_Guide.pdf" download>MongoDB_Architecture_Guide.pdf </a>
                    <i class="fa-solid fa-download"></i></div>
                </div> */}

            <div className="absolute fd:w-[87%] fd:right-0 flex items-center justify-center w-screen h-screen backdrop-blur-lg bg-white/40 z-0">
                <div className="md:flex md:flex-col md:gap-20 fd:flex fd:flex-row fd:gap-40">
                    <Link
                        className="bg-seagreen/70 text-white se p-6 px-8 rounded-xl hover:text-[22px] hover:p-6 shadow-lg shadow-gray-400 "
                        to="/smbca1"
                    >
                        BCA 1
                    </Link>
                    <button
                        className="bg-seagreen/70 se text-white  rounded-xl p-6 px-8 hover:text-[22px] hover:p-6 shadow-lg shadow-gray-400 "
                        
                    >
                        BCA 2
                    </button>
                    <button
                        className="bg-seagreen/70 se text-white  rounded-xl p-6 px-8 hover:text-[22px] hover:p-6 shadow-lg shadow-gray-400 "
                        
                    >
                        BCA 3
                    </button>
                </div>
            </div>

        </div>

    )
}
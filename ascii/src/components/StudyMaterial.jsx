import React from "react";
import { Link } from "react-router-dom";

export default function StudyMaterial() {
    return (

        <div className="flex fixed h-screen w-screen">



            <div className="absolute fd:w-[87%] fd:right-0 flex items-center justify-center w-screen h-screen backdrop-blur-lg bg-white/40 z-0">
                <div className="md:flex md:flex-col md:gap-16 md:top-40 fd:flex fd:flex-row fd:gap-40">
                    <button
                        className="bg-seagreen/70 text-white se p-6 px-8 rounded-xl hover:text-[22px] hover:p-6 shadow-lg shadow-gray-400 "
                        
                    >
                        BCA 1
                    </button>
                    <button
                        className="bg-seagreen/70 se text-white  rounded-xl p-6 px-8 hover:text-[22px] hover:p-6 shadow-lg shadow-gray-400 "
                        
                    >
                        BCA 2
                    </button>
                    <Link
                        className="bg-seagreen/70 se text-white  rounded-xl p-6 px-8 hover:text-[22px] hover:p-6 shadow-lg shadow-gray-400 "
                        to = "/smbca3"
                    >
                        BCA 3
                    </Link>
                </div>
            </div>

        </div>

    )
}
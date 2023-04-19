import React from "react";

export default function StudyMaterial() {
    return (
        
            <div className="flex  mt-20  h-screen w-screen">
                <div className="absolute flex flex-col 
                items-center w-[75%] right-24
                 
                 ">
                    <a href="../../uploads/ASP.NET.pdf" download className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg">ASP.NET Book</a>
                    <a href="../../uploads/JavaScript Step by Step.pdf" download className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg">JavaScript Step by Step</a>

                    <a href="../../uploads/Modern Operating Systems (4th Edition).pdf" className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg" download>Modern Operating Systems (4th Edition)</a>
                    <a href="../../uploads/Software Development from A to Z_ A Deep Dive Into All the Roles Involved in the Creation of Software.pdf" className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg" donwload>Software Development from A to Z_ A Deep Dive Into All the Roles Involved in the Creation of Software.pdf</a>
                    <a href="../../uploads/Software Engineering (3rd ed.), By K.K Aggarwal & Yogesh Singh.pdf" className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg" download>Software Engineering (3rd ed.), By K.K Aggarwal & Yogesh Singh</a>
                    
                    <a href="../../uploads/MongoDB_Architecture_Guide.pdf" className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg" download>MongoDB_Architecture_Guide.pdf</a>
                </div>
            </div>
        
    )
}
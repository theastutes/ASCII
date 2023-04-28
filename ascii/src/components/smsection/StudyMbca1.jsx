import React, { useEffect, useState } from "react";
import AddMaterial from "./AddMaterial";
import axios from "axios";
import { server } from "../..";
import { Link } from "react-router-dom";
import SmCard from "./SmCard";

export default function StudyMbca1(){

    const [smfile, setSmfile] = useState([]);

    

    async function getfiles(){
    console.log("getfiles initiated");
    const smfiles = await axios.get(`${server}/api/sm/getsmnms`);
    console.log(smfiles.data);
    setSmfile(smfiles.data);
    }


    useEffect(()=>{
        getfiles();
    },[]);

    const filenm = smfile.map((item)=>{
        return(
            <SmCard name = {item.name}  >
            
            </SmCard>

        );
    });



    return (
        <div className="flex absolute h-screen w-screen">
            
            <AddMaterial/>

            <div className="absolute flex flex-col 
                items-center justify-center w-[65%] h-[94%] fd:right-44 
                 top-0 pt-20 
                 ">

                <div className="bg-white/50 px-[6px] p-[4px] rounded-lg  left-0  text-3xl mb-10"><i class="fa-solid fa-newspaper "></i></div>

                

                {/* <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700 ">
                    <a href="../../uploads/ASP.NET.pdf" download >ASP.NET Book </a>
                    <i class="fa-solid fa-download"></i></div>

                

                <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700">

                    <a href="../../uploads/JavaScript Step by Step.pdf" download >JavaScript Step by Step </a>
                    <i class="fa-solid fa-download"></i></div>

                <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700">
                    <a href="../../uploads/Modern Operating Systems (4th Edition).pdf" download>Modern Operating Systems (4th Edition) </a>
                    <i class="fa-solid fa-download"></i></div>

                <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700">



                    <a href="../../uploads/Software Development from A to Z_ A Deep Dive Into All the Roles Involved in the Creation of Software.pdf" donwload>Software Development from A to Z_ A Deep Dive Into All the Roles Involved in the Creation of Software.pdf </a>
                    <i class="fa-solid fa-download"></i></div>

                <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700">

                    <a href="../../uploads/Software Engineering (3rd ed.), By K.K Aggarwal & Yogesh Singh.pdf" download>Software Engineering (3rd ed.), By K.K Aggarwal & Yogesh Singh </a>
                    <i class="fa-solid fa-download"></i></div>

                <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700 " >
                    <a href="../../uploads/MongoDB_Architecture_Guide.pdf" download>MongoDB_Architecture_Guide.pdf </a>
                    <i class="fa-solid fa-download"></i></div> */}
                    
                    {filenm}
                    
            </div>
        </div>
    );
}
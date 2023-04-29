import React, { useEffect, useState } from "react";
import AddMaterial from "./AddMaterial";
import axios from "axios";
import { server } from "../..";
import { Link } from "react-router-dom";
import SmCard from "./SmCard";

export default function StudyMbca3(){

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
                items-center  w-[65%] h-[94%] fd:right-44 md:right-16 
                 top-0 pt-20 
                 ">

                <div className="bg-white/50 px-[6px] p-[4px] rounded-lg  left-0  text-3xl mb-10"><i class="fa-solid fa-newspaper "></i></div>
                    
                    {filenm}
                    
            </div>
        </div>
    );
}
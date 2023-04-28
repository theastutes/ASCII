import React, { useState } from "react";
import { server } from "../..";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SmCard(props){
    const [myfile,setMyfile] = useState("");
    const [params,setParams] = useState({name:""});
    const [isdownloaded, setIsDownloaded] = useState(false);

    async function getfile(event){
        console.log("getfile initiated");
        
        params.name = event.target.name;
        toast.success("File Downloading!")
        
        const myfile = await axios.get(`${server}/api/sm/getsm`,{params});
        console.log(myfile);
        setMyfile(myfile.data);
        
    }
    

    return(
        <div className="p-4 m-2 bg-white/80 w-full px-6 rounded-lg shadow-md flex flex-row justify-between text-zinc-700">
            <button name={props.name} onClick={getfile}> {props.name} </button>

            {myfile && <button className="bg-seagreen/40 px-2 p-1 rounded-full" onClick={(e)=>{setIsDownloaded(true)}} ><a href = {`data:application/pdf;base64,${myfile}`} download>
              {!isdownloaded ?(<i class="fa-solid fa-download"></i>):(<i class="fa fa-check-circle" aria-hidden="true"></i>)}
                </a></button>}
            </div>
    )
}
import React, { useRef, useState } from "react";
import { server } from "../..";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function AddMaterial() {

    const [file, setFile] = useState('');
    const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgress] = useState(0);
    const el = useRef();

    const handleChange = (e) => {
        setProgress(0);
        const cfile = e.target.files[0];
        console.log(cfile);
        setFile(cfile);
    }

    const uploadFile = async () => {
        const formData = new FormData();
        formData.append('file', file);
        setFile('');
        await axios.post(`${server}/api/sm/upSm`,formData).then((res)=>console.log(res,"File Uploaded!")).catch((err)=>console.log(err));
        toast.success(`File Uploaded!`);
    }

    return (
        <div className=" fixed flex flex-col items-end  right-10 md:right-10    bottom-14 md:px-4 z-10 text-seagreen">

            {file.name && <div className="flex flex-col items-end">
                <div className="bg-white/90 rounded-lg my-3 p-2 px-3 text-lg">{file.name} <button className="text-sm ml-2 text-zinc-700/80" onClick={(e)=>{setFile('')}}><i class="fa-solid fa-x"></i></button></div> 
            {/* <div className="progressBar ">{progress}</div> */}
            <button
                type="button"
                name="file"
                className="fd:px-8 bg-white/90 text-xl p-3 md:rounded-full px-4 fd:rounded-xl my-2 shadow-lg shadow-zinc-300"
                onClick={uploadFile}
            ><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </div>}

            

            <input type="file" ref={el} style={{display:"none"}} onChange={handleChange}></input>


            <button
                type="button"
                name="file"
                className="fd:px-8 bg-white/90 text-xl p-3 md:rounded-full px-4 fd:rounded-xl shadow-lg shadow-zinc-300"
                onClick={() => el.current.click()}
            ><i class="fa-regular fa-plus"></i></button>

        </div>
    )
}
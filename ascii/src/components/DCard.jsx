import React from "react";

export default function DCard(props) {



    return (
        <div className="bg-zinc-50/40 w-[65%] flex flex-col items-center  backdrop-blur-lg rounded-xl  m-6 dcard mx-auto">
            

            {/* Title */}
            <div className="p-3 m-[0.9px] bg-white/40 backdrop-blur-lg rounded-t-xl w-full ">
                {props.userprofile &&
                <p className="flex flex-row items-center text-sm py-2"><img className="w-6 mr-1 rounded-full" src = {props.userprofile}/>@{props.usern}</p>}

{!props.userprofile &&
                <p className="flex flex-row items-center text-xs py-2">@{props.usern}</p>}

                    <p className="text-2xl">{props.title}</p>
            </div>

            {/* Image */}
            <div className=" rounded-lg w-64">
                        <img src={props.img} className="card--image rounded-xl" />
            </div>
            

            {/* Content */}
            <div className=" relative  bg-white/40 p-6 w-full rounded-b-xl">
            <div className="bg-white/50 px-[6px] p-[4px] rounded-lg absolute left-1 top-1"><i class="fa-solid fa-newspaper"></i></div>
                      <p className="text-lg mt-4 bg-white p-2 rounded-lg"> {props.content} </p> 
            </div>

            {/* Date */}
            <div className="flex flex-row justify-between w-full  p-1 px-3">

                    <div className=" text-xs ">From : {props.dt.slice(0,10)}</div>

                    <div className=" text-xs ">To : {props.exdt.slice(0,10)}</div>
            </div>
                
        </div>
            
        
    );
}

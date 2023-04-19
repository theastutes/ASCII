import React from "react";

export default function DCard(props) {



    return (
        <div className="bg-zinc-50/40 w-[65%] flex flex-col items-center  backdrop-blur-lg rounded-xl  m-6 dcard">
            

            {/* Title */}
            <div className="p-3 m-[0.9px] bg-white/40 backdrop-blur-lg rounded-t-xl w-full ">
                <p className="text-xs py-2">@{props.usern}</p>

                    <p className="text-xl">{props.title}</p>
            </div>

            {/* Image */}
            <div className="rounded-lg w-64">
                        <img src={props.img} className="card--image rounded-xl" />
            </div>

            {/* Content */}
            <div className="  bg-white/40 p-6 w-full rounded-b-xl">
                      <p className="text-lg"> {props.td} </p> 
            </div>

            {/* Date */}
            <div>
                    <p className="text-[18px] "></p>
            </div>
                
        </div>
            
        
    );
}

import React from "react";

export default function Welcome(props) {
    return (
        <div >

            <div className="  w-screen mt-10 fd:ml-24 h-screen m-2 rounded-xl z-10 flex flex-col text-white items-center backdrop-blur-sm" >
                <h2 className="md:text-4xl text-5xl  mt-14 m-8 text-zinc-900 z-10">Hello Stranger!</h2>
                <p className="text-zinc-800 w-3/4 m-4 ml-24 z-10 ">Join our awesome community of students and enjoy learning, networking, and having fun! Sign up now and don’t miss out!</p>
                
                <button className="loginbtn text-lg m-14 z-10" onClick={props.onClick}>
                    Login
                </button>
                <h1 className="asci-text md:text-7xl text-8xl font-semibold welcomeascii opacity-90 m-4 ">ASCII</h1>
                <p className="text-zinc-800">Astute Students Community Interaction Interface</p>
                
            </div>
        </div>
    );
}
import React, { useEffect, useState } from 'react';
import store from 'store';
import { Link } from "react-router-dom";

export default function WelcomeBack({setwpage}){
    const [usernm,setUsernm] = useState('');
    useEffect(()=>{
        const usrr = store.get('user');
        if(usrr) {
        const usr = usrr.name;
        const nameindex = usr.indexOf(" ");
        const name = usr.substring(0,nameindex);
        setUsernm(name);}
    },[]);
    return (
        <div className='absolute w-screen mt-10 fd:ml-24 h-screen m-2 rounded-xl flex flex-col text-white items-center backdrop-blur-sm'>
            <h1 className='md:text-4xl text-5xl  mt-14 m-8 text-zinc-900 mb-14'> Hey! {usernm}</h1>
            <p className='text-zinc-800 m-4  mt-8'>Check out latest updates now!</p>
            
            <Link to = "/dashboard" onClick = {setwpage}>
                <button className='loginbtn text-lg m-8 '>Go to Dashboard</button>
            </Link>

        </div>
    );

}
import React, { useEffect, useState } from 'react';
import store from 'store';
import { Link } from "react-router-dom";

export default function WelcomeBack({setwpage}){
    const [usernm,setUsernm] = useState('');
    useEffect(()=>{
        const usr = store.get('user').name;
        const nameindex = usr.indexOf(" ");
        const name = usr.substring(0,nameindex);
        setUsernm(name);
    },[]);
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mb-5'> Hey! {usernm}</h1>
            <p className='m-5'>Check out latest updates now!</p>
            
            <Link to = "/dashboard" onClick = {setwpage}>
                <button className='loginbtn'>Go to Dashboard</button>
            </Link>

        </div>
    );

}
import React, { useEffect, useState } from 'react';
import store from 'store';

export default function WelcomeBack(){
    const [usernm,setUsernm] = useState({});
    useEffect(()=>{
        const usr = store.get('user').name;
        const nameindex = usr.indexOf(" ");
        const name = uname.substring(0,nameindex);
        setUsernm(name);
    },[]);
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='mb-5'> Hey! {usernm}</h1>
            <p className='m-5'>Check out latest updates now!</p>
            
            <Link to = "/dashboard">
                <button className='loginbtn'>Go to Dashboard</button>
            </Link>

        </div>
    );

}
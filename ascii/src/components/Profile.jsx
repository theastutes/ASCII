import React from "react";
import {  server } from "..";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import store from "store";

export default function Profile() {



  const [userr, setUserr] = useState({});

  useEffect(() => {
    // const userd = JSON.parse(localStorage.getItem('user'));
    // if(userd){
    //   setUserr(userd);
    // }
    const suser = store.get('user');
    if (suser) {
      setUserr(suser);
    }
    console.log('store : ', suser);
    

  }, []);
  // const usser = JSON.parse(localStorage.getItem("user"));


 
  const rollno = userr.roll;
  const trophy = userr.score;
  const cls = userr.clas;
  const name = userr.name;
  const mail = userr.email;
  const profile = userr.profileImage;
  const usern = userr.username;
  console.log(userr.name);

  const navigate = useNavigate();

  const logout = async () => {
    store.remove('user');

    await toast.success("Logged Out Successfully....!");
    window.location.reload();
  };


  return (
    <>
      <div className="profile flex flex-col absolute right-[24px] top-[62px] z-50 backdrop-blur-lg rounded-2xl bg-white/10 w-[260px] min-h-[255px] p-[5px] overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full h-[118px] overflow-hidden bg-white/20 rounded-2xl">
          <div className="profile-header w-60 grid grid-cols-2 pl-[1px] pr-[1px] ">
            <img
              className="rounded-3xl h-[100px] ml-[4.9px]"
              src={profile}
              alt="Profile Photo"
            />
            <div className="p-[13px] text-[13px] text-zinc-700 leading-tight font-bold flex flex-col gap-[14px] justify-center items-start w-[115px]  bg-white/60  rounded-xl mr-[4.9px]">
              <div className="flex flex-row justify-between">
                <i class="fa fa-users" aria-hidden="true"></i>  <div className="ml-3"> {cls}</div>
              </div>
              <div className="flex flex-row">
                <i class="fa fa-id-card" aria-hidden="true"></i>  <div className="ml-3">{rollno}</div>
              </div>
              <div className="flex flex-row justify-around">
                <i class="fa-solid fa-medal"></i> <div className="ml-3">{trophy}</div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-white  w-5/6 self-center mb-[8px]" />
        <div className="profile-content flex flex-col gap-[10px]  text-[13px] text-zinc-700 w-[240px] h-[140px] mx-[5px] mb-[9px] rounded-lg  bg-white/60 p-[5px] pt-[10px] pl-[12px]">
          <div>
            <i class="fa-solid fa-user"></i> : {name}
          </div>

          <div>
          <i class="fa fa-at" aria-hidden="true"></i> : {usern}
          </div>

          <div>
          <i class="fa fa-envelope" aria-hidden="true"></i> : {mail}
          </div>
        </div>
        <Link to="/">
          <button
            onClick={logout}

            className="profile-footer  flex flex-row gap-11 items-center justify-center text-sm w-[240px] h-[43px] mr-[10px] absolute bottom-0 bg-white/50 pl-[5px] pr-[5px] mx-[5px] mb-[10px] rounded-lg active:bg-black/40 active:inset-x-0.5"
          >
            Logout <i class="fa-solid fa-right-from-bracket "></i>
          </button>
        </Link>
      </div>
    </>
  );
}

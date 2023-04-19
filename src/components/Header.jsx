import React from "react";
import Profile from "./Profile";
import { useState } from "react";
import store from "store";
import PostCreate from "./PostCreate";
import { Link } from "react-router-dom";

export default function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const [ap, setAp] = useState(false);
  function toggle() {
    setShowProfile((prevShowProfile) => !prevShowProfile);
  }
  function crPost() {
    setAp((prev) => !prev);
    store.set("flag", true);
  }
  const user = store.get("user");
  return (
    <>
      <div className="fixed left-[0px] right-[0px] flex align-middle justify-end pt-[9px] pb-[9px] top-[0px] text-xl md:bg-white/50 fd:bg-white backdrop-blur-lg z-50 shadow-zinc-200 shadow-md rounded-md">
        <Link
          to = "/dashboard"
          className="flex flex-row text-[25px] mr-auto ml-6 md:ml-3 pl-2 pr-2  text-black"
        >
          <div className="asci-text font-bold"> ASCII</div>
          <div className="flex text-zinc-800 text-base ml-4 mt-1 md:hidden">
            Astute Students Community Interaction Interface
          </div>
        </Link>

        <button
          href="#"
          className="flex pl-2 pr-2 pt-1 pb-1 items-center justify-end bg-white rounded-2xl text-black border-2 border-zinc-600"
        >
          <i class="fa fa-search fa-sm" aria-hidden="true"></i>
          <input
            type="text"
            className=" fd:focus:w-[208px] fd:active:w-[200] hover:w-52 w-11 md:focus:w-20 fd:w-48 text-xs ml-4 "
            name="search"
            id="search"
            placeholder="Search"
          ></input>
        </button>

        <button
          disabled={!user}
          onClick={crPost}
          href="#"
          className="ml-10 mr-2 "
        >
          <i class="fa-regular fa-plus"></i>
        </button>

        <button
          disabled={!user}
          onClick={toggle}
          href="#"
          className="ml-6 mr-5 "
        >
          <i class="fa fa-user-circle fa-lg " aria-hidden="true"></i>
        </button>
      </div>
      {showProfile && <Profile />}
      {ap && <PostCreate setAp={setAp} />}
    </>
  );
}

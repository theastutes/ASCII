import React from "react";
import { Link } from "react-router-dom";


import store from "store";

export default function Sidebar({setwpage}) {
  const user = store.get("user");
  return (
    <div className="sidebar fixed flex flex-col items-left bg-white backdrop-blur-lg justify-top w-52 h-screen shadow-sm shadow-gray-400 z-20">
      <button disabled={!user} onClick = {setwpage} >
        <Link
          to={user ? `/dashboard` : ""} 
          className="flex flex-row justify-between p-4 ml-6 mt-20 w-40 text-sm hover:text-seagreen focused:text-seagreen mb-2   border-b-2 border-b-zinc-900 text-black sidebar-elements"
        >
          {" "}
          <i class="fa fa-home" aria-hidden="true"></i>
          Dashboard
        </Link>
      </button>

      <button disabled={!user} onClick = {setwpage} >
        <Link
          to={user ? `/quizop` : ""} 
          className="flex flex-row justify-between p-4 ml-6 w-40 text-sm   mb-2   border-b-2 border-b-zinc-900 text-black sidebar-elements"
        >
          
          <i class="fa fa-question-circle" aria-hidden="true"></i> 
          {" "}
          Quiz
        </Link>
      </button>

      <button disabled={!user} onClick = {setwpage} >
        <Link
          className="flex flex-row justify-between p-4 ml-6 w-40 text-sm   mb-2   border-b-2 border-b-zinc-900 text-black sidebar-elements"  
          to={user ? `/leaderboard` : ""}
        >
          <i class="fa fa-line-chart" aria-hidden="true"></i>
          Leader Board
        </Link>
      </button>

      <button
        disabled={!user}
        onClick = {setwpage}
        
      >
        <Link to={user?`/studymaterial`:""} className="flex flex-row justify-between p-4 ml-6 w-40 text-sm   mb-2   border-b-2 border-b-zinc-900 text-black sidebar-elements">
        {" "}
        <i class="fa fa-book" aria-hidden="true"></i>
        Study Material
        </Link>
      </button>
    </div>
  );


}

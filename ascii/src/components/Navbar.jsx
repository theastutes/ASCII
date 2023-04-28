import React from "react";
import { Link } from "react-router-dom";
import store from "store";

export default function Navbar() {
  const user = store.get("user");
  return (
    <div className="fixed w-screen rounded-lg navbar  z-50 flex justify-around bg-white/40 backdrop-blur-lg bottom-[1px] pt-2 pb-2 text-xl shadow-2xl shadow-black">
      <Link to={user ? `/dashboard` : ""} className=" text-xl focus:text-seagreen  text-black">
        <button>
          <i class="fa fa-home" aria-hidden="true"></i>
        </button>
      </Link>
      <Link to={user ? `/quizop` : ""} className="text-xl focus:text-seagreen text-black">
        <button>
          {" "}
          <i class="fa fa-question-circle" aria-hidden="true"></i>
        </button>
      </Link>
      <button>
        <Link to={user ? `/leaderboard` : ""} className="text-xl focus:text-seagreen text-black">
          <i class="fa fa-line-chart" aria-hidden="true"></i>
        </Link>
      </button>
      <div className="text-xl focus:text-seagreen text-black">
      <Link to={user?`/studymaterial`:""}>
        <i class="fa fa-book" aria-hidden="true"></i>
      
      </Link>
      </div>
    </div>
  );
}

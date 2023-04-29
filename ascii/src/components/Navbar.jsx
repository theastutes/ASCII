import React from "react";
import { Link } from "react-router-dom";
import store from "store";

export default function Navbar(props) {
  const user = store.get("user");
  return (
    <div className="fixed w-screen rounded-lg navbar  z-50 flex justify-around bg-white/40 backdrop-blur-lg bottom-[1px] pt-2 pb-2 text-xl shadow-2xl shadow-black">
      <Link to={user ? `/dashboard` : ""} onClick={props.setwpage(false)}  className=" text-xl  text-zinc-900">
        <button>
          <i class="fa fa-home" aria-hidden="true"></i>
        </button>
      </Link>
      <Link to={user ? `/quizop` : ""} onClick={props.setwpage(false)}  className="text-xl  text-zinc-900">
        <button>
          {" "}
          <i class="fa fa-question-circle" aria-hidden="true"></i>
        </button>
      </Link>
      <button>
        <Link to={user ? `/leaderboard` : ""} onClick={props.setwpage(false)}  className="text-xl  text-zinc-900">
          <i class="fa fa-line-chart" aria-hidden="true"></i>
        </Link>
      </button>
      <div className="text-xl  text-zinc-900">
      <Link to={user?`/studymaterial`:""} onClick={props.setwpage(false)}  >
        <i class="fa fa-book" aria-hidden="true"></i>
      
      </Link>
      </div>
    </div>
  );
}

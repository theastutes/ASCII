import React from "react";
import { Link } from "react-router-dom";

const quizOp = () => {
  return (
    <div className="absolute fd:w-[83%] fd:left-[206px] flex items-center justify-center w-screen h-screen backdrop-blur-lg bg-white/40 z-0">
      <div className="md:flex md:flex-col md:gap-32 fd:flex fd:flex-row fd:gap-40">
        <Link
          className="bg-seagreen/70 text-white se p-8 rounded-xl hover:text-[22px] hover:p-6 shadow-lg shadow-gray-400 "
          to="/quizcreate"
        >
          Create Quiz
        </Link>
        <Link
          className="bg-seagreen/70 se text-white  rounded-xl p-8 hover:text-[22px] hover:p-6 shadow-lg shadow-gray-400 "
          to="/quizlist"
        >
          Test Yourself
        </Link>
      </div>
    </div>
  );
};

export default quizOp;

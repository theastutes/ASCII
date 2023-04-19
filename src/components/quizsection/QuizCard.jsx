import React, { useContext, useState } from "react";
import QuizAttempt from "./QuizAttempt";
import { useNavigate } from "react-router-dom";

function QuizCard(props) {
  const [clicked, setClicked] = useState(false);

  function nqa(e) {
    e.preventDefault();
    setClicked(true);
    // <QuizContext.Provider value = {props.Qa}/>
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="btncls fd:hover:text-[20px] md:hover:text-[17px]  flex flex-col  backdrop-blur-lg rounded-3xl bg-white/80 fd:w-[800px] m-2 p-4 h-[90px] fd:h-20  fd:hover:m-6  fd:hover:h-20 w-full  md:h-20 md:hover:h-24 md:hover:w-[] min-w-[300px] shadow-lg shadow-zinc-300">

        <div className="flex flex-row w-full justify-between items-center text-base">
          <p>{props.Qa.title}</p>

          <p className="text-sm">{props.Qa.creator}</p>

          <button className="bg-seagreen text-white rounded-2xl p-2 w-20" onClick={nqa}>
            Open
          </button>
        </div>


      </div>
      {clicked && <QuizAttempt setClicked={setClicked} quiz={props.Qa} />}
      {/* {clicked && <div className='absolute bg-zinc-800 z-50 w-screen h-screen'>Hellow</div>} */}
    </>
  );
}
export default QuizCard;

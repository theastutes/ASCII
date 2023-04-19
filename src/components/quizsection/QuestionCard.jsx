

import React from "react";
import { useState } from "react";

// const q = document.getElementById('quest')
// const o1 = document.getElementById('option1');
// const o2 = document.getElementById('option2');
// const o3 = document.getElementById('option3');
// const o4 = document.getElementById('option4');

function QuestionCard(props) {
  const [qCard, setqCard] = useState({
    Question: "",
    ansops: {
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: "",
      isCorrect: "",
    },
  });
  const [st, setSt] = useState(false);
  

  function handleChange(event) {
    event.preventDefault();

    let copy = { ...qCard };
    if (event.target.id === "isCorrect") {
      if (event.target.checked) {
        copy.ansops.isCorrect = event.target.value;
      }
    } else if (event.target.id === "ansops") {
      let copy2 = { ...qCard.ansops };
      if (event.target.name === "ans1") {
        const nextAns = { ...qCard.ansops, ans1: event.target.value };
        const nextanss = { ...qCard, ansops: nextAns };
        setqCard(nextanss);
      } else if (event.target.name === "ans2") {
        const nextAns = { ...qCard.ansops, ans2: event.target.value };
        const nextanss = { ...qCard, ansops: nextAns };
        setqCard(nextanss);
      } else if (event.target.name === "ans3") {
        const nextAns = { ...qCard.ansops, ans3: event.target.value };
        const nextanss = { ...qCard, ansops: nextAns };
        setqCard(nextanss);
      } else if (event.target.name === "ans4") {
        const nextAns = { ...qCard.ansops, ans4: event.target.value };
        const nextanss = { ...qCard, ansops: nextAns };
        setqCard(nextanss);
      }
    } else {
      setqCard(() => ({ ...qCard, [event.target.name]: event.target.value }));
    }

    // console.log(qCard);
  }

  function handleCardSubmit(e) {
    e.preventDefault();
    console.log(qCard);
    // props.addCard(qCard.Card);
    // props.setCount(count+1);
  }
  

  return (
    <>
      <div className="flex flex-col bg-white/30 shadow-2xl shadow-gray-300 backdrop-blur-3xl  p-2  rounded-xl my-4">

        <div className="flex flex-row p-1  items-center justify-between bg-white/70 rounded-lg mb-2 shadow-gray-300 shadow-lg h-16">
        

          <label className="rounded-2xl px-2 backdrop-blur-xl bg-white/60 ">
             Question:
          </label>

          <input
            className="border-b-2 border-b-zinc-400 px-2 m-[2px] mr-4 w-[100%] h-10"
            type="text"
            name="Question"
            value={qCard.Question}
            onChange={handleChange}
          ></input>

          <div className="flex flex-row relative">
            <button
              className=" text-rose-600 mr-1"
              type="submit"

              disabled={st}
              hidden= {st}
              onClick={(e) => {
                e.preventDefault();
                const obj = qCard;
                props.addCard(obj);
                setSt(true);
                
              }}
            >
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </button>
            {st && (
              <div className="text-seagreen mr-1">
                <i className="fa-solid fa-square-check"></i>
              </div>
            )}
          </div>

        </div>

        <div className="flex items-center justify-center bg-white shadow-zinc-300 shadow-lg mb-2 p-1 rounded-lg px-2 mx-2">

          <label className="">a. </label>
          <input
            className="border-zinc-300 border-b-2 shadow-sm w px-2 w-full m-[2px] mx-4"
            id="ansops"
            type="text"
            name="ans1"
            value={qCard.ansops.ans1}
            onChange={handleChange}
          />
          <input
            className="px-2 rounded-lg m-[2px]"
            type="radio"
            name={props.qName}
            id="isCorrect"
            value={qCard.ansops.ans1}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-start bg-white shadow-gray-300 shadow-lg mb-2 p-1 rounded-lg px-2 mx-2">
          <label>b. </label>
          <input
            type="text"
            name="ans2"
            id="ansops"
            className="border-zinc-300 border-b-2 shadow-sm w px-2 w-full m-[2px] mx-4"
            value={qCard.ansops.ans2}
            onChange={handleChange}
          />
          <input
            className="px-2 rounded-lg m-[2px]"
            type="radio"
            name={props.qName}
            id="isCorrect"
            value={qCard.ansops.ans2}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-start bg-white shadow-gray-300 shadow-lg mb-2 p-1 rounded-lg px-2 mx-2">
          <label>c. </label>
          <input
            type="text"
            name="ans3"
            id="ansops"
            className="border-zinc-300 border-b-2 shadow-sm w px-2 w-full m-[2px] mx-4"
            value={qCard.ansops.ans3}
            onChange={handleChange}
          />
          <input
            type="radio"
            name={props.qName}
            id="isCorrect"
            value={qCard.ansops.ans3}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-start bg-white shadow-gray-300 shadow-lg mb-2 p-1 rounded-lg px-2 mx-2">
          <label>d. </label>
          <input
            type="text"
            name="ans4"
            id="ansops"
            className="border-zinc-300 border-b-2 shadow-sm w px-2 w-full m-[2px] mx-4"
            value={qCard.ansops.ans4}
            onChange={handleChange}
          />
          <input
            type="radio"
            name={props.qName}
            id="isCorrect"
            value={qCard.ansops.ans4}
            onChange={handleChange}
          />
        </div>


      </div>
    </>
  );
}
export default QuestionCard;
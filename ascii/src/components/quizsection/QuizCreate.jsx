import React, { useContext } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import QuestionCard from "./QuestionCard";
import { useEffect } from "react";
import QuizAttempt from "./QuizList";
import QuizList from "./QuizList";
import { Context } from "../..";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function QuizCreate() {
  const [c, setC] = useState(0);


  const [quizForm, setQuizForm] = useState({
    title: "",
    creator: "",
    time: "",
    questions: [],
  });
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState(quizForm.questions);
  const [sb, setSb] = useState(false);

  const Card = {
    Question: "",
    ansops: {
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: "",
      isCorrect: "",
    },
  };
  const navigate = useNavigate();

  const questionCards = cards.map((card) => (
    <QuestionCard qCount={count} addCard={addCard} key={nanoid(count)}  qName={nanoid(count)} />
  ));

  function addCard(cd) {
    let copy = { ...quizForm };
    copy.questions.push(cd);
    console.log(quizForm);
  }

  function newCard(e) {
    e.preventDefault();

    setCards([...cards, Card]);
    setCount(count + 1);
    setC(c + 1);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await axios.post("https://ascii-server.onrender.com/api/quizzes/quizform", {
        headers: {
          "Content-Type": "application/json",
        },
        quizForm,
      }).then((res) => {
        console.log("response : ", res);
      }).catch((err) => {
        console.log(err);
      });


  }

  function handleChange(event) {
    event.preventDefault();
    setQuizForm(() => ({
      ...quizForm,
      [event.target.name]: event.target.value,
    }));
  }


  return (
    <div className="flex-wrap absolute top-[48px] fd:bottom-0 fd:w-[83%] fd:left-[203px] md:w-screen qc-con md:bottom-[40px] p-[10px] pt-[190px] overflow-hidden flex flex-row justify-center">

          {!sb && <button
            className="absolute top-6 right-10 loginbtn text-white "
            type="submit"
            onClick={(e)=>{
              handleSubmit(e);
              setSb(true);
            }}>
            
            Submit {" "} <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </button>}
          {sb && <button
            className="absolute top-6 right-10 loginbtn text-white "
            type="submit"
            onClick={handleSubmit}>
            
            Submitted {" "} <i class="fa fa-check-circle" aria-hidden="true"></i>
          </button>}

          <button className="absolute top-0 right-0 " onClick={(e)=>{navigate('/quizop')}} >
          <i class="fa-solid fa-x"></i>
          </button>

      <div className="absolute top-[3%] bg-white/30 p-4 rounded-xl w-[70%]">

      

        <div className="flex flex-col gap-2 bg-white/80 p-4 rounded-xl m-2 ">

            <input
              type="text"
              className=" se p-1 w-[100%] border-b-2 border-zinc-300 hover:border-zinc-400 focus:border-zinc-400 focus:text-lg focus:h-20  h-16 "
              name="title"
              id="title"
              placeholder="Title"
              value={quizForm.title}
              onChange={handleChange}
            ></input>


            <input
              type="text"
              className=" se p-1 px-2 border-b-2 border-zinc-300   w-[100%] hover:border-zinc-400 focus:border-zinc-400 focus:h-20 focus:text-lg  h-16"
              id="creator"
              name="creator"
              placeholder="Created by"
              value={quizForm.creator}
              onChange={handleChange}
            ></input>
         

            <input
              type="number"
              className=" se p-1 px-2 border-b-2 border-zinc-300   w-[100%] hover:border-zinc-400 focus:border-zinc-400 focus:h-20 focus:text-lg h-16"
              id="ttime"
              name="time"
              placeholder="Total Time"
              value={quizForm.time}
              onChange={handleChange}
            ></input>
      
          <div className="flex flex-row gap-2 justify-between mx-2 my-3 rounded-2xl ">

            <button
              className="bg-white px-2 rounded-2xl loginbtn text-white"
              type="button"
              onClick={newCard}>
              Add Question
            </button>

            <div className="bg-white rounded-2xl px-2">
              {`Total Questions : ${c}`}
            </div>

          </div>
        </div>

        <div>
          {/* {Question Cards} */}
          <div>{questionCards}</div>

          

        </div>

      </div>

    </div>
  );
}

export default QuizCreate;

// import React, { useContext } from "react";
// import { useState } from "react";
// import { nanoid } from "nanoid";
// import QuestionCard from "./QuestionCard";
// import { useEffect } from "react";
// import QuizAttempt from "./QuizList";
// import QuizList from "./QuizList";
// import { Context } from "../..";
// import axios from "axios";

// // import { MongoClient } from "mongodb";

// function QuizCreate() {
//   const [c, setC] = useState(0);
//   // const mongoClient = new MongoClient('mongodb+srv://CWH1234:53yjka21@cluster0.n1ygks6.mongodb.net/?retryWrites=true&w=majority');

//   // const data = await mongoClient.db().collection('harryCollect').find({}).toArray();

//   // await data.connect();

//   const [quizForm, setQuizForm] = useState({
//     title: "",
//     creator: "",
//     time: "",
//     questions: [],
//   });
//   const [count, setCount] = useState(1);
//   const [cards, setCards] = useState(quizForm.questions);
//   const [ss, setSs] = useState(false);

//   // const datarray = JSON.parse(alldata);

//   const Card = {
//     Question: "",
//     ansops: {
//       ans1: "",
//       ans2: "",
//       ans3: "",
//       ans4: "",
//       isCorrect: "",
//     },
//   };

//   const questionCards = cards.map((card) => (
//     <QuestionCard qCount={count} addCard={addCard} key={nanoid(count)} />
//   ));

//   function addCard(cd) {
//     let copy = { ...quizForm };
//     copy.questions.push(cd);
//     console.log(quizForm);
//   }

//   function newCard(e) {
//     e.preventDefault();
//     // const newC = {...quizForm,questions:Card}
//     setCards([...cards, Card]);
//     setCount(count + 1);
//     setC(c + 1);
//   }

//   async function handleSubmit(e) {
//     setSs(true);
//     e.preventDefault();

//     await axios
//       .post("http://localhost:4000/api/quizzes/quizform", {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(quizForm),
//       })
//       .then((res) => {
//         console.log("response : ", res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });


//     // const response = await fetch("http://localhost:4006/quizForm", {
//     //   method: "POST",
//     //   body: JSON.stringify(quizForm),
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     // });
//     // const dat = await response.json();
//     // console.log(dat);
//   }

//   function handleChange(event) {
//     event.preventDefault();
//     setQuizForm(() => ({
//       ...quizForm,
//       [event.target.name]: event.target.value,
//     }));
//   }
//   //  const qln=()=>{
//   //   <Navigate  to="/quizlist" replace={true}/>
//   //  }

//   return (
//     <div className="flex-wrap absolute top-[48px] fd:bottom-0 fd:w-[83%] fd:left-[203px] md:w-screen qc-con md:bottom-[40px] p-[10px] pt-[190px] overflow-hidden flex flex-row justify-center">
//       <div className="absolute top-[6%] backdrop-blur-lg bg-white/50 p-4 rounded-xl ">
//         <div className="flex flex-row gap-2 justify-between mx-2 rounded-2xl ">
//           <button
//             className="ab bg-white px-2 rounded-2xl shadow-sm shadow-gray-500 active:text-[15.5px]"
//             type="button"
//             onClick={newCard}
//           >
//             Add Questions
//           </button>
//           <div className="td bg-white rounded-2xl px-2 shadow-sm shadow-gray-500">
//             {`Total Questions => ${c}`}
//           </div>
//         </div>
//         <div className="flex flex-col gap-4 bg-white/20 backdrop-blur-lg p-4 rounded-xl m-2 shadow-gray-400 shadow-xl">
//           <div className="flex flex-col justify-between backdrop-blur-lg shadow-gray-400 shadow-lg bg-zinc-300 rounded-xl">
//             <label
//               className="bg-white/80 p-1 px-2 rounded-xl m-1 "
//               htmlFor="title"
//             >
//               Title
//             </label>
//             <input
//               type="text"
//               className="p-1 px-2 rounded-xl m-1"
//               name="title"
//               id="title"
//               placeholder="Title"
//               value={quizForm.title}
//               onChange={handleChange}
//             ></input>
//           </div>
//           <div className="flex flex-col justify-between backdrop-blur-lg shadow-gray-400 shadow-lg bg-zinc-300 rounded-xl">
//             <label
//               className="bg-white/80 p-1 px-2 rounded-xl m-1 "
//               htmlFor="creator"
//             >
//               Creator
//             </label>
//             <input
//               type="text"
//               className="p-1 px-2 rounded-xl m-1"
//               id="creator"
//               name="creator"
//               placeholder="Created by"
//               value={quizForm.creator}
//               onChange={handleChange}
//             ></input>
//           </div>
//           <div className=" flex flex-col justify-between backdrop-blur-lg shadow-gray-400 shadow-lg bg-zinc-300 rounded-xl">
//             <label
//               className="bg-white/80 p-1 px-2 rounded-xl m-1 "
//               htmlFor="ttime"
//             >
//               Total Time
//             </label>
//             <input
//               type="number"
//               className="p-1 px-2 rounded-xl m-1"
//               id="ttime"
//               name="time"
//               placeholder="Total Time"
//               value={quizForm.time}
//               onChange={handleChange}
//             ></input>
//           </div>

//           <div>{questionCards}</div>

//           <div className="flex flex-row relative items-center">
//             <button
//               className="bg-black text-white sb active:text-[17px] active:shadow-cyan-400 shadow-gray-500 shadow-lg px-2 m-2 rounded-xl mx-auto"
//               type="submit"
//               onClick={handleSubmit}
//               disabled= {ss}
//             >
//               {" "}
//               submit
//             </button>
//             {ss && (
//               <div className="absolute text-green-400">
//                 <i class="fa-solid fa-thumbs-up fa-bounce"></i>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default QuizCreate;
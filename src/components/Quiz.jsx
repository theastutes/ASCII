import React, { useContext } from "react";
import { useNavigate, redirect } from "react-router-dom";
import { Context } from "..";

export default function Quiz() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return navigate("/login");

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const [showScore, setShowScore] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [qn, setQn] = React.useState(1);

  const handleAnswerButtonClick = (isCorrect) => {
    setQn(qn + 1);

    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className=" quiz-container flex absolute items-center justify-center z-10">
      <div className="quiz relative flex w-screen m-5 bg-white/50 backdrop-blur-lg  justify-center rounded-2xl h-62  min-w-[350px] max-w-xl shadow-lg shadow-gray-400 items-center overflow-hidden">
        {showScore ? (
          <div className="score-section rounded-2xl p-[40px] bg-white/90 backdrop-blur-lg text-2xl font-bold pt-20 pb-20 min-w-52 z-1 my-[90px] shadow-lg shadow-gray-400">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <div className=" flex flex-col  h-[95%] p-[20px] bg-white/50 shadow-sm shadow-gray backdrop-blur-lg rounded-2xl gap-[15px] w-full">
            <div className="question-section flex flex-col justify-center p-[5px]  relative w-full shadow-lg shadow-gray-300 bg-white bachdrop-blur-lg rounded-2xl gap-[20px] h-[30%] ">
              <div className="question-count p-2">
                <span>Question {qn}</span>/{questions.length}
                <span> : </span>
              </div>
              <div className="question-text flex justify-center pt-1 p-4">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section shadow-lg shadow-gray-400 rounded-2xl backdrop-blur-lg flex flex-col justify-center w-full h-[65%] text-black ">
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <button
                  className="flex ans-opt shadow-lg shadow-gray justify-center p-1 ml-4 mr-4 m-2 rounded-3xl bg-white active:border-2 active:bg-zinc-600"
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

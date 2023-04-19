import React from 'react'

import store from 'store';
function QuizAttempt(props) {


  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  

  const [showScore, setShowScore] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [qn, setQn] = React.useState(1);
  


  const handleAnswerButtonClick = (event) => {
    event.preventDefault();
    setQn(qn + 1);

    console.log("Event Value", props.quiz.questions[currentQuestion].ansops.isCorrect);

    if (event.target.value === props.quiz.questions[currentQuestion].ansops.isCorrect) {

      setScore((prev) => prev + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < props.quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      
    }
  };

  return (
    <div className="backdrop-blur-lg bg-white/70 quiz-container flex flex-col absolute items-center justify-center z-50 ">

      <button className='absolute top-2 right-4' onClick={() => { props.setClicked(false) }}><i class="fa-solid fa-x"></i></button>

    <div className='flex flex-col items-center absolute top-12'>
      <h2 className='text-3xl mb-3'>{props.quiz.title}</h2>
      <h3 className=''>{props.quiz.creator}</h3>
      
    </div>

      <div className="quiz relative flex w-screen m-5 bg-white/50 backdrop-blur-lg  justify-center rounded-2xl h-62  min-w-[350px] max-w-xl shadow-lg shadow-gray-400 items-center overflow-hidden">
        

        {showScore ? (
          <div className="score-section rounded-2xl p-[40px] bg-white/90 backdrop-blur-lg text-2xl font-bold pt-20 pb-20 min-w-52 z-1 my-[90px] shadow-lg shadow-gray-400">
            You scored {score} out of {props.quiz.questions.length}
          </div>
        ) : (
          <div className=" flex flex-col  h-[95%] p-[20px] bg-white/50 shadow-sm shadow-gray backdrop-blur-lg rounded-2xl gap-[15px] w-full">

            {/* {Upper Container} */}

            <div className="question-section flex flex-col justify-center p-[5px]  relative w-full shadow-lg shadow-gray-300 bg-white bachdrop-blur-lg rounded-2xl gap-[20px] h-[30%] ">

              <div className="question-count p-2">
                <span>Question {qn}</span>/{props.quiz.questions.length}<span> : </span>
              </div>

              <div className="question-text flex justify-center pt-1 p-4">
                {props.quiz.questions[currentQuestion].Question}
              </div>

            </div>

            {/* Lower Container */}

            <div className="answer-section shadow-lg shadow-gray-400 rounded-2xl backdrop-blur-lg flex flex-col justify-center w-full h-[65%] text-black ">

              <button className='flex ans-opt shadow-lg shadow-gray justify-center p-1 ml-4 mr-4 m-2 rounded-3xl  active:border-2 active:bg-zinc-600' value={props.quiz.questions[currentQuestion].ansops.ans1}
                onClick={
                  handleAnswerButtonClick
                }
              >
                {props.quiz.questions[currentQuestion].ansops.ans1}
              </button>

              <button
                className="flex ans-opt shadow-lg shadow-gray justify-center p-1 ml-4 mr-4 m-2 rounded-3xl bg-white active:border-2 active:bg-zinc-600" value={props.quiz.questions[currentQuestion].ansops.ans2}
                onClick={
                  handleAnswerButtonClick
                }
              >
                {props.quiz.questions[currentQuestion].ansops.ans2}
              </button>

              <button
                className="flex ans-opt shadow-lg shadow-gray justify-center p-1 ml-4 mr-4 m-2 rounded-3xl bg-white active:border-2 active:bg-zinc-600" value={props.quiz.questions[currentQuestion].ansops.ans3}
                onClick={
                  handleAnswerButtonClick
                }
              >
                {props.quiz.questions[currentQuestion].ansops.ans3}
              </button>

              <button
                className="flex ans-opt shadow-lg shadow-gray justify-center p-1 ml-4 mr-4 m-2 rounded-3xl bg-white active:border-2 active:bg-zinc-600" value={props.quiz.questions[currentQuestion].ansops.ans4}
                onClick={
                  handleAnswerButtonClick
                }
              >
                {props.quiz.questions[currentQuestion].ansops.ans4}
              </button>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizAttempt;
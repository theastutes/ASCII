import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {server} from "../../";
import QuizCard from "./QuizCard";
function QuizList() {
  const [allQuiz, setAllQuiz] = useState([]);
  const [tdata, setTdata] = useState({});

  const getQuiz = async () => {
    // const response = await fetch("http://localhost:4006/quizForm", {
    //   method: "GET",
    // });

    const quizzes = await axios.get(`${server}/api/quizzes/getquiz`);

    // const data = await response.json();
    // // console.log(data);
    setAllQuiz(quizzes.data);
  };
  const navigate = useNavigate();

  const datas = allQuiz.map((thisdata) => (
    <div>
      <QuizCard Qa={thisdata} />
    </div>
  ));

  useEffect(() => {
    getQuiz();
  }, []);

  return <div className="QList z-0">{datas}</div>;
}
export default QuizList;

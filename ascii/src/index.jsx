import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createContext } from "react";
import "./index.css";
import Home from "./Home";
import QuizAttempt from "./components/quizsection/QuizAttempt";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import QuizList from "./components/quizsection/QuizList";
import QuizCreate from "./components/quizsection/QuizCreate";
import StudyMaterial from "./components/StudyMaterial";
import { Toaster, toast } from "react-hot-toast";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import PostCreate from "./components/PostCreate";
import quizOp from "./components/quizsection/quizOp";
import LeaderBoard from "./components/LeaderBoard";
import StudyMbca1 from "./components/smsection/StudyMbca1";

export const server = "https://ascii-server.onrender.com";

const usser = JSON.parse(localStorage.getItem("user"));

export const Context = createContext({
  isAuthenticated: usser ? true : false,
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState({
    isAuthenticated: usser ? true : false,
  });
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [coount, setCoount] = useState(0);

  return (
    <Context.Provider
      value={{
        coount,
        setCoount,
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        user,
        setUser,
      }}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppWrapper />
    <Routes>
      <Route path="/home" Component={Home} />
      <Route path="/login" Component={Login} />
      <Route path="/signup" Component={Signup} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/quizlist" Component={QuizList} />
      <Route path="/quizattempt" Component={QuizAttempt} />
      <Route path="/quizcreate" Component={QuizCreate} />
      <Route path="/quizop" Component={quizOp} />
      <Route path="/postcreate" Component={PostCreate} />
      <Route path="/leaderboard" Component={LeaderBoard} />
      <Route path = "/studymaterial" Component={StudyMaterial}/>
      <Route path="/smbca1" Component={StudyMbca1}/>
    </Routes>
    <Toaster />
  </BrowserRouter>
);

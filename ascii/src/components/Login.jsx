import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context, server } from "../index";
import toast from "react-hot-toast";
import store from "store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const navigate = useNavigate();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   navigate("/home");
  // };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Submit handler successful");
    setLoading(true);

    try {
      const { data } = await axios.post(
        // `${server}/api/v1/users/login`
        `${server}/api/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      store.set('user',data.user);
      store.set('score',{uscore:data.user.score});
      console.log(data.user);

      toast.success("logged in successfully");
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(response.data.message);
      console.log(error);
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));
  // useEffect(() => {
  //   if (user) return navigate("/home");
  // }, [user]);
  let vis = 1;
  if (user) {
    vis = 0;
  } else {
    vis = 1;
  }

  return (
    <div styles={{ display: 0 }} className="logout absolute flex right-auto left-auto items-center justify-center w-screen h-screen bg-white/40 backdrop-blur-xl z-50  ">
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center justify-center  p-[20px] gap-14 bg-zinc-50/80 rounded-xl max-w-[500px] max-h-[500px]  w-[85%] h-[70%] shadow-gray shadow-lg"
      >
        <input
          className="w-[90%] p-[10px] px-[14px] shadow-zinc-200 shadow-lg rounded-md"
          placeholder="Email"
          required
          type="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[90%] p-[10px] px-[14px] shadow-zinc-200 shadow-lg rounded-md"
          placeholder="Password"
          required
          type="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          // disabled={loading}
          className="loginbtn text-white text-lg 
          active:text-base
          opacity-90"
          type="submit"
         
        >
          Login
        </button>
        <Link to="/signup">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;

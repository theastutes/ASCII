import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { Context, server } from "../index";
import toast from "react-hot-toast";
import axios from "axios";
import store from "store";

const Signup = () => {
  const [name, setName] = React.useState("");
    const [roll, setRoll] = React.useState();
    const [clas, setClas] = React.useState("");
    const [admyr, setAdmyr] = React.useState();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
const temp = name;
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const navigate = useNavigate();

  const lgn = () => {
    navigate(-1);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let temp = name.replace(" ","");
    const uname = temp.toLowerCase();
    
    const username = `${uname}${roll}${admyr}`;

    try {
      const { data } = await axios.post(
        `${server}/api/users/new`,
        {
          name,
          email,
          password,
          roll,
          clas,
          admyr,
          username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      await toast.success(data.message);
      navigate(-1);
    } catch (error) {
      toast.error("somthin's ain't right bro");
      
    }
  };


  // useEffect(() => {
  //   console.log("Use Effect used");
  //   if (user) return navigate(-1);
   
  // }, [user]);

  return (
    <div className="signup absolute z-50  flex items-center justify-center w-screen h-screen">
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center justify-center  p-4 gap-4 bg-zinc-100/60 backdrop-blur-xl rounded-xl max-w-[500px] max-h-[900px]  w-[85%] h-[78%] shadow-lg shadow-zinc-300"
      >
        <input
          className="w-[90%] p-[5px] px-[10px] rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="w-[90%] p-[5px] px-[10px] rounded-lg"
          placeholder="Roll No"
          type="number"
          onChange={(e)=>setRoll(e.target.value)}
          value={roll}
        />
        <select
          name="clas"
          className="w-[90%] p-[5px] px-[10px] rounded-lg"
          id="clas"
          onChange={(e) => setClas(e.target.value)}
        >
          <option value="">--Select Class--</option>
          <option value="BCA 1">BCA 1</option>
          <option value="BCA 2">BCA 2</option>
          <option value="BCA 3">BCA 3</option>
        </select>
        <input
          className="w-[90%] p-[5px] px-[10px] rounded-lg"
          placeholder="Admission Year"
          type="text"
          value={admyr}
          onChange={(e)=>setAdmyr(e.target.value)}
        />
        <input
          className="w-[90%] p-[5px] px-[10px] rounded-lg"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-[90%] p-[5px] px-[10px] rounded-lg"
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="text-white  text-lg rounded-lg active:text-base  loginbtn se"
          type="submit"
        >
          Sign Up
        </button>
        <p>Already a User?</p>
        <span className="text-xs">
          <button onClick={lgn}>Login</button>
        </span>
      </form>
    </div>
  );
};

export default Signup;

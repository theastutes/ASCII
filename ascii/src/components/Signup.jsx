import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { server } from "../index";
import toast from "react-hot-toast";
import axios from "axios";
import store from "store";
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      400,
      400,
      "JPEG",
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

const Signup = () => {
  const [name, setName] = React.useState("");
    const [roll, setRoll] = React.useState();
    const [clas, setClas] = React.useState("");
    const [admyr, setAdmyr] = React.useState();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const imageUploader = React.useRef(null);
  const [profileImage, setprofileImage] = React.useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAeUSURBVHic5ZtdiFZFGMd/8666i6tYF5luulsYmhCu34qopIhdqCR6IXWloFJSkHqlGOZVIGIGZtZNN3pTN0JiimhLaH6t4kZgfqy2fqxZmoqKrR9NFzOvznnOnLPvmfe8u0YPDLvnnHn+z/953jkzc56ZUVprKilKqVpgOjAUqAMGir8A7cBV8fcMsF9rfa+i/CoRAKVUPTDblmlATSDU38APwE5gp9b6Yj4MHdFa51IwTq4EWgBdodJibdTkxjsHx6uAxcDlDI48Aq4AzbZcsfdK1b9sbVZ1awCAecCpTsj+BmwC5gCjgAFAwYNVsM9G2bqbrG4a9ilgXpcHAGgADqUQOwl8DIzMoYWNtFgnU+wdAhq6JADAZOBaApEjwNRynU6xPdXa8Nm+BkyuaACARUCHx3grsAA7qlSyAMraavXw6AAW5R4ATEe30WPwPrAC6FVpxz2celnb9z28NpbaQZbq/A6PkXZgQlc77uE3wXKR/HaUEoROJ0JKqY3AcnH7GDBXa92equzHqwbGAoOJzgQvAc1a644AzDqMw+PEo0+11itSlTuJ7iLikd1GwEQEmAV8C9zxYBbLHVtnVgB+jeUmMVP7hDTAycQ7vG0BxEYDTSlOJ5UmYHSAPRmEDlJGhySQBuJD3dGsvzywFHgQ4HyxPACWBrSEowLnGgnzhCQQOclpB+oyElmf4NQtYD+wAXjblg323q0EnfUZbdcR7xgPlRQAzPRWDnWZentgScKvuQbokaLXw9bxtZolGTlMID5ExqbNUqmK+Nx+RUbDI4n3HS1AYwaMRuJflR1knFpj5gkuxinE0CgVFguFVjJOcoB9AuNnoDoLhsWptrou1r6MGL2IzxgXewOA6TzkJ+2CjAZnepr9qKzOO3ijPK/DzIwYC4T+ZZzO3K24UlQ8Qsa5PbBdYKwNdd7BXCswt2fUV8Q/oFb6AiDfuUxfdUBP4Kajfw/omUMAelqsIu7NrLiYr8hInxQJAFAvKpwMIDpWYBws13kH+6DAHhuAIfMJ9VprChiZTVR2kF0Gi+vjARhJIrGkrVJE+jQbyDUAdeK6kgGQtkoRfwBs3n6a86BNa30ywMBDcV0VgJEkEkva6lSsT23OrWlKqdoCZtHCzduH/PoAF8T1mEAcn0is84E4rm81wPQCZsXGlX2B4F0ZAGmrVJG+DS0Qf58uB4K3YT5mitKolApdEXoiFqPRufUX0aacRaRvdQXMGp0rV0OQtdYPMROhotQA60KwhKwj+opu11o/CsSSvg2EaLLiEZ5FiwxjbSPRsfYxMKkMvEkWw8UcUQZegegKVBPAaefGlRwmLXsF4TNAnwCcPlbXxdqbA78rDt5piObomnMwMAi4IYifI8OiBSYdd05g3AAG5cCv2cG8IwNwrFwD1sh8Qb74OmwAeqfo9bZ1ZLPXwPycuB1zA6BsMygOhZe01vXkIEqpd4HN+CcxvwAneDrDG4NJnr6O+fhx5THwvtZ6a068LvJ0Kn0Gop1gRx5RdqI9C7hL/NcstdwlIEXeCSc3W9VUwCQPi9JLKfV8TpGuxvQHt8uAuQ3UKaVkqwjl9BwmS1SU9gLxsfHFMo30Vkp9iElFbSXsw6UodcBXwDml1Hs2qOXIAHF9tQfRFgAwHPg1BF0pNQ6zstOQUu06ZuPD77YoS2wgpsX09+jUA1uAVUqpBVrrQyH8gGHiuh3Mbgz3vfsy8N36AP/SucYkNFZhcnypaTZgBPAR0d7aLR2IxGYGjl8IrDkAtUTz520ZQauBbxLI7gemlNFhTSCeZS6Wz8meGrvg6N8HaosPdgnw4RlAv/aQawfezLHnnoF5LaWd7zprUQ7Ga0J3l9b6SU5wmXi4PEOzl6R2A/3zct6x1Q/Y47G3pkT95UJvmRuAzElR4A3MpEY2y4ptk8FMqj4TNh8D00vQ9SZF3QoyLT4nBawe+EPU31ZJ54X9LcL2NWBgSn3Z0UfT4raSXBg5nPIrnBB195Cy6FmhlrBbcPgxiQNwWNT1Loz4lsZmeMDeEnVuAy91lfMOj36YSZzL5R1PvRmijn9pzFaWi6MHEQkS4HtRJ9MGhpyDsFBwaRLPC8QXVfyLo07Tksvjq53nrwD/OM+Od9V7nxAARXw3yDDn+WrxLH153CrJDRIPgYn22Sfi2cLuct7hK1d/N9j7E4mPUukbJBxQuUXmPPAC0X1D18lx23oZAagmmoH603I9L3wobYuMBW0gvknqrLje3N3OO3w3C24ynZa4Saq4NhgRrXUbJq31wLn9qqh2wKfbTdIkroc4/z/ApNP8awmdRNa3UbJYXu7uX97hKWeybgnbKOmA+zZJ3yMg1V3BANQS3URRLBs71S0BPGmz9Flg/DPg/Hji/ZOmxM3SpRpJ2i7/EJO8KPvsToDjVda2HOo0eW6XF0aTDkz8RBmJjwDnp1ibkkdlDkwI42lHZg6Qcxpb2J5lbfhsV/7IjEOkgfRDUy2YJMuQHJweYrHSziN23aEpQa6UY3OtmGTkXMxcom8KXl9bZ67V8Z0Lckv3HJsTpEMOTt7HbHI4Zksb/rM/SeXZODgpAvGfPDr7vz88XZEARAw848fn/wUIWUDRkbtlawAAAABJRU5ErkJggg==");


  const navigate = useNavigate();

  const lgn = () => {
    navigate(-1);
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    // const image = sizeReducer(file);
    const image = await resizeFile(file);
    // const base64 = await convertBase64(file);

    setprofileImage(image);

    console.log("resized", image);

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
          profileImage,
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
        
        <div className="flex justify-center items-center bg-zinc-200 h-20 w-20 rounded-full">
        <input
                type="file"
                accept="image/*"
                onChange={uploadImage}
                name="photo"
                ref = {imageUploader}
                multiple="false"
                style={{ display: "none" }}
              />
        <div className="hover:cursor-pointer" name = "profilephoto" onClick={() => imageUploader.current.click()} >
        <img className="rounded-full" src = {profileImage} /></div>
        </div>

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

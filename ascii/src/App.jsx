import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Context, server } from "./index";
import Login from "./components/Login"
import Home from "./Home"
import Welcome from "./Welcome"
import { Link } from "react-router-dom"
import store from "store"

const App = () => {
  const user = store.get('user');
  const { isAuthenticated } = useContext(Context);
  console.log(user);
  // const user = false;
  const [page,setPage] = useState(false);
  function handleUser(){
    setPage(true);
  }

  

  return (
    <div className="app">
      {!user && !page && <Welcome onClick = {handleUser}/>}
      
      {!user && page && <Login />}
      {/* {!user && <Login/>} */}
      {/*       {user && <div className="absolute w-screen h-screen flex justify-center items-center ">Welcome Nena....</div>} */}
      <Home />
      <Toaster />
    </div>
  );
};

export default App;
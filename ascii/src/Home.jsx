import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Context } from ".";
import { useNavigate } from "react-router-dom";

export default function Home() {
  
  // const { isAuthenticated } = useContext(Context);
  // const navigate = useNavigate();
  // if (!isAuthenticated) return navigate("/login");
  const navigate = useNavigate();
  
  return (
    <>
      <Header />

      <Sidebar />

      <Navbar />
      

      {/* <div
        className="theme-toggle absolute w-[50px] h-[50px] bg-white/50 backdrop-blur-lg z-50 rounded-full 
 pl-[15px] pt-[10px] text-2xl shadow-lg shadow-gray"
      >
        <i class="fa-solid fa-moon"></i>
      </div> */}
    </>
  );
}

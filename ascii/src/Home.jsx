import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import WelcomeBack from "./components/WelcomeBack";
export default function Home() {
  
  // const { isAuthenticated } = useContext(Context);
  // const navigate = useNavigate();
  // if (!isAuthenticated) return navigate("/login");

  const [wpage,setwpage] = useState(true);
  
  return (
    <>
      <Header />

      <Sidebar setwpage = {setwpage}/>

      {wpage && <WelcomeBack setwpage = {setwpage}/>}

      <Navbar setwpage = {setwpage}/>
      

      {/* <div
        className="theme-toggle absolute w-[50px] h-[50px] bg-white/50 backdrop-blur-lg z-50 rounded-full 
 pl-[15px] pt-[10px] text-2xl shadow-lg shadow-gray"
      >
        <i class="fa-solid fa-moon"></i>
      </div> */}
    </>
  );
}

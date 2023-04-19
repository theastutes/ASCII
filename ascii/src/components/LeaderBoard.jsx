import React, { useState } from "react";

import LBframe from "./LBframe";
import axios from "axios";
import { useEffect } from "react";
const LeaderBoard = () => {

  const [data,setData] = useState([]);

  async function getdata(){
      const userdata = await axios.get("http://localhost:4000/api/users/leaderboard");
      setData(userdata.data);
  }



  useEffect(() => {
    getdata();
    console.log(data.score);
  }, [])
  
  const datas = data.map((items) => {
    return <LBframe name={items.name} score = {items.score}/>;
  });

  return (
    <div className="lBoard absolute flex flex-row items-center justify-center  top-[50px]  md:bottom-[48px] md:w-screen fd:w-[83%] fd:left-[210px] ">
      <div className=" m-4  w-[90%]">{datas}</div>
    </div>
  );
};

export default LeaderBoard;

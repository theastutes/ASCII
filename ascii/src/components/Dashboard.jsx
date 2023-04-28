import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "../data";
import { server } from "..";

import store from "store";
import { useNavigate, redirect } from "react-router-dom";
import axios from "axios";
import DCard from "./DCard";

const Dashboard = () => {
  
  const [allpost, setAllPost] = useState([]);
  
  const [tim, setTim] = useState(0);
  const [trigger,setTrigger]= useState(false);

  async function getdata() {
    const pcards = await axios.get(`${server}/api/posts/gpost`);
    console.log(pcards.data);
    setAllPost(pcards.data);
    console.log("pcards.data", pcards.data);
    console.log("allpost", allpost);
  }

  function fn() {
    // setTimeout(() => {
    //   setTim((prev) => prev + 1);
    // }, 8000);
  }

  useEffect(() => {
    getdata();
    
    fn();
    
  }, [tim]);

  const cards = allpost.map((item) => {
    return (
      <Card
        key={item._id}
        userprofile = {item.userprofile}
        usern = {item.username}
        img={item.photosrc}
        title={item.title}
        td={item.content}
      />

    );
  });

  const dcards = allpost.map((item) => {
    return (

      <DCard
        key={item._id}
        userprofile = {item.userprofile}
        usern = {item.username}
        img={item.photosrc}
        title={item.title}
        content={item.content}
        dt = {item.createdAt}
        exdt = {item.expireAt}
      />

    );
  });



  return (
    <div className="section">
    {cards}
    {dcards}
    </div>
    

  );
};

export default Dashboard;

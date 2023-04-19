import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "../data";
import { Context, server } from "..";
import { useContext } from "react";
import store from "store";
import { useNavigate, redirect } from "react-router-dom";
import axios from "axios";
import DCard from "./DCard";

const Dashboard = () => {
  const flag = store.get("flag");
  const [allpost, setAllPost] = useState([]);
  const { isAuthenticated } = useContext(Context);
  const [tim, setTim] = useState(0);

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
    // }, 4000);
  }

  useEffect(() => {
    getdata();
    
    fn();
  }, [tim]);

  const cards = allpost.map((item) => {
    return (
      <Card
        key={item._id}
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
        usern = {item.username}
        img={item.photosrc}
        title={item.title}
        td={item.content}
      />

    );
  });

  return (<div className="w-screen flex">
    <div className="section">
    {cards}
    {dcards}
    </div>
    
  </div>)
  ;
};

export default Dashboard;

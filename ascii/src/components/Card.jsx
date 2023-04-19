import React from "react";

export default function Card(props) {

  let visible = true;
  let vis = false;
  const [v, setV] = React.useState(true);
  const toggle = () => {
    setV(!v);
  };
  if (v) {
    visible = 1;
    vis = 0;
  } else {
    visible = 0;
    vis = 1;
  }

  return (
    <div className="Card bg-white/70 backdrop-blur-lg rounded-lg text-xs ">
      { props.img && 
      <div className="image-container rounded-lg ">


        <div style={{ opacity: vis }} className=" text-con bg-white/10">
          {props.td}
        </div>

        <button
          style={{ opacity: visible }}
          onClick={toggle}
          className="img-con">
          <img src={`${props.img}`} className="card--image rounded-lg" />
        </button>

      </div>}

      { !props.img && 
        <div  className=" text-lg bg-white/10 p-4">
          {props.td}
        </div>
      }
      
      <div className="te"></div>
      <div className="p-2 m-[0.9px] h-[96px] bg-white/20 backdrop-blur-lg rounded-lg w-[99.4%] fixed bottom-0">

        <div className="card--stats bg-white/10">

          <p className="px-2"> @{props.usern}</p>
          <p className="card--title text-2xl p-3">{props.title}</p>

        </div>
      </div>
    </div>
  );
}

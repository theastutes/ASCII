import React from "react";

const LBframe = (props) => {
  return (<div className="se bg-white rounded-3xl m-2 p-2 px-8 py-5 flex flex-row mb-[20px] justify-between shadow-lg shadow-gray-300 hover:text-[20px] ">
  <div className="flex flex-row items-center rounded-2xl px-2 pl-4 ">
    <i class="fa-solid fa-user"></i>

    <div className="pl-4">
    {props.name}
    </div>
    
  </div>
  <div>
    {props.score}
    {" "}
    <i class="fa-solid fa-medal"></i>
  </div>
</div>);
};

export default LBframe;

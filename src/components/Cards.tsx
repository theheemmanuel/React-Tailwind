// import React from "react";
import Frame1 from "../assets/Frame (2).png";
// import Frame2 from "../assets/Frame (3).png";
// import Frame3 from "../assets/Frame (5).png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-500">
          <img
            className="w-12 mx-auto mt-[-3rem] bg-white"
            src={Frame1}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-6">Single User</h2>
          <p>$149</p>
          <div className="">
            <p>500GB Storage</p>
            <p>1 Granted User</p>
            <p>Send up to 2 GB</p>
          </div>
          <button>Start Trial</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

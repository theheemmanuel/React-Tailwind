import React from "react";
import analy from "../assets/971.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4 text-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={analy} alt="laptop" />
        <div>
          <p>data analytics dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

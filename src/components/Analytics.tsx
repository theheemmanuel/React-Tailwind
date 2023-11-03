import React from "react";
import analy from "../assets/971.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col md:grid-cols-2 md:grid">
        <img src={analy} alt="laptop" />
        <div>
          <p className="text-[#00DF9a] uppercase">data analytics dashboard</p>
          <h1>Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit et
            voluptatum iusto asperiores reprehenderit obcaecati quibusdam
            voluptates earum autem possimus blanditiis, sapiente unde nulla
            minima sequi! Aliquid id ipsa sapiente!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

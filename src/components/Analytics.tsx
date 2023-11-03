import React from "react";
import analy from "../assets/971.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={analy} alt="laptop" />
        <div className="flex flex-col justify-center mx-2 max-md:text-center">
          <p className="text-[#00DF9a] uppercase font-bold">
            data analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl text-black font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit et
            voluptatum iusto asperiores reprehenderit obcaecati quibusdam
            voluptates earum autem possimus blanditiis, sapiente unde nulla
            minima sequi! Aliquid id ipsa sapiente!
          </p>
          <button className="mx-auto bg-black w-[200px] rounded-md font-medium my-6 py-3 text-[#00DF9a] md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

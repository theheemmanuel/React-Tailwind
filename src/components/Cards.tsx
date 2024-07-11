// import React from "react";
import Frame1 from "../assets/Frame (2).png";
import Frame2 from "../assets/Frame (3).png";
import Frame3 from "../assets/Frame (5).png";

const Cards = () => {
  return (
    <div id="cards" className="w-full py-[10rem] px-4 bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-500">
          <img
            className="w-12 mx-auto mt-[-3rem] bg-white"
            src={Frame1}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-6">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 border-t">500GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="mx-auto bg-[#00DF9a] w-[200px] rounded-md font-medium my-6 py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="bg-gray-100 w-full shadow-xl flex flex-col md:my-0 my-4 p-4 rounded-lg hover:scale-105 duration-500">
          <img
            className="w-12 mx-auto mt-[-3rem]"
            src={Frame2}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-6">Couple User</h2>
          <p className="text-center font-bold text-4xl">$369</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 border-t">1TB Storage</p>
            <p className="py-2 border-b mx-8">10 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 10 GB</p>
          </div>
          <button className="mx-auto bg-black w-[200px] rounded-md font-medium my-6 py-3 text-[#00DF9a]">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col my-4 p-4 rounded-lg hover:scale-105 duration-500">
          <img
            className="w-12 mx-auto mt-[-3rem] bg-white"
            src={Frame3}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-6">Community User</h2>
          <p className="text-center font-bold text-4xl">$500</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 border-t">5TB Storage</p>
            <p className="py-2 border-b mx-8">Unlimited Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 20 GB</p>
          </div>
          <button className="mx-auto bg-[#00DF9a] w-[200px] rounded-md font-medium my-6 py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

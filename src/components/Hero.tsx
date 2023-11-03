import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mt-[-96px] w-full h-[100vh] mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00DF9a] p-2 font-bold ">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold py-6">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Flex, Flexible financing for{" "}
            <Typed
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl text-gray-500 ">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platform
        </p>
        <button className="mx-auto bg-[#00DF9a] w-[200px] rounded-md font-medium my-6 py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;

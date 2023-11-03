import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00DF9a] p-2 font-bold ">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold py-6">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Flex, Flexible financing for{" "}
            <Typed
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={100}
              backSpeed={100}
            />
          </p>
        </div>
        <p>
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platform
        </p>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="max-w-[800px] mt-[-96px] w-full h-[100vh] mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00DF9a] p-2 font-bold text-xl">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold py-6">
          Grow with data.
        </h1>
        <div>
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Flex, Flexible financing for BTC{" "}
            {/* <Typed
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={100}
              backSpeed={100}
              loop
            /> */}
          </p>
        </div>
        <p className="md:text-2xl text-xl text-gray-500 ">
          Monitor your data analytics to increase revenue for BTB, BTC & SASS
          platform
        </p>

        <div className="flex gap-6 justify-center items-center">
          <AddButton>
            <a href="#analysis">Get Started</a>
          </AddButton>
          <AddButton>
            <a href="#cards">Subscribe Now</a>
          </AddButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;

export function AddButton({ children }) {
  return (
    <div className="bg-[#00DF9a] rounded-md font-medium my-6 p-3 text-black">
      {children}
    </div>
  );
}

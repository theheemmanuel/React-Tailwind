// import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full text-white py-16">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 rounded-md text-black w-full font-b"
              type="email"
              placeholder="Enter your mail"
            />
            <button className="mx-auto bg-[#00DF9a] w-[200px] rounded-md font-medium sm:ml-2 my-6 py-3 text-black">
              Notify me
            </button>
          </div>
          <p className="">
            We care about the protection of our data. Read our{" "}
            <span className="text-[#00df9a]"> Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

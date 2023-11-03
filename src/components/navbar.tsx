import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, getNav] = useState(true);

  const handleNav = () => {
    getNav(!nav);
  };

  return (
    <div className="flex items-center h-24 justify-between max-w-[1280px] px-6 mx-auto">
      <h1 className="text-3xl font-bold text-[#00DF9a]">HeeTech.</h1>
      <ul className="flex max-md:hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <CiMenuFries size={30} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-4 h-full p-4 w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold text-[#00DF9a]">HeeTech.</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-500">Home</li>
          <li className="p-4 border-b border-gray-500">Company</li>
          <li className="p-4 border-b border-gray-500">Resources</li>
          <li className="p-4 border-b border-gray-500">About</li>
          <li className="p-4 border-b border-gray-500">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

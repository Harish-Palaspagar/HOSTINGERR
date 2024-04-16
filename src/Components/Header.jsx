//import React from 'react'

import { FaBars } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="flex justify-between mt-2 lg:justify-evenly">

      <div className="flex items-center justify-center gap-2 lg:ml-50">

        <img src="./assets/logo.svg" alt="logo" className="mr-5" />

        <button className="bg-gradient-to-r from-orange-400 to-red-600 text-white px-3.5 py-1.5 rounded-2xl font-medium text-xs   ">Hosterr is hiring!</button>

      </div>
      <ul className="hidden lg:flex  justify-between items-center font-lato text-gray-500 gap-6 font-bold">

        <li><a href="https://react-icons.github.io/react-icons/search/#q=bar" className="hover:border-b-4 border-gray-500">Plans</a></li>

        <li><a href="https://react-icons.github.io/react-icons/search/#q=bar " className="hover:border-b-4 border-gray-500">Find Domain</a></li>

        <li><a href="https://react-icons.github.io/react-icons/search/#q=bar" className="hover:border-b-4 border-gray-500">Why Hoster</a></li>

        
      </ul>

<div className="hidden lg:flex justify-center items-center font-lato gap-6 xl:ml-50">

  <a className="text-gray-500 font-bold hover:border-b-4 border-gray-500 " href="https://www.youtube.com/ ">Sign in</a>
  <button className="rounded-md px-4 py-3 bg-blue-500 hover:bg-blue-400 text-white h-20 font-semibold md:w-60 ">Join Waitlist</button>

</div>

      <div>

        <FaBars className="text-xl mt-0.5 lg:hidden "/>

      </div>

    </div>
  );
};

export default Header;

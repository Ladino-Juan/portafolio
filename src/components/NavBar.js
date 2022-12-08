import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className={ !nav ? "w-10/12 h-[80px] bg-white rounded-b-xl fixed top-0 z-50" : "w-10/12 h-[80px] bg-white fixed top-0 z-50"}>
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Logo</h1>
        </div>
        <div className="hidden md:flex pr-4">
          <ul className="hidden md:flex">
            <li>ABOUT</li>
            <li>PROJECTS</li>
          </ul>
          <button className="px-8 py-3">CONTACT</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8 rounded-b-xl"}>
        <li className="border-b-2 border-zinc-200 w-full">ABOUT</li>
        <li className="border-b-2 border-zinc-200 w-full">PROJECTS</li>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3">CONTACT</button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;

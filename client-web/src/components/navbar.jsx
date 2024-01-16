import React from "react";
import logo from "../assets/logoFix.svg";

const navbar = () => {
  return (
    <nav className="shadow mb-2">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">

          <img
            src={logo}
            alt="profile"
            className="rounded-full w-8 h-8 bg-red-500 mr-2"
          />

          <span className="text-black text-sm flex items-center whitespace-nowrap font-black">admin name</span>
        
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <div className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
        <button className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0 rounded-md border-2 border-black px-4 py-1 text-sm text-black transition-colors hover:bg-black hover:text-white">
      Logout
    </button>
        </div>
      </div>
    </nav>
  );
};

export default navbar;

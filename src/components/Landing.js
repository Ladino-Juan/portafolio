import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-between bg-gradient-to-b from-black via-gray-800 to-slate-400 text-white">
        <div className="grid md:grid-cols-1 max-w-[1240px] m-auto">
            <h1 className="py-3 text-5xl md:text-7xl font-bold">
              DAVID LADINO
            </h1>
            <p className="text-2xl">Web Developer.</p>
            <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
      </div>
      <div class="custom-shape-divider-top-1666716756">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="w-full h-full">
        <span>Projects</span>
      </div>
     
    </div>
  );
};

export default Landing;

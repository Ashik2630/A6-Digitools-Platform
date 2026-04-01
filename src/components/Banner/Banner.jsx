import React from "react";
import bannerImg from "../../assets/banner.png";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="container mx-auto flex-wrap md:flex justify-between items-center my-20">
      <div className="left w-160  md:ml-52 p-5">
        <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-medium px-4 py-2 rounded-full">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-600"></span>
      </span>
      New: AI-Powered Tools Available
    </span>
        <h1 className="text-2xl md:text-7xl font-extrabold mb-4">Supercharge Your Digital Workflow</h1>
        <p className="text-[#627382] mb-4 w-100">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-7">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-6 px-6">Explore Products</button>
            <button className="  flex justify-center items-center btn bg-transparent border border-[#4F39F6] text-[#9514FA]  rounded-full py-6 px-6 "><IoPlayOutline className="hover:animate-ping"/> Watch Demo</button>
        </div>
      </div>
      <div className="right ml-2 md:mr-30 p-5 hover:scale-105 transition duration-300 ">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;

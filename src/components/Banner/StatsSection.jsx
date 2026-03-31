import React from "react";

const StatsSection = () => {
  return (
    <div>
      <div className="flex-wrap md:flex justify-center  gap-120  border bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-10 mb-10">
        <div className="ml-45 md:ml-0 ">
          <h1 className="text-5xl font-bold mb-2">50K</h1>
          <h2 className="text-[18px]">Active Users</h2>
        </div>
        <div className="ml-45 md:ml-0">
          <h1 className="text-5xl font-bold mb-2">200+</h1>
          <h2 className="text-[18px]">Premium Tools</h2>
        </div>
        <div className="ml-45 md:ml-0">
          <h1 className="text-5xl font-bold mb-2">4.9</h1>
          <h2 className="text-[18px]">Rating</h2>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

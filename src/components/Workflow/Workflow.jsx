import React from "react";

const Workflow = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] pb-20">
      <div className="text-white text-center pt-40">
        <h1 className="text-4xl font-bold mb-5">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-[#ffffffab]">
          Join thousands of professionals who are already using Digi-Tools to
          work smarter. <br /> Start your free trial today.
        </p>
        <div className="mt-10 flex justify-center items-center gap-10 mb-5">
          <button className="bg-white rounded-full mt-5 px-10 py-3 ">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold">
              Explore Products
            </span>
          </button>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full mt-5 px-10 py-3 ">View Pricing</button>
        </div>
        <p className="text-[#ffffffbf]">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Workflow;

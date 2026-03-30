import React from "react";
import AccountImg from "../../assets/user.png";
import ProductsImg from "../../assets/package.png";
import CreatingImg from "../../assets/rocket.png";

const StepsSection = () => {
  return (
    <div className="bg-[#F9FAFC] pb-20">
      <div className="text-center p-20">
        <h1 className="text-5xl font-extrabold mb-5">Get Started in 3 Steps</h1>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="card-container flex-wrap md:flex   justify-center gap-10">
        <div className="bg-base-100 shadow w-96 h-96">
          <div className=" flex items-center justify-end m-5 p-2">
            <span className=" p-1 border rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold text-center">01</span>
          </div>
          <div className=" bg-[#f3e8fe] rounded-full w-30 h-30 mx-auto mt-5 mb-5">
            <img className="mx-auto pt-8" src={AccountImg} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Create Account</h1>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card <br /> required to get
              started.
            </p>
          </div>
        </div>
        <div className="bg-base-100 shadow w-96 h-96">
          <div className=" flex items-center justify-end m-5 p-2">
            <span className=" p-1 border rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold text-center">02</span>
          </div>
          <div className=" bg-[#f3e8fe] rounded-full w-30 h-30 mx-auto mt-5 mb-5">
            <img className="mx-auto pt-7" src={ProductsImg} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Choose Products</h1>
            <p className="text-[#627382]">
              Browse our catalog and select the tools <br /> that fit your needs.
            </p>
          </div>
        </div>
        <div className="bg-base-100 shadow w-96 h-96">
          <div className=" flex items-center justify-end m-5 p-2">
            <span className=" p-1 border rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold text-center">03</span>
          </div>
          <div className=" bg-[#f3e8fe] rounded-full w-30 h-30 mx-auto mt-5 mb-5">
            <img className="mx-auto pt-8" src={CreatingImg} alt="" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Start Creating</h1>
            <p className="text-[#627382]">
              Download and start using your premium <br /> tools immediately.
            </p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default StepsSection;

import React from "react";
import checkImg from "../../assets/products/Check.png";

const TransparentPricing = () => {
  return (
    <div className="ml-5 md:m-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-5xl font-extrabold mb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      {/* main container */}
      <div className=" md:flex gap-5  justify-center mt-10 ">
        {/* card-1 */}
        <div className="bg-base-100 shadow-2xl w-96 flex-col rounded-2xl  mb-10 pb-10 md:pb-10 md:mb-0 ">
          <div className="ml-10">
            <h2 className="text-2xl font-bold pt-5">Starter</h2>
            <p className="text-[#627382] mb-2">Perfect for getting started</p>
            <p className="flex text-[#627382] mt-10 mb-6">
              <span className="text-3xl text-black font-bold">$0</span>
              <span className="mt-2">/Month</span>
            </p>
            <div className="text-[#627382]">
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Access to 10 free tools
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Basic templates
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> ACommunity support
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> 1 project per month
              </p>
            </div>
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full  px-20 py-6 ml-15 mt-15 hover:scale-105 transition duration-300">
            Get Started Free
          </button>
        </div>
        {/* card-2 */}
        <div className="relative bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-2xl w-96  rounded-2xl text-white hover:scale-105 transition duration-300 mb-10 pb-10 md:mb-0 md:pb-0">
          <div className=" flex justify-center ">
                <span className="badge absolute w-[40%]  tracking-widest -top-3 bg-[#FEF3C6] border-0 font-medium badge-sm text-[#BB4D00] badge-warning">
                  Most Popular
                </span>
              </div>
          <div className="ml-10 text-white">
            <h2 className="text-2xl font-bold pt-5">Pro</h2>
            <p className=" mb-2">Best for professionals</p>
            <p className="flex  mt-10 mb-6">
              <span className="text-3xl  font-bold">$29</span>
              <span className="mt-2">/Month</span>
            </p>
            <div className="">
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Access to all premium tools
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Unlimited templates
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Priority support
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Unlimited projects
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Cloud sync
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Advanced analytics
              </p>
            </div>
          </div>
          <button className="bg-white rounded-full mt-5 px-20 py-3 ml-14">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold">
              Get Started Free
            </span>
          </button>
        </div>
        {/* card-3 */}
        <div className="bg-base-100 shadow-2xl w-96 rounded-2xl mb-10 pb-10 md:mb-0 md:pb-0">
          <div className="ml-10">
            <h2 className="text-2xl font-bold pt-5">Enterprise</h2>
            <p className="text-[#627382] mb-2">For teams and businesses</p>
            <p className="flex text-[#627382] mt-10 mb-6">
              <span className="text-3xl text-black font-bold">$99</span>
              <span className="mt-2">/Month</span>
            </p>
            <div className="text-[#627382]">
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Everything in Pro
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Team collaboration
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Custom integrations
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Dedicated support
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> SLA guarantee
              </p>
              <p className="flex gap-2">
                <img src={checkImg} alt="" /> Custom branding
              </p>
            </div>
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full mt-2 px-20 py-6 ml-15 hover:scale-105 transition duration-300">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransparentPricing;

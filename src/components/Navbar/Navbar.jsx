import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const Links = (
    <>
    <li>
        <a href="#products">Products</a>
      </li>
      <li>
        <a href="#features">Features</a>
      </li>
      <li>
        <a href="#pricing">Pricing</a>
      </li>
      <li>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li>
        <a href="#faq">FAQ</a>
      </li>
    </>
  );

  return (
    <div className="navbar  shadow-sm">
      <div className="container mx-auto flex items-center pt-4">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenu2Fill className="text-2xl"/>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className=" text-4xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text p-2">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-[16px] font-semibold">
            {Links}
          </ul>
        </div>
        <div className="navbar-end space-x-8">
          <LuShoppingCart />
          <p className="text-[16px]">Login</p>
          <button className="btn rounded-full px-4 py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:scale-105 transition duration-300 ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white py-20  ">
      <div className="container mx-auto flex-wrap ml-5 md:ml-40 md:flex justify-evenly  ">
        <div>
          <h1 className="text-4xl font-bold mb-5">DigiTools</h1>
          <p className="text-[#ffffffa9]">
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-5">Product</h4>
          <div className="space-y-5 text-[#ffffffa9]">
            <p>Features</p>
            <p>Pricing</p>
            <p>Templates</p>
            <p>Integrations</p>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-5">Company</h4>
          <div className="space-y-5 text-[#ffffffa9]">
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Press</p>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-5">Resources</h4>
          <div className="space-y-5 text-[#ffffffa9]">
            <p>Documentation</p>
            <p>Help Center</p>
            <p>Community</p>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-medium mb-1">Social Links</h4>
          <div className="flex space-x-5 ml-2">
            <a href="/">
            <FaInstagram/>
          </a>
          <a href="/">
            <FaFacebookSquare />
          </a>
          <a href="/">
            <FaTwitter/>
          </a>
          </div>
        </div>
        <hr className="bg-red-300 ml-5   md:ml-30 w-[80%] md:w-[85%] mx-auto mt-10 mb-4 text-[#4b4c4f]" />
        <div className="flex-wrap md:flex gap-5 md:gap-180 ml-8 md:ml-0">
          <p className="text-[#ffffffa9] mb-2 md:mb-0">© 2026 Digi-tools. All rights reserved.</p>
          <div className="flex gap-5 text-[#ffffffa9] md:ml-0">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

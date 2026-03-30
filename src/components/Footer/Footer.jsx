import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white py-20 ">
      <div className="container mx-auto flex-wrap md:flex justify-evenly">
        <div>
          <h1>DigiTools</h1>
          <p>
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>
        <div>
          <h4>Product</h4>
          <p>Features</p>
          <p>Pricing</p>
          <p>Templates</p>
          <p>Integrations</p>
        </div>
        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Press</p>
        </div>
        <div>
          <h4>Resources</h4>
          <p>Documentation</p>
          <p>Help Center</p>
          <p>Community</p>
          <p>Contact</p>
        </div>
        <div>
          <h4>Social Links</h4>
          <a href="/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>
        <hr className="bg-red-300 w-[85%] mx-auto" />
        <div className="flex gap-180">
          <p>© 2026 Digi-tools. All rights reserved.</p>
          <div>
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

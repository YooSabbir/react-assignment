import React from "react";
import cartImg from "../assets/cart.png";

const Navbar = ({ carts }) => {


  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="text-[29px] font-bold text-blue-600 cursor-pointer items-center flex">
            DigiTools
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <div className="flex gap-5 text-[14px] font-semibold items-center">
            <a href="">Products</a>
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Testimonials</a>
            <a href="">FAQ</a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4 relative">
            <div className="relative">
              <img src={cartImg} alt="cart" className="w-6 h-6" />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {carts.length}
              </span>
            </div>
            <button className="cursor-pointer">login</button>
            <button className="btn btn-primary rounded-4xl">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

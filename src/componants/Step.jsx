import React from "react";
import user from "../assets/user2.png";
import box from "../assets/box.png";
import rocket from "../assets/rocket.png";

function step() {
  return (
    <div className="min-h-[400px] bg-[#F9FAFC] w-full lg:px-35 py-13">
      <div className="text-center space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight">
          Get Started in 3 Steps
        </h1>
        <p className="text-gray-400 text-[10px] md:text-sm">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="flex flex-col items-center pt-6 lg:grid lg:grid-cols-3 lg:pt-10 space-y-4 lg:space-y-0">
        <div className="relative bg-white text-center w-full max-w-[90%] lg:max-w-[320px] min-h-[320px] flex flex-col justify-center items-center p-5 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="absolute top-3 right-3 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-[11px]">
            01
          </div>

          <img src={user} alt="" className="w-17 sm:w-17 mb-3" />
          <div className="space-y-2">
            <h1 className="text-base sm:text-lg font-semibold">
              Create Account
            </h1>
            <p className="text-sm text-gray-600">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        <div className="relative bg-white text-center w-full max-w-[90%] lg:max-w-[320px]  min-h-[320px] flex flex-col justify-center items-center p-5 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="absolute top-3 right-3 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-[11px]">
            02
          </div>
          <img src={box} alt="" className="w-17 sm:w-17 mb-3" />
          <div className="space-y-2">
            <h1 className="text-base sm:text-lg font-semibold">
              Choose Products
            </h1>
            <p className="text-sm text-gray-600">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        <div className="relative bg-white text-center w-full max-w-[90%] lg:max-w-[320px] min-h-[320px] flex flex-col justify-center items-center p-5 rounded-lg shadow-sm hover:shadow-md transition">
          <div className="absolute top-3 right-3 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-[11px]">
            03
          </div>

          <img src={rocket} alt="" className="w-17 sm:w-17 mb-3" />
          <div className="space-y-2">
            <h1 className="text-base sm:text-lg font-semibold">
              Start Creating
            </h1>
            <p className="text-sm text-gray-600">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default step;

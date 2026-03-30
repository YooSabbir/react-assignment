import React from "react";
import check from "../assets/check.png";

function Pricing() {
  return (

    <div className="w-full min-h-screen px-3 sm:px-4 lg:px-8">

      <div className="text-center space-y-2 pt-10 sm:pt-12">
        <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-tight">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-400 text-sm">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center lg:px-25">
        <div className="bg-[#F2F2F2] w-full max-w-[95%] sm:max-w-[320px] min-h-[420px] p-5 sm:p-6 flex flex-col justify-between rounded-xl shadow-sm hover:shadow-md transition">
          <div className="space-y-4">
            <div>
              <h1 className="font-bold text-lg sm:text-xl">Starter</h1>
              <p className="text-gray-400 text-xs sm:text-sm">
                Perfect for getting started
              </p>
            </div>
            <h1 className="text-gray-400">
              <span className="font-extrabold text-2xl sm:text-3xl text-black">
                $0
              </span>
              /month
            </h1>
            <div className="text-xs sm:text-sm text-[#627382] space-y-2">
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Access to 10 free tools
              </p>
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Basic templates
              </p>
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Community support
              </p>
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> 1 project per month
              </p>
            </div>
          </div>
          <button className="btn btn-primary mt-6 rounded-full w-full">
            Get Started Free
          </button>
        </div>

        <div className="bg-primary text-white w-full max-w-[95%] sm:max-w-[320px] min-h-[420px] p-5 sm:p-6 flex flex-col justify-between rounded-xl shadow-lg sm:scale-105">
          <div className="space-y-4">
            <div>
              <h1 className="font-bold text-lg sm:text-xl">Pro</h1>
              <p className="text-gray-200 text-xs sm:text-sm">
                Best for professionals
              </p>
            </div>
            <h1 className="text-gray-200">
              <span className="font-extrabold text-2xl sm:text-3xl text-white">
                $29
              </span>
              /month
            </h1>
            <div className="text-xs sm:text-sm text-gray-200 space-y-2">
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Access to all premium
                tools
              </p>
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Unlimited templates
              </p>
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Priority support
              </p>
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Unlimited projects
              </p>
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Cloud sync
              </p>
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Advanced analytics
              </p>
            </div>
          </div>
          <button className="btn bg-white text-primary mt-6 rounded-full w-full">
            Start Pro Trial
          </button>
        </div>

        <div className="bg-[#F2F2F2] w-full max-w-[95%] sm:max-w-[320px] min-h-[420px] p-5 sm:p-6 flex flex-col justify-between rounded-xl shadow-sm hover:shadow-md transition">
          <div className="space-y-4">
            <div>
              <h1 className="font-bold text-lg sm:text-xl">Enterprise</h1>
              <p className="text-gray-400 text-xs sm:text-sm">
                For teams and businesses
              </p>
            </div>
            <h1 className="text-gray-400">
              <span className="font-extrabold text-2xl sm:text-3xl text-black">
                $99
              </span>
              /month
            </h1>
            <div className="text-xs sm:text-sm text-[#627382] space-y-2">
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Everything in Pro
              </p>
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Team collaboration
              </p>
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Custom integrations
              </p>
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> SLA guarantee
              </p>
              <p className="flex gap-2 items-center">
                <img src={check} className="w-4 h-4" /> Custom branding
              </p>
            </div>
          </div>
          <button className="btn btn-primary mt-6 rounded-full w-full">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;

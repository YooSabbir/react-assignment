import React from "react";
import HeroImg from "../assets/banner.png";
import round from '../assets/round.png'
import play from '../assets/play.png'

function Hero() {
  return (
    <div className="w-11/12 mx-auto min-h-[640px] flex flex-col-reverse lg:flex-row items-center justify-between gap-5 py-10 lg:pr-20 lg:pl-20">
      <div className="text-center lg:text-left space-y-5 max-w-xl">
        <button className="mx-auto lg:mx-0 flex items-center gap-1 px-3 py-1 rounded-full bg-[#E1E7FF] text-[#4f39f6] text-[12px] h-7">
          <img src={round} alt="" className="w-3 h-3" />
          New: AI-Powered Tools Available
        </button>
        <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
          Supercharge Your <br /> Digital Workflow
        </h2>

        <p className="text-gray-400">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="btn btn-primary">Explore Products</button>
          <button className="btn btn-outline btn-primary">
            <img src={play} alt="" /> Watch demo
          </button>
        </div>
      </div>

      <div className="w-full max-w-md">
        <img src={HeroImg} alt="Hero" className="w-full object-contain" />
      </div>
    </div>
  );
}

export default Hero;

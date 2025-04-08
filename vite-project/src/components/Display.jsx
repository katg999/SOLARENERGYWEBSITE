import React from "react";
import vectorIcon from "../assets/images/Vector.png";
import heroImage from "../assets/images/image 37.png";

const Display = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24"
      style={{
        background:
          "linear-gradient(180.05deg, #EFF6FF 35.54%, #BFDBFE 99.95%)",
      }}
    >
      {/* Main heading section with proper spacing */}
      <div className="mt-8 md:mt-16 mb-6 md:mb-8 max-w-5xl">
        <h1 className="text-center font-[Onest] font-semibold text-[40px] md:text-[64px] leading-[50px] md:leading-[74.8px] tracking-[-0.035em] text-black">
          Access to Clean Water, Powered by{" "}
          <span className="text-blue-600">AI</span> &{" "}
          <span className="text-blue-600">Solar</span>
        </h1>
      </div>

      {/* Body text with exact typography */}
      <p className="mt-4 md:mt-6 text-center text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-[-0.22px] max-w-2xl text-gray-700 font-[Onest] font-medium">
        DayLight Solar Energies helps farmers, schools, and communities access
        clean water and irrigation systems—fast, smart, and affordable.
      </p>

      {/* Button group with proper icon placement */}
      <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-4 items-center">
        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
          Get Financing
          {/* <img src={vectorIcon} alt="icon" className="w-5 h-5" /> */}
        </button>
        <button className="bg-white text-black border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
          Talk to Us
        </button>
      </div>

      {/* Hero image with responsive sizing */}
      <div className="mt-10 md:mt-16 w-full flex justify-center px-2">
        <img
          src={heroImage}
          alt="Solar energy solution"
          className="w-full max-w-md md:max-w-xl object-contain"
        />
      </div>
    </div>
  );
};

export default Display;

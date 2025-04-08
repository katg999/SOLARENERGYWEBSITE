import React from "react";
import solarImage from "../assets/images/Solar.png";

const DayLight = () => {
  return (
    <div className="w-full py-12 md:py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[#18181B] font-[Onest] font-semibold text-[32px] md:text-[44px] leading-[38px] md:leading-[52px] text-center mb-12 md:mb-16">
          Welcome to DayLight Solar Energies
        </h2>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Image on Left */}
          <div className="w-full lg:w-1/2">
            <img
              src={solarImage}
              alt="Solar energy solutions"
              className="w-full max-w-[576px] h-auto rounded-[14px]"
              style={{
                width: "576px",
                height: "427px",
                borderRadius: "14px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Text Content on Right */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6">
              <p className="text-[#475569] font-[Onest] font-normal text-[16px] leading-[22px]">
                At Day Light Solar Energies, we believe everyone deserves access
                to clean water, no matter where they live. That's why we've
                created the WaterCredit platform—an easy-to-use, AI-powered
                service designed to help farmers, schools, savings groups, and
                communities like yours access affordable financing for water,
                sanitation, and irrigation systems.
              </p>
              <p className="text-[#475569] font-[Onest] font-normal text-[16px] leading-[22px]">
                We know securing funding for essential projects like clean water
                systems can feel overwhelming. That's why our platform uses AI
                and a friendly chatbot to guide you through the entire
                process—from understanding your financing needs to getting the
                water solutions you need.
              </p>
            </div>

            {/* Button */}
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
              See more about us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayLight;

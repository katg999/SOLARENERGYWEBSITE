import React from "react";
import needsIcon from "../assets/images/Needs.png";
import chatbotIcon from "../assets/images/Chatbot.png";
import creditIcon from "../assets/images/Credit.png";
import approvalIcon from "../assets/images/Approval.png";
import installationIcon from "../assets/images/Installation.png";
import repaymentIcon from "../assets/images/Repayment.png";
import supportIcon from "../assets/images/Support.png";

const HowItWorks = () => {
  const cards = [
    {
      number: 1,
      icon: needsIcon,
      title: "Identifying Your Needs",
      description:
        "We partner with communities to find out which groups need water or irrigation solutions.",
    },
    {
      number: 2,
      icon: chatbotIcon,
      title: "Chat with our smart assistant",
      description:
        "Through your phone/computer, which guides you through the whole process.",
    },
    {
      number: 3,
      icon: creditIcon,
      title: "AI-Powered Credit Check",
      description:
        "Our platform looks at your group’s financial habits (like mobile money activity and savings records) to determine if you qualify for a loan.",
    },
    {
      number: 4,
      icon: approvalIcon,
      title: "Loan Matching & Advice",
      description:
        "Based on your financial profile, the chatbot recommends the best lender for your needs and how likely you are to get approved.",
    },
    {
      number: 5,
      icon: installationIcon,
      title: "Loan Application",
      description:
        "If you agree with the recommendation, the chatbot automatically submits your loan application for you.",
    },
    {
      number: 6,
      icon: repaymentIcon,
      title: "Lender verification",
      description:
        "The lender reviews the application and performs their checks before offering the loan.",
    },
    {
      number: 7,
      icon: supportIcon,
      title: "Water System Installation",
      description:
        "Once the loan is approved, DayLight Solar Energies provides and installs the water or irrigation systems you need.",
    },
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-[#EFF6FF]">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-black font-[Onest] font-semibold text-[32px] md:text-[44px] leading-[38px] md:leading-[52px] mb-3">
            How it Works
          </h2>
          <p className="text-[#475569] font-[Onest] font-normal text-[17px] leading-[100%]">
            It's simple and fast.
          </p>
        </div>

        {/* First Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {cards.slice(0, 2).map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-xl p-6 shadow-sm relative h-full flex flex-col"
            >
              {/* Number badge top-left */}
              <div className="w-10 h-10 rounded-full border border-[#E4E6E8] bg-[#F8FAFC] flex items-center justify-center self-start">
                <span className="text-[#52525B] font-[Onest] font-semibold">
                  {card.number}
                </span>
              </div>

              {/* Content middle */}
              <div className="mt-6 flex-grow">
                <h3 className="text-black font-[Onest] font-semibold text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-[#475569] font-[Onest] font-normal text-base">
                  {card.description}
                </p>
              </div>

              {/* Larger icon bottom-right */}
              <div className="mt-6 flex justify-end">
                <img src={card.icon} alt="" className="w-20 h-20" />{" "}
                {/* Increased size */}
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.slice(2, 5).map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-xl p-6 shadow-sm relative h-full flex flex-col"
            >
              <div className="w-10 h-10 rounded-full border border-[#E4E6E8] bg-[#F8FAFC] flex items-center justify-center self-start">
                <span className="text-[#52525B] font-[Onest] font-semibold">
                  {card.number}
                </span>
              </div>
              <div className="mt-6 flex-grow">
                <h3 className="text-black font-[Onest] font-semibold text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-[#475569] font-[Onest] font-normal text-base">
                  {card.description}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <img src={card.icon} alt="" className="w-20 h-20" />{" "}
                {/* Increased size */}
              </div>
            </div>
          ))}
        </div>

        {/* Third Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.slice(5, 7).map((card) => (
            <div
              key={card.number}
              className="bg-white rounded-xl p-6 shadow-sm relative h-full flex flex-col"
            >
              <div className="w-10 h-10 rounded-full border border-[#E4E6E8] bg-[#F8FAFC] flex items-center justify-center self-start">
                <span className="text-[#52525B] font-[Onest] font-semibold">
                  {card.number}
                </span>
              </div>
              <div className="mt-6 flex-grow">
                <h3 className="text-black font-[Onest] font-semibold text-xl mb-3">
                  {card.title}
                </h3>
                <p className="text-[#475569] font-[Onest] font-normal text-base">
                  {card.description}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <img src={card.icon} alt="" className="w-20 h-20" />{" "}
                {/* Increased size */}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition">
            Get Financing
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

"use client";
import React from "react";
// import { motion } from "framer-motion";
import GradientButton from "../common/GradientButton";
import forwardArrowIcon from "../../assets/icons/forwardArrow.png";
import Link from "next/link"; // Make sure Link is imported

function EstimateProject({ subheading, sections, mainHeading, description, buttonText }) {
  return (
    <div className="bg-[#F2F2F7] md:py-12 md:px-10 px-5 flex justify-between md:flex-row flex-col min-h-screen">
      <div className="md:w-[43vw] w-full flex flex-col md:gap-5 gap-1 md:sticky top-10 self-start">
        <h1
          className="text-[#171717] md:text-5xl text-xl font-semibold md:mt-0  mt-20"
          style={{ lineHeight: "1.3" }}
        >
          {mainHeading}
        </h1>
        <span>{subheading}</span>
        <p className="text-[#3F3F46] md:text-xl text-base">{description}</p>
        <div className="flex md:justify-start justify-center md:mb-0 mb-3">
          <Link href={buttonText === "GET STARTED" ? "/hire-us" : "/portfolio"}>
            <GradientButton
              text={buttonText}
              bgColor="#CEA645"
              textColor="#212730"
              fontSize="20px"
              fontWeight="600"
              padding="10px 22px"
              icon={forwardArrowIcon}
            />
          </Link>
        </div>
      </div>

      <div className="md:w-[43vw] w-full flex flex-col ">
        {sections.map((section, index) => {
          // Only wrap with Link if section has a valid path
          const hasValidPath = section.path && section.path !== "#";

          const motionDiv = (
            <div
              key={index}
              id={section.id} // Ensure this ID is used for potential anchor linking if needed
              className={`py-6 flex justify-between items-center group transition-all duration-300 ease-in-out hover:bg-white ${hasValidPath ? 'cursor-pointer' : ''}`}
            >
              <div className="flex flex-col gap-3 px-5 transition-all duration-300 ease-in-out group-hover:px-8">
                <h1 className="text-[#212730] md:text-3xl text-md font-bold ">
                  {section.heading}
                </h1>
                <p className="text-[#0d0d0f] md:text-[17px] text-base">
                  {section.paragraph}
                </p>

                {/* These paragraphs will only appear on hover due to the group-hover utility */}
                <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[500px] transition-all duration-500 overflow-hidden">
                  <p className="text-[#0d0d0f] md:text-[17px] text-base mt-2 ">
                    {section.paragraph2}
                  </p>
                  <p className="text-[#0d0d0f] md:text-[17px] text-base mt-2">
                    {section.paragraph3}
                  </p>
                </div>
              </div>

              {/* The arrow icon is now part of the clickable area due to the parent Link */}
              <div className="relative flex items-center ">
                <div className="transition-all font-bold duration-500 text-4xl ease-in-out transform rotate-0 group-hover:rotate-45 group-hover:translate-x-[-20px] group-hover:text-yellow-400">
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-md:w-full "
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.9641 4.88136H0.890625V0H24.8906V24H20.0093V8.73944L5.05685 23.6919L1.60521 20.2402L16.9641 4.88136Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          );

          // Return the motion div wrapped in Link only if there's a valid path
          return hasValidPath ? (
            <Link key={index} href={section.path} passHref>
              {motionDiv}
            </Link>
          ) : (
            motionDiv
          );
        })}
      </div>
    </div>
  );
}

export default EstimateProject;
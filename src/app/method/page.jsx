"use client";
import React from "react";
import Innovate from "../components/sections/methods/Innovate";
import Create from "../components/sections/methods/Create";
import Elevate from "../components/sections/methods/Elevate";
import WorkingModel from "../components/sections/methods/WorkingModel";
import SpeedMeetInovation from "../components/sections/methods/SpeedMeetInovation";
import TechStackMethod from "../components/sections/methods/TechStackMethod";
import ReliablePartners from "../components/sections/ReliablePartners";
import ClientSay from "../components/sections/ClientSay";
import BehindTheCode from "../components/sections/methods/BehindTheCode";
import OneSolution from "../components/sections/OneSolution";
import OneStop from "../components/common/OneStop";
import LatestStories from "../components/sections/LatestStories";
import InnovationDeliver from "../components/sections/InnovationDeliver";
import rotate from "../assets/images/circle.svg";

const Method = () => {
  return (
    <>
      <div className="md:h-[1000px]  overflow-hidden h-full  w-full flex items-center justify-center md:px-4 relative">
        <div
          className="absolute hidden md:w-[1200px] md:block w-full md:h-[1200px] h-full bg-cover bg-center top-[-22%] transform -translate-x-1/2 -translate-y-1/2 animate-rotateCircle"
          style={{ backgroundImage: `url(${rotate.src})` }}
        ></div>

        <div className="max-w-6xl w-full relative md:h-96 md:top-[-60px] top-[20px]">
          <div className="relative text-center md:px-6">
            <h1 className="text-2xl md:text-8xl font-bold md:mb-6">
              The Venture Nexus
            </h1>

            <h2 className="text-xl md:text-2xl md:mb-8 mb-2  md:tracking-wide">
              <span>Innovate</span>
              <span className="mx-2 bg-gradient-to-r from-[#CB9F3C] via-[#E9DC8A] to-[#CBB260] bg-clip-text text-transparent">
                •
              </span>
              <span>Create</span>
              <span className="mx-2 bg-gradient-to-r from-[#CB9F3C] via-[#E9DC8A] to-[#CBB260] bg-clip-text text-transparent">
                •
              </span>
              <span>Elevate</span>
            </h2>

            <p className="text-gray-600 max-w-full md:max-w-2xl md:pt-0 mx-auto text-sm md:text-xl 
            lg:eading-relaxed lg:break-words">
              Our approach ensures reliability, efficiency, and long-term value
              for your business for both enterprise software & custom
              applications.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto md:pt-[50px] lg:mt-[40px] pt-4 px-4">
        <p className="text-gray-800 text-[16px] md:text-3xl text-center lg:leading-relaxed font-[600]">
          At Venture IT, we take a client-focused approach to every project, as
          each is unique. Our agile methodologies allow continuous improvement
          and flexibility at every stage.
        </p>
      </div>

      <Innovate />
      <Create />
      <Elevate />
      <WorkingModel />
      <SpeedMeetInovation />
      <TechStackMethod />
      {/* <ReliablePartners /> */}
      <InnovationDeliver />
      {/* <ClientSay /> */}
      {/* <BehindTheCode /> */}
      <LatestStories />
      <OneStop
        para="Bringing futuristic tech innovation closer to you, wherever you are, with our"
        title="One-Stop Solutions"
      />
    </>
  );
};

export default Method;

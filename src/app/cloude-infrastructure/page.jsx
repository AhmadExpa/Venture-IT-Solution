"use client";
import React from "react";
import bgImage from "../assets/images/cloudinfra.jpg";
import CustomHeroSection from "../components/common/CustomHeroSection";
import DevelopmentBuildBlock from "../components/sections/developmentSection/DevelopmentBuildBlock";
import TechStackMethod from "../components/sections/methods/TechStackMethod";
import WhyChooseDevelopment from "../components/sections/developmentSection/WhyChooseDevelopment";
import OneStop from "../components/common/OneStop";
import ClaudeContent from "../components/sections/ClaudeContent";
import InnovationDeliver from "../components/sections/InnovationDeliver";
import InnovationInIndustry from "../components/sections/InnovationInIndustry";
import LatestStories from "../components/sections/LatestStories";
import TechStackCloude from "../components/sections/TechStackCloude";
import SpeedAndSecurity from "../components/sections/SpeedAndSecurity";
import CloudInfraServices from "../components/sections/CloudInfraServices";
import WhyChooseUs from "../components/sections/WhyChooseUs";

const page = () => {
  return (
    <div>
      <CustomHeroSection
        bgImage={bgImage}
        heading="Cloud & Infrastructure Services"
      />
      <ClaudeContent />
      {/* <DevelopmentBuildBlock /> */}
       <CloudInfraServices/>
      <InnovationDeliver />
      <InnovationInIndustry />
      {/* <TechStackMethod /> */}
      <TechStackCloude />
     <WhyChooseUs/>
      {/* <ReliableDevelopment /> */}
      {/* <LatestStories /> */}
      <OneStop
        para="Bringing futuristic tech innovation closer to you, wherever you are, with our"
        title="One-Stop Solutions"
      />
    </div>
  );
};

export default page;

"use client";
import React from "react";
import bgImage from "../assets/images/security.jpg";
import CustomHeroSection from "../components/common/CustomHeroSection";
import DevelopmentBuildBlock from "../components/sections/developmentSection/DevelopmentBuildBlock";
import TechStackMethod from "../components/sections/methods/TechStackMethod";
import WhyChooseDevelopment from "../components/sections/developmentSection/WhyChooseDevelopment";
import OneStop from "../components/common/OneStop";
import DeveopsContent from "../components/sections/DevopsContent";
import InnovationDeliver from "../components/sections/InnovationDeliver";
import InnovationInIndustry from "../components/sections/InnovationInIndustry";
import LatestStories from "../components/sections/LatestStories";
import TechStackDevops from "../components/sections/TechStackDevops";
import AutomationContent from "../components/sections/AutomationContent";
import SpeedAndSecurity from "../components/sections/SpeedAndSecurity";
import SecuritySpeedScale from "../components/sections/SecuritySpeedScale";
import WhyChooseUs from "../components/sections/WhyChooseUs";

const page = () => {
  return (
    <div>
      <CustomHeroSection bgImage={bgImage} heading="Security" />
      <AutomationContent />
      {/* <DevelopmentBuildBlock /> */}
      {/* <SpeedAndSecurity /> */}
      <SecuritySpeedScale/>
      <InnovationDeliver />
      <InnovationInIndustry />
      {/* <TechStackMethod /> */}
      <TechStackDevops />
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

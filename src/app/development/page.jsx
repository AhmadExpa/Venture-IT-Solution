"use client";
import React from "react";
import bgImage from "../assets/images/softwaredev.jpg";
import CustomHeroSection from "../components/common/CustomHeroSection";
import DevelopmentContent from "../components/sections/developmentSection/DevelopmentContent";
import DevelopmentBuildBlock from "../components/sections/developmentSection/DevelopmentBuildBlock";
import TechStackMethod from "../components/sections/methods/TechStackMethod";
import WhyChooseDevelopment from "../components/sections/developmentSection/WhyChooseDevelopment";
import ReliableDevelopment from "../components/sections/developmentSection/ReliableDevelopment";
import OneStop from "../components/common/OneStop";
import InnovationDeliver from "../components/sections/InnovationDeliver";
import InnovationInIndustry from "../components/sections/InnovationInIndustry";
import LatestStories from "../components/sections/LatestStories";
import TechStackDev from "../components/sections/developmentSection/TechStackDev";
import SpeedAndSecurity from "../components/sections/SpeedAndSecurity";
import WhyChooseUs from "../components/sections/WhyChooseUs";

const page = () => {
  return (
    <div>
      <CustomHeroSection
        bgImage={bgImage}
        heading="Software Development & Product Engineering"
        
      />
      <DevelopmentContent />
      {/* <DevelopmentBuildBlock /> */}
      <SpeedAndSecurity />
      <InnovationDeliver />
      <InnovationInIndustry />
      {/* <TechStackMethod /> */}
      <TechStackDev />
      <WhyChooseUs/>
      {/* <WhyChooseDevelopment /> */}
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

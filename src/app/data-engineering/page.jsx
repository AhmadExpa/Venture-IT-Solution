"use client";
import React from "react";
import bgImage from "../assets/images/AiandData.jpg";
import CustomHeroSection from "../components/common/CustomHeroSection";
import AiDataContent from "../components/sections/aiDataSection/AiDataContent";
import AidataBuildingBlock from "../components/sections/aiDataSection/AidataBuildingBlock";
import InnovationDeliver from "../components/sections/InnovationDeliver";
import InnovationInIndustry from "../components/sections/InnovationInIndustry";
import TechStackMethod from "../components/sections/methods/TechStackMethod";
import WhyChooseDevelopment from "../components/sections/developmentSection/WhyChooseDevelopment";
import LatestStories from "../components/sections/LatestStories";
import OneStop from "../components/common/OneStop";
import TechStackAi from "../components/sections/aiDataSection/TechStackAi";
import DataEngineringContent from "../components/sections/DataEngineringContent";
import SpeedAndSecurity from "../components/sections/SpeedAndSecurity";
import EfficientDataEngineering from "../components/sections/EfficientDataEngineering";
import WhyChooseUs from "../components/sections/WhyChooseUs";

const page = () => {
  return (
    <div>
      <CustomHeroSection
        bgImage={bgImage}
        heading="Data Engineering & Analytics"
      />
      <DataEngineringContent />
      {/* <AidataBuildingBlock /> */}
      <EfficientDataEngineering />
      <InnovationDeliver />
      <InnovationInIndustry />
      {/* <TechStackMethod /> */}
      <TechStackAi />
      <WhyChooseUs/>
      {/* <WhyChooseDevelopment /> */}
      {/* <LatestStories /> */}
      <OneStop
        para="Bringing futuristic tech innovation closer to you, wherever you are, with our"
        title="One-Stop Solutions"
      />
    </div>
  );
};

export default page;

"use client";
import React from "react";
import bgImage from "../assets/images/digital.jpg";
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
import DigitalContent from "../components/sections/DigitalContent";
import SpeedAndSecurity from "../components/sections/SpeedAndSecurity";
import DigitalTransformandSecure from "../components/sections/DigitalTransformandSecure";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import useServiceBySlug from "@/hooks/useServiceBySlug";

const page = () => {
   const { service, isLoading } = useServiceBySlug("digital-transformation");
  return (
    <div>
      <CustomHeroSection
        bgImage={bgImage}
        heading={
          isLoading || !service
            ? "Loading..."
            : service.title || "Digital Transformation Engineering"
        }
      />
      {/* <AiDataContent /> */}
      <DigitalContent service={service} />
      {/* <AidataBuildingBlock /> */}
      {/* <SpeedAndSecurity /> */}
      <DigitalTransformandSecure />
      <InnovationDeliver />
      <InnovationInIndustry />
      {/* <TechStackMethod /> */}
      <TechStackAi />
      <WhyChooseUs />
      {/* <LatestStories /> */}
      <OneStop
        para="Bringing futuristic tech innovation closer to you, wherever you are, with our"
        title="One-Stop Solutions"
      />
    </div>
  );
};

export default page;

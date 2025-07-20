"use client";
import React from "react";
import bgImage from "../assets/images/softwaredev.jpg";
import CustomHeroSection from "../components/common/CustomHeroSection";
import DevelopmentContent from "../components/sections/developmentSection/DevelopmentContent";

import OneStop from "../components/common/OneStop";
import InnovationDeliver from "../components/sections/InnovationDeliver";
import InnovationInIndustry from "../components/sections/InnovationInIndustry";
import TechStackDev from "../components/sections/developmentSection/TechStackDev";
import SpeedAndSecurity from "../components/sections/SpeedAndSecurity";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import useServiceBySlug from "@/hooks/useServiceBySlug";

const page = () => {
  const { service, isLoading } = useServiceBySlug("development");
  return (
    <div>
      <CustomHeroSection
        bgImage={bgImage}
        heading={
          isLoading || !service
            ? "Loading..."
            : service.title || "Software Development & Product Engineering"
        }
      />
      <DevelopmentContent service={service} />
      {/* <DevelopmentBuildBlock /> */}
      <SpeedAndSecurity />
      <InnovationDeliver />
      <InnovationInIndustry />
      {/* <TechStackMethod /> */}
      <TechStackDev />
      <WhyChooseUs />
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

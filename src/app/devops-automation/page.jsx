"use client";
import React from "react";
import bgImage from "../assets/images/devopsbg.jpg";
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
import SpeedAndSecurity from "../components/sections/SpeedAndSecurity";
import DevopsAndOptimized from "../components/sections/DevopsAndOptimized";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import useServiceBySlug from "@/hooks/useServiceBySlug";

const page = () => {
  const { service, isLoading } = useServiceBySlug("devops-automation");
  return (
    <div>
      <CustomHeroSection
        bgImage={bgImage}
        heading={
          isLoading || !service
            ? "Loading..."
            : service.title || "DevOps, Automation and Solution"
        }
      />
      <DeveopsContent service={service} />
      {/* <DevelopmentBuildBlock /> */}
      {/* <SpeedAndSecurity /> */}
      <DevopsAndOptimized />
      <InnovationDeliver />
      <InnovationInIndustry />
      {/* <TechStackMethod /> */}
      <TechStackDevops />
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

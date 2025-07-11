"use client";
import React from "react";
import bgImage from "../assets/images/AiandData.jpg";
import CustomHeroSection from "../components/common/CustomHeroSection";
import SolutionContent from "../components/sections/solutionSection/SolutionContent";

const page = () => {
  return (
      <div>
        <CustomHeroSection
          bgImage={bgImage}
          heading="Solutions"
          text=" In an ever-evolving digital landscape, businesses need cutting-edge
            solutions to stay competitive, enhance efficiency, and deliver
            exceptional customer experiences. We provide end-to-end technology
            solutions that empower businesses to streamline operations, harness
            the power of data, and leverage advanced technologies for
            sustainable growth."
        />
        <SolutionContent />
      </div>
  );
};

export default page;

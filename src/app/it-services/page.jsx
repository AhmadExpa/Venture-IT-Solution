"use client";
import React from "react";
import bgImage from "../assets/images/servicesbg.jpeg";
import CustomHeroSection from "../components/common/CustomHeroSection";
import ServiceContent from "../components/sections/serviceSection/ServiceContent";
import ServiceBuildingBlock from "../components/sections/serviceSection/ServiceBuildingBlock";
import ServiceSpeed from "../components/sections/serviceSection/ServiceSpeed";
import ServiceExpertise from "../components/sections/serviceSection/ServiceExpertise";
import ServiceSuccessStories from "../components/sections/serviceSection/ServiceSuccessStories";
import WhyChooseService from "../components/sections/serviceSection/WhyChooseService";
import OneStop from "../components/common/OneStop";

const page = () => {
  return (
    <div>
      <CustomHeroSection
        bgImage={bgImage}
        heading="Services"
        text="At our company, we specialize in delivering top-notch cloud and web
            development solutions designed to enhance scalability, security, and
            performance. Our expertise spans across cloud infrastructure, modern
            web technologies, DevOps automation, and security compliance to
            ensure that businesses can thrive in a digital-first world."
      />
      <ServiceContent />
      <ServiceBuildingBlock />
      <ServiceSpeed/>
      <ServiceExpertise />
      <ServiceSuccessStories />
      <WhyChooseService />
      <OneStop
        para="We empower visionaries to design, build, and launch innovative digital products with our"
        title="Brighter Future"
      />
    </div>
  );
};

export default page;

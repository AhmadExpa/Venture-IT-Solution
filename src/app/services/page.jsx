"use client";
import React from "react";
import WebBussiness from "../components/sections/WebBussiness";
import TechStack from "../components/sections/TechStack";
import WebApp from "../components/sections/WebApp";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ClientSay from "../components/sections/ClientSay";
import OneSolution from "../components/sections/OneSolution";
import SpeedAndSecurity from "../components/sections/SpeedAndSecurity";
import LatestStories from "../components/sections/LatestStories";
import InnovationDeliver from "../components/sections/InnovationDeliver";
import DigitalExcellence from "../components/sections/DigitalExcellence";
import InnovationInIndustry from "../components/sections/InnovationInIndustry";
import ServicesHeaderImage from "../components/common/ServicesHeaderImage";

function page() {
  return (
    <div>
      {/* <ServiceHeroSection /> */}
      {/* <WebDevelopmentService /> */}
      <DigitalExcellence />
      <ServicesHeaderImage/>
  
      <SpeedAndSecurity />
      {/* <SpeedAndQuality /> */}
      
      <WebBussiness />
      {/* <IndustryExpertise /> */}
      <InnovationInIndustry />
      <TechStack />
      <WebApp />
      {/* <Commitment /> */}
      <WhyChooseUs />
      {/* <ReliablePartners /> */}
      <InnovationDeliver />
      {/* <ClientSay /> */}
      {/* <DevelopmentHub /> */}
      <LatestStories />
      <OneSolution />
    </div>
  );
}

export default page;

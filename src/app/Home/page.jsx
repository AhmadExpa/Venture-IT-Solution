"use client";
import Commitment from "../../app/components/sections/Commitment";
import HeroSection from "../../app/components/sections/HeroSection";
import React from "react";
import InnovationDeliver from "../components/sections/InnovationDeliver";
import Trustworthy from "../components/sections/Trustworthy";
import DigitalExcellence from "../components/sections/DigitalExcellence";
import VisionExecution from "../components/sections/VisionExecution";
import InnovationInIndustry from "../components/sections/InnovationInIndustry";
import OurCode from "../components/sections/OurCode";
import SuccessStories from "../components/sections/SuccessStories";
import LatestStories from "../components/sections/LatestStories";
import OneStop from "../components/common/OneStop";
import Counter from "../components/sections/Counter";
import ContactForm from "../components/common/ContactFrom";
import WhyChoose from "../components/sections/WhyChoose";
import ClientSay from "../components/sections/ClientSay";
import Today from "../components/sections/about/Today";
import KeyStatsSection from "../components/sections/KeyStatsSection";

function page() {
  return (
    <div>
      <HeroSection />
      <Commitment />
      <WhyChoose />
      {/* <Counter /> */}
      {/* <Today /> */}
      <KeyStatsSection />
      <InnovationDeliver />
      {/* <Trustworthy /> */}
      <DigitalExcellence />
      <VisionExecution />
      <InnovationInIndustry />
      <OurCode />
      <ContactForm />
      {/* <SuccessStories /> */}
      {/* <ClientSay /> */}
      <LatestStories />
      <OneStop
        para="Bringing futuristic tech innovation closer to you, wherever you are, with our"
        title="One-Stop Solutions"
      />
    </div>
  );
}

export default page;

"use client";
import React from "react";
import Hero from "../components/sections/WorksCom/Hero";
import Maincontent from "../components/sections/WorksCom/Maincontent";
import OneStop from "../components/common/OneStop";
import InnovationDeliver from "../components/sections/InnovationDeliver";
import CaseStudy from "../components/sections/CaseStudy";
import CompanyShowcase from "../components/sections/CompanyShowcase";

const page = () => {
  return (
    <div>
      <Hero />
      <CaseStudy />     
      {/* <Maincontent /> */}
      <CompanyShowcase />
      {/* <WorkTrusthworthy /> */}
      <InnovationDeliver />
      <OneStop
        para="Bringing inspiring tech innovation closer to you, wherever you are, with our"
        title="One-Stop Solutions"
      />
    </div>
  );
};

export default page;

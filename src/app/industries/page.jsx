"use client";
import React from "react";
import EDTech from "../components/sections/industries/EDTech";
import EDDevServices from "../components/sections/industries/EDDevServices";
import EDBuildingBlocks from "../components/sections/industries/EDBuildingBlocks";
import SpeedmeetsInnovate from "../components/sections/industries/SpeedmeetsInnovate";
import EDDevelopProcess from "../components/sections/industries/EDDevelopProcess";
import DiscoverFuture from "../components/sections/industries/DiscoverFuture";
import EDCommitment from "../components/sections/industries/EDCommitment";
import EDVentureIT from "../components/sections/industries/EDVentureIT";
import EDReliablePartners from "../components/sections/industries/EDReliablePartners";
import IndustriesClientSay from "../components/sections/industries/IndustriesClientSay";
import IndustriesWebDevelopment from "../components/sections/industries/IndustriesWebDevelopment";
import SuccessStories from "../components/sections/SuccessStories";
import OneStop from "../components/common/OneStop";
import LatestStories from "../components/sections/LatestStories";
import InnovationDeliver from "../components/sections/InnovationDeliver";
import Commitment from "../components/sections/Commitment";
import ClientSay from "../components/sections/ClientSay";
import DigitalExcellence from "../components/sections/DigitalExcellence";
import IndustryDigitalExcellence from "../components/sections/IndustryDigitalExcellence";

function page() {
  
  return (
    <div>
      <EDTech />
      <SpeedmeetsInnovate />
      <EDDevServices  />
      <EDBuildingBlocks />
      <EDDevelopProcess />
      {/* <DiscoverFuture /> */}
      {/* <DigitalExcellence /> */}
      <IndustryDigitalExcellence/>
      <EDCommitment />
      {/* <Commitment /> */}
      <EDVentureIT />
      {/* <EDReliablePartners /> */}
      <InnovationDeliver />
      {/* <IndustriesClientSay /> */}
      {/* <ClientSay /> */}
      {/* <SuccessStories /> */}
      {/* <IndustriesWebDevelopment /> */}
      {/* <LatestStories /> */}
      <OneStop
        para="Bringing futuristic tech innovation closer to you, wherever you are, with our"
        title="One-Stop Solutions"
      />
    </div>
  );
}

export default page;

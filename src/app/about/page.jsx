"use client";
import Image from "next/image";
import React from "react";
import IntelligentSoftwares from "../components/sections/about/IntelligentSoftwares";
import Today from "../components/sections/about/Today";
import TheFutureBright from "../components/sections/about/TheFutureBright";
import SecretSauce from "../components/sections/about/SecretSauce";
import ReliablePartners from "../components/sections/ReliablePartners";
import ClientSay from "../components/sections/ClientSay";
import LastYear from "../components/sections/about/LastYear";
import WhatWeDo from "../components/sections/about/WhatWeDo";
import OneStop from "../components/common/OneStop";
import InnovationDeliver from "../components/sections/InnovationDeliver";

const about = () => {
  return (
    <div>
      
      <div className="md:h-[550px] h-auto flex flex-col justify-center px-4 sm:px-6 lg:px-8 md:py-5 py-10">
        <div className="max-w-7xl mx-auto w-fulllg:mt-0 md:mt-2 mt-0">
          <div className="lg:space-y-12 space-y-3 mt-10">
            {/* Heading */}
            <h1 className="md:text-4xl lg:mt-0 mt-0 md:mt-20 lg:text-7xl text-3xl font-bold text-black lg:tracking-tight ">
              The Venture Story
            </h1>

            {/* Paragraphs */}
            <div className="flex flex-col md:items-end lg:space-y-3 lg:mb-0 md:mb-10 mb-0x">
              <p className="text-lg md:text-xl text-gray-600 w-full md:w-[80%]">
                Venture IT Solutions is the trusted name in advanced technology
                solutions, operating under the official legal entity YSR
                Associates INC. While our clients know us as YSR Associates INC, we
                are proud to operate under the Venture IT Solutions brand, which
                reflects our commitment to innovation, excellence, and
                forward-thinking in the IT industry.
              </p>

              <p className="text-lg md:text-xl text-gray-600 w-full md:w-[80%]">
                Founded in 2019 and headquartered in The Colony, Texas, we
                specialize in developing cutting-edge applications, websites, and
                technology solutions that enable businesses to stay competitive in
                an ever-changing digital world. From cloud services and artificial
                intelligence to big data and IT consulting, our team of experts
                works closely with clients to deliver seamless, scalable, and
                sustainable solutions tailored to their unique needs.
              </p>

              <p className="text-lg md:text-xl text-gray-600 w-full md:w-[80%]">
                At Venture IT Solutions, we combine creativity, technical
                expertise, and a commitment to excellence to help businesses
                innovate, lead, and excel in their respective industries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white px-4 md:px-8">
        <div className="relative group">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,_#CB9F3C,_#E9DC8A,_#CBB260)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <div className="lg:text-start text-center flex flex-col items-center justify-center h-full px-4">
              <p className="text-black lg:text-[50px] md:text-2xl text-xl font-semibold">
                One-Stop Solutions
              </p>
              <p className="lg:text-start mt-10 text-center text-black text-sm md:text-base max-w-xl">
                Building exceptional, results-driven technology solutions for
                businesses—from dynamic IT portals to robust, scalable platforms
              </p>
            </div>
          </div>
          <Image
            src={require("../assets/images/abouthero.jpg")}
            alt="Web Development Team"
            className="w-full  lg:mt-0 md:mt-20 mt-0 lg:h-[450px] md:mb-0 object-cover"
          />
        </div>
        <p className="text-lg font-semibold text-[#212730] text-center lg:w-[900px] w-full mx-auto md:text-2xl leading-8 md:mb-8 md:py-5 py-4">
          We have been pioneering digital breakthroughs and take pride in helping
          startups come out on top in the markets. With 100+ projects under our
          belt, we are a trusted partner in driving innovation and success.
        </p>
      </div>
      <IntelligentSoftwares />
      <LastYear />
      <Today />
      <TheFutureBright />
      <WhatWeDo />
      <SecretSauce />
      {/* <ReliablePartners /> */}
      <InnovationDeliver />
      {/* <ClientSay /> */}
      <OneStop
        para="Bringing futuristic tech innovation closer to you, wherever you are, with our"
        title="One-Stop Solutions"
      />
    </div>
  );
};

export default about;

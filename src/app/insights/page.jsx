"use client";
import Image from "next/image";
import React from "react";
import ExploreAll from "../components/sections/insights/ExploreAll";
import OneStop from "../components/common/OneStop";
import LatestStories from "../components/sections/LatestStories";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const Insights = () => {
  return (
    <>
      <div className="lg:h-[200px] flex items-center justify-center px-4 mt-10 sm:px-6 mt-20 lg:px-8">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-black tracking-tight">
            New At Insights
          </h1>
        </div>
      </div>

      <div className="lg:my-5 md:my-5 py-5 h-full">
        <LatestStories />
      </div>
      {/* <ExploreAll /> */}
      <OneStop
        para="Bringing futuristic tech innovation closer to you, wherever you are, with our"
        title="One-Stop Solutions"
      />
    </>
  );
};

export default Insights;

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
      <div className="lg:h-[200px]  lg:pt-[100px] pt-[80px] flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className=" md:space-y-3">
            <h1 className="text-4xl md:text-7xl font-bold text-black tracking-tight">
              New At Insights
            </h1>
            <div className="lg:flex lg:justify-end">
              <p className="text-lg md:text-xl text-gray-600 md:w-[600px] w-full">
                Dive into a compilation spotlighting our capabilities, team,
                research, & dynamic corporate evolution.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:py-0 md:py-5 h-full rounded-xl">
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

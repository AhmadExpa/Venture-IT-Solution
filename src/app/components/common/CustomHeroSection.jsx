"use client";
import React from "react";
import GradientButton from "./GradientButton";
import Link from "next/link";
import forwardArrowIcon from "../../assets/icons/forwardArrow.png";
function CustomHeroSection({ bgImage, heading, text }) {
  return (
    <div
      className="relative w-full md:h-[600px] h-[200px] bg-cover bg-center mt-20 "
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col md:py-36 py-10 md:px-10 px-5 text-center md:mt-16  md:gap-5">
        <div>
          <h1 className=" text-xl md:text-[40px] lg:text-[80px] font-bold text-white tracking-wider md:leading-[80px]">
            {heading}
          </h1>
          <Link
            href="/hire-us"
            className="flex justify-center mx-auto md:mt-10 mt-3"
          >
            <GradientButton
              text="Get Started"
              bgColor="#CEA645"
              textColor="#171717"
              fontSize="16px"
              fontWeight="600"
              padding="10px 20px"
              icon={forwardArrowIcon}
            />
          </Link>
        </div>
        <div className="flex justify-end">
          <div className="md:w-[70vw]">
            <p className="text-lg md:text-xl text-white mt-4">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomHeroSection;

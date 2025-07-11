"use client";
import React, { useState } from "react";
import Image from "next/image";

const DevelopmentPlan = ({ image, buildHover, heading, paragraph, bgImg }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
  className="flex md:flex-row flex-col group"
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
<div className="md:w-[50vw] md:px-20 px-3 md:py-28 py-4 relative group">
  <div
    className={`absolute inset-0 transition-opacity duration-500  ${
      isHovered ? "opacity-100" : "opacity-0"
    } md:opacity-0 md:group-hover:opacity-100`}
    style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  <Image
    src={isHovered ? buildHover : image}
    width={80}
    height={80}
    alt={heading}
    className="transition duration-300 ease-in-out relative z-10"
  />
</div>

  <div className="md:w-[50vw] flex flex-col gap-2 w-full md:py-28 px-4 md:pl-16 group-hover:bg-[#555555] transition duration-300 ease-in-out">
    <div className="md:w-[40vw] flex flex-col gap-2 w-full">
      <h1 className="text-white md:text-2xl text-lg font-semibold " style={{ lineHeight: "1.3" }}>
        {heading}
      </h1>
      <p className="text-[#F2F2F7]" style={{ lineHeight: "1.5" }}>
        {paragraph}
      </p>
    </div>
  </div>
</div>

  );
};

export default DevelopmentPlan;

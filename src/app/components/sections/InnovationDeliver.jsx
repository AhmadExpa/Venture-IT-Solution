import React from "react";
import TechHeadline from "../common/TechHeadline";
import forwardArrowIcon from "../../assets/icons/forwardArrow.png";
import GradientButton from "../common/GradientButton";
import CustomButton from "../common/CustomButton";
import img1 from "../../assets/images/clientLogo1.jpg";
import img2 from "../../assets/images/ClientLogo2.jpg";
import img3 from "../../assets/images/ClientLogo3.jpg";
import img4 from "../../assets/images/tform.png";
import Image from "next/image";
import Link from "next/link";

function InnovationDeliver() {
  return (
    <>
      <div className="">
        <TechHeadline />
      </div>
      <div className="md:py-10 md:px-10 px-5">
        <div className="flex flex-col  justify-center md:w-[75vw] ">
          <div className="flex flex-col gap-4">
            <h1 className="md:text-[70px] text-4xl md:text-start text-center font-bold  tracking-wide leading-snug">
              Your Trusted Partner in Tech
            </h1>
            <p className="text-gray-600 md:text-lg md:text-start text-center md:mt-2 md:ps-3">
            As a recognized name among software development companies in the USA, our professionals contribute to innovation, driving growth across the tech industry.

            </p>
          </div>

          <div className="flex flex-col justify-center items-center md:flex md:flex-row md:justify-start md:items-start md:gap-6 gap-3 md:mt-10  mt-3">
            <Link href="/hire-us">
              <GradientButton
                text="Get Started"
                bgColor="#CEA645"
                textColor="#171717"
                fontSize="16px"
                fontWeight="600"
                padding="14px 18px"
                icon={forwardArrowIcon}
              />
            </Link>
            <Link href="https://calendly.com/wasayal-talent-network/30min?month=2025-01">
              <button className="bg-white text-black text-base font-semibold w-auto  px-8 py-3 border-2 border-[#DCC268] rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#DCC268]">
                Let's Talk
              </button>
            </Link>
          </div>

          <div className="flex  md:gap-10 gap-5   my-10  w-[95vw]">
            <div className="overflow-hidden ">
              <div className="flex md:gap-16 gap-4  animate-marquee-left ">
                <Image src={img1} className="w-32 h-14 object-contain" />
                <Image src={img2} className="w-32 h-14 object-contain" />
                <Image src={img3} className="w-32 h-14 object-contain" />
                <Image src={img4} className="w-32 h-14 object-contain" />
                <Image src={img1} className="w-32 h-14 object-contain" />
                <Image src={img2} className="w-32 h-14 object-contain" />
                <Image src={img3} className="w-32 h-14 object-contain" />
                <Image src={img4} className="w-32 h-14 object-contain" />
                <Image src={img1} className="w-32 h-14 object-contain" />
                <Image src={img2} className="w-32 h-14 object-contain" />
                <Image src={img3} className="w-32 h-14 object-contain" />
                <Image src={img4} className="w-32 h-14 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InnovationDeliver;

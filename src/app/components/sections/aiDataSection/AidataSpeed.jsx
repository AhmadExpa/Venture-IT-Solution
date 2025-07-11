import React from "react";
import forwardArrowIcon from "../../../assets/icons/forwardArrow.png";
import GradientButton from "../../common/GradientButton";
import img1 from "../../../assets/images/clientLogo1.jpg";
import img2 from "../../../assets/images/ClientLogo2.jpg";
import img3 from "../../../assets/images/ClientLogo3.jpg";
import img4 from "../../../assets/images/tform.png";
import Image from "next/image";
import Link from "next/link";
import TechHeadline from "../../common/TechHeadline";

function AidataSpeed() {
  return (
    <>
      <div className="pt-20">
        <TechHeadline />
      </div>
      <div className="md:py-22 py-6 md:px-10 px-5">
        <div className="flex flex-col  justify-center md:w-[75vw]  mt-20">
          <div className="flex flex-col gap-4">
            <h1 className="md:text-[70px] text-[40px] font-bold leading-snug tracking-wide">
              Your Trusted Partner in Tech
            </h1>
            <p className="text-gray-600 md:text-lg">
              Our top-tier experts and the team of engineers at web app
              development company USA help tech industry leaders bring
              outstanding products to the market.
            </p>
          </div>

          <div className="flex md:flex-row flex-col md:gap-6 gap-3 md:mt-10 mt-5">
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
              <button className="bg-white text-black text-base font-semibold w-auto px-8 py-3 border-2 border-[#DCC268] rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#DCC268]">
                Let's Talk
              </button>
            </Link>
          </div>

          <div className="flex  md:gap-10 gap-5 md:my-16 my-10  w-[95vw]">
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

export default AidataSpeed;

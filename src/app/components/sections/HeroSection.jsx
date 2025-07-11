"use client";
import Image from "next/image";
// import { motion } from "framer-motion";
import bgImage from "../../assets/images/RobotBg.png";
import Navbar from "../layout/Navbar";
import forwardArrowIcon from "../../assets/icons/forwardArrow.png";
import img1 from "../../assets/images/allstatePng.png";
import img2 from "../../assets/images/ClientLogo2.jpg";
import img3 from "../../assets/images/DataAgility.png";
import img4 from "../../assets/images/tform.png";
import GradientButton from "../common/GradientButton";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="h-full relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-50 z-10"></div>
      <Image
        src={bgImage}
        alt="Background"
        className="w-full md:h-full h-[450px] lg:h-[900px] "
      />

      <div
        className="absolute  md:top-0 md:left-0 -top-16 md:right-0 bottom-0 md:mb-[20px] mb-[10px] flex md:mt-0 mt-20 flex-col md:justify-center items-center text-white z-20 md:gap-8 gap-4 p-3"
      >
        <div className="md:w-[75vw] w-full text-center md:pt-0 pt-0 ">
          <h1
            className="md:text-[40px] text-[16px] md:mt-0 lg:mt-0 mt-10 xl:text-[78px] text-3xl font-semibold"
            style={{ lineHeight: "1.2" }}
          >
            Empowering Next-Generation Modern Technology Solutions
          </h1>
        </div>
        <div>
          <p className="md:text-lg text-base md:w-[50vw] md:pt-0  w-full text-center text-[#CED2DA] md:leading-8">
            We are dedicated to leading the future of technology, using
            cutting-edge technologies and state-of-the-art solutions to let you
            thrive in the digital world.
          </p>
        </div>
        <Link href="/hire-us">
          <div className="md:mb-10 mt-0">
            <GradientButton
              text="Get Started"
              bgColor="#CEA645"
              textColor="#171717"
              fontSize="18px"
              fontWeight="600"
              padding="14px 22px"
              icon={forwardArrowIcon}
            />
          </div>
        </Link>
      </div>

      {/* Div for logo scrolling effect */}
      <div
        className="absolute bottom-0  left-0 right-0 flex md:flex-row flex-col justify-center"
      >
        <div className="md:w-[450px] w-full md:pl-16 pl-2 bg-[#F2F2F8] md:p-5 ">
          <p className="text-[#00000] text-sm">
          34+ Years of Excellence in IT Leadership and Business Transformation
          </p>
        </div>
        <div className="overflow-hidden whitespace-nowrap w-full bg-[#F2F2F8] md:p-5 p-2 ">
          <div className="flex items-center md:gap-16 gap-6 animate-marquee-left">
            <Image
              src={img1}
              alt="DAGLogo"
              className=" w-32 h-12 object-contain"
            />
            <Image
              src={img2}
              alt="USAlogo"
              className=" w-32 h-12 object-contain"
            />
            <Image
              src={img3}
              alt="NGILogo"
              className=" w-32 h-12 object-contain"
            />

            <Image
              src={img4}
              alt="XtForm"
              className="w-32 h-12 object-contain"
            />
            <Image
              src={img1}
              alt="DAGLogo"
              className=" w-32 h-12 object-contain"
            />
            <Image
              src={img2}
              alt="USAlogo"
              className=" w-32 h-12 object-contain"
            />
            <Image
              src={img3}
              alt="NGILogo"
              className=" w-32 h-12 object-contain"
            />

            <Image
              src={img4}
              alt="XtForm"
              className="w-32 h-12 object-contain"
            />
            <Image
              src={img1}
              alt="DAGLogo"
              className=" w-32 h-12 object-contain "
            />
            <Image
              src={img2}
              alt="USAlogo"
              className=" w-32 h-12 object-contain"
            />
            <Image
              src={img3}
              alt="NGILogo"
              className=" w-32 h-12 object-contain"
            />

            <Image
              src={img4}
              alt="XtForm"
              className="w-32 h-12 object-contain"
            />
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default HeroSection;

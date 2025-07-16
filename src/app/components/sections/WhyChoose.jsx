import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import GradientButton from "../common/GradientButton";

const WhyChoose = () => {
  const features = [
    "Proven track record of delivering enterprise-grade, scalable solutions on time and within budget.",
    "Commitment to innovation and latest technologies, backed by a trusted record of successful project delivery.",
    // The following points are commented out as per user request:
    // "Your Vision, Realized and Delivered – Seamlessly Beyond Expectations.",
    // "Seasoned experts leveraging the latest technologies and tools to deliver top-notch solutions that drive your business forward.",
    // "From rapid project execution to seamless cloud migrations, we are here to transform your vision into reality.",
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-2 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-[#CB9F3C] via-[#E9DC8A] to-[#CBB260] text-transparent bg-clip-text">
            Venture IT Solutions?
          </span>
        </h1>

        {/* <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Proven expertise in delivering complex projects on time and within
          budget. Commitment to innovation and leveraging the latest
          technologies. Customer-centric approach to ensure your business goals
          are met.
        </p> */}

        <div className="flex flex-col lg:flex-row items-center md:gap-12 gap-4">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="px-4">
                <Image
                  src={require("../../assets/images/why-choose.jpg")}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center md:px-0 px-3 space-x-3"
                >
                  <FiCheckCircle className="w-6 h-6 text-[#DCC268] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 ">{feature}</p>
                </div>
              ))}
            </div>
            <Link href="/about">
              {/* <button className="mt-8 px-8 py-3 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors">
                About Us
              </button> */}
              <div className="mt-8 flex md:justify-start justify-center items-center">
                <GradientButton
                  text=" About Us"
                  textColor="#171717"
                  fontSize="16px"
                  padding="8px 24px"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

// import ChooseVentureIT from "../../common/ChooseVentureIT";

// const featuresData = [
//   {
//     number: "1",
//     title: "Full-Stack Mastery",
//     description:
//       "Our comprehensive skill set covers every aspect of web development, ensuring a seamless process.",
//   },
//   {
//     number: "2",
//     title: "Agile at Heart",
//     description:
//       "We embrace flexibility and rapid iteration to deliver value quickly.",
//   },
//   {
//     number: "3",
//     title: "Security First",
//     description:
//       "Your data is our priority. We implement robust security measures to protect your digital assets.",
//   },
//   {
//     number: "4",
//     title: "Proven Track Record",
//     description:
//       "Our portfolio showcases a history of successful projects and satisfied clients.",
//   },
//   {
//     number: "5",
//     title: "Client-Centric Approach",
//     description:
//       "We collaborate closely to understand your vision and deliver tailored solutions.",
//   },
//   {
//     number: "6",
//     title: "Dedicated Teams",
//     description: "Our expert teams are committed to your project's success.",
//   },
// ];

// const EDVentureIT = () => {
//   return (
//     <ChooseVentureIT
//       title="Why Choose Venture IT Solution for Web Development?"
//       description="From concept to launch, we're your trusted partner in building exceptional web applications. Our team of seasoned engineers combines creativity with technical prowess to deliver innovative solutions that drive results."
//       features={featuresData}
//     />
//   );
// };

// export default EDVentureIT;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import GradientButton from "../../common/GradientButton";

const EDVentureIT = () => {
  const features = [
    // "Agile Development Framework.",
    // "Proven Tech-Driven Processes.",
    // "Seamless Onboarding & App Development.",
    // "Enterprise-Grade Quality Assurance.",
    // "Cross-Functional IT Expertise.",
    // "Successful Project Delivery.",
    // "Vetted 80+ Global Experts.",
    // "Enterprise-Grade & Scalable Solutions.",
    // "Data-Driven & ROI-Focused Approach.",
    // "Full-Stack Development & Secure Coding.",
    // "Trusted Record of Successful projects and delivery.",
    // "Proven track record of delivering enterprise-grade, scalable solutions on time and within budget.",
    // "Commitment to innovation and latest technologies, backed by a trusted record of successful project delivery.",
    // "Customer-centric approach to ensure your business goals are met.",
    // "Driven by trust, transparency, and partnership",
    // "Focus on long-term value and teams built to last",
    "A results-driven leader with a focus on delivering ROI-centric solutions.",
    " Data engineering services across all Public Cloud platforms like Azure, AWS & GCP",
    "Data warehousing and Data modelling services",
    " Full stack App development using .NET, Java & Python stack GenAI capabilities",
     "Infra services including Cloud infra design, DevOps (CI/CD) etc.",
    "Proven ability to deliver under pressure while exceeding expectations.",
    
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

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className=" p-6">
                <Image
                  src={require("../../../assets/images/why-choose.jpg")}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <FiCheckCircle className="w-6 h-6 text-[#DCC268] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <Link href="/about">
              {/* <button className="mt-8 px-8 py-3 border-2 border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-colors">
                About Us
              </button> */}
              <div className="mt-8">
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

export default EDVentureIT;

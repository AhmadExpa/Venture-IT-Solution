import React from "react";
import {
  FaBolt,
  FaExchangeAlt,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";
import SpeedSecure from "../common/SpeedSecure";

function SpeedAndSecurity() {
  const sectionsData = [
    {
      icon: FaBolt,
      title: "High-Performance Software Development ",
      description:
        " Optimized Efficiency Develop blazing-fast, high-performance software with clean architecture, efficient code, and seamless user experience. ",
    },
    {
      icon: FaExchangeAlt,
      title: "Seamless Software Integration",
      description:
        "Integration Capabilities Connect your software applications with APIs, cloud services, and third-party tools for progressive functionality and business agility.",
    },
    {
      icon: FaShieldAlt,
      title: " Enterprise-level Software Security",
      description:
        "Security & Compliance Protect your software ecosystem with end-to-end encryption, secure authentication, and compliance-driven development.",
    },
    {
      icon: FaBalanceScale,
      title: "Scalable Software Solutions ",
      description:
        "Future-Ready Scalability Build scalable, cloud-native, and microservices-based applications that grow with your business without loss in performance.",
    },
  ];

  return (
    <div>
      <SpeedSecure
        heading="Innovate, Optimize, Accelerate"
        subheading="Experience a combination of innovation, efficiency, and solutions."
        sections={sectionsData}
      />
    </div>
  );
}

export default SpeedAndSecurity;

import React from "react";
import {
  FaBolt,
  FaExchangeAlt,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";
import SpeedSecure from "../../common/SpeedSecure";

function DevelopmentBuildBlock() {
  const sectionsData = [
    {
      icon: FaBolt,
      title: "Next-Gen Web Performance ",
      description:
        "Blazing-fast load times, optimized workflows, and seamless interactions—our high-performance web applications redefine user experience, ensuring efficiency at every click.",
    },
    {
      icon: FaExchangeAlt,
      title: "Seamless Digital Ecosystem ",
      description:
        "Supercharge your web app with advanced integration capabilities. From APIs to microservices, we ensure fluid connectivity with third-party platforms, driving automation and interoperability.",
    },
    {
      icon: FaShieldAlt,
      title: "Fortified Security at Every Layer",
      description:
        "Cyber threats evolve, but so do we. End-to-end encryption, multi-factor authentication, and proactive security measures safeguard your digital assets against vulnerabilities.",
    },
    {
      icon: FaBalanceScale,
      title: "Scalability Without Limits ",
      description:
        "Future-proof your web application with an architecture that grows with you. Handle surging traffic and expanding data effortlessly—because your business deserves limitless possibilities. ",
    },
  ];

  return (
    <div>
      <SpeedSecure
        heading="Power. Protection. Possibilities."
        subheading="Unlock the full potential of your web applications with cutting-edge speed, ironclad security, and seamless scalability."
        sections={sectionsData}
      />
    </div>
  );
}

export default DevelopmentBuildBlock;

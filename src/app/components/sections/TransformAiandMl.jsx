import React from "react";
import {
  FaBrain,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import SpeedSecure from "../common/SpeedSecure";

function TransformAiandMl() {
  const sectionsData = [
    {
      icon: FaBrain,
      title: "AI-Powered Innovation at Scale",
      description:
        "Leverage next-gen machine learning and AI algorithms to revolutionize decision-making, and automate business functions with unparalleled precision and agility.",
    },
    {
      icon: FaRobot,
      title: "Integrated Data Architecture for Real-Time Insights",
      description:
        "Optimize data integration and analytics to deliver real-time insights, helping in decision-making for business growth.",
    },
    {
      icon: FaShieldAlt,
      title: "Uncompromising Security for Data-Driven Enterprises",
      description:
        "Implement robust encryption, AI-enhanced threat detection, and secure data pipelines to safeguard critical business assets against evolving cyber threats.",
    },
    {
      icon: FaChartLine,
      title: "Scalable Infrastructure for Tomorrow’s Demands",
      description:
        "Future-proof your digital transformation journey with a resilient, scalable infrastructure that is adaptive to increasing data volumes and helps evolving business",
    },
  ];

  return (
    <div>
      <SpeedSecure
        heading="Intelligence, Robust, Infinite"
        subheading="Unlock the transformative power of AI-driven innovation, data intelligence, and cutting-edge analytics, driving operational excellence and future-ready scalability."
        sections={sectionsData}
      />
    </div>
  );
}

export default TransformAiandMl;

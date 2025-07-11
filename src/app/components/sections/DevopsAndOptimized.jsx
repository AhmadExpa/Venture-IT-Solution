import React from "react";
import {
  FaBolt,
  FaExchangeAlt,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";
import SpeedSecure from "../common/SpeedSecure";

function DevopsAndOptimized() {
  const sectionsData = [
    {
      icon: FaBolt,
      title: "Automated Infrastructure & Delivery",
      description:
        "Enable suitable integration, ongoing deployment, and efficient infrastructure for faster and more reliable software delivery.",
    },
    {
      icon: FaExchangeAlt,
      title: "Performance & Scalability Testing",
      description:
        "Increase software quality with automated and manual testing to deliver performance, security, and scalability. ",
    },
    {
      icon: FaShieldAlt,
      title: "Smart Automation & Connectivity ",
      description:
        "Alignment of the workflows by reducing manual workload to increase productivity, and enable IoT-driven real-time data insights",
    },
    {
      icon: FaBalanceScale,
      title: " Real-Time Intelligence & Agility",
      description:
        "Businesses are accessible to instant data processing, monitoring, and decision-making for agility in the fast-moving technological world",
    },
  ];

  return (
    <div>
      <SpeedSecure
        heading="Streamline, Automate, Innovate"
        subheading="Automated deployment and real-time data optimize operations, innovation, and agility."
        sections={sectionsData}
      />
    </div>
  );
}

export default DevopsAndOptimized;

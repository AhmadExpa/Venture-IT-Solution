import React from "react";
import {
  FaBolt,
  FaExchangeAlt,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";
import SpeedSecure from "../common/SpeedSecure";

function DigitalTransformandSecure() {
  const sectionsData = [
    {
      icon: FaBolt,
      title: "Smoothly running Operations, showcase Capabilities ",
      description:
        " We strategically deploy cutting-edge technologies to streamline business operations and expand system capabilities, providing applicable, real-time data for decision-making and delivering high-impact outcomes.",
    },
    {
      icon: FaExchangeAlt,
      title: "Connected Ecosystem",
      description:
        "Accelerate business growth by integrating various platforms, business management solutions, and services—connecting partner and customer ecosystems for clear communication and increased data flow.",
    },
    {
      icon: FaShieldAlt,
      title: "Streamlined Digital Transformation",
      description:
        "Execute processes for greater efficiency and deliver progressive customer experiences to boost loyalty, resulting in high-impact growth and long-term sustainability.",
    },
    {
      icon: FaBalanceScale,
      title: "Your Path to High-Impact Results",
      description:
        " Building systems that scale seamlessly, strengthens your business to capitalize on every opportunity with agile, responsive infrastructure designed for continuous growth.",
    },
  ];

  return (
    <div>
      <SpeedSecure
        heading="Transform, Secure, Scale"
        subheading="We empower businesses with cutting-edge digital solutions to transform operations, increase customer experiences, and deliver innovation."
        sections={sectionsData}
      />
    </div>
  );
}

export default DigitalTransformandSecure;

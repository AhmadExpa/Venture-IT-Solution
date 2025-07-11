import React from "react";
import {
  FaBolt,
  FaExchangeAlt,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";
import SpeedSecure from "../common/SpeedSecure";

function CloudInfraServices() {
  const sectionsData = [
    {
      icon: FaBolt,
      title: "Scalable & Secure Solutions",
      description:
        "Designing resilient cloud infrastructures to enhance performance and reliability.",
    },
    {
      icon: FaExchangeAlt,
      title: "Strategic Consulting & Planning ",
      description:
        "Unlocking cloud potential with customized strategies for efficiency and business growth.",
    },
    {
      icon: FaShieldAlt,
      title: "Seamless Transition & Optimization",
      description:
        "Ensuring smooth migrations with minimal disruption while optimizing workloads.",
    },
    {
      icon: FaBalanceScale,
      title: "Ongoing Management & Support",
      description:
        "Providing continuous monitoring, scalability, and cost efficiency for a hassle-free experience. (looks same)",
    },
  ];

  return (
    <div>
      <SpeedSecure
        heading="Smart, Secure, and Scalable "
        subheading=" Powering Innovation with Scalable and Secure Cloud Solutions."
        sections={sectionsData}
      />
    </div>
  );
}

export default CloudInfraServices;

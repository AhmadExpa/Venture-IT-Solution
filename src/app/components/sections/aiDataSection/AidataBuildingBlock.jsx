import React from "react";
import {
  FaThLarge,
  FaEdit,
  FaPaintBrush,
  FaClipboardList,
  FaChartBar,
  FaUniversalAccess,
  FaPlug,
} from "react-icons/fa";
import SpeedSecure from "../../common/SpeedSecure";

function AidataBuildingBlock() {
  const sectionsData = [
    {
      icon: FaThLarge,
      title: "High performance",
      description:
        "Experience blazing fast load times, optimal performance, and enhanced user experience with our web app development services.",
    },
    {
      icon: FaEdit,
      title: "Integration capabilities",
      description: "Seamlessly connect your web application with third-party systems, APIs, and microservices for expanded functionality.",
    },
    {
      icon: FaPaintBrush,
      title: "Security",
      description:
        "Protect your sensitive data with robust security measures, including end-to-end encryption, two-factor authentication, and secure user access management.",
    },
    {
      icon: FaClipboardList,
      title: "Assessment and Evaluation",
      description:
        "Measuring student performance and providing actionable feedback.",
    },
    {
      icon: FaChartBar,
      title: "Scalability",
      description:
        "Build a web application that can grow with your business, handling increased traffic and data without compromising performance.",
    },
  ];

  return (
    <div>
      <SpeedSecure
        heading="Speed, Security, Scale"
        subheading="Experience the perfect blend of performance, protection, and flexibility in our custom-built web applications."
        sections={sectionsData}
      />
    </div>
  );
}

export default AidataBuildingBlock;

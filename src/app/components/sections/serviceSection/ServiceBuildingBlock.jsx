import React from "react";
import {
  FaThLarge,
  FaEdit,
  FaPaintBrush,
  FaClipboardList,
  FaChartBar,
  FaShieldAlt,
  FaCloud,
} from "react-icons/fa";
import SpeedSecure from "../../common/SpeedSecure";

function ServiceBuildingBlock() {
  const sectionsData = [
    {
      icon: FaThLarge,
      title: "Custom IT Solutions",
      description:
        "Tailored IT services designed to meet your business needs, ensuring efficiency and reliability.",
    },
    {
      icon: FaEdit,
      title: "Cloud Integration",
      description:
        "Seamlessly migrate and integrate your business operations with cloud solutions for scalability and flexibility.",
    },
    {
      icon: FaPaintBrush,
      title: "Cybersecurity Services",
      description:
        "Protect your business with advanced security solutions, including threat monitoring and risk management.",
    },
    {
      icon: FaClipboardList,
      title: "IT Consulting",
      description:
        "Expert guidance on IT strategy, infrastructure planning, and digital transformation to drive business growth.",
    },
    {
      icon: FaChartBar,
      title: "Data Analytics & AI",
      description:
        "Leverage the power of AI and data analytics to gain valuable insights and optimize decision-making.",
    },
    {
      icon: FaShieldAlt,
      title: "Managed IT Services",
      description:
        "Comprehensive IT management, including network monitoring, troubleshooting, and system maintenance.",
    },
    {
      icon: FaCloud,
      title: "DevOps & Automation",
      description:
        "Accelerate software development with DevOps best practices, CI/CD pipelines, and workflow automation.",
    },
  ];

  return (
    <div>
      <SpeedSecure
        heading="Innovative IT Solutions"
        subheading="Empowering businesses with cutting-edge technology, security, and scalability."
        sections={sectionsData}
      />
    </div>
  );
}

export default ServiceBuildingBlock;

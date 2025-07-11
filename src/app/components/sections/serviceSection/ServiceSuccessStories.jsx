"use client";
import img9 from "../../../assets/images/net.png";
import img10 from "../../../assets/images/clientlogo1.png";
import img11 from "../../../assets/images/oreo.png";
import img12 from "../../../assets/images/samsung.png";
import img14 from "../../../assets/images/CloudMigrate.jpeg";
import img15 from "../../../assets/images/secureCode.jpeg";
import img16 from "../../../assets/images/dataApi.jpeg";
import img17 from "../../../assets/images/ApplicationDev.jpeg";
import CommitmentExcellence from "../../common/CommitmentExcellence";

const sectionsData = [
  [
    {
      mainImage: img14,
      secondaryImage: img9,
      customHeading: "Truckers Compliance Platform",
      title: "Truckers Compliance Platform",
      description: [
        "DQid automates your driver file management, ensuring DOT compliance with ease.",
    
      ],
    },
    {
      mainImage: img15,
      secondaryImage: img10,
      customHeading: "Code Remediation",
      title: "Private Jets Booking System",
      description: [
        "The V2Jets booking software simplifies booking for passengers and management for brokers."
      ],
    },
  ],
  [
    {
      mainImage: img16,
      secondaryImage: img11,
      customHeading: "Integration and APIs",
      title: "Student Housing Platform",
      description: [
        " Our platform helps students find compatible roommates using AI and social networking tools.",
      ],
    },
    {
      mainImage: img17,
      secondaryImage: img12,
      customHeading: "Application Development",
      title: "AI-Powered Energy Monitoring",
      description: [
        "Understand, reduce, and report your energy consumption. Achieve Net Zero goals with AI-driven monitoring system.",
      ],
    },
  ],
];

export default function ServiceSuccessStories() {
  return (
    <CommitmentExcellence
      heading="Web App
Success Stories"
      subheading="Our case studies showcase how we create high-performing web apps that drive results. Discover the impact our web solutions can have on your business."
      sections={sectionsData}
    />
  );
}

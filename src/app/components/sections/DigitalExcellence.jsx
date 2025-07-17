import React from "react";
import EstimateProject from "../common/EstimateProject";

const sectionsData = [
  {
    heading: "Software Development and Product Engineering",
    paragraph:"Crafting scalable, high-performance software solutions with cutting-edge technology and custom development.",
    path: "/development",
  },
  {
    heading: "Digital Transformation Engineering",
    paragraph:" Operating engineers bring change to businesses. Such as customer loyalty, in-depth business development, and innovation as fuel alternates",
    path: "/digital-transformation",
  },
  {
    heading: "DevOps, Automation and Solution",
    paragraph:"Enhancing CI/CD pipelines, cloud-native deployments, and IT automation for seamless operations and faster time-to-market.",
    path: "/devops-automation",
  },
  {
    heading: "Security",
    paragraph:"Implementing enterprise-grade cybersecurity, threat intelligence, and compliance solutions to safeguard digital assets.",
    path: "/security",
  },
  {
    heading: "Cloud & Infrastructure Services",
    paragraph:"Delivering scalable cloud architecture, hybrid cloud solutions, and infrastructure modernization for maximum efficiency.",
    path: "/cloude-infrastructure",
  },
  {
    heading: "Artificial Intelligence",
    paragraph:"Powering businesses with AI-driven automation, machine learning models, and intelligent analytics for data-driven decision-making.",
    path: "/artificial-intelligence",
  },
  {
    heading: "Data Engineering and  Analytics",
    paragraph:"Transforming big data into actionable insights with advanced analytics, data pipelines, and real-time processing.",
    path: "/data-engineering",
  },
];

function DigitalExcellence() {
  return (
    <>

    <EstimateProject
      mainHeading="Services"
      subheading= "We build stunning, results-driven web apps for businesses of allsizes from dynamic web portals to powerful enterprise platforms."
      // "Your All-In-One Solution For Digital Excellence"
      // description="We empower businesses of all sizes with cutting-edge technology, automation, and security, optimizing efficiency and driving digital success in an ever-evolving tech world that reduces manual workloads and automating key processes."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
    </>
  );
}

export default DigitalExcellence;

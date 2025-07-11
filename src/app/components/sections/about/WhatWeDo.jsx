import React from "react";
import EstimateProject from "../../common/EstimateProject";

const sectionsData = [
  {
    heading: "Software Development and Product Engineering",
    paragraph:
      "We create innovative and scalable mobile applications to meet market demands.",
  },
  {
    heading: "Digital Transformation Engineering",
    paragraph:
      "Our firm delivers customized software solutions tailored to your business needs.",
  },
  {
    heading: "DevOps & Automation Security",
    paragraph:
      "We develop responsive and user-friendly web applications that enhance user engagement.",
  },
  {
    heading: "Cloud & Infrastructure Services",
    paragraph:
      "We excel in the rapid development of Minimum Viable Products for effective concept validation.",
  },
  {
    heading: "Artificial Intelligence,",
    paragraph:
      "Our expertise lies in designing scalable and secure Software-as-a-Service platforms.",
  },
  {
    heading: "Data Engineering ",
    paragraph:
      "We provide end-to-end development using key technologies such as .NET, Java, Python, Big Data, and SQL.",
  },
  // {
  //   heading: "Product Development",
  //   paragraph:
  //     "We specialize in impactful digital product development, guiding projects from concept to launch.",
  // },
  // {
  //   heading: "Product Design",
  //   paragraph:
  //     " We design user-centric interfaces that ensure seamless experiences.",
  // },
  // {
  //   heading: "Concept Design & Prototyping",
  //   paragraph:
  //     "We visualize and test innovative ideas through effective prototypes.",
  // },
  // {
  //   heading: "Production Design Documentation",
  //   paragraph: "We deliver precise project documentation to support execution.",
  // },
  // {
  //   heading: "DevOps Services",
  //   paragraph:
  //     "Speed up software delivery with automated CI/CD pipelines, scalable infrastructure, and smooth deployments.",
  // },
  // {
  //   heading: "QA Testing",
  //   paragraph:
  //     "Ensure bug-free, high-performance software with automated and manual testing.",
  // },
  // {
  //   heading: "Secure Code Remediation",
  //   paragraph:
  //     "Detects and fix vulnerabilities using code analysis and security patching.",
  // },
  // {
  //   heading: "Workflow Automation",
  //   paragraph:
  //     "Automate repetitive tasks with smart workflows and system integrations.",
  // },
  // {
  //   heading: "Enterprise Software Solutions",
  //   paragraph: "Tailored solutions for large-scale business needs.",
  // },
  // {
  //   heading: "Cloud Infrastructure Design",
  //   paragraph:
  //     "Crafting secure, scalable cloud architectures that drive performance and resilience.",
  // },
  // {
  //   heading: "Cloud Strategy & Consulting",
  //   paragraph:
  //     " Unlocking cloud potential with tailored strategies for efficiency and growth.",
  // },
  // {
  //   heading: "Cloud Migration",
  //   paragraph:
  //     "Seamlessly transitioning applications and workloads to the cloud with minimal disruption.",
  // },
  // {
  //   heading: "IoT Solutions",
  //   paragraph:
  //     "Enabling intelligent, connected ecosystems with advanced IoT integration.",
  // },
  // {
  //   heading: "Azure Cloud Services",
  //   paragraph:
  //     "Leveraging Microsoft Azure to build, deploy, and optimize cloud-native solutions.",
  // },
  // {
  //   heading: "Real-Time Solutions",
  //   paragraph:
  //     "Powering mission-critical applications with low-latency, real-time data processing.",
  // },
  // {
  //   heading: "AI-Powered Software",
  //   paragraph:
  //     "Transforming business operations with AI-driven automation and intelligence.",
  // },
  // {
  //   heading: "Generative AI Apps",
  //   paragraph:
  //     "Building next-gen applications harnessing the power of generative AI.",
  // },
  // {
  //   heading: "Machine Learning",
  //   paragraph:
  //     "Deploying predictive models that drive data-driven decision-making.",
  // },
  // {
  //   heading: "Data Engineering",
  //   paragraph:
  //     "Architecting high-performance data pipelines for seamless analytics.",
  // },
  // {
  //   heading: "Data Warehousing",
  //   paragraph:
  //     "Structuring scalable, secure storage solutions for enterprise data needs.",
  // },
  // {
  //   heading: "Data Modeling Services",
  //   paragraph:
  //     " Designing optimized data architectures to fuel strategic insights.",
  // },
];

function WhatWeDo() {
  return (
    <EstimateProject
      mainHeading="What We Do"
      description="Crafting digital experiences that matter. We transform businesses
and lives by creating innovative products that resonate with
millions."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
  );
}

export default WhatWeDo;

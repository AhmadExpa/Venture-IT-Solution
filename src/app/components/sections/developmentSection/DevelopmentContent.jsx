import React from "react";
import EstimateProject from "../../common/EstimateProject";
const sectionsData = [
  {
    id: "mobile-development",
    heading: "Mobile Development",
    paragraph2:
      "As a reputable mobile software development company, we deliver scalable apps using React Native and Flutter, ensuring cross-platform compatibility.",
      paragraph3:
      "Whether building from scratch or optimizing existing applications, our Android App Development Agency leads the process of mobile app development from ideation to delivery & continuous support.",
    path: "/development#mobile-development",
  },
  {
    id: "software-development",
    heading: "Software Development",
    paragraph:
      " We’re ready to offer software development solutions that cover software delivery and secure code remediation to business analysis using Fortify, Agent Smith, and Compliance Buddy.",
      paragraph3:
      "Using Microsoft Co-Pilot, our software development company, USA, boosts secure application development and removes all possible vulnerabilities to complete projects in less time.delivers improved ROI, & complements your existing technology.",
      path: "/development#software-development",
  },
  {
    id: "web-applications",
    heading: "Web Applications",
    paragraph:
      "You set your business goals; we create scalable and properly planned web applications to accomplish them using recognized programming skills. ",
    paragraph2:
      "We are the best web applications development company that offers solutions, including smart dashboard development and the building of high-earning SaaS platforms to solve clients' issues.",
      paragraph3:
      "Our web applications development company offers solutions, including smart dashboard development and the building of high-earning SaaS platforms to solve clients' issues.",
      path: "/development#web-applications",
  },
  {
    id: "mvp-development",
    heading: "MVP Development",
    paragraph:
      "  We specialize in MVP development using an iterative, lean methodology across different industries to assist in various projects.",
      paragraph3:
      "From back-end integrations with Python Flask or Node.js to creating wireframes with Figma, our approach accelerates time to market while adhering to the project’s objectives.",
      path: "/development#mvp-development",
  },
  {
    id: "saas-development",
    heading: "SaaS Development",
    paragraph:
      "Our expertise lies in designing scalable and secure Software-as-a-Service platforms.",
    paragraph2:
      "Our 30 + years of experience in SaaS and as a Software and web development company USA  offering services, we are ready to assist you in every step, from proposing future updates to tech documents",
      paragraph3:
      "Get outstanding solutions for workforce organization & data management, as we have all the expertise you need to get a revenue-generating, solid product for your company.",
      path: "/development#saas-development",
  },
  {
    id: "full-stack-development",
    heading: "Full Stack Development",
    paragraph:
      "We provide end-to-end development using key technologies such as .NET, Java, Python, Big Data, and SQL.",
    paragraph2:
      "We offer end-to-end app development using .NET, Java, Python, Big Data, and SQL to create scalable, high-performance solutions. Our expertise covers frontend, backend, and cloud integration, to ensure secure and efficient architectures.",
      path: "/development#full-stack-development",
  },
  {
    id: "product-development",
    heading: "Product Development",
    paragraph:
      "We specialize in impactful digital product development, guiding projects from concept to launch.",
    paragraph2:
      "From concept to launch, we specialize in developing impactful digital products with the target of agile methodologies and cloud-native solutions. Our team gives assurance regarding rapid, secure, and scalable execution.",
      path: "/development#product-development",
  },
 
];

function DevelopmentContent() {
  return (
    <EstimateProject
      mainHeading="Innovation-Driven Development for Every Industry"
      description="We empower businesses of all sizes with cutting-edge technology, automation, and security, optimizing efficiency and driving digital success in an ever-evolving digital world that reduces manual workloads and automates key processes."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
  );
}

export default DevelopmentContent;

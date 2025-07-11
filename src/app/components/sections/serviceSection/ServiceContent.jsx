import React from "react";
import EstimateProject from "../../common/EstimateProject";

const sectionsData = [
  {
    id: "devops-services",
    heading: "DevOps Services",
    paragraph:
      "We provide 24/7 DevOps support, CI/CD pipelines, and cloud optimization.",
  },
  {
    id: "qa-testing",
    heading: "QA Testing",
    paragraph:
      "We offer full-cycle QA testing to ensure high-quality software delivery.",
  },
];

function ServiceContent() {
  return (
    <EstimateProject
      mainHeading="Your All-in-One Solution For Digital Excellence"
      description="We empower businesses of all sizes with cutting-edge technology, automation, and security, optimizing efficiency and driving digital success in an ever-evolving tech world that reduces manual workloads and automating key processes."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
  );
}

export default ServiceContent;

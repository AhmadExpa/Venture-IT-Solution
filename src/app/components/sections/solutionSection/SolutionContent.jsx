import React from "react";
import EstimateProject from "../../common/EstimateProject";

const sectionsData = [
  {
    id: "technology-solutions",
    heading: "Technology Solutions",
    paragraph: "We develop robust enterprise applications using .NET, Java, Python, Big Data, and SQL, offering data-driven insights with Power BI.",
  },
  {
    id: "enterprise-software",
    heading: "Enterprise Software",
    paragraph: "Our custom enterprise software solutions enhance scalability, agility, and competitiveness in your business operations.",
  },
  {
    id: "iot-solutions",
    heading: "IoT Solutions",
    paragraph: "We enable IoT integration for automation, secure data processing, and optimized operations across industries.",
  },
  {
    id: "real-time-solutions",
    heading: "Real-time Solutions",
    paragraph: "We provide real-time collaboration, sentiment analysis, multilingual support, and 24/7 assistance using NLP and RAG.",
  },
  {
    id: "workflow-automation",
    heading: "Workflow Automation",
    paragraph: "Boost productivity with automated workflows, cost reduction, and tailored industry-specific solutions.",
  },
];


function SolutionContent() {
  return (
    <EstimateProject
      mainHeading="Your All-in-One Solution For Digital Excellence"
      description="We are dealing with all kinds of business sizes and industries,
      crafting excellence in the ever-evolving digital landscape. Whatever your
     project goals are, our IT solutions bring security and efficiency,
      reducing manual workloads and automating key processes."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
  );
}

export default SolutionContent;

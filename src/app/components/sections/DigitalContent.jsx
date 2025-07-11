import React from "react";
import EstimateProject from "../common/EstimateProject";

const sectionsData = [
  {
    id: "digital-transformation-engineering",
    heading: "Digital Transformation Engineering",
    paragraph:
      "Reformation of your operations with AI, cloud integration, and process automation, optimizing business workflows and scalability.",
  },
  {
    id: "custom-crm-development",
    heading: "Custom CRM Development",
    paragraph:
      "Create a tailored CRM system that integrates seamlessly with your business, integrating customer management, sales, and marketing processes.",
      paragraph3: "  Develop a personalized CRM system design to align your business's unique needs.  Easily integrate with existing tools, level-up customer relationship management, sales tracking, and marketing automation for a more efficient and scalable workflow."
  },
  {
    id: "hubspot",
    heading: "Hubspot",
    paragraph:
      "Leverage HubSpot CRM for streamlined sales automation, marketing workflows, and real-time customer analytics to upgrade business performance.",
      paragraph3: 
      "  Maximize your business potential with HubSpot CRM, which features powerful sales automation, marketing workflows, and real-time customer insights. Drive higher engagement, optimize lead management, and improve business performance with data-driven strategies."
  },
  {
    id: "salesforce",
    heading: "Salesforce",
    paragraph:
      "Utilize Salesforce CRM to enhance data management, automate customer service workflows, and detail insightful decision-making among the teams.",
      paragraph3: "  Unlock the full potential of Salesforce CRM to streamline data management and improve team collaboration. Automated customer service processes, gain actionable insights through advanced-level analytics, and making smart, real-time decisions that lead to growth and customer satisfaction."
  },
];

function DigitalContent() {
  return (
    <EstimateProject
      mainHeading="Your All-in-One Solution For Digital Excellence"
      description="Reformation of your operations with AI, cloud integration, and process automation, optimizing business workflows and scalability."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
  );
}

export default DigitalContent;

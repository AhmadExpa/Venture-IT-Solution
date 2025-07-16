import React from "react";
import EstimateProject from "../../common/EstimateProject";

const sectionsData = [
  {
    heading: "Rapid Development with Github Copilot",
    paragraph:
      "Leverage cutting-edge AI with GitHub Copilot to accelerate  your development workflow. Our AI-driven coding solutions streamline processes, enhance code quality, and accelerate project delivery.",
      path: "/caseStudy/rapid-development",

  },
  {
    heading: "Advanced-Data Integration with SSIS and ETL Tools",
    paragraph:
      "Efficient data integration powers smarter business decisions. Streamline complex workflows with SSIS and advanced ETL tools to transform raw data into actionable insights.",
      path: "/caseStudy/Advanced-data-integration",
  },
  {
    heading: "Complete Migration to Azure Cloud",
    paragraph:
      "Unlock scalability and performance with seamless Azure cloud migration. We ensure secure, efficient transitions of applications, data, and workloads, tailored to your business needs.",
      path: "/caseStudy/Migration-to-azure-cloud",
  },
  {
    heading: "Custom Job Creation and Workflow Automation",
    paragraph:
      "Optimize operations with custom job creation and workflow automation. We streamline processes, reduce manual effort, and integrate systems for maximum efficiency and productivity.",
        path: "/caseStudy/Job-creation-and-workflow-automation",
  },
  // {
  //   heading: "AI-Powered Energy Monitoring Platform",
  //   paragraph: "Smart energy solutions.",
  // },
  // {
  //   heading: "4 SaaS Products for Startups",
  //   paragraph: "We've been their technology backbone.",
  // },
];

function LastYear() {
  return (
    <EstimateProject
      mainHeading="Last Year"
      description="From Academia to SaaS: We've Done It All"
       buttonText="SEE FULL PORTFOLIO"
      sections={sectionsData}
    />
  );
}

export default LastYear;

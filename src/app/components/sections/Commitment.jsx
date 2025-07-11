"use client";
import bgImage1 from "../../assets/images/rapid.jpg";
import bgImage2 from "../../assets/images/data_integration.jpg";
import bgImage3 from "../../assets/images/azurenew.jpg";
import bgImage4 from "../../assets/images/work_flow.jpg";
import CustomCommitment from "../common/CustomCommitment";

const commitmentCards = [
  {
    id: 0,
    title: "Rapid Development with Github Copilot",
    description:
      "Leverage cutting-edge AI with GitHub Copilot to accelerate  your development workflow. Our AI-driven coding solutions streamline processes, enhance code quality, and accelerate project delivery.",
    bgImage: bgImage1,
    tag: "Rapid Development",
    slug: "rapid-development",
  },
  {
    id: 1,
    title: "Advanced Data Integration with SSIS and ETL Tools",
    description:
      "Efficient data integration powers smarter business decisions. Streamline complex workflows with SSIS and advanced ETL tools to transform raw data into actionable insights.",
    bgImage: bgImage2,
    tag: "Data Integration",
    slug: "Advanced-data-integration",
  },
  {
    id: 2,
    title: "Complete Migration to Azure Cloud",
    description:
      "Unlock scalability and performance with seamless Azure cloud migration. We ensure secure, efficient transitions of applications, data, and workloads, tailored to your business needs",
    bgImage: bgImage3,
    tag: "Migration to Azure Cloud",
    slug: "Migration-to-azure-cloud",
  },
  {
    id: 3,
    title: "Custom Job Creation and Workflow Automation",
    description:
      "Optimize operations with custom job creation and workflow automation. We streamline processes, reduce manual effort, and integrate systems for maximum efficiency and productivity.",
    bgImage: bgImage4,
    tag: "Workflow Automation",
    slug: "Job-creation-and-workflow-automation",
  },
];

function Commitment() {
  return <CustomCommitment commitmentCards={commitmentCards} />;
}

export default Commitment;

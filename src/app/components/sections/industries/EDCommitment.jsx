"use client";
import Logo1 from "../../../assets/images/clientLogo1.jpg";
import Logo2 from "../../../assets/images/ClientLogo2.jpg";
import Logo3 from "../../../assets/images/ClientLogo3.jpg";
import image1 from "../../../assets/images/CommitmentImage1.png";
import image2 from "../../../assets/images/CommitmentImage2.png";
import image3 from "../../../assets/images/CommitmentImage3.png";
import image4 from "../../../assets/images/CommitmentImage4.png";
import CommitmentExcellence from "../../common/CommitmentExcellence";

import bgImage1 from "../../../assets/images/rapid.jpg";
import bgImage2 from "../../../assets/images/data_integration.jpg";
import bgImage3 from "../../../assets/images/azurenew.jpg";
import bgImage4 from "../../../assets/images/work_flow.jpg";
import CustomCommitment from "../../common/CustomCommitment";

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
      "Unlock scalability and performance with seamless Azure cloud migration. We ensure secure, efficient transitions of applications, data, and workloads, tailored to your business needs.",
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

// const sectionsData = [
//   [
//     {
//       mainImage: image1,
//       secondaryImage: Logo1,
//       customHeading: "Cloud Optimization",
//       title: "Cloud Migration and Optimization",
//       description: [
//         "Seamlessly migrated applications, databases, and infrastructure to the Azure platform, utilizing both lift-and-shift and modernization approaches to optimize performance.",
//         "Established Azure tenants and subscriptions, with tailored CPU and storage configurations to achieve significant cost savings.",
//         "Designed and implemented network security solutions, including firewalls and other safeguards, to protect cloud environments.",
//       ],
//     },
//     {
//       mainImage: image2,
//       secondaryImage: Logo2,
//       customHeading: "Code Remediation",
//       title: "Secure Code Remediation",
//       description: [
//         "Modified application code to address vulnerabilities identified by Agent Smith, Fortify, and Compliance Buddy, ensuring robust security and compliance with industry standards.",
//         "Leveraged Microsoft Co-Pilot to rewrite existing applications, removing vulnerabilities and completing a 9-month project in just 4 months.",
//       ],
//     },
//   ],
//   [
//     {
//       mainImage: image3,
//       secondaryImage: Logo3,
//       customHeading: "Integration and APIs",
//       title: "Data Integration and APIs",
//       description: [
//         " Developed APIs and ETL processes using SSIS packages to facilitate seamless data exchange between clients and hundreds of vendors.",
//         "Built and maintained systems to support efficient and secure data flow, ensuring accuracy and scalability.",
//       ],
//     },
//     {
//       mainImage: image4,
//       secondaryImage: Logo3,
//       customHeading: "Application Development",
//       title: "Custom Application Development",
//       description: [
//         "Designed and maintained applications for new member enrollment and product purchases, enhancing the user experience and streamlining operations.",
//         "Delivered a web-based Agent Enrollment and Management system to simplify agent onboarding and monitoring processes.",
//       ],
//     },
//   ],
// ];



export default function EDCommitment() {
  return (
    // <CommitmentExcellence
    //   heading="Commitment to Excellence for Every Business"
    //   subheading="At Venture IT Solutions, we are dedicated to providing cutting-edge IT services that drive efficiency, security, and innovation. With a proven track record of delivering successful projects across a range of industries, here’s how we can transform your business:"
    //   sections={sectionsData}
    // />
    <CustomCommitment commitmentCards={commitmentCards} />
  );
}

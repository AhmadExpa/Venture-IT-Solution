import React from "react";
import EstimateProject from "../common/EstimateProject";
const sectionsData = [
  {
    id: "secure-code-remediation",
    heading: "Secure Code Remediation",
    paragraph:
      " Identification and fix to strengthen application security.",
    paragraph2:
      " Secure Code Remediation: Detects and fixes vulnerabilities using code analysis and security patching.",
  },

  {
    id: "compliance-monitoring",
    heading: "Compliance Monitoring",
    paragraph:
      "Committed to meeting the industry standards and monitoring frameworks.",
    paragraph2:
      "We provide real-time compliance monitoring and security checks to ensure your IT systems meet industry standards and regulations. Our solutions help maintain continuous compliance and reduce risks.",
  },
  {
    id: "disaster-recovery",
    heading: "Disaster Recovery",
    paragraph:
      " instant recovery solutions to minimizing downtime and data loss.",
    paragraph2:
      "Provide cloud-based solutions for data backup and disaster recovery to assure business continuity, minimize downtime, and loss in unexpected failures.",
  },
  {
    id: "cloud-security",
    heading: "Cloud Security",
    paragraph:
      "Protection of the cloud environments with advanced threat detection and encryption",
    paragraph2:
      "Offer security solutions for cloud environments, including threat detection, vulnerability management, and data protection, to safeguard the secret data against cyber threats.",
  },
];

function AutomationContent() {
  return (
    <EstimateProject
      mainHeading="Your Shield for Digital Security "
      description="We protect businesses of all sizes with cutting-edge security solutions and ensure flexibility in an evolving cyber landscape."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
  );
}

export default AutomationContent;

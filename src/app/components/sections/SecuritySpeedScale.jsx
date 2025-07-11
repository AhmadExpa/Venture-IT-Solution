import React from "react";
import {
  FaBolt,
  FaExchangeAlt,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";
import SpeedSecure from "../common/SpeedSecure";

function SecuritySpeedScale() {
  const sectionsData = [
    {
      icon: FaBolt,
      title: "Multi-Layered Cyber Defense",
      description:
        "From firewalls to AI-driven threat detection, we implement robust security frameworks that minimize  risks before they arise.",
    },
    {
      icon: FaExchangeAlt,
      title: "End-to-End Data Protection",
      description:
        "Your data stays secure with end-to-end encryption, secure access controls, and real-time monitoring to prevent breaches.",
    },
    {
      icon: FaShieldAlt,
      title: "Proactive Threat Intelligence",
      description:
        "We stay ahead of cyber threats with continuous vulnerability assessments, compliance monitoring, and automated security updates.",
    },
    {
      icon: FaBalanceScale,
      title: "Zero Trust Architecture",
      description:
        "Enforcing multi-factor authentication, least-privilege access, and network segmentation,  We remove security gaps and unauthorized accessibility",
    },

  ];

  return (
    <div>
      <SpeedSecure
        heading="Fortress. Firewall. Future."
        subheading="Elevate your security with next-level protection, safeguarding your digital assets with precision and resilience."
        sections={sectionsData}
      />
    </div>
  );
}

export default SecuritySpeedScale;

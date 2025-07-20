import React from "react";
import {
  FaThLarge,
  FaEdit,
  FaPaintBrush,
  FaClipboardList,
  FaChartBar,
  FaUniversalAccess,
  FaPlug,
} from "react-icons/fa";
import SpeedSecure from "../../common/SpeedSecure";

function EDBuildingBlocks() {
  const sectionsData = [
    {
      icon: FaThLarge,
      title: "AI-Driven Learning Platforms ",
      description:
        "Transform education with the latest adaptive platforms that personalize learning experiences and arrange course delivery.",
    },
    {
      icon: FaEdit,
      title: "Next-Gen Content Creation & Management",
      description:
        "Handle cloud-based content management and AI-powered tools to develop interactive, high-impact learning materials.",
    },
    {
      icon: FaPaintBrush,
      title: "Intelligent UX & Immersive Learning ",
      description:
        "Enhance engagement with intuitive, mobile-first design, AR/VR integrations, and seamless learner interactions."
    },
    {
      icon: FaClipboardList,
      title: "Automated Assessments & Real-Time Analytics ",
      description:
        "Drive student success with AI-powered assessments, predictive analytics, and actionable performance insights.",
    },
    {
      icon: FaChartBar,
      title: "Data-Driven Learning Insights & AI Analytics",
      description:
        "Connect big data and machine learning to optimize instruction, track engagement, and boost retention rates.",
    },
    {
      icon: FaUniversalAccess,
      title: "Accessibility & Inclusive Learning Environments",
      description:
        "Ensure ADA-compliant, multi-device accessibility with AI-driven voice, text-to-speech, and real-time translation features.",
    },
    {
      icon: FaPlug,
      title: "Seamless API Integrations & Cloud Connectivity ",
      description:
        "Power up Venture It Solution  ecosystems with secure, scalable integrations, connecting LMS, CRM, and enterprise learning solutions easily",
    },
  ];

  return (
    <div>
      <SpeedSecure
        heading="Building Block for Every Industry "
        subheading="Venture-IT-Solution thrives on key building blocks that enhance engagement, interactivity, and learning outcomes, shaping a dynamic and impactful educational experience."
        sections={sectionsData}
      />
    </div>
  );
}

export default EDBuildingBlocks;

import React from "react";
import {
  FaDatabase,
  FaProjectDiagram,
  FaWarehouse,
  FaExchangeAlt,
} from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { TbView360 } from "react-icons/tb";


import SpeedSecure from "../common/SpeedSecure";

function EfficientDataEngineering() {
  const sectionsData = [
    {
      icon: FaDatabase,
      title: "Efficient Data Engineering",
      description:
        "Build high-performance data pipelines that ensure seamless data flow, transformation, and processing. Optimize storage and retrieval for large-scale data ecosystems.",
    },
    {
      icon: FaWarehouse,
      title: "Scalable Data Warehousing",
      description:
        "Leverage modern data warehouse solutions to centralize, organize, and analyze massive datasets. Enable real-time insights with cloud-based, scalable architectures.",
    },
    {
      icon: FaProjectDiagram,
      title: "High-Performance Data Pipelines",
      description:
        "Design and deploy high-level data pipelines that streamline integration across diverse systems, ensuring real-time data processing and delivering detailed perspective with unmatched precision.",
    },
    {
      icon: FaExchangeAlt,
      title: "Advanced Analytics for Decision-Making",
      description:
        "Unlock powerful business insights through advanced analytics, including machine learning and logical models, transforming raw data into applicable intelligence that fuels strategic, data-related decisions.",
    },
    
    {
      icon: MdOutlineSecurity,
      title: "Comprehensive Data Security",
      description:
        "Implement robust security measures, such as end-to-end encryption, real-time anomaly detection, and stringent access controls, ensuring your data is protected from threats and meets industry compliance standards.",
    },
    
    {
      icon: TbView360,
      title: "Integrated Data Ecosystem for 360-Degree Insights",
      description:
        "Unify disparate data sources into a proper ecosystem, providing real-time, cohesive insights that enhance business agility, operational efficiency, and informed decision-making.",
    },
  ];

  return (
    <div>
      <SpeedSecure
        heading="Restructure, Redefine, Resolution"
        subheading="Construct robust data infrastructures for top-notch performance required for enterprise applications, managing scalability, and cutting-edge data engineering frameworks"
        sections={sectionsData}
      />
    </div>
  );
}

export default EfficientDataEngineering;

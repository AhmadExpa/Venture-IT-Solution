"use client";
import Image from "next/image";
import contentBG from "../../../assets/images/contentBG.png";
import webapp2 from "../../../assets/images/webapp2.png";
import Background2 from "../../../assets/images/Background2.png";
import webapp4 from "../../../assets/images/webapp4.png";
import webapp5 from "../../../assets/images/webapp5.png";
import Ecosystem from "../../../assets/images/Ecosystem.png";
import Bodyshop from "../../../assets/images/Bodyshop.png";
import doctorpat from "../../../assets/images/doctorpat.png";
import Men from "../../../assets/images/Men.png"; 
import img1 from "../../../assets/images/clientLogo1.jpg";
import img2 from "../../../assets/images/ClientLogo2.jpg";
import img3 from "../../../assets/images/ClientLogo3.jpg";
import img4 from "../../../assets/images/tform.png";
import GradientButton from "../../common/GradientButton";
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
  },
  {
    id: 1,
    title: "Advanced Data Integration with SSIS and ETL Tools",
    description:
      "Efficient data integration powers smarter business decisions. Streamline complex workflows with SSIS and advanced ETL tools to transform raw data into actionable insights.",
    bgImage: bgImage2,
    tag: "Data Integration",
  },
  {
    id: 2,
    title: "Complete Migration to Azure Cloud",
    description:
      "Unlock scalability and performance with seamless Azure cloud migration. We ensure secure, efficient transitions of applications, data, and workloads, tailored to your business needs.",
    bgImage: bgImage3,
    tag: "Migration to Azure Cloud",
  },
  {
    id: 3,
    title: "Custom Job Creation and Workflow Automation",
    description:
      "Optimize operations with custom job creation and workflow automation. We streamline processes, reduce manual effort, and integrate systems for maximum efficiency and productivity.",
    bgImage: bgImage4,
    tag: "Workflow Automation",
  },
];

const Maincontent = () => {
  return <CustomCommitment commitmentCards={commitmentCards} />;
};

export default Maincontent;

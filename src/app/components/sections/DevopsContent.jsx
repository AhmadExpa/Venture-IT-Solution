import React from "react";
import EstimateProject from "../common/EstimateProject";
const sectionsData = [
  {
    id: "devops-services",
    heading: "DevOps Services",
    paragraph:
      " Speed up software delivery with automated CI/CD pipelines, scalable infrastructure, and smooth deployments.",
    paragraph2:
      "As a leading IT software dev company, we provide all-inclusive DevOps services and are responsible for 24/7 monitoring, regular improvement, and managing workflows. ",
    paragraph3:
      "Our cloud infrastructure services involve optimizing and designing infrastructure across GCP, Azure, and AWS, and implementing CI/CD pipelines for regular deployment",
      path: "/devops-automation#devops-services",
  },
  {
    id: "qa-testing",
    heading: "QA Testing",
    paragraph:
      "  Assure bug-free, high-performance independent software testing services including automated and manual",

    paragraph2:
      "Our QA experts bring their experiences and industrial knowledge to facilitate future-ready solutions to move ahead your business easily",
    paragraph3:
      "Working with Venture IT, the best software development company near me, you’ll get complete QA services to assist in releasing schedules & enjoying quality software",
      path: "/devops-automation#qa-testing",
  },
  {
    id: "workflow-automation",
    heading: "Workflow Automation",
    paragraph: " Automate repetitive tasks with technical workflows and system integrations.",
    paragraph2:
      "Transform your business operations and boost productivity with Venture IT’s Workflow Automation Services, as our enthusiastic team will develop solutions to lower operational costs & streamline processes.",
    paragraph3:
      "Our automation experts, with vast experience at leading companies, offer suitable solutions to meet your unique industry demands for required results and long-term success",
      path: "/devops-automation#workflow-automation",
  },
  {
    id: "iot-solutions",
    heading: "IoT Solutions",
    paragraph: "Enabling intelligent, connected ecosystems with advanced IoT integration.",
    paragraph2:
      "Our IoT Solutions involve enabled data processing and connecting to the  IoT devices to improve operation efficiency and offer business process automation.",
    paragraph3:
      "We streamline IoT project management and understand your concept for its adoption — set up a secure tech infrastructure for complex, advanced data-related tasks.",
      path: "/devops-automation#iot-solutions",
  },
  {
    id: "real-time-solutions",
    heading: "Real-Time Solutions",
    paragraph:
      " Power up mission-critical applications with low response and real-time data processing.",
    paragraph2:
      "Enable real-time collaborations that match your time zone with the help of our development teams and tech experts specialized in over 100 technologies. ",
    paragraph3:
      "We’re here to update your user experience with RTS, equipped with human-like interactions, 24/7 support, live sentimental analysis, and multilingual support using RAG and NLP.",
      path: "/devops-automation#real-time-solutions",
  },
];

function DeveopsContent() {
  return (
    <EstimateProject
      mainHeading="Digital Solutions for a Connected, Agile Future"
      description="We arrange the processes to enhance efficiency and innovate integration. It also includes continuous deployment and infrastructure improvements. Quality assurance with automated and manual testing, while automated workflows reduce manual efforts and boost productivity. Smart connectivity provides real-time data insights and instant data processing assists agile decision-making in a fast-paced digital landscape."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
  );
}

export default DeveopsContent;

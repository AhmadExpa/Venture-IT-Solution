import React from "react";
import EstimateProject from "../common/EstimateProject";

const sectionsData = [
  {
    id: "education-solutions",
    heading: "Education Solutions",
    paragraph:
      "We create customized, tech-driven platforms to enhance learning, streamline management, and improve cloud based educational experiences.",
    paragraph2:
      "Our development team holds the expertise to build well-structured, well-defined e-learning solutions that offer immense value to learners and educators ensuring smooth connectivity and personalized data input.",
      path: "/industries#education",
  },
  {
    id: "healthcare-solutions",
    heading: "Healthcare Solutions",
    paragraph:
      "Improve health tracking, monitoring capabilities, and treatment practices with our modern healthcare cloud application development services.",
    paragraph2:
      "We specialize in providing top-notch web development services in the healthcare sector to medical organizations. Our emerging solutions are customizable and scalable according to the user’s needs.",
      path: "/industries#healthcare",
  },
  {
    id: "ecommerce-solutions",
    heading: "Ecommerce Solutions",
    paragraph:
      "We assist you in enhancing your eCommerce store to meet the demands of modern consumers with our skilled team of developers.",
    paragraph2:
      "By Using upgraded technologies, we can perfectly infuse new vitality into your company through cost-effective and quality eCommerce software development and help expand your ROI, sales, and presence in the business market.",
      path: "/industries#ecommerce",
  },
  {
    id: "data-integration-and-apis",
    heading: "Data Integration and APIs",
    paragraph:
      "Our team implements robust API solutions and data integration strategies to improve system interoperability. We specialize in RESTful APIs, ETL pipelines, and real-time data streaming for enhanced efficiency.",
    paragraph2:
      "Our team implements robust API solutions and data integration strategies to improve system interoperability. We specialize in RESTful APIs, ETL pipelines, and real-time data streaming for enhanced efficiency.",
      path: "/industries#data-integration-and-apis",
  },
  {
    id: "real-estate-solutions",
    heading: "Real Estate Solutions",
    paragraph:
      "Our technology-driven approach enhances efficiency, improves customer engagement, and simplifies transaction management, helping you deliver seamless real estate experiences.",
    paragraph2:
      "Our web applications development company leverages the ultimate potential of Artificial Intelligence, the Internet of Things, Data Science, and Virtual and Augmented Reality to assist companies in.",
      path: "/industries#realestate",
  },
  {
    id: "hospitality-solutions",
    heading: "Hospitality Solutions",
    paragraph:
      "We Optimize your travel and hotel operations with our indispensable IT solutions to maximize your potential.",
    paragraph2:
      "By Delivering a smooth travel experience with excellent user experience and incredible features as we help businesses turn their lifeless ideas into result-driven solutions — guaranteeing optimal system functionality.",
      path: "/industries#hospital"
  },
  {
    id: "hr-finance-solutions",
    heading: "HR & Finance Solutions",
    paragraph:
      "We Accelerate innovation in the HR & Finance industry with reliable financial software to transform your business.",
    paragraph2:
      "We provide top-notch development services using impeccable processes. Our quality-conscious the team at Website Development Company USA offers technical product management consulting, UX and UI design, maintenance, QA, and support services to increase your competitiveness in the market.",
      path: "/industries#hr",
  },
  {
    id: "insurance-solutions",
    heading: "Insurance Solutions",
    paragraph:
      "We develop AI-powered, data-driven platforms that optimize risk assessment, automate claims processing, and enhance policy management through secure cloud infrastructure and predictive analytics.",
    paragraph2:
      "Our team specializes in building scalable, high-performance InsurTech solutions, ensuring seamless underwriting, fraud detection, and real-time customer engagement while maintaining regulatory compliance and data security.",
      path: "/industries#insurance",
  },
  {
    id: "oil-and-gas-solutions",
    heading: "Oil & Gas Solutions",
    paragraph:
      "We engineer advanced digital solutions that drive operational efficiency, enhance asset monitoring, and streamline supply chain management through IoT, AI, and big data analytics.",
    paragraph2:
      "Our expertise in cloud-based SCADA systems, predictive maintenance, and real-time monitoring enables energy companies to optimize resource allocation, improve safety standards, and maximize production uptime.",
      path: "/industries#oilandgas",
  },
];

function IndustryDigitalExcellence() {
  return (
    <EstimateProject
      mainHeading="Your All-in-One Solution For Digital Excellence"
      description="We are dealing with all kinds of business sizes and industries,
      crafting excellence in the ever-evolving digital landscape. Whatever your
     project goals are, our IT solutions bring security and efficiency,
      reducing manual workloads and automating key processes."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
  );
}

export default IndustryDigitalExcellence;

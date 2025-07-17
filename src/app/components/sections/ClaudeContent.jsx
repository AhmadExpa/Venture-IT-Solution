import React from "react";
import EstimateProject from "../common/EstimateProject";
const sectionsData = [
  {
    id: "cloud-infrastructure-design",
    heading: "Cloud Infrastructure Design",
    paragraph:
      "Crafting secure, scalable cloud architectures that drive performance and resilience.",
    paragraph2:
      " fault, and business continuity. Our solutions are built scalable dynamically and provide robust high availability.We architect secure, highly scalable cloud infrastructures for maximum performance, and tolerate",
  },
  {
    id: "cloud-strategy-consulting",
    heading: "Cloud Strategy Consulting",
    paragraph:
      "Explore cloud potential with custom-made strategies for efficiency and growth.",
    paragraph2:
      "expert consultants help businesses optimize cloud adoption with proper strategies,  operational efficiency, cost reduction, and constant growth. We ensure strategic alignment with business objectives",
  
  },
  {
    id: "cloud-migration",
    heading: "Cloud Migration",
    paragraph:
      " Seamlessly migrate applications and workloads to the cloud with minimal disruption.",
    paragraph2:
      "We execute seamless cloud migrations, transitioning critical applications and workloads without interruptions, and applying best practices for data integrity and security.",
    
  },
  {
    id: "azure-cloud-service",
    heading: "Azure Cloud Service",
    paragraph:
      "Manage and maintain cloud infrastructure and applications on behalf of clients, ensuring optimal performance, scalability, and cost efficiency.",
    paragraph2:
      "We utilize Microsoft Azure to design and deploy cloud-native solutions that are cost-efficient, scalable, and deliver the required performance. Our services include cloud optimization and ongoing managed services for the best results.",
    
  },
  // {
  //   id: "azure-cloud-services",
  //   heading: "Manage Cloud Service",
  //   paragraph:
  //     "Manage and maintain cloud infrastructure and applications on behalf of clients, ensuring optimal performance, scalability, and cost efficiency.",
    
  // },
  //   {
  //   id: "azure-cloud-services",
  //   heading: "Major Cloud Providers",
  //   paragraph:
  //     " Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), IBM Cloud, Oracle",
    
  // },
  //   {
  //   id: "azure-cloud-services",
  //   heading: "Other Notable IT Companies Offering Cloud Services",
  //   paragraph:
  //     " VMware, Adobe Cloud , Rackspace and Verizon Cloud",

    
  // },
];

function ClaudeContent() {
  return (
    <EstimateProject
      mainHeading="Cloud Brilliance"
      description="We design secure, scalable cloud architectures for the best performance and resilience. Our expert consulting presents cloud potential with required strategies for efficiency and growth. With ongoing cloud migration, we provide minimal disruption while managing workloads. Our managed cloud services provide continuous monitoring, scalability, and cost-efficiency for a smooth cloud experience."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
  );
}

export default ClaudeContent;

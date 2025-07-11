import React from "react";
import EstimateProject from "../common/EstimateProject";

const sectionsData = [
  {
    id: "data-engineering",
    heading: "Data Engineering",
    paragraph:
      "Architecting high-performance data pipelines for detailed analytics.",
    paragraph2:
      "We architect high-performance data pipelines that support your business with data interpretation.  Our solutions design data flow, eliminate bottlenecks, and ensure data integrity, enabling you to make faster, more informed decisions. By delivering real-time and historical data insights, we bring advancement, conduct operations, and gain a competitive edge.",

  },
  {
    id: "data-warehousing",
    heading: "Data Warehousing",
    paragraph:
      " Structuring scalable, secure storage solutions for enterprise data needs.",
    paragraph2:
      "We design and implement scalable, secure data warehousing solutions that transform fragmented data into a unified asset, and centralize enterprise data for efficient access and applicable analysis. Our systems ensure high-performance data retrieval, enabling real-time data and fastening decision-making while highlighting robust data security to maintain fulfillment and build customers’ trust.",
  },
  {
    id: "data-modeling",
    heading: "Data Modeling Services",
    paragraph:
      "Design data architectures for making strategies",
    paragraph2:
      "We develop highly customized data models and architectures, tailored to your specific business requirements and analytical goals, enabling strategic insights and proactive decision-making. Our solutions focus on data integrity through comprehensive data governance, ensure scalability through flexible and adaptable designs, and adjust query performance through advanced query optimization techniques, maximizing the value of your data assets.",
  },
  {
    id: "data-integration-and-apis",
    heading: "Data Integration and APIs",
    paragraph:
      " We implement robust data integration and API solutions to efficient results",
    paragraph2:
      "Our team implements robust API solutions and data integration strategies to improve system interoperability. ",
      paragraph2: "We specialize in RESTful APIs, ETL pipelines, and real-time data flow to increase efficiency."
  },
  {
    id: "business-intelligence",
    heading: "Business Intelligence",
    paragraph:
      " Transformation of your raw data into descriptive insights through advanced reporting, dashboards, and data visualization for better decision-making.",
    paragraph2:
      "We deliver solutions covering all Business Intelligence components, mainly data quality management, business analytics, data warehouse, and reporting.",
    paragraph3:
      " Serving many companies worldwide, our modern  BI solutions can add value to all stages included in business management: planning, monitoring, performance, & process optimization.",
  },
  {
    id: "business-intelligence",
    heading: "Advanced data Transformation into ideas",
    paragraph:
      " Turn complex data into details with our latest solutions resulting in data integration, expected modeling, and automated testing.  Make your business efficient and scalable with accurate engineering data solutions.",
    paragraph3:
      "Serving over many companies worldwide, our innovative BI solutions can bring value to all stages included in business management: planning, monitoring, performance, & process optimization.",
  },

];

function DataEngineringContent() {
  return (
    <EstimateProject
      mainHeading="Data Engineering"
      description="We architect high-performance data pipelines that support your business with data interpretation.  Our solutions design data flow, eliminate bottlenecks, and ensure data integrity, enabling you to make faster, more informed decisions. By delivering real-time and historical data insights, we bring advancement, conduct operations, and gain a competitive edge."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
  );
}

export default DataEngineringContent;

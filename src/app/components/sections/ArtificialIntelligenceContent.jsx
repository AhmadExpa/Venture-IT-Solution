import React from "react";
import EstimateProject from "../common/EstimateProject";
const sectionsData = [
  {
    id: "ai-powered-software",
    heading: "AI-Powered Software",
    paragraph:
      "  Transforming business operations with AI-driven automation and intelligence.",
    paragraph2:
      "As a pioneer in AI software development, Venture IT Solutions drives custom AI solutions from web scraping tools and chatbots to complex automation systems.",
    paragraph3:
      " We assist in developing, selecting, and training machine learning models. Get ready to go through the user experiences with virtual assistants and chatbots who handle inquiries in fluent language.",
  },
  {
    id: "generative-ai-apps",
    heading: "Generative AI Apps",
    paragraph:
      " Build the next-gen applications to discover the power of generative AI.",
    paragraph2:
      "We, at Venture IT Solutions, deploy generative AI technology — offering the creation of advanced solutions destined to become the standard for existing apps.",
    paragraph3:
      "Dive into ingenuity and creation with our Generative AI app services to enjoy the take of AI technology on the landscapes of your online space.",
  },
  {
    id: "machine-learning",
    heading: "Machine Learning",
    paragraph:
      "Deploying predictive models that assist data-driven decision-making.",
    paragraph2:
      "With end-to-end expertise in model development, we help businesses utilize intelligence automation, data-driven decision-making, and insights to reach the full potential of ML.",
    paragraph3:
      "We design engineering solutions that optimize automation and data flow, developing ETL pipelines and APIs using SSIS to guarantee smooth integration between vendors and clients.",
  },
];

function ArtificialIntelligenceContent() {
  return (
    <EstimateProject
      mainHeading="AI-Powered Insights. Data-Driven Growth."
      description="Harness the power of Artificial Intelligence, Machine Learning, and Advanced Analytics to transform raw data into actionable intelligence. Our solutions optimize automation, predictive analytics, and real-time decision-making, driving innovation and business excellence."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
  );
}

export default ArtificialIntelligenceContent;

import React from "react";
import EstimateProject from "../../common/EstimateProject";

const sectionsData = [
  {
    id: "ai-powered-software",
    heading: "AI-Powered Software",
    paragraph:
      "We build AI solutions like chatbots, automation tools, and machine learning models.",
    paragraph2:
      "A pioneer in AI software development, Venture IT Solutions drives custom AI solutions from web scrapping tools and chatbots to complex automation systems.",
    paragraph3:
      "We assist in developing, selecting, and training machine learning models. Get ready to enhance user experiences with virtual assistants and chatbots who handle inquiries in fluent language.",
  },
  {
    id: "generative-ai-apps",
    heading: "Generative AI Apps",
    paragraph:
      "We develop generative AI apps to enhance creativity and automation in businesses.",
    paragraph2:
      "We, at Venture IT Solutions, deploy generative AI technology — offering the creation of advanced solutions destined to become the standard for existing apps.",
    paragraph3:
      "Dive into ingenuity and creation with our Generative AI app services to enjoy the take of AI technology on the landscapes of your online space.",
  },
  {
    id: "machine-learning",
    heading: "Machine Learning",
    paragraph:
      "Deploying predictive models that drive data-driven decision-making.",
    paragraph2:
      "With end-to-end expertise in model development, we help businesses utilize intelligence automation, data-driven decision-making, and insights to reach the full potential of ML.",
    paragraph3:
      "We design engineering solutions that optimize automation and data flow, developing ETL pipelines and APIs using SSIS to guarantee smooth integration between vendors and clients.",
  },

];

function AiDataContent() {
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

export default AiDataContent;

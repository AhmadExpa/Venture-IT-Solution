import React from "react";
import EstimateProject from "../../common/EstimateProject";

const sectionsData = [
    { heading: "Web Applications", paragraph: "Build engaging web experiences that drive conversions." },
    { heading: "Mobile Applications", paragraph: "Create user-friendly mobile apps with high performance." },
    { heading: "UI/UX Design", paragraph: "Deliver visually stunning and intuitive designs." },
    { heading: "Cloud Solutions", paragraph: "Optimize your business with scalable cloud technology." },
    { heading: "E-commerce Solutions", paragraph: "Boost your online sales with robust e-commerce platforms." },
    { heading: "Digital Marketing", paragraph: "Increase your reach with effective digital strategies." },
    { heading: "SEO Services", paragraph: "Enhance your visibility with tailored SEO solutions." },
    { heading: "IT Consulting", paragraph: "Receive expert guidance for your IT challenges." },
];

function DiscoverFuture() {
  return (
    <EstimateProject
      mainHeading="Your All-in-One Solution For Digital Excellence"
      description="We are dealing with all kinds of business sizes and industries,
      crafting excellence in the ever-evolving digital landscape. Whatever your
      project goals are, our IT solutions bring security and efficiency,
      reducing manual workloads and automating key processes."
      buttonText="Estimate Project"
      sections={sectionsData}
    />
  );
}

export default DiscoverFuture;

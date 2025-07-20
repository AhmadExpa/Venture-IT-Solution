"use client";
import React from "react";
import EstimateProject from "../common/EstimateProject";
import useServices from "@/hooks/useServices";

function DigitalExcellence() {
  const { services, isLoading } = useServices();

  const sectionsData = services.map((service) => ({
    heading: service.title,
    paragraph: service.description,
    path: `/${service.slug}`,
  }));

  return isLoading ? (
    <div className="text-center py-20 text-gray-600">Loading services...</div>
  ) : (
    <EstimateProject
      mainHeading="Services"
      subheading="We build stunning, results-driven web apps for businesses of all sizes—from dynamic web portals to powerful enterprise platforms."
      buttonText="GET STARTED"
      sections={sectionsData}
    />
  );
}

export default DigitalExcellence;

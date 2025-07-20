import React from "react";
import EstimateProject from "../common/EstimateProject";

function ArtificialIntelligenceContent({ service }) {
  if (!service) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-75 mx-auto mb-4"></div>
          <p className="text-lg font-medium text-gray-600">
            Loading content, please wait...
          </p>
        </div>
      </div>
    );
  }

  return (
    <EstimateProject
      mainHeading={service.mainHeading}
      description={service.description}
      buttonText={service.buttonText}
      sections={service.sections}
    />
  );
}

export default ArtificialIntelligenceContent;

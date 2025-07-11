import React from "react";
import RapidDevelopment from "@/app/components/sections/caseStudies/RapidDevelopment";
import AdvancedDataIntegration from "@/app/components/sections/caseStudies/AdvancedDataIntegration";
import MigrationAzureCloud from "@/app/components/sections/caseStudies/MigrationAzureCloud";
import WorkflowAutomation from "@/app/components/sections/caseStudies/WorkflowAutomation";
import AzurePoweredOptimization from "@/app/components/sections/caseStudies/AzurePoweredOptimization";

async function page({ params }) {
  const { slug } = await params;

  const renderBlogContent = () => {
    switch (slug) {
      case "rapid-development":
        return <RapidDevelopment />;
      case "Advanced-data-integration":
        return <AdvancedDataIntegration />;
      case "Migration-to-azure-cloud":
        return <MigrationAzureCloud />;
      case "Job-creation-and-workflow-automation":
        return <WorkflowAutomation />;
      case "Azure-Powered-Cost-Optimization":
        return <AzurePoweredOptimization />;

      default:
        return <div>Blog not found</div>;
    }
  };

  return <div>{renderBlogContent()}</div>;
}

export default page;

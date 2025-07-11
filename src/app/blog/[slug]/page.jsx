import React from "react";
import Maximizing_Investment from "../../components/sections/blogs/Maximizing-ROI";
import Future_Enterprise from "@/app/components/sections/blogs/Future-0f-Enterprise";
import Business_Growth from "@/app/components/sections/blogs/Business-Growth";
import DigitalEvolution from "@/app/components/sections/blogs/DigitalEvolution";
import SuperChargeBusiness from "@/app/components/sections/blogs/SuperChargeBusiness";

async function page({ params }) {
  const { slug } = await params;

  const renderBlogContent = () => {
    switch (slug) {
      case "supercharge-your-business-growth-with-effortless-data-integration-at-ventureit":
        return <SuperChargeBusiness />;
      case "boost-efficiency-with-custom-job-creation-%26-workflow-automation-at-ventureit":
        return <Future_Enterprise />;
      case "how-custom-applications-drive-business-growth-in-the-digital-age-":
        return <Business_Growth />;
      case "digital-evolution%3A-how-businesses-can-thrive-in-the-tech-era":
        return <DigitalEvolution />;
      default:
        return <div>Blog not found</div>;
    }
  };

  return <div>{renderBlogContent()}</div>;
}
//   return (
//     <div>
//       <Maximizing_Investment />
//       <Future_Enterprise />
//       <Business_Growth />
//     </div>
//   );
// }

export default page;

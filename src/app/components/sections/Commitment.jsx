"use client";

import CustomCommitment from "../common/CustomCommitment";
import useCaseStudies from "@/hooks/useCaseStudy";

function Commitment() {
  const { caseStudies, isLoading } = useCaseStudies();

  const data = caseStudies.map((item) => ({
    id: item._id,
    title: item.title,
    description: item.content,
    bgImage: item.images[0]?.path || "",
    tag: item.excerpt,
    slug: item.slug,
  }));

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <div className="h-10 w-10 border-4 border-[#D6C270] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-sm text-gray-600">Loading case studies...</p>
      </div>
    );
  }

  return <CustomCommitment commitmentCards={data} />;
}

export default Commitment;

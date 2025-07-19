import React from "react";

const TechHeadline = () => {
  const categories = [
    "",
    "Machine Learning",
    "Data Engineering",
    "Infra Services",
    "Data Warehousing",
    "Data Modelling Services",
    "Full-Stack App Development",
    "Generative AI Apps",
    "Cloud Migration and Optimization",
    "Data Integration and APIs",
    "Application Development",
  ];

  return (
    <div className="overflow-hidden bg-[#F2F2F7] shadow-sm py-5 mx-[2px]">
      <div className="flex items-center space-x-5 animate-marquee-left w-max">
        {categories.map((category, index) => (
          <React.Fragment key={category || index}>
            <span className="text-gray-800 md:text-xl font-semibold tracking-wide whitespace-nowrap">
              {category}
            </span>
            {index < categories.length - 1 && (
              <span className="w-3 h-3 rounded-full bg-[#CB9F3C]" />
            )}
          </React.Fragment>
        ))}
        {/* Duplicate for seamless looping */}
        {categories.map((category, index) => (
          <React.Fragment key={`duplicate-${category || index}`}>
            <span className="text-gray-800 md:text-xl font-semibold tracking-wide whitespace-nowrap">
              {category}
            </span>
            {index < categories.length - 1 && (
              <span className="w-3 h-3 rounded-full bg-[#CB9F3C]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TechHeadline;

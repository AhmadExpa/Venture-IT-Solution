import Image from "next/image";
import React from "react";

const DevopsService = [
  {
    name: "GitHub",
    icon: <Image src={require("../../assets/images/dev1.png")} />,
  },
  {
    name: "Docker",
    icon: <Image src={require("../../assets/images/dev2.png")} />,
  },
  {
    name: "Kubernetes",
    icon: <Image src={require("../../assets/images/dev3.png")} />,
  },
  {
    name: "Terraform",
    icon: <Image src={require("../../assets/images/dev4.png")} />,
  },
];
const TechStackDevops = () => {
  return (
    <section className="w-full bg-[#F2F2F7] md:px-10">
      <div className="max-w-7xl mx-auto px-4 md:py-8 py-2">
        <div className="max-w-7xl">
          <h2 className="md:text-[90px] text-[30px] font-bold text-gray-900 md:mb-5">
            Scale at Speed With Tech Stack
          </h2>
          <p className="text-lg text-gray-600">
            Our influential team excels in vast frameworks & programming
            languages, keeping you ahead of the competition. Discover our
            reliable building blocks of innovation powered by the latest digital
            trends.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:py-10 py-4">
        <div className="md:mb-12 mb-3">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-900 md:mb-2">
            DevOps Services
          </h2>
          <p className="text-lg text-gray-600">Keeping Code Moving Fast</p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-4 md:justify-start justify-center">
          {DevopsService.map((tech, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center p-[22px] rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {tech.icon}
              {/* Tooltip */}
              <span className="absolute bottom-[105px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[15px] px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackDevops;

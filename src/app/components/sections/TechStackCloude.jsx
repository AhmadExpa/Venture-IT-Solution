import Image from "next/image";
import React from "react";

const CloudServices = [
  {
    name: "AWS",
    icon: <Image src={require("../../assets/images/cloude1.png")} />,
  },
  {
    name: "Azure",
    icon: <Image src={require("../../assets/images/cloude2.png")} />,
  },
  {
    name: "Google Cloude",
    icon: <Image src={require("../../assets/images/cloude3.png")} />,
  },
  {
    name: "Linode",
    icon: <Image src={require("../../assets/images/cloude4.png")} />,
  },
];

const TechStackCloude = () => {
  return (
    <section className="w-full bg-[#F2F2F7] px-10">
      <div className="max-w-7xl mx-auto md:px-4  px-0 lg:py-5">
        <div className="max-w-7xl">
          <h2 className="md:text-[90px] text-[40px] font-bold text-gray-900 mb-5">
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
     

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-12">
          <h2 className="md:text-4xl  text-2xl font-bold text-gray-900 mb-2">
            Cloud Services
          </h2>
          <p className="text-lg text-gray-600">Scaling Without Limits</p>
        </div>

        <div className="flex flex-wrap gap-6 md:justify-start justify-center">
          {CloudServices.map((tech, index) => (
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

export default TechStackCloude;

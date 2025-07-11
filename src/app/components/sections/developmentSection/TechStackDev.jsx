import Image from "next/image";
import React from "react";

const Backendtechnologies = [
  {
    name: "JavaScript",
    icon: (
      <>
        <Image src={require("../../../assets/images/jss.png")} />
      </>
    ),
  },
  {
    name: "TypeScript",
    icon: <Image src={require("../../../assets/images/tss.png")} />,
  },
  {
    name: "Node.js",
    icon: <Image src={require("../../../assets/images/node.png")} />,
  },
  {
    name: "Express",
    icon: <Image src={require("../../../assets/images/express.png")} />,
  },
  {
    name: "Socket.io",
    icon: <Image src={require("../../../assets/images/socker.png")} />,
  },
  {
    name: "PHP",
    icon: <Image src={require("../../../assets/images/phpp.png")} />,
  },
  {
    name: "Laravel",
    icon: <Image src={require("../../../assets/images/laravel.png")} />,
  },
  {
    name: "Python",
    icon: <Image src={require("../../../assets/images/pythonn.png")} />,
  },
  {
    name: "Fast API",
    icon: <Image src={require("../../../assets/images/fast.png")} />,
  },
];
const Frontendtechnologies = [
  {
    name: "HTML5",
    icon: <Image src={require("../../../assets/images/html.png")} />,
  },
  {
    name: "CSS3",
    icon: <Image src={require("../../../assets/images/css.png")} />,
  },
  {
    name: "React",
    icon: <Image src={require("../../../assets/images/react.png")} />,
  },
  {
    name: "Next.js",
    icon: <Image src={require("../../../assets/images/next.png")} />,
  },
  {
    name: "Vue.js",
    icon: <Image src={require("../../../assets/images/vue.png")} />,
  },
  {
    name: "Tailwind CSS",
    icon: <Image src={require("../../../assets/images/tailwind.png")} />,
  },
];
const Testingtechnologies = [
  {
    name: "Sentry",
    icon: <Image src={require("../../../assets/images/test1.png")} />,
  },
  {
    name: "Cypress",
    icon: <Image src={require("../../../assets/images/test2.png")} />,
  },
  {
    name: "Jest",
    icon: <Image src={require("../../../assets/images/test3.png")} />,
  },
  {
    name: "Mocha",
    icon: <Image src={require("../../../assets/images/mocha.png")} />,
  },
];
const DataBase = [
  {
    name: "PostgresSQL",
    icon: <Image src={require("../../../assets/images/data1.png")} />,
  },
  {
    name: "MySQL",
    icon: <Image src={require("../../../assets/images/data2.png")} />,
  },
  {
    name: "MongoDB",
    icon: <Image src={require("../../../assets/images/data3.png")} />,
  },
  {
    name: "Firebase",
    icon: <Image src={require("../../../assets/images/data4.png")} />,
  },
  {
    name: "Pinecone",
    icon: <Image src={require("../../../assets/images/data5.png")} />,
  },
  {
    name: "Redis",
    icon: <Image src={require("../../../assets/images/data6.png")} />,
  },
];

const TechStackDev = () => {
  return (
    <section className="w-full bg-[#F2F2F7] px-10">
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-20">
        <div className="max-w-3xl">
          <h2 className="md:text-[90px] text-[25px] font-bold text-gray-900 md:mb-5">
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
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-10">
        <div className="md:mb-12 mb-4">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-900 md:mb-2">
            Backend Technologies
          </h2>
          <p className="text-lg text-gray-600">Where Logic Comes To Life</p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-3 md:justify-start justify-center">
          {Backendtechnologies.map((tech, index) => (
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

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="md:mb-12 mb-4">
          <h2 className="md:text-4xl text-2xl  font-bold text-gray-900 md:mb-2">
            Frontend Technologies
          </h2>
          <p className="text-lg text-gray-600">Where Design Meets Function</p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-3 md:justify-start justify-center">
          {Frontendtechnologies.map((tech, index) => (
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

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="md:mb-12 mb-4">
          <h2 className="md:text-4xl text-2xl  font-bold text-gray-900 md:mb-2">Databases</h2>
          <p className="text-lg text-gray-600">
            Smart Storage For Your Digital Empire
          </p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-3 md:justify-start justify-center">
          {DataBase.map((tech, index) => (
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
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="md:mb-12 mb-4">
          <h2 className="md:text-4xl text-2xl  font-bold text-gray-900 md:mb-2">Testing</h2>
          <p className="text-lg text-gray-600">Making Tech Flawles</p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-3 md:justify-start justify-center">
          {Testingtechnologies.map((tech, index) => (
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

export default TechStackDev;

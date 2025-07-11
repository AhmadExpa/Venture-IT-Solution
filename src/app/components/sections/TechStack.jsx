import Image from "next/image";
import React from "react";

const LLMServices = [
  {
    name: "Gemini",
    icon: <Image src={require("../../assets/images/geminilogo.png")}  width={40} height={40} />,
  },
  {
    name: "LlaMa",
    icon: <Image src={require("../../assets/images/llms2.png")}  width={40} height={40}/>,
  },
  {
    name: "Claude",
    icon: <Image src={require("../../assets/images/llms4.png")}  width={40} height={40}/>,
  },
  {
    name: "OpenAI",
    icon: <Image src={require("../../assets/images/llms1.png")}  width={40} height={40}/>,
  },
];
const MlServices = [
  {
    name: "Keras",
    icon: <Image src={require("../../assets/images/ml2.png")} />,
  },
  {
    name: "Tensor Flow",
    icon: <Image src={require("../../assets/images/ml1.png")} />,
  },
  {
    name: "pyTorch",
    icon: <Image src={require("../../assets/images/ml3.png")} />,
  },
  {
    name: "Scikit",
    icon: <Image src={require("../../assets/images/ml8.png")} />,
  },
  {
    name: "LangChain",
    icon: <Image src={require("../../assets/images/ml6.png")} />,
  },
  {
    name: "Hugging Face",
    icon: <Image src={require("../../assets/images/ml4.png")} />,
  },
  {
    name: "OpenCV",
    icon: <Image src={require("../../assets/images/ml7.png")} />,
  },
  {
    name: "Llama",
    icon: <Image src={require("../../assets/images/ml5.png")} />,
  },
];
const DataBase = [
  {
    name: "PostgresSQL",
    icon: <Image src={require("../../assets/images/data1.png")} />,
  },
  {
    name: "MySQL",
    icon: <Image src={require("../../assets/images/data2.png")} />,
  },
  {
    name: "MongoDB",
    icon: <Image src={require("../../assets/images/data3.png")} />,
  },
  {
    name: "Firebase",
    icon: <Image src={require("../../assets/images/data4.png")} />,
  },
  {
    name: "Pinecone",
    icon: <Image src={require("../../assets/images/data5.png")} />,
  },
  {
    name: "Redis",
    icon: <Image src={require("../../assets/images/data6.png")} />,
  },
];

const Backendtechnologies = [
  {
    name: "JavaScript",
    icon: (
      <>
        <Image src={require("../../assets/images/jss.png")} />
      </>
    ),
  },
  {
    name: "TypeScript",
    icon: <Image src={require("../../assets/images/tss.png")} />,
  },
  {
    name: "Node.js",
    icon: <Image src={require("../../assets/images/node.png")} />,
  },
  {
    name: "Express",
    icon: <Image src={require("../../assets/images/express.png")} />,
  },
  {
    name: "Socket.io",
    icon: <Image src={require("../../assets/images/socker.png")} />,
  },
  {
    name: "PHP",
    icon: <Image src={require("../../assets/images/phpp.png")} />,
  },
  {
    name: "Laravel",
    icon: <Image src={require("../../assets/images/laravel.png")} />,
  },
  {
    name: "Python",
    icon: <Image src={require("../../assets/images/pythonn.png")} />,
  },
  {
    name: "Fast API",
    icon: <Image src={require("../../assets/images/fast.png")} />,
  },
];
const Frontendtechnologies = [
  {
    name: "HTML5",
    icon: <Image src={require("../../assets/images/html.png")} />,
  },
  {
    name: "CSS3",
    icon: <Image src={require("../../assets/images/css.png")} />,
  },
  {
    name: "React",
    icon: <Image src={require("../../assets/images/react.png")} />,
  },
  {
    name: "Next.js",
    icon: <Image src={require("../../assets/images/next.png")} />,
  },
  {
    name: "Vue.js",
    icon: <Image src={require("../../assets/images/vue.png")} />,
  },
  {
    name: "Tailwind CSS",
    icon: <Image src={require("../../assets/images/tailwind.png")} />,
  },
];
const Testingtechnologies = [
  {
    name: "Sentry",
    icon: <Image src={require("../../assets/images/test1.png")} />,
  },
  {
    name: "Cypress",
    icon: <Image src={require("../../assets/images/test2.png")} />,
  },
  {
    name: "Jest",
    icon: <Image src={require("../../assets/images/test3.png")} />,
  },
  {
    name: "Mocha",
    icon: <Image src={require("../../assets/images/mocha.png")} />,
  },
];
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
const TechStack = () => {
  return (
    <section className="w-full bg-[#F2F2F7] md:px-10">
      <div className="max-w-7xl mx-auto md:px-4  px-0 lg:py-5">
        <div className="max-w-7xl">
          <h2 className="lg:text-[55px] md:text-4xl text-[20px] font-bold text-gray-900 lg:mb-5">
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:mb-12">
          <h2 className="md:text-4xl text-[20px] font-bold text-gray-900 md:mb-2">
            Large Language Models (LLMs)
          </h2>
          <p className="text-lg text-gray-600">
            Language Models That Understand
          </p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-3 md:justify-start justify-center">
          {LLMServices.map((tech, index) => (
            <div
              key={index}
              className="relative md:mt-0 mt-2 group flex items-center justify-center p-[12px] rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
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

      <div className="max-w-7xl mx-auto px-4 md:py-10 py-7">
        <div className="md:mb-12">
          <h2 className="md:text-4xl text-[20px] font-bold text-gray-900 md:mb-2">
            ML & Deep Learning Frameworks & Libraries
          </h2>
          <p className="text-lg text-gray-600">
            The Brains Behind Intelligent Systems
          </p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-3 md:justify-start justify-center ">
          {MlServices.map((tech, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center md:p-[12px] p-[6px] rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
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

      <div className="max-w-7xl mx-auto px-4 md:py-10">
        <div className="md:mb-12">
          <h2 className="md:text-4xl text-[20px] font-bold text-gray-900 md:mb-2">
            Backend Technologies
          </h2>
          <p className="text-lg text-gray-600">Where Logic Comes To Life</p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-3 md:justify-start justify-center">
          {Backendtechnologies.map((tech, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center p-[12px] rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
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

      <div className="max-w-7xl mx-auto px-4 md:py-10 py-7">
        <div className="md:mb-12">
          <h2 className="md:text-4xl text-[20px] font-bold text-gray-900 md:mb-2">
            Frontend Technologies
          </h2>
          <p className="text-lg text-gray-600">Where Design Meets Function</p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-3 md:justify-start justify-center">
          {Frontendtechnologies.map((tech, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center p-[12px] rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
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

      <div className="max-w-7xl mx-auto px-4 md:py-10 py-4">
        <div className="md:mb-12">
          <h2 className="md:text-4xl text-[20px] font-bold text-gray-900 md:mb-2">Databases</h2>
          <p className="text-lg text-gray-600">
            Smart Storage For Your Digital Empire
          </p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-3 md:justify-start justify-center">
          {DataBase.map((tech, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center p-[12px] rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
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

      <div className="max-w-7xl mx-auto px-4 md:py-10 py-4">
        <div className="md:mb-12">
          <h2 className="md:text-4xl text-[20px] font-bold text-gray-900 md:mb-2">Testing</h2>
          <p className="text-lg text-gray-600">Making Tech Flawles</p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-3 md:justify-start justify-center">
          {Testingtechnologies.map((tech, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center p-[12px] rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
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

      <div className="max-w-7xl mx-auto px-4 py-4 md:py-10">
        <div className="md:mb-12">
          <h2 className="md:text-4xl text-[20px] font-bold text-gray-900 md:mb-2">
            Cloud Services
          </h2>
          <p className="text-lg text-gray-600">Scaling Without Limits</p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-3 md:justify-start justify-center">
          {CloudServices.map((tech, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center p-[12px] rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
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

      <div className="max-w-7xl mx-auto px-4 py-4 md:py-10">
        <div className="md:mb-12">
          <h2 className="md:text-4xl text-[20px] font-bold text-gray-900 md:mb-2">
            DevOps Services
          </h2>
          <p className="text-lg text-gray-600">Keeping Code Moving Fast</p>
        </div>

        <div className="flex flex-wrap md:gap-6 gap-3 md:justify-start justify-center">
          {DevopsService.map((tech, index) => (
            <div
              key={index}
              className="relative group flex items-center justify-center p-[12px] rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
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

export default TechStack;

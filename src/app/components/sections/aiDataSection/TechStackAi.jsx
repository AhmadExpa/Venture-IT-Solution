import Image from "next/image";
import React from "react";

// const LLMServices = [
//   {
//     name: "Gemini",
//     icon: <Image src={require("../../../assets/images/geminicolor.png")} width={30} height={30}/>,
//   },
//   {
//     name: "LlaMa",
//     icon: <Image src={require("../../../assets/images/llms2.png")} />,
//   },
//   {
//     name: "Claude",
//     icon: <Image src={require("../../../assets/images/llms4.png")} />,
//   },
//   {
//     name: "OpenAI",
//     icon: <Image src={require("../../../assets/images/llms1.png")} />,
//   },
// ];
const LLMServices = [
  {
    name: "Gemini",
    icon: <Image src={require("../../../assets/images/geminilogo.png")} width={40} height={40} alt="Gemini" />,
  },
  {
    name: "LlaMa",
    icon: <Image src={require("../../../assets/images/llms2.png")} width={40} height={40} alt="LlaMa" />,
  },
  {
    name: "Claude",
    icon: <Image src={require("../../../assets/images/llms4.png")} width={40} height={40} alt="Claude" />,
  },
  {
    name: "OpenAI",
    icon: <Image src={require("../../../assets/images/llms1.png")} width={40} height={40} alt="OpenAI" />,
  },
];

const MlServices = [
  {
    name: "Keras",
    icon: <Image src={require("../../../assets/images/ml2.png")} />,
  },
  {
    name: "Tensor Flow",
    icon: <Image src={require("../../../assets/images/ml1.png")} />,
  },
  {
    name: "pyTorch",
    icon: <Image src={require("../../../assets/images/ml3.png")} />,
  },
  {
    name: "Scikit",
    icon: <Image src={require("../../../assets/images/ml8.png")} />,
  },
  {
    name: "LangChain",
    icon: <Image src={require("../../../assets/images/ml6.png")} />,
  },
  {
    name: "Hugging Face",
    icon: <Image src={require("../../../assets/images/ml4.png")} />,
  },
  {
    name: "OpenCV",
    icon: <Image src={require("../../../assets/images/ml7.png")} />,
  },
  {
    name: "Llama",
    icon: <Image src={require("../../../assets/images/ml5.png")} />,
  },
];

const TechStackAi = () => {
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
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-900 mb-2">
            Large Language Models (LLMs)
          </h2>
          <p className="text-lg text-gray-600">
            Language Models That Understand
          </p>
        </div>

        <div className="flex flex-wrap gap-6 md:justify-start justify-center">
          {LLMServices.map((tech, index) => (
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
        <div className="mb-12">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-900 mb-2">
            ML & Deep Learning Frameworks & Libraries
          </h2>
          <p className="text-lg text-gray-600">
            The Brains Behind Intelligent Systems
          </p>
        </div>

        <div className="flex flex-wrap gap-6 md:justify-start justify-center">
          {MlServices.map((tech, index) => (
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

export default TechStackAi;

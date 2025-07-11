import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import { motion } from "framer-motion";

const ServicesMain = ({ setIsServicesHovered }) => {
  const services = {
    "Software Development & Product Engineering": {
      path: "/development",
      items: [
        "Mobile Development",
        "Software Development",
        "Web Applications",
        "MVP Development",
        "SaaS Development",
        "Full Stack Development",
        "Product Development",
      ],
    },
    "DevOps, Automation and Solution": {
      path: "/devops-automation",
      items: [
        "DevOps Services",
        "QA Testing",
        "Workflow Automation",
        "IoT Solutions",
        "Real-Time Solutions",
      ],
    },
    "Data Engineering & Analytics": {
      path: "/data-engineering",
      items: [
        "Data Engineering",
        "Data Warehousing",
        "Data Modeling Services",
        "Data Integration and APIs",
      ],
    },
    "Artificial Intelligence": {
      path: "/artificial-intelligence",
      items: [
        "AI-Powered Software",
        "Generative AI Apps",
        "Machine Learning",
        "Business Intelligence",
      ],
    },
    Security: {
      path: "/security",
      items: [
        "Secure Code Remediation",
        "Compliance Monitoring",
        "Disaster Recovery",
        "Cloud Security",
      ],
    },
    "Cloud & Infrastructure Services": {
      path: "/cloude-infrastructure",
      items: [
        "Cloud Infrastructure Design",
        "Cloud Strategy  Consulting",
        "Cloud Migration",
        "Azure Cloud Service",
      ],
    },
    "Digital Transformation Engineering": {
      path: "/digital-transformation",
      items: ["Custom CRM Development", "Hubspot", "Salesforce"],
    },
  };

  const technologies = [
    {
      name: "JavaScript",
      icon: (
        <Image
          src={require("../../../assets/images/jss.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <Image
          src={require("../../../assets/images/tss.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "Node.js",
      icon: (
        <Image
          src={require("../../../assets/images/node.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "Express",
      icon: (
        <Image
          src={require("../../../assets/images/express.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "Socket.io",
      icon: (
        <Image
          src={require("../../../assets/images/socker.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "PHP",
      icon: (
        <Image
          src={require("../../../assets/images/phpp.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "Laravel",
      icon: (
        <Image
          src={require("../../../assets/images/laravel.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "Python",
      icon: (
        <Image
          src={require("../../../assets/images/pythonn.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "Fast API",
      icon: (
        <Image
          src={require("../../../assets/images/fast.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "PostgresSQL",
      icon: (
        <Image
          src={require("../../../assets/images/data1.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "MySQL",
      icon: (
        <Image
          src={require("../../../assets/images/data2.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <Image
          src={require("../../../assets/images/data3.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "Firebase",
      icon: (
        <Image
          src={require("../../../assets/images/data4.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "Pinecone",
      icon: (
        <Image
          src={require("../../../assets/images/data5.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "Redis",
      icon: (
        <Image
          src={require("../../../assets/images/data6.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "HTML5",
      icon: (
        <Image
          src={require("../../../assets/images/html.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "CSS3",
      icon: (
        <Image
          src={require("../../../assets/images/css.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "React",
      icon: (
        <Image
          src={require("../../../assets/images/react.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "Next.js",
      icon: (
        <Image
          src={require("../../../assets/images/next.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "Vue.js",
      icon: (
        <Image
          src={require("../../../assets/images/vue.png")}
          className="w-[30px]"
        />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <Image
          src={require("../../../assets/images/tailwind.png")}
          className="w-[30px]"
        />
      ),
    },
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
      <div
        className="absolute top-16 left-[100px] z-50 h-auto md:w-[1050px] rounded-md w-full bg-white shadow-xl"
        onMouseEnter={() => setIsServicesHovered(true)}
        onMouseLeave={() => {
          setIsServicesHovered(false);
          setActiveCategory(null);
        }}
      >
        <div className="container mx-auto py-4">
          {/* First Row - Main/Bigger Categories */}
          <div
            className="grid grid-cols-1 sm:grid-cols-4 gap-4 px-6 mb-5"
          >
            {Object.entries(services)
              .slice(0, 4) // Take first 4 categories for first row
              .map(([category, { path, items }], index) => (
                <div
                  key={category}
                  className="space-y-1"
                  onMouseEnter={() => setActiveCategory(category)}
                >
                  <div onClick={() => setIsServicesHovered(false)}>
                    <Link
                      href={path}
                      className="block text-[16px] bg-[#D1D5DB] p-2 rounded-lg font-semibold text-gray-800"
                    >
                      {category}
                    </Link>
                  </div>
                  <div className="py-1">
                    {items.map((item, index) => (
                      <div
                        key={index}
                      >
                        <Link
                          href={`${path}#${item
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block text-[14px] text-gray-600 hover:text-gray-800 transition-colors py-1"
                        >
                          {item}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Second Row - Smaller Categories */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6"
          >
            {Object.entries(services)
              .slice(4) // Take remaining categories for second row
              .map(([category, { path, items }], index) => (
                <div
                  key={category}
                  className="space-y-1"
                  onMouseEnter={() => setActiveCategory(category)}
                >
                  <div onClick={() => setIsServicesHovered(false)}>
                    <Link
                      href={path}
                      className="block text-[15px] bg-[#D1D5DB] p-2 rounded-lg font-semibold text-gray-800"
                    >
                      {category}
                    </Link>
                  </div>
                  <div className="py-1">
                    {items.map((item, index) => (
                      <div
                        key={index}
                      >
                        <Link
                          href={`${path}#${item
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="block text-[14px] text-gray-600 hover:text-gray-800 transition-colors py-1"
                        >
                          {item}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* TECHNOLOGIES SECTION */}
        <div className="relative overflow-hidden mt-1">
          <div className="flex items-center justify-center gap-4 px-4 mb-3">
            <hr className="w-full h-[1px] bg-gray-300" />
            <h2 className="text-sm text-black whitespace-nowrap">
              TECHNOLOGIES
            </h2>
            <hr className="w-full h-[1px] bg-gray-300" />
          </div>

          <div
            className="flex gap-8 justify-center pb-3"
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center"
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesMain;
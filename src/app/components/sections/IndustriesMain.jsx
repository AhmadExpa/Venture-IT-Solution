"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/images/education.jpg";
import img2 from "../../assets/images/healthcare.jpg";
import img5 from "../../assets/images/realstate.jpg";
import img6 from "../../assets/images/hospital.jpg";
import img7 from "../../assets/images/sport.jpg";
import img8 from "../../assets/images/slidersports.jpg";
import img9 from "../../assets/images/hr.jpg";
import img10 from "../../assets/images/transportation.jpg";
import img13 from "../../assets/images/ecommercee.jpg";
import img14 from "../../assets/images/informationtech.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const IndustryMain = ({ setIsIndustriesHovered }) => {
  const router = useRouter();
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  const industries = [
    {
      name: "Education",
      id: "education",
      href: "/industries#education",
      image: img1,
      description:
        "We create customized, tech-driven platforms to enhance learning, streamline management, and improve cloud-based educational experiences.",
    },
    {
      name: "Real Estate",
      id: "realestate",
      href: "/industries#realestate",
      image: img5,
      description:
        "Our technology-driven web applications development company enhances efficiency, improves customer engagement, and simplifies transaction management, helping you deliver seamless real estate experiences.",
    },
    {
      name: "Transportation",
      id: "transportation",
      href: "/industries#transportation",
      image: img10,
      description:
        "Improving efficiency and visibility in the logistics and transportation sector.",
    },
    {
      name: "Hospitality",
      id: "hospital",
      href: "/industries#hospital",
      image: img6,
      description:
        "We optimize your travel and hotel operations with our indispensable IT solutions to maximize your potential.",
    },
    {
      name: "Information Technology",
      id: "information",
      href: "/industries#information",
      image: img14,
      description: "Bringing immersive experiences to life.",
    },
    {
      name: "Healthcare",
      id: "healthcare",
      href: "/industries#healthcare",
      image: img2,
      description:
        "Improve health tracking, monitoring capabilities, and treatment practices with our modern healthcare cloud application development services.",
    },
    {
      name: "HR & Finance",
      id: "hr",
      href: "/industries#hr",
      image: img9,
      description:
        "As a leading US web development company, we innovate HR & Finance with reliable, scalable software that streamlines operations and boosts efficiency.",
    },
    {
      name: "Ecommerce",
      id: "ecommerce",
      href: "/industries#ecommerce",
      image: img13,
      description:
        "We assist you in web development services which enhance your eCommerce store to meet the demands of modern consumers with our skilled team of developers.",
    },
    {
      name: "Sports",
      id: "sport",
      href: "/industries#sport",
      image: img7,
      description:
        "Developing innovative platforms for sports management and fan experiences.",
    },
  ];

  // Function to handle navigation and close dropdown
  const handleNavigation = (href) => {
    setIsIndustriesHovered(false);
    router.push(href);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-16 left-[100px] h-auto md:w-[1050px] rounded-md w-full bg-white shadow-xl"
      onMouseEnter={() => setIsIndustriesHovered(true)}
      onMouseLeave={() => setIsIndustriesHovered(false)}
    >
      <div className="container mx-auto px-10 py-16 max-w-7xl">
        <div className="uppercase text-gray-700 font-semibold mb-12 text-xl">
          Shaping Industries
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Industry List */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12 md:mb-0">
            {industries.map((industry) => (
              <Link
                href={industry.href}
                key={industry.id}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(industry.href);
                }}
              >
                <div
                  className="text-gray-700 text-lg hover:text-gray-900 transition duration-300 cursor-pointer hover:underline"
                  onMouseEnter={() => setHoveredIndustry(industry)}
                >
                  {industry.name}
                </div>
              </Link>
            ))}
          </div>

          {/* Display Initial Text or Hovered Industry */}
          <div className="md:w-1/2 flex flex-col items-center">
            <motion.div
              key={hoveredIndustry ? hoveredIndustry.id : "default"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {hoveredIndustry ? (
                <>
                  <img
                    src={hoveredIndustry.image.src}
                    alt={hoveredIndustry.name}
                    className="w-[90%] h-56 object-cover rounded-lg mb-4 transition duration-300"
                  />
                  <p className="w-[90%] text-lg text-gray-600">
                    {hoveredIndustry.description}
                  </p>
                </>
              ) : (
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-[55px] font-bold text-gray-800 leading-tight mb-8">
                    Empowering Industries with IT Solutions
                  </h2>
                  <h3 className="font-bold text-xl">
                    Passing Generative Technology Across Industries
                  </h3>
                  <p className="text-lg text-gray-600">
                    We are Redefining IT industry standards with next-gen IT
                    solutions, fueling business agility, digital transformation,
                    and sustainable growth to achieve more along with maximum
                    profitability and effective customer satisfaction
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IndustryMain;
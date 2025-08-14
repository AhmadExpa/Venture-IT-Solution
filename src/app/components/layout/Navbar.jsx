"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Logo from "../../assets/images/Logo.png";
import Link from "next/link";
import GradientButton from "../common/GradientButton";

import ServicesMain from "../sections/ServicesDropdown/ServicesMain";
import IndustryMain from "../sections/IndustriesMain";
import useServices from "@/hooks/useServices";

function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isIndustriesHovered, setIsIndustriesHovered] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [expandedServiceCategory, setExpandedServiceCategory] = useState(null);

  const { services, isLoading, isError } = useServices();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServicesHovered((prev) => !prev);
  };

  const toggleMobileServices = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileServicesOpen((prev) => !prev);
  };

  const toggleMobileIndustries = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileIndustriesOpen((prev) => !prev);
  };

  const toggleServiceCategory = (index) => {
    setExpandedServiceCategory(
      expandedServiceCategory === index ? null : index
    );
  };

  const closeMenuAndNavigate = (href) => {
    setIsMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    router.push(href);
  };

  const textColor =
    pathname === "/" || pathname === "/portfolio" ? "text-white" : "text-black";

  // Service links data structure
  const serviceCategories =
    services.length > 0
      ? services.map((service) => ({
          title: service.title || service.slug,
          link: `/${service.slug}`,
          links: service.sections.map((section) => ({
            name: section.heading,
            href: `/${service.slug}${section.path}`,
          })),
        }))
      : [];

  // Industry links data structure
  const industryCategories = [
    {
      links: [{ name: "Healthcare", href: "/industries#healthcare" }],
    },
    {
      links: [{ name: "Transportation", href: "/industries#transportation" }],
    },
    {
      links: [
        { name: "Information Technology", href: "/industries#information" },
      ],
    },

    {
      links: [{ name: "Hospitality", href: "/industries#hospital" }],
    },
    {
      links: [{ name: "HR & Finance", href: "/industries#hr" }],
    },
    {
      links: [{ name: "E-commerce", href: "/industries#ecommerce" }],
    },
    {
      links: [{ name: "Education", href: "/industries#education" }],
    },
    {
      links: [{ name: "Sports", href: "/industries#sport" }],
    },
    {
      links: [{ name: "Real Estate", href: "/industries#realestate" }],
    },
  ];
  if (isError) console.error("Failed to load services");

  return (
    <div
      className={`flex justify-between py-5 md:px-10 px-4 items-center absolute top-0 left-0 right-0 z-20`}
    >
      <div>
        <Link href="/" onClick={() => closeMenuAndNavigate("/")}>
          <Image src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Desktop Menu - Hidden on md and smaller */}
      <div className="hidden lg:flex">
        <ul className={`flex md:space-x-7 md:text-[17px] ${textColor}`}>
          <li
            className="flex items-center space-x-2 relative p-2 border-0"
            onMouseOver={() => setIsServicesHovered(true)}
            onMouseOut={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsServicesHovered(false);
              }
            }}
          >
            <div>
              <Link href="/services">Services</Link>
            </div>

            {/* Inline Loader while loading */}
            {isLoading ? (
              <div className="ml-2 w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            ) : (
              <button onClick={toggleServices} className="focus:outline-none">
                {/* Double Arror Animation */}
                {/* {isServicesHovered ? (
                  <FiChevronUp className={textColor} />
                ) : (
                  <FiChevronDown className={textColor} />
                )} */}
                <FiChevronDown className={textColor} />
              </button>
            )}
          </li>

          {isServicesHovered && (
            <ServicesMain setIsServicesHovered={setIsServicesHovered} />
          )}
          <li
            className="flex items-center space-x-2"
            onMouseOver={() => setIsIndustriesHovered(true)}
            onMouseOut={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setIsIndustriesHovered(false);
              }
            }}
          >
            <div>
              <Link href="/industries">Industries</Link>
            </div>
            {/* Toggle Icon for Industries */}
            <button className="focus:outline-none">
              {/* Double Arror Animation */}
              {/* {isIndustriesHovered ? (
                <FiChevronUp className={textColor} />
              ) : (
                <FiChevronDown className={textColor} />
              )} */}
              <FiChevronDown className={textColor} />
            </button>
          </li>
          {isIndustriesHovered && (
            <IndustryMain setIsIndustriesHovered={setIsIndustriesHovered} />
          )}
          <li className="flex items-center space-x-2">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link href="/method">Method</Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link href="/about">About</Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link href="/insights">Insights</Link>
          </li>
        </ul>
      </div>

      {/* Desktop CTA - Hidden on md and smaller */}
      <div className="hidden lg:flex items-center md:ms-3 ms-0 space-x-3">
        <Link target="_blank" href="/hire-us">
          <GradientButton
            text="LET'S TALK"
            textColor="#171717"
            fontSize="16px"
            padding="6px 20px"
          />
        </Link>
      </div>

      {/* Mobile Menu Toggle Icon - Visible on md and smaller */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className={`text-2xl focus:outline-none`}>
          {isMenuOpen ? (
            <FiX
              className={`${
                pathname === "/" || pathname === "/portfolio"
                  ? "text-black"
                  : "text-white"
              }`}
            />
          ) : (
            <FiMenu
              className={`${
                pathname === "/" || pathname === "/portfolio"
                  ? "text-white"
                  : "text-black"
              }`}
            />
          )}
        </button>
      </div>

      {/* Full Screen Mobile Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50 overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-5">
          <Link href="/" onClick={() => closeMenuAndNavigate("/")}>
            <Image src={Logo} alt="Logo" width={120} height={40} />
          </Link>
          <button
            onClick={toggleMenu}
            className="text-3xl text-white focus:outline-none"
          >
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col space-y-5 p-5 text-[17px]">
          <li className="flex items-center justify-between">
            <Link
              href="/services"
              onClick={() => closeMenuAndNavigate("/services")}
            >
              Services
            </Link>
            <button
              onClick={toggleMobileServices}
              className="text-white p-2 focus:outline-none"
            >
              {mobileServicesOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </li>

          {/* Mobile Services Dropdown */}
          {mobileServicesOpen && (
            <div className="pl-2 pb-4 animate-slideInRight">
              {serviceCategories.map((category, idx) => (
                <div key={idx} className="mb-4">
                  <div className="flex justify-between items-center">
                    <Link
                      href={category.link}
                      onClick={toggleMenu}
                      className="text-[15px] mb-2 "
                    >
                      {category.title}
                    </Link>
                    <button
                      onClick={() => toggleServiceCategory(idx)}
                      className="text-white p-2 focus:outline-none"
                    >
                      {expandedServiceCategory === idx ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </button>
                  </div>
                  {expandedServiceCategory === idx && (
                    <ul className="pl-3 space-y-2">
                      {category.links.map((link, linkIdx) => (
                        <li key={linkIdx}>
                          <Link
                            href={link.href}
                            className="text-[14px] hover:text-gray-400"
                            onClick={() => closeMenuAndNavigate(link.href)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          <li className="flex items-center justify-between">
            <Link
              href="/industries"
              onClick={() => closeMenuAndNavigate("/industries")}
            >
              Industries
            </Link>
            <button
              onClick={toggleMobileIndustries}
              className="text-white p-2 focus:outline-none"
            >
              {mobileIndustriesOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          </li>

          {/* Mobile Industries Dropdown */}
          {mobileIndustriesOpen && (
            <div className="pl-2 pb-4 animate-slideInRight">
              {industryCategories.map((category, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className=" text-lg mb-2 text-white">{category.title}</h3>
                  <ul className="pl-3 space-y-2">
                    {category.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="text-[14px] hover:text-gray-400"
                          onClick={() => closeMenuAndNavigate(link.href)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <li>
            <Link
              href="/portfolio"
              onClick={() => closeMenuAndNavigate("/portfolio")}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/method"
              onClick={() => closeMenuAndNavigate("/method")}
            >
              Method
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => closeMenuAndNavigate("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link
              href="/insights"
              onClick={() => closeMenuAndNavigate("/insights")}
            >
              Insights
            </Link>
          </li>
          <li className="pt-3">
            <Link
              target="_blank"
              href="https://calendly.com/wasayal-talent-network/30min?month=2025-01"
              onClick={() =>
                closeMenuAndNavigate(
                  "https://calendly.com/wasayal-talent-network/30min?month=2025-01"
                )
              }
            >
              <GradientButton
                text="LET'S TALK"
                textColor="#171717"
                fontSize="16px"
                padding="6px 20px"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

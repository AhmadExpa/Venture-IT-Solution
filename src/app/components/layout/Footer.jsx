"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react"; // Import useEffect
import Logo from "../../assets/images/Logo.png";
import icon1 from "../../assets/icons/linkedIn.png";
import icon2 from "../../assets/icons/youtube.png";
import icon3 from "../../assets/icons/facebook.png";
import icon6 from "../../assets/icons/message.png";
import icon7 from "../../assets/icons/phone.png";
import icon8 from "../../assets/icons/address.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import useServices from "@/hooks/useServices";

function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission
  const [showPopup, setShowPopup] = useState(false); // State to track popup visibility
  const { services, isLoading, isError } = useServices();
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic, e.g., API call
    setIsSubmitted(true); // Set submission status to true
    setShowPopup(true); // Show popup
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false); // Hide popup after 3 seconds
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [showPopup]);

  return (
    <div className="md:px-10 px-5 md:mt-20 mt-10 w-full ">
      <div className=" flex justify-between items-center flex-wrap gap-4">
        <div>
          <Image src={Logo} className="w-100 h-100" alt="Logo" />
        </div>
        <div className="flex gap-4">
          {[icon1, icon2, icon3].map((icon, index) => {
            const isLinkedIn = index === 0;
            const linkedInUrl =
              "https://www.linkedin.com/company/venture-itsolutions/";
            const iconElement = (
              <div
                key={index}
                className="bg-black w-[40px] h-[40px] rounded-full flex items-center justify-center"
              >
                <Image src={icon} alt="Social Icon" />
              </div>
            );
            return isLinkedIn ? (
              <a
                key={index}
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {iconElement}
              </a>
            ) : (
              iconElement
            );
          })}
        </div>
      </div>

      <div className="md:mt-10 mt-4 border-b border-t border-[#CED2DA] py-4 md:py-3 grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-[#3F3F46] font-semibold mb-5">CONTACT</h1>
          <div className="flex flex-col gap-4 md:mt-10 mt-0 ">
            <div className="flex gap-3 items-center">
              <Image src={icon6} className="w-6 h-6" alt="Email" />
              <span className="text-[#3F3F46] font-medium">
                support@ventureitsolution.com
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <Image src={icon7} className="w-6 h-6" alt="Phone" />
              <span className="text-[#3F3F46]">+1 (214) 293-2809</span>
            </div>
            <div className="flex gap-3 items-center">
              <Image src={icon8} className="w-6 h-6" alt="Address" />
              <span className="text-[#3F3F46]">
                8424 Western, The Colony, Texas 75056, US
              </span>
            </div>
          </div>

          <div className="rounded-lg md:mt-0 md:pt-10 pt-4">
            <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4">
              Subscribe to our Newsletter!
            </h2>
            <div>
              <form
                onSubmit={handleSubmit}
                className="lg:flex flex-col sm:flex-row gap-2 w-full md:w-[400px] "
              >
                <div className="flex gap-4">
                  <div className="">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="lg:w-full md:w-[200px] w-[200px] px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-yellow-400 hover:bg-yellow-500  text-white rounded-lg px-6 py-3 transition-colors duration-300 flex items-center justify-center"
                    >
                      <FaArrowRight className="text-2xl" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center gap-28">
          <div className="">
            <div className="lg:mt-0 md:mt-8">
              <h1 className="text-[#3F3F46] font-semibold ">Menu</h1>
              <ul className="flex flex-col gap-3 text-[#3F3F46] font-medium">
                <li className="">
                  <Link
                    className="block md:mb-4 md:pt-4 mb-2 pt-2"
                    href="/services"
                  >
                    Services
                  </Link>
                  <Link
                    className="block md:mb-4 md:pt-4 mb-2 pt-2"
                    href="/industries"
                  >
                    Industries
                  </Link>
                  <Link
                    className="block md:mb-4 md:pt-4 mb-2 pt-2"
                    href="/portfolio"
                  >
                    Portfolio
                  </Link>

                  <Link
                    className="block md:mb-4 md:pt-4 mb-2 pt-2"
                    href="/method"
                  >
                    Method
                  </Link>
                  <Link
                    className="block md:mb-4 md:pt-4 mb-2 pt-2"
                    href="/about"
                  >
                    About
                  </Link>
                  <Link
                    className="block md:mb-4 md:pt-4 mb-2 pt-2"
                    href="/insights"
                  >
                    Insights
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex lg:gap-28  lg:mb-9 ">
            <div className="  lg:mt-0 md:mt-7 mt-4">
              <h1 className="text-[#3F3F46] font-semibold ">SERVICES</h1>
              <ul className="flex flex-col gap-3 text-[#3F3F46] font-medium">
                {serviceCategories.slice(0, 3).map((category, idx) => (
                  <li className="lg:w-[180px]" key={idx}>
                    <Link
                      href={category.link}
                      className="block md:mb-4 lg:pt-4 md:pt-8 pt-4"
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:flex lg:gap-28  lg:mb-9 ">
            <div className="  lg:mt-0 md:mt-7 mt-4">
              <ul className="flex flex-col gap-3 text-[#3F3F46] font-medium">
                {serviceCategories.slice(-4).map((category, idx) => (
                  <li className="lg:w-[180px]" key={idx}>
                    <Link
                      href={category.link}
                      className="block md:mb-4 lg:pt-4 md:pt-8 pt-4"
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between md:py-5 py-5 gap-4 text-center">
        <span>©2025 Venture IT Solutions. All rights reserved.</span>
        <div className="flex gap-5">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>Sitemap</span>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-green-500 text-xl">
              Thank you for subscribing to our newsletter!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;

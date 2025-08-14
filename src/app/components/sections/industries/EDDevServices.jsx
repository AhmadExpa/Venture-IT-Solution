"use client";
import React from "react";
import img1 from "../../../assets/images/education.jpg";
import img2 from "../../../assets/images/healthcare.jpg";
import img3 from "../../../assets/images/insurence.jpg";
import img4 from "../../../assets/images/oilandgas.jpg";
import img5 from "../../../assets/images/ecommercee.jpg";
import img6 from "../../../assets/images/realstate.jpg";
import information from "../../../assets/images/informationtech.jpg";
import transportation from "../../../assets/images/transportation.jpg";
import hr from "../../../assets/images/hr.jpg";
import sport from "../../../assets/images/sport.jpg";
import hospital from "../../../assets/images/hospital.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";
function EDDevServices() {
  return (
    <div
      id="EdDevservices"
      className="md:mt-20 mt-4 md:px-10 px-5 bg-[#171717] md:py-20 py-4  rounded-t-2xl "
    >
      <div className="flex  flex-col gap-4 md:w-[60vw] w-full ">
        <h1 className="text-white md:text-4xl text-3xl font-bold">
          Our Venture IT Development Services
        </h1>

        <p className="text-white">
          Our  IT Development Services offer a full spectrum of
          innovative solutions, from customized LMS and mobile apps to
          AI-powered adaptive platforms.
        </p>
      </div>

      <div className="md:mt-12 mt-5 flex flex-wrap justify-between ">
        {/* education, information and healthcare start */}
        <div className="flex flex-col md:gap:10 gap-8 md:w-[33vw] w-full ">
          <div
            id="education"
            className="border group cursor-pointer border-white p-5 flex flex-col justify-between rounded-2xl  transition duration-500 hover:bg-[#555555] hover:h-auto"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-bold mb-2">Education</h1>
              <span className="text-[#CB9F3C] mb-2 text-2xl opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <MdOutlineArrowOutward className="hidden" />
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${img1.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px",
                width: "100%",
                borderRadius: "10px",
              }}
            />
            <div className="overflow-hidden max-h-[100px] transition-all duration-500 group-hover:max-h-[260px]">
              <p className="text-white pt-2">
                We develop customized, tech-embedded platforms to enhance
                learning, align management, and bring improvements in
                cloud-based educational-related tasks.
              </p>
              <p className="text-white pt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Our development team holds the expertise to build
                well-structured, well-defined e-learning solutions that offer
                immense value to learners and educators ensuring smooth
                connectivity and personalized data input.
              </p>
            </div>
          </div>

          <div
            id="healthcare"
            className="border group cursor-pointer border-white p-5 flex flex-col justify-between rounded-2xl  transition duration-500 hover:bg-[#555555] hover:h-auto"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-bold mb-2">Healthcare</h1>
              <span className="text-[#CB9F3C] mb-2 text-2xl opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <MdOutlineArrowOutward className="hidden" />
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${img2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Add height to make it visible
                width: "100%",
                borderRadius: "10px",
              }}
            />
            <div className="overflow-hidden max-h-[100px] transition-all duration-500 group-hover:max-h-[260px]">
              <p className="text-white pt-2">
                Improve health tracking, monitoring relatable details, and
                treatment practices with our latest healthcare cloud application
                development services.
              </p>
              <p className="text-white pt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                We specialize in providing top-notch web development services in
                the healthcare sector to medical organizations. Our emerging
                solutions are customizable and scalable according to the user’s
                needs.
              </p>
            </div>
          </div>

          <div
            id="information"
            className="border group cursor-pointer border-white p-5 flex flex-col justify-between rounded-2xl  transition duration-500 hover:bg-[#555555] hover:h-auto"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-bold mb-2">
                Information Technology
              </h1>
              <span className="text-[#CB9F3C] mb-2 text-2xl opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <MdOutlineArrowOutward className="hidden" />
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${information.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Add height to make it visible
                width: "100%",
                borderRadius: "10px",
              }}
            />

            <div className="overflow-hidden max-h-[100px] transition-all duration-500 group-hover:max-h-[260px]">
              <p className="text-white pt-2">
                Improve health tracking, monitoring capabilities, and treatment
                practices with our modern healthcare cloud application
                development services.
              </p>
              <p className="text-white pt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                We specialize in providing top-notch web development services in
                the healthcare sector to medical organizations. Our emerging
                solutions are customizable and scalable according to the user’s
                needs.
              </p>
            </div>
          </div>
          <div
            id="sport"
            className="border group cursor-pointer border-white p-5 flex flex-col justify-between rounded-2xl  transition duration-500 hover:bg-[#555555] hover:h-auto"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-bold mb-2">Sports</h1>
              <span className="text-[#CB9F3C] mb-2 text-2xl opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <MdOutlineArrowOutward className="hidden" />
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${sport.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Add height to make it visible
                width: "100%",
                borderRadius: "10px",
              }}
            />

            <div className="overflow-hidden max-h-[100px] transition-all duration-500 group-hover:max-h-[260px]">
              <p className="text-white pt-2">
                Developing innovative platforms for sports management and fan
                experiences.
              </p>
              <p className="text-white pt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Creating cutting-edge solutions for sports management and
                enhancing fan engagement.
              </p>
            </div>
          </div>
        </div>
        {/* education, information and healthcare end */}

        {/* Insurance, transportation and oilandgas start */}
        <div className="flex flex-col md:gap:10 gap-8 md:w-[26vw] w-full md:mt-24 mt-8">
          <div
            id="insurance"
            className="border group cursor-pointer border-white p-5 flex flex-col justify-between rounded-2xl  transition duration-500 hover:bg-[#555555] hover:h-auto"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-bold mb-2">Insurance</h1>
              <span className="text-[#CB9F3C] mb-2 text-2xl opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <MdOutlineArrowOutward className="hidden" />
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${img3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Add height to make it visible
                width: "100%",
                borderRadius: "10px",
              }}
            />

            <div className="overflow-hidden max-h-[100px] transition-all duration-500 group-hover:max-h-[260px]">
              <p className="text-white pt-2">
                We develop AI-powered, data-driven platforms that optimize risk
                assessment, automate claims processing, and enhance policy
                management through secure cloud infrastructure and predictive
                analytics.
              </p>
              <p className="text-white pt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Our team specializes in building scalable, high-performance
                InsurTech solutions, ensuring seamless underwriting, fraud
                detection, and real-time customer engagement while maintaining
                regulatory compliance and data security.
              </p>
            </div>
          </div>
          <div
            id="oilandgas"
            className="border group cursor-pointer border-white p-5 flex flex-col justify-between rounded-2xl  transition duration-500 hover:bg-[#555555] hover:h-auto"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-bold mb-2">Oil & Gas</h1>
              <span className="text-[#CB9F3C] mb-2 text-2xl opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <MdOutlineArrowOutward className="hidden" />
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${img4.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Add height to make it visible
                width: "100%",
                borderRadius: "10px",
              }}
            />
            <div className="overflow-hidden max-h-[100px] transition-all duration-500 group-hover:max-h-[260px]">
              <p className="text-white pt-2">
                We engineer advanced digital solutions that drive operational
                efficiency, enhance asset monitoring, and streamline supply
                chain management through IoT, AI, and big data analytics.
              </p>
              <p className="text-white pt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Our expertise in cloud-based SCADA systems, predictive
                maintenance, and real-time monitoring enables energy companies
                to optimize resource allocation, improve safety standards, and
                maximize production uptime.
              </p>
            </div>
          </div>
          <div
            id="transportation"
            className="border group cursor-pointer border-white p-5 flex flex-col justify-between rounded-2xl  transition duration-500 hover:bg-[#555555] hover:h-auto"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-bold mb-2">
                Transportation
              </h1>
              <span className="text-[#CB9F3C] mb-2 text-2xl opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <MdOutlineArrowOutward className="hidden" />
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${transportation.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Add height to make it visible
                width: "100%",
                borderRadius: "10px",
              }}
            />
            <p className="text-white pt-2">
              Improving efficiency and visibility in the logistics and
              transportation sector.
            </p>
            <div className="overflow-hidden max-h-[100px] transition-all duration-500 group-hover:max-h-[260px]">
              <p className="text-white pt-2">
                Improving efficiency and visibility in the logistics and
                transportation sector.
              </p>
              <p className="text-white pt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Our expertise in cloud-based SCADA systems, predictive
                maintenance, and real-time monitoring enables energy companies
                to optimize resource allocation, improve safety standards, and
                maximize production uptime.
              </p>
            </div>
          </div>
          <div
            id="hospital"
            className="border group cursor-pointer border-white p-5 flex flex-col justify-between rounded-2xl transition duration-500 hover:bg-[#555555] hover:h-auto"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-bold mb-2">
                Hospitality
              </h1>
              <span className="text-[#CB9F3C] mb-2 text-2xl opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <MdOutlineArrowOutward className="hidden" />
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${hospital.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Add height to make it visible
                width: "100%",
                borderRadius: "10px",
              }}
            />
            <p className="text-white pt-2">
            We manage your travel and hotel operations with our unique IT solutions to maximize your potential. 

            </p>
            <div className="overflow-hidden max-h-[100px] transition-all duration-500 group-hover:max-h-[260px]">
              <p className="text-white pt-2">
                Enhancing travel and hospitality services with cutting-edge
                digital solutions.
              </p>
              <p className="text-white pt-2">
                Our technology-driven solutions streamline booking and improve
                operational efficiency for hotels and travel agencies. With
                scalable and customizable features.
              </p>
            </div>
          </div>
        </div>
        {/* Insurance, transportation and oilandgas end */}

        {/* Ecommerce, hr-finance and Real Estate start */}
        <div className="flex flex-col md:gap:10 gap-8 md:w-[26vw] w-full mt-10">
          <div
            id="ecommerce"
            className="border group cursor-pointer border-white p-5 flex flex-col justify-between rounded-2xl  transition duration-500 hover:bg-[#555555] hover:h-auto"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-bold mb-2">Ecommerce</h1>
              <span className="text-[#CB9F3C] mb-2 text-2xl opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <MdOutlineArrowOutward className="hidden" />
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${img5.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Add height to make it visible
                width: "100%",
                borderRadius: "10px",
              }}
            />

            <div className="overflow-hidden max-h-[100px] transition-all duration-500 group-hover:max-h-[260px]">
              <p className="text-white pt-2">
              With our skillful team of developers, we provide web development services that enhance your eCommerce store to fulfill the demands of modern consumers.

              </p>
              <p className="text-white pt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                By using upgraded technologies, we can perfectly infuse new vitality into your company through cost-effective and quality eCommerce software development and help expand your ROI, sales, and presence in the business market.
              </p>
            </div>
          </div>
          <div
            id="realestate"
            className="border group cursor-pointer border-white p-5 flex flex-col justify-between rounded-2xl  transition duration-500 hover:bg-[#555555] hover:h-auto"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-bold mb-2">
                Real Estate
              </h1>
              <span className="text-[#CB9F3C] mb-2 text-2xl opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <MdOutlineArrowOutward className="hidden" />
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${img6.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Add height to make it visible
                width: "100%",
                borderRadius: "10px",
              }}
            />
            <div className="overflow-hidden max-h-[100px] transition-all duration-500 group-hover:max-h-[260px]">
              <p className="text-white pt-2">
              Our web applications development company [KW] enhances efficiency, improves customer engagement, and simplifies transaction processes. It also helps you deliver seamless real estate experiences.

              </p>
              <p className="text-white pt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Our web applications development company leverages the full potential of Artificial Intelligence, the Internet of Things, Data Science, and Virtual and Augmented Reality.
              </p>
            </div>
          </div>
          <div
            id="hr"
            className="border group cursor-pointer border-white p-5 flex flex-col justify-between rounded-2xl  transition duration-500 hover:bg-[#555555] hover:h-auto"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-white text-2xl font-bold mb-2">HR-Finance</h1>
              <span className="text-[#CB9F3C] mb-2 text-2xl opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                <MdOutlineArrowOutward className="hidden" />
              </span>
            </div>
            <div
              style={{
                backgroundImage: `url(${hr.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px", // Add height to make it visible
                width: "100%",
                borderRadius: "10px",
              }}
            />
            <p className="text-white pt-2">
As a recognized US software development company [KW], we innovate the HR and Finance sectors with reliable, scalable software that aligns operations and boosts efficiency.
            </p>
            <div className="overflow-hidden max-h-[100px] transition-all duration-500 group-hover:max-h-[260px]">
              <p className="text-white pt-2">
                As a leading US web development company, we innovate HR &
                Finance with reliable, scalable software that streamlines
                operations and boosts efficiency.
              </p>
              <p className="text-white pt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                We specialize in providing top-notch web development services in
                the healthcare sector to medical organizations. Our emerging
                solutions are customizable and scalable according to the user’s
                needs.
              </p>
            </div>
          </div>
        </div>
        {/* Ecommerce, hr-finance and Real Estate end */}
      </div>
    </div>
  );
}

export default EDDevServices;

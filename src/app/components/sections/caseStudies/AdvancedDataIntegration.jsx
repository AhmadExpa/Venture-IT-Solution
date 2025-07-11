"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";
import LandingImage from "../../../assets/images/data_integration.jpg";
import img1 from "../../../assets/images/maxblog1.jpg";
import Link from "next/link";

function AdvancedDataIntegration() {
  const router = useRouter();
  return (
    <div className="md:px-12 px-5 pt-28 ">
      <div onClick={() => router.back()} className="cursor-pointer">
        <div className="flex items-center gap-3">
          <MdOutlineArrowBack size={24} className="text-gray-600" />
          <span className="text-gray-600">Go Back</span>
        </div>
      </div>

      <div className="lg:flex md:flex-row flex-col justify-between lg:pt-20 pt-5 lg:gap-8">
        <div className="lg:w-[40vw]">
          <h1 className="lg:text-[55px]  md:text-2xl text-xl font-semibold lg:tracking-wide lg:leading-[65px]  ">
            Advanced Data Integration with SSIS and ETL Tools
          </h1>
        </div>

        <div className="flex flex-col lg:w-[45vw] justify-between">
          <p className="font-semibold text-gray-600 text-lg lg:text-end">
            Feb 18, 2025
          </p>
          <p className="lg:text-lg text-gray-600 pt-3 md:p-0 text-justify">
            ELT and SSIS tools streamline data flow, converting data into
            actionable business insights.
          </p>
        </div>
      </div>

      <div className="lg:pt-20">
        <Image
          src={LandingImage}
          className="w-full lg:h-[100vh] pt-4 md:pt-3 object-cover"
        />
      </div>

      <div className="flex md:flex-row flex-col justify-between lg:pt-28 lg:gap-10 pt-5">
        <div className="border border-gray-300 rounded-2xl p-10 md:w-[300px] md:h-fit lg:w-[28vw] lg:h-[75vh] md:sticky md:top-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">
              Hassle-Free Data Integration
            </h1>

            <h2 className="font-semibold text-gray-600 text-justify">
              ELT and SSIS tools streamline data flow, converting data into
              applicable business insights.
            </h2>
            <p className="text-gray-600 text-justify">
              Our expertise in designing and implementing efficient ETL
              pipelines enabled seamless data flow across platforms,
              transforming raw data into valuable insights for informed
              decision-making.
            </p>
          </div>

          {/* <div className="mt-10 flex gap-4 items-center">
            <span className="font-semibold text-gray-600">Learn More</span>
            <IoMdArrowForward size={24} className="text-gray-600" />
          </div> */}
        </div>

        <div className="md:w-[59vw] p-3">
          <div>
            <h1 className="font-semibold text-3xl">Case Study:</h1>
          </div>
          <div className="mt-6">
            <h1 className="font-semibold text-2xl">
              Optimizing Data Integration with SSIS & ETL Tools
            </h1>
          </div>
          <div className="mt-6">
            <div>
              <h1 className="font-semibold text-xl">Overview:</h1>
              <p className="text-lg">
                {" "}
                In another successful project, we helped one of our clients
                optimize their data integration processes by leveraging SQL
                Server Integration Services (SSIS) and leading ETL (Extract,
                Transform, Load) tools. Our expertise in designing and
                implementing efficient ETL pipelines enabled perfect data flow
                across platforms, transforming raw data into useful insights for
                informed decision-making.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="font-semibold text-xl">Challenge:</h1>
              <p className="text-lg">
                The client faced difficulties in managing disparate data
                sources, resulting in inefficient data processing and poor
                accessibility. They needed a solution to streamline data
                integration and ensure real-time data accuracy for business
                intelligence purposes.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="font-semibold text-xl">Solution:</h1>
              <p className="text-lg">
                {" "}
                We designed and implemented robust ETL pipelines using SSIS and
                other ETL tools to extract, transform, and load data from
                multiple sources. With systematic data flowing, we ensure data
                consistency, accuracy, and timeliness, providing the client with
                up-to-date, actionable insights at their fingertips.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <ul className="font-semibold text-xl">Results:</ul>
            <li className="mt-4">
              <span className="font-semibold text-lg ">
                Improved Data Accessibility:{" "}
              </span>
              <span className="text-lg">
                Data integration speed was enhanced by 40%, enabling quicker
                access to key business metrics.
              </span>
            </li>
            <li className="mt-4">
              <span className="font-semibold text-lg ">
                Increased Operational Efficiency:{" "}
              </span>
              <span className="text-lg">
                Data processing time was reduced, enabling the client to
                generate real-time reports and make faster decisions.
              </span>
            </li>
            <li className="mt-4">
              <span className="font-semibold text-lg ">
                Enhanced Data Quality:{" "}
              </span>
              <span className="text-lg">
                Data transformation ensured that only clean, consistent, and
                reliable data was loaded into their systems, improving the
                quality of decision-making. Also conducting independent software
                testing services. [KW]
              </span>
            </li>
          </div>

          <div className="mt-6">
            <h1 className="font-semibold text-xl">Conclusion:</h1>
            <p className="text-lg">
              By utilizing SSIS and advanced ETL tools, we helped the client
              achieve an organized and efficient data integration process,
              transforming raw data into strategic insights. This enabled the
              client to make more data-driven decisions and improve overall
              business agility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedDataIntegration;

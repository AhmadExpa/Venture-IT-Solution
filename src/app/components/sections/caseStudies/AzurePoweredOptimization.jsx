"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";
import { IoMdArrowForward } from "react-icons/io";
import azure_cloud from "../../../assets/images/azure_cloud.png";
import img1 from "../../../assets/images/maxblog1.jpg";
import Link from "next/link";

function AzurePoweredOptimization() {
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
            Azure-Powered Cost Optimization
          </h1>
        </div>

        <div className="flex flex-col lg:w-[45vw] justify-between">
          <p className="font-semibold text-gray-600 text-lg lg:text-end">
            Feb 18, 2025
          </p>
          {/* <p className="lg:text-lg text-gray-600 pt-3 md:p-0 text-justify">
            ELT and SSIS tools streamline data flow, converting data into
            actionable business insights.
          </p> */}
        </div>
      </div>

      <div className="lg:pt-20">
        <Image
          src={azure_cloud}
          className="w-full lg:h-[100vh] pt-4 md:pt-3 object-cover"
        />
      </div>

      <div className="flex md:flex-row flex-col justify-between lg:pt-28 lg:gap-10 pt-5">
        {/* <div className="border border-gray-300 rounded-2xl p-10 md:w-[300px] md:h-fit lg:w-[28vw] lg:h-[75vh] md:sticky md:top-20">
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

          <div className="mt-10 flex gap-4 items-center">
            <span className="font-semibold text-gray-600">Learn More</span>
            <IoMdArrowForward size={24} className="text-gray-600" />
          </div>
        </div> */}

        <div className="lg:w-[59vw] md:w-[79vw] lg:flex lg:flex-col lg:mx-0 md:mx-auto p-3 lg:text-start md:text-wrap">
          {/* <div>
            <h1 className="font-semibold text-3xl">Case Study:</h1>
          </div> */}
          {/* <div className="mt-6">
            <h1 className="font-semibold text-2xl">
              Optimizing Data Integration with SSIS & ETL Tools
            </h1>
          </div> */}
          <div className="">
            <div>
              <h1 className="font-semibold text-xl">Overview:</h1>
              <p className="text-lg">
                {" "}
                One of the clients from the healthcare industry, aimed to
                develop cloud efficiency while delivering high performance and
                reliability. The cloud application development services as the
                solution was built for optimal scalability, flexibility, and
                high performance, ensuring it could evolve along with growth.
                The Software Development Services team at Venture IT Solution
                conducted a comprehensive analysis, selecting Azure-native tools
                for resource utilization and reducing costs without compromising
                operational excellence.
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
            <ul className="font-semibold text-xl">Key Achievements :</ul>
            <li className="mt-4 list-none">
              <span className="font-semibold text-lg ">
                40% Cost Reduction:{" "}
              </span>
              <span className="text-lg">
                Lowered Azure expenses through Azure Reserved Instances (RIs)
                and workload right-sizing.
              </span>
            </li>
            <li className="mt-4 list-none">
              <span className="font-semibold text-lg ">
                20% Additional Savings:{" "}
              </span>
              <span className="text-lg">
                costs adjustments using Azure Advisor, Monitor, and Cost
                Management for data-relatable insights.
              </span>
            </li>
            <li className="mt-4 list-none">
              <span className="font-semibold text-lg ">
                Improve infrastructure efficiency:{" "}
              </span>
              <span className="text-lg">
                Maintained high availability and regular operations while
                eliminating unnecessary overhead.
              </span>
            </li>
            <li className="mt-4 list-none">
              <p className="font-semibold text-xl ">Results & Impact : </p>
              <span className="font-semibold text-lg  ">
                Significant Cost Savings:{" "}
              </span>
              <span className="text-lg">
                Maintained high availability and regular operations while
                eliminating unnecessary overhead.
              </span>
              <div>
                <span className="font-semibold text-lg  ">
                  {" "}
                  Improved Resource Utilization:{" "}
                </span>
                <span className="text-lg">
                  Maximized efficiency without impacting operational workflows.
                </span>
              </div>
              <div>
                <span className="font-semibold text-lg  ">
                  {" "}
                  Scalable, Cost-Efficient Infrastructure:{" "}
                </span>
                <span className="text-lg">
                  Future-proofed cloud operations for continuous growth.
                </span>
              </div>
            </li>

            <li className="mt-4 list-none">
              <span className="font-semibold text-lg ">Scalability: </span>
              <span className="text-lg">
                The solution efficiently handled a 200% increase in traffic
                during peak times without any performance degradation.
              </span>
            </li>
            <li className="mt-4 list-none">
              <span className="font-semibold text-lg ">Performance: </span>
              <span className="text-lg">
                The client experienced a 99.9% uptime, receiving high
                availability across all critical business operations
              </span>
            </li>
          </div>

          <div className="mt-6">
            <h1 className="font-semibold text-xl">Conclusion:</h1>
            <p className="text-lg">
              Powered by Azure Cloud, the client’s new cloud-native application
              enabled seamless scalability and optimized costs, setting the
              stage for long-term growth and innovation — all while ensuring
              consistent, high-speed performance.
            </p>
          </div>
          <div className="mt-6">
            <h1 className="font-semibold text-xl">Final Thoughts:</h1>
            <p className="text-lg">
              Through strategic, data-driven optimizations, we reengineered the
              client’s Azure environment into a lean, high-performing, and
              cost-efficient infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AzurePoweredOptimization;

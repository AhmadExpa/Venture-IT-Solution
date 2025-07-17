"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import LandingImage from "../../../assets/images/azurenew.jpg";
import img1 from "../../../assets/images/maxblog1.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
function MigrationAzureCloud() {
  const router = useRouter();
  return (
    <div className="md:px-12 px-5 pt-28 ">
      <div onClick={() => router.back()} className="cursor-pointer">
        <div className="flex items-center gap-3">
          <MdOutlineArrowBack size={24} className="text-gray-600" />
          <span className="text-gray-600">Go Back</span>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between md:pt-20 pt-5 md:gap-8 gap-2">
        <div className="md:w-[40vw]">
          <h1 className="lg:text-[55px] md:text-[30px] text-2xl font-semibold lg:tracking-wide lg:leading-[65px]  ">
            Azure Cloud Migration
          </h1>
        </div>

        <div className="flex flex-col lg:w-[45vw] justify-between">
          <p className="font-semibold text-gray-600 text-lg md:text-end">
            Feb 18, 2025
          </p>
          <p className=" md:text-lg text-gray-600 text-justify">
            Efficient, secure Azure migration with data optimization, app rehosting, and post-migration support.
          </p>
        </div>
      </div>

      <div className="lg:pt-20 pt-5">
        <Image
          src={LandingImage}
          className="w-full lg:h-[100vh] object-cover"
        />
      </div>

      <div className="flex md:flex-row flex-col justify-between lg:pt-28 pt-5 lg:gap-10 gap-5">
        <div className="border border-gray-300 rounded-2xl p-10 md:w-[28vw] md:h-[75vh] md:sticky md:top-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">Azure Cloud Migration</h1>

            <h2 className=" font-semibold text-gray-600 text-justify">
              Efficient and secure Azure migration with data optimization, app rehosting, and post-migration support.
            </h2>
            <p className="text-gray-600 text-justify">
              Our tailored, end-to-end migration strategy ensures a smooth, zero-downtime transition with optimized cloud architecture.
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
              Revolutionizing IT Infrastructure with Azure Cloud Migration
            </h1>
          </div>
          <div className="mt-6">
            <div>
              <h1 className="font-semibold text-xl">Overview:</h1>
              <p className="text-lg">
              We executed a flawless migration to Microsoft Azure Cloud and cloud application development services, enabling our client to harness the full power of the cloud for superior scalability, security, and operational efficiency. Our tailored, end-to-end migration strategy ensured a smooth, zero-downtime transition with optimized cloud architecture.              </p>
            </div>
            <div className="mt-8">
              <h1 className="font-semibold text-xl">Challenge:</h1>
              <p className="text-lg">
                The client was constrained by legacy on-premises infrastructure,
                limiting their ability to scale, innovate, and maintain optimal
                performance. They required a robust cloud migration strategy to
                modernize their environment and ensure continuous availability
                and cost optimization.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="font-semibold text-xl">Solution:</h1>
              <p className="text-lg">
                We provided a comprehensive cloud assessment followed by
                cloud-native rehosting, refactoring applications, and data
                migration to Azure. Our optimization strategy gives assurance
                for the efficient use of compute resources, while automated
                scaling and cloud-native architecture guarantee high
                availability and disaster recovery.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <ul className="font-semibold text-xl">Results:</ul>
            <li className="mt-4">
              <span className="font-semibold text-lg ">
                Scalable Infrastructure:{" "}
              </span>
              <span className="text-lg">
                Achieved elastic scalability with Azure’s auto-scaling
                capabilities, checking the infrastructure could handle peak
                demands without performance degradation. · Cost Efficiency:
                Optimized resource allocation and implemented cost management
                strategies, reducing infrastructure costs by 30% while boosting
                overall performance.
              </span>
            </li>
            <li className="mt-4">
              <span className="font-semibold text-lg ">Cost Efficiency: </span>
              <span className="text-lg">
                Optimized resource allocation and implemented cost management
                strategies, reducing infrastructure costs by 30% while boosting
                overall performance.
              </span>
            </li>
            <li className="mt-4">
              <span className="font-semibold text-lg ">
                Enhanced Security:{" "}
              </span>
              <span className="text-lg">
                Strengthened data protection with Azure Security Center,
                ensuring compliance and continuous threat mitigation.
              </span>
            </li>
          </div>

          <div className="mt-6">
            <h1 className="font-semibold text-xl">Conclusion:</h1>
            <p className="text-lg">
              Our Azure Cloud migration solution empowered the client to achieve
              a high-performance cloud environment, unlocking business agility,
              reducing time-to-market, and adjusting operational costs. The
              seamless transition paved the way for enhanced innovation and
              scalability, positioning the client for continued growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MigrationAzureCloud;

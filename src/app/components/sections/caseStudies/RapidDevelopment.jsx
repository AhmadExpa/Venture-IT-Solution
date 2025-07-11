"use client";
import Image from "next/image";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import LandingImage from "../../../assets/images/rapid.jpg";
import img1 from "../../../assets/images/maxblog1.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
function RapidDevelopment() {
  const router = useRouter();
  return (
    <div className="lg:px-12 px-5 lg:pt-28 pt-20 ">
      <div onClick={() => router.back()} className="cursor-pointer">
        <div className="flex items-center gap-3">
          <MdOutlineArrowBack size={24} className="text-gray-600" />
          <span className="text-gray-600">Go Back</span>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between lg:pt-20 pt-2 lg:gap-8">
        <div className="md:w-[40vw]">
          <h1 className="lg:text-[55px] text-2xl font-semibold lg:tracking-wide lg:leading-[65px]  ">
            Rapid Development with Github Copilot
          </h1>
        </div>

        <div className="flex flex-col md:w-[45vw] justify-between">
          <p className="font-semibold text-gray-600 text-lg text-end">
            Feb 18, 2025
          </p>
          <p className="md:text-lg text-gray-600 lg:text-justify">
            GitHub Copilot automates coding and reduces development time while
            guaranteeing quality output.
          </p>
        </div>
      </div>

      <div className="md:pt-20 pt-4">
        <Image src={LandingImage} className="w-full lg:h-[100vh] object-cover" />
      </div>

      <div className="flex md:flex-row flex-col justify-between md:pt-28 pt-8 md:gap-10">
        <div className="border border-gray-300 rounded-2xl md:p-10 p-5 md:w-[28vw] lg:h-[75vh] md:h-[125vh] md:sticky md:top-20">
          <div className="flex flex-col gap-4">
            <h1 className="lg:text-3xl text-2xl font-semibold lg:text-justify">
              Rapid Development with Github Copilot
            </h1>

            <h2 className="font-semibold text-gray-600 lg:text-justify">
              GitHub Copilot automates coding and reduces development time while
              guaranteeing quality output.
            </h2>
            <p className="text-gray-600 lg:text-justify">
              This tool streamlined the coding process by automating repetitive
              tasks, offering intelligent code suggestions, and improving
              overall code quality and efficiency.
            </p>
          </div>

          {/* <div className="mt-10 flex gap-4 items-center">
            <span className="font-semibold text-gray-600">Learn More</span>
            <IoMdArrowForward size={24} className="text-gray-600" />
          </div> */}
        </div>

        <div className="md:w-[59vw] p-3">
          <div>
            <h1 className="font-semibold md:text-3xl text-2xl">Case Study:</h1>
          </div>
          <div className="mt-6">
            <h1 className="font-semibold text-xl md:text-2xl">
              Accelerating Development with GitHub Copilot
            </h1>
          </div>
          <div className="md:mt-6 mt-3">
            <div>
              <h1 className="font-semibold text-xl">Overview:</h1>
              <p className="text-lg">
                In a recent project, we helped a client significantly reduce
                their development lifecycle by integrating GitHub Copilot, an
                AI-powered coding assistant. This tool streamlined the coding
                process by automating repetitive tasks, offering intelligent
                code suggestions, and improving overall code quality and
                efficiency.
              </p>
            </div>
            <div className="md:mt-8 mt-3">
              <h1 className="font-semibold text-xl">Challenge:</h1>
              <p className="text-lg">
                The client struggled with extended development cycles and
                inconsistent code quality across teams. They required a solution
                to speed up the development process without sacrificing the
                performance and reliability of their application.
              </p>
            </div>
            <div className="md:mt-8 mt-3">
              <h1 className="font-semibold text-xl">Solution:</h1>
              <p className="text-lg">
                {" "}
                We automated tasks like code completion, bug fixes, and
                documentation generation by leveraging GitHub Copilot. Copilot's
                context-aware AI provided accurate code suggestions in
                real-time, enabling developers to focus on high-value tasks
                instead of repetitive coding activities.
              </p>
            </div>
          </div>

          <div className="md:mt-6 mt-3">
            <ul className="font-semibold text-xl">Results:</ul>
            <li className="mt-4">
              <span className="font-semibold text-lg ">
                Faster Time-to-Market:{" "}
              </span>
              <span className="text-lg">
                Project timelines were reduced by 30%, enabling quicker feature
                delivery and system updates.
              </span>
            </li>
            <li className="md:mt-4 mt-3">
              <span className="font-semibold text-lg ">
                Enhanced Code Quality::{" "}
              </span>
              <span className="text-lg">
                Code consistency and error reduction improved, making software more reliable and maintainable.

              </span>
            </li>
            <li className="md:mt-4 mt-3">
              <span className="font-semibold text-lg ">
                Increased Development Efficiency:{" "}
              </span>
              <span className="text-lg">
                   Developer productivity surged by 25%, allowing teams to focus more on innovation and lessen manual tasks.
              </span>
            </li>
          </div>

          <div className="md:mt-6 mt-3">
            <h1 className="font-semibold text-xl">Conclusion:</h1>
            <p className="text-lg">
              By integrating GitHub Copilot into the development workflow, we
              empowered the client to enhance development efficiency, accelerate
              delivery, and ensure top-tier code quality, demonstrating how
              AI-driven tools can revolutionize software development processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RapidDevelopment;

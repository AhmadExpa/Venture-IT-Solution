"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { MdOutlineArrowBack } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import LandingImage from "../../../assets/images/work_flow.jpg";
import img1 from "../../../assets/images/maxblog1.jpg";
import Link from "next/link";

function WorkflowAutomation() {
  const router = useRouter();
  return (
    <div className="md:px-12 px-5 pt-28 ">
      <div onClick={() => router.back()} className="cursor-pointer">
        <div className="flex items-center gap-3">
          <MdOutlineArrowBack size={24} className="text-gray-600" />
          <span className="text-gray-600">Go Back</span>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between md:pt-20 pt-10 gap-8">
        <div className="md:w-[40vw]">
          <h1 className="md:text-[55px] text-3xl font-semibold tracking-wide lg:leading-[65px]  ">
            Automated Workflows
          </h1>
        </div>

        <div className="flex flex-col md:w-[45vw] justify-between">
          <p className="font-semibold text-gray-600 text-lg text-end">
            Feb 18, 2025
          </p>
          <p className="md:text-lg text-gray-600 text-justify">
            Customized job creation automates tasks, reduces hectic manual workload, and optimizes processes.
          </p>
        </div>
      </div>

      <div className="pt-20">
        <Image src={LandingImage} className="w-full md:h-[100vh] object-cover" />
      </div>

      <div className="flex md:flex-row flex-col justify-between pt-28 gap-10">
        <div className="border border-gray-300 rounded-2xl p-10 md:w-[28vw] md:h-[75vh] md:sticky md:top-20">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">Automated Workflows</h1>

            <h2 className="font-semibold text-gray-600 text-justify">
              Customized job creation automates tasks, reduces hectic manual
              workload and optimizes processes.
            </h2>
            <p className="text-gray-600 text-justify">
              We empowered a client by implementing custom job creation and workflow automation solutions that streamlined their business processes.
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
              Enhancing Operational Efficiency with Custom Job Creation and
              Workflow Automation
            </h1>
          </div>
          <div className="mt-6">
            <div>
              <h1 className="font-semibold text-xl">Overview:</h1>
              <p className="text-lg">
                We empowered a client by implementing custom job creation and workflow automation solutions that streamlined their business processes. From automating repetitive tasks, to integrating third-party systems, our tailored solutions improved operational efficiency, reduced manual tasks, and delivered faster results.

              </p>
            </div>
            <div className="mt-8">
              <h1 className="font-semibold text-xl">Challenge:</h1>
              <p className="text-lg">
                The client struggled with inefficient, manual workflows that
                consumed significant time and resources. They require proper
                solutions to automate tasks such as data synchronization, report
                generation, and task scheduling to increase productivity.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="font-semibold text-xl">Solution:</h1>
              <p className="text-lg">
                We designed and implemented custom jobs to automate routine
                processes, including data synchronization, automated reporting,
                and complex task orchestration. Our solutions integrated
                seamlessly with their existing systems, ensuring streamlined
                workflows that reduced manual input while maintaining accuracy
                and consistency.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <ul className="font-semibold text-xl">Results:</ul>
            <li className="mt-4">
              <span className="font-semibold text-lg ">
                Enhanced Efficiency:{" "}
              </span>
              <span className="text-lg">
                Automated workflows reduced manual effort by 40%, freeing up
                resources for higher-value tasks.
              </span>
            </li>
            <li className="mt-4">
              <span className="font-semibold text-lg ">
                Faster Decision-Making:{" "}
              </span>
              <span className="text-lg">
                Real-time automated reporting enabled quicker access to critical
                business data, speeding up decision-making processes.
              </span>
            </li>
            <li className="mt-4">
              <span className="font-semibold text-lg ">
                Resource Optimization:{" "}
              </span>
              <span className="text-lg">
                The client saved both time and costs by eliminating redundant
                tasks and optimizing resource allocation.
              </span>
            </li>
          </div>

          <div className="mt-6">
            <h1 className="font-semibold text-xl">Conclusion:</h1>
            <p className="text-lg">
              Through custom job creation and workflow automation, we helped the
              client achieve significant improvements in efficiency, cost
              savings, and operational agility that further enabled them to
              focus on strategic growth while eliminating time-consuming manual
              processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkflowAutomation;

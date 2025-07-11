import React from "react";
import GradientButton from "../../common/GradientButton";
import Link from "next/link";

const WorkingModel = () => {
  return (
    <div className="lg:h-[850px] md:h-[1300px] h-full bg-[#F2F2F7] md:p-3 lg:p-6 p-3 max-w-6xl mx-auto rounded-md">
      <div className="">
        <h1 className="text-xl md:text-4xl font-bold text-gray-900 mb-2">
          Your Project, Your Rules – Get Your Ideal Model!
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          The good news? Venture IT Solutions lets customers decide on the
          preferred working model for their development project.
        </p>

        <div className="grid lg:grid-cols-2 lg:p-0 md:p-3">
          {/* Dedicated Team Card */}
          <div className="bg-white lg:w-[500px] w-full  h-fit rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Dedicated Team
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Building Success with a Dedicated Approach
            </p>
            <p className="text-gray-600 mb-6">
              Our self-sustaining development team works like an internal team
              for fixed-scope projects to focus on your existing product or MVP
              for great outcomes.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="mr-2">💼</span>
                Commitment to your project’s success
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2">🔧</span>
                End-to-end solutions with support
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2">📅</span>
                Perfect for deadline-driven projects
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2">📈</span>
                Aligned strategically with your company’s objectives
              </li>
            </ul>
          </div>

          {/* On-Demand Team Card */}
          <div className="bg-white lg:w-[500px] lg:mb-0 mb-10 w-full lg:mt-[200px] mt-5 h-fit rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              On-Demand Team
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Expert Support, Anytime and Anywhere
            </p>
            <p className="text-gray-600 mb-6">
              Get your project completed with a flexible team, choosing the
              number of experts you need for ongoing maintenance & evolving
              business needs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="mr-2">🚀</span>
                Flexibility in payments/milestones
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2">🔍</span>
                Access to top-class experts on demand
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2">🔄</span>
                Ideal for feature development and 24/7 maintenance
              </li>
              <li className="flex items-center text-gray-700">
                <span className="mr-2">🔧</span>
                Scalable resources to meet your project needs
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <h3 className="text-2xl lg:pt-0 pt-5 font-bold text-gray-900 lg:mb-4">
            Let’s Build Together!
          </h3>
          <p className="text-gray-600 mb-6">
            Eager to get your desired software launched? Benefit from our tried
            & true app development process!
            <br />
          </p>
          <Link href="/hire-us">
            <GradientButton text="Get In Touch" padding="10px 12px" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkingModel;

import React from "react";

const IntelligentSoftwares = () => {
  return (
    <div className=" bg-gray-50 p-4 md:p-2">
      {/* Header/Backstory Section */}
      <div className="max-w-6xl mx-auto lg:mb-6 lg:flex justify-between">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          THE BACKSTORY
        </h2>
        <div className=" text-gray-600 max-w-2xl">
          <p className="">
            Founded in 2019 by Rafiq Lakhani on five core principles — dedication, professionalism, work ethic, quality, and commitment.
          </p>
          <p className="mt-5">
            With a mission to rank among the top 3% of U.S. developers, a team of five visionary individuals began delivering software solutions with a commitment to excellence.
          </p>
        </div>
      </div>

      {/* Main Hero Section */}
      <div className="max-w-6xl mx-auto ">
        <h1 className="text-2xl md:text-3xl lg:text-7xl md:mt-5 mt-5 font-bold text-gray-900 lg:mb-8">
          Core Competencies & Values
        </h1>
      </div>

      <div className="max-w-4xl grid md:grid-cols-2 gap-8 md:gap-16 md:px-6 lg:mx-auto px-0 lg:mt-0 md:mt-5 mt-5">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Building Smarter Futures
          </h3>
          <p className="text-gray-600">
            For over a decade, we have partnered with expert technology leaders
            to scale their teams immediately & meet their business challenges.
            With Venture IT, you’re guaranteed exceptional software development
            solutions that drive results.
          </p>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Nurturing the Tech Ecosystem
          </h3>
          <p className="text-gray-600">
            We own our responsibilities and believe in supporting our tech community. In addition to management processes, tech stacks, and the latest infrastructure, we’re committed to sharing our insights and expertise to maximize project success without compromising on quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntelligentSoftwares;

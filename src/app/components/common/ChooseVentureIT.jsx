import React from "react";

const ChooseVentureIT = ({ title, description, features, H2 = "h2", P = "p" }) => {
  return (
    <section className="bg-[#F2F2F7] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <H2 className="md:text-5xl text-3xl font-bold text-gray-900 mb-4 leading-10">{title}</H2>
          <P className="text-lg text-gray-600 ">{description}</P>
        </div>

        {/* Features Grid */}
        <div className="flex justify-end">
          <div className="flex flex-wrap -mx-4 max-w-4xl">
            {features.map((feature, index) => (
              <div key={index} className="w-full md:w-1/2 px-4 mb-8">
                <div className="flex items-start">
                  {/* Number Circle */}
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#CB9F3C] via-[#E9DC8A] to-[#CBB260] flex items-center justify-center text-gray-800 font-semibold">
                      {feature.number}
                    </div>
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 ">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseVentureIT;

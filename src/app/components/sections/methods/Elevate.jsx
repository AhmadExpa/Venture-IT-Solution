import React from "react";

const Elevate = () => {
  const steps = [
    {
      number: 1,
      title: "Launch with Confidence",
      description: "We ensure smooth deployment across all required platforms.",
    },
    {
      number: 2,
      title: "Performance Monitoring",
      description:
        "We track technical performance and user behavior to inform future enhancements.",
    },
    {
      number: 3,
      title: "Continuous Iteration",
      description:
        "We implement regular updates and new features to keep your solution at the cutting edge..",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 lg:p-12 md:pt-20 pt-7">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="md:sticky top-10 self-start md:px-0 px-5">
            <h1 className="md:text-[clamp(2.8rem,6.95vw,7.5rem)] lg:text-[50px] text-[35px] font-bold md:mb-6 text-[#212730]">
              Elevate.
            </h1>
            <p className="text-[clamp(1.1rem,1.38vw,1.5rem)] text-gray-600 md:mb-12">
              We deploy, monitor, and continuously improve your solution to meet
              evolving needs.
            </p>
          </div>

          <div className="md:space-y-8 flex flex-col">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-6  border-b-[1px] border-[#e5e7eb]"
              >
                <div className="flex items-center gap-8 mb-3">
                  <span className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full bg-gradient-to-r from-[#CB9F3C]  via-[#E9DC8A] to-[#CBB260] text-black font-semibold">
                    {step.number}
                  </span>
                  <h3 className="text-[clamp(1.7rem,2.08vw,2.25rem)] font-semibold">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 ml-[72px] text-[clamp(1rem,1.071vw,1.125rem)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elevate;

import React from "react";
import rotate from "../../../assets/images/circle.svg";
const Innovate = () => {
  const steps = [
    {
      number: 1,
      title: "Share Your Requirements",
      description:
        "Fill out the contact form, and our expert consultants will connect with you on priority.",
    },
    {
      number: 2,
      title: "Sign An NDA",
      description:
        "We build the foundation of a trustful partnership by signing an NDA before the introductory call or finalizing the service agreement.",
    },
    {
      number: 3,
      title: "Consult Over Call",
      description:
        "Our dedicated experts connect over call, dive into your situation, and detect value-creation opportunities you can leverage.",
    },
    {
      number: 4,
      title: "Requirement Gathering",
      description:
        "Through focused interactions, we gain a comprehensive understanding of your project requirements.",
    },
    {
      number: 5,
      title: "Solution Proposal",
      description:
        "We send you a proposal outlining the scope of work, cost estimates, project timelines, and other critical details.",
    },
    {
      number: 6,
      title: "Sign The Contract",
      description:
        "Sign the contract per mutually agreed terms and kick off the project.",
    },
    {
      number: 7,
      title: "Strategic Planning",
      description:
        "We create a detailed roadmap with milestones, timelines, and flexible pricing structures.",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 md:pt-[100px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="md:sticky top-10 self-start">
            <h1 className="md:text-[clamp(2.8rem,6.95vw,7.5rem)] lg:text-[50px] text-[35px] font-bold md:mb-6  text-[#212730]">
              Innovate.
            </h1>
            <p className="text-[clamp(1.1rem,1.38vw,1.5rem)] text-gray-600 md:mb-12">
              We collaborate to transform your ideas into a concrete project
              plan.
            </p>

            <div
              className="absolute hidden md:w-[450px] md:block w-full md:h-[450px] h-full bg-cover bg-center left-[-40%] transform -translate-x-1/2 -translate-y-1/2 animate-rotateCircle"
              style={{ backgroundImage: `url(${rotate.src})` }}
            ></div>
          </div>

          <div className="md:space-y-8 flex flex-col ">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white p-6  border-b-[1px] border-[#e5e7eb]"
              >
                <div className="flex items-center gap-8 mb-3">
                  <span className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full bg-gradient-to-r from-[#CB9F3C]  via-[#E9DC8A] to-[#CBB260] text-black font-semibold">
                    {step.number}
                  </span>
                  <h3 className="text-[clamp(1.7rem,2.08vw,2.25rem)] font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-600 ml-[72px] text-[clamp(1.1rem,1.38vw,1.5rem)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovate;

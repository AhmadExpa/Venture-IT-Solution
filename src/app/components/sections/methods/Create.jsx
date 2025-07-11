import React from "react";

const Create = () => {
  const steps = [
    {
      number: 1,
      title: "Assemble Your Team",
      description:
        "We bring together a team of talented project managers, designers, engineers, and other specialists based on the specific needs of your project.",
    },
    {
      number: 2,
      title: "Design Thinking",
      description:
        "We create wireframes and user stories to visualize the solution.",
    },
    {
      number: 3,
      title: "Interactive Prototypes",
      description:
        "We create interactive prototypes that selected end-users from your target audience can interact with, providing feedback that we use to make improvements on the go.",
    },
    {
      number: 4,
      title: "UI/UX Design",
      description:
        "Our team, passionate about high-end aesthetics, adds visual polish to your product with dynamic colors, fonts, icons, and seamless navigation.",
    },
    {
      number: 5,
      title: "Agile Development",
      description:
        "We employ sprint-based development for rapid, continuous delivery and feedback.",
    },
    {
      number: 6,
      title: "Quality Assurance",
      description:
        "Rigorous testing at every stage guarantees a high-quality product.",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 lg:p-12 md:pt-10 pt-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="md:sticky top-10 self-start">
            <h1 className="md:text-[clamp(2.8rem,6.95vw,7.5rem)] lg:text-[50px] text-[35px] font-bold md:mb-6 text-[#212730]">
              Create.
            </h1>
            <p className="text-[clamp(1.1rem,1.38vw,1.5rem)] text-gray-600 md:mb-12">
              We bring your vision to life through iterative development and
              continuous refinement.
            </p>
          </div>

          <div className="md:space-y-8 flex flex-col ">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white md:p-6  p-3 border-b-[1px] border-[#e5e7eb]"
              >
                <div className="flex items-center gap-8 mb-3">
                  <span className="flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full bg-gradient-to-r from-[#CB9F3C]  via-[#E9DC8A] to-[#CBB260] text-black font-semibold">
                    {step.number}
                  </span>
                  <h3 className="text-[clamp(1.7rem,2.08vw,2.25rem)] font-semibold ">
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

export default Create;

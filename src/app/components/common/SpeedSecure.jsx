import React from "react";


const Section = ({ icon: Icon, title, description }) => (
  <div className="flex mb-4 lg:w-[840px] w-full">
    <Icon className="text-4xl md:mr-10 mr-5" />
    <div>
      <h2 className="lg:text-3xl text-xl font-bold md:mb-2  ">{title}</h2>
      <p className="md:text-lg text-[18px] ">{description}</p>
    </div>
  </div>
);

const SpeedSecure = ({ heading, subheading, sections }) => {
  return (
    <div className="bg-white text-black lg::px-10 md:px-20 px-5 md:py-2  py-2">
    <div className=" md:w-[70vw] w-full">
      <h1 className="lg:text-7xl md:text-4xl text-2xl font-bold lg:mb-2 md:mb-2 ">{heading}</h1>
      <p className="text-lg md:mb-3 mb-2  ">{subheading}</p>
      </div>
      <div className="flex flex-col  justify-center  lg:mt-6 mt-5  lg:gap-5  ">
        {sections.map((section, index) => (
          <Section
            key={index}
            icon={section.icon}
            title={section.title}
            description={section.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SpeedSecure;
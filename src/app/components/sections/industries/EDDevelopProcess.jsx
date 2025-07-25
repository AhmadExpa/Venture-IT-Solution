"use client";
import React from "react";
import img1 from "../../../assets/images/vision1.png";
import img2 from "../../../assets/images/vision2.png";
import img3 from "../../../assets/images/vision3.png";
import img4 from "../../../assets/images/vision4.png";
import img5 from "../../../assets/images/vision5.png";
import DevelopmentPlan from "../../common/DevelopmentPlan";

const contentData = [
  {
    image: img1,
    buildHover: "/build1.png",
    bgImg: "./bgresearch1.jpg",
    heading: "Research and inspiring ideas",
    paragraph:
      "We conduct detailed research on your business objectives and goals specifically on the target audience.",
  },
  {
    image: img2,
    buildHover: "/build2.png",
    bgImg: "./blueprints.jpg",
    heading: " Blueprints towards Success: Strategies for your project",
    paragraph:
      "We assist you with a detailed plan that includes the project layout, timeline, deliverables, budgets, and responsibilities.",
  },
  {
    image: img3,
    buildHover: "/build3.png",
    bgImg: "./digitalnew.jpg",
    heading: "Seamless Execution with Transparent Collaboration",
    paragraph:
      "We communicate clearly and provide regular updates to ensure full visibility and control over the project's progress.",
  },
  {
    image: img4,
    buildHover: "/build4.png",
    bgImg: "./modernsolutionbg.jpg",
    heading: "  Latest  Solutions for the  Development Process ",
    paragraph:
      "With expertise in .NET, Java, Oracle, and SQL, we deliver adaptable solutions for the required workflow.",
  },
  {
    image: img5,
    buildHover: "/build5.png",
    bgImg: "./visionbg.jpg",
    heading: "  Converting vision into Reality- comes the Final Product",
    paragraph:
      "Through an interactive and automated approach, we focus on the end user to exceed expectations by setting up testing for bugs, updating documentation, analytics tools, etc.",
  },
];

function EDDevelopProcess() {
  const sectionTitle = {
    // subheading: "Build Faster, Deliver More",
    subheading: "Plan. Execute. Achieve",
    // heading: "EdTech Development Process",
    heading: "From Screens To Customize Project Plan",
    paragraph:
      "Our agile EdTech development process transforms your ideas into high-performing digital products. With a focus on speed, quality, and user experience, we deliver exceptional results.",
  };

  return (
    <div className="bg-[#171717] md:pt-20 pt-10">
      <div className="flex md:flex-row flex-col gap-4 justify-between md:px-20 px-4">
        <div className="md:w-[50vw] w-full">
          <p className="text-[#F2F2F7] md:text-xl text-lg uppercase ">
            {sectionTitle.subheading}
          </p>
        </div>
        <div className="flex flex-col gap-2 md:w-[50vw] md:pl-12">
          <h1
            className="text-white md:text-3xl text-2xl font-semibold"
            style={{ lineHeight: "1.3" }}
          >
            {sectionTitle.heading}
          </h1>
          <p
            className="text-[#F2F2F7] md:text-xl text-lg"
            style={{ lineHeight: "1.3" }}
          >
            {sectionTitle.paragraph}
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-10 md:px-0 px-3 ">
        {contentData.map((content, index) => (
          <DevelopmentPlan
            key={index}
            image={content.image}
            buildHover={content.buildHover}
            heading={content.heading}
            paragraph={content.paragraph}
            bgImg={content.bgImg}
          />
        ))}
      </div>
    </div>
  );
}

export default EDDevelopProcess;

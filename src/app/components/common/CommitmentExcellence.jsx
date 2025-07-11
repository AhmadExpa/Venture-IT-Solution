"use client";
import Image from "next/image";
import React from "react";
import CustomHeading from "../common/CustomHeading";


const CommitmentExcellence = ({ heading, subheading, sections }) => {
  return (
    <div className="md:px-10 px-5 md:my-16 my-10">
      <div>
        <h1
          className="md:text-[85px] text-4xl font-bold"
          style={{ lineHeight: "1.2" }}
        >
          {heading}
        </h1>
        <p className="md:text-xl text-lg text-[#3F3F46] md:w-[80vw] w-full md:mt-2 mt-2">
          {subheading}
        </p>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="flex justify-end md:mt-8 mt-5">
          <div className="mt-10 flex md:flex-row flex-wrap justify-between md:w-[85vw] w-full">
            {section.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`flex flex-col ${
                  itemIndex % 2 === 0
                    ? "md:w-[35vw]"
                    : "md:w-[35vw] md:mt-28 mt-5"
                } w-full gap-4`}
              >
                <div className="flex flex-col gap-5">
                  <div>
                    <Image
                      src={item.mainImage}
                      className="w-full"
                      alt={item.title}
                    />
                  </div>
                  <div className="flex md:flex-row flex-col gap-2 justify-between items-start">
                    <div>
                      <Image
                        src={item.secondaryImage}
                        className="w-28 h-8 object-contain"
                        alt={item.title}
                      />
                    </div>
                    <div>
                      <CustomHeading text={item.customHeading} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-3xl font-semibold">{item.title}</h1>
                  <ul className="list-disc pl-5 text-base text-[#3F3F46] leading-6">
                    {(Array.isArray(item.description)
                      ? item.description
                      : [item.description]
                    ).map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommitmentExcellence;

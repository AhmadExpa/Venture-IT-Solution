"use client";
import React, { useRef, useState } from "react";
import forwardArrowIcon from "../../assets/icons/forwardArrow.png";
import GradientButton from "../common/GradientButton";
import Link from "next/link";


function CustomCommitment({ commitmentCards }) {
  const sectionRef = useRef(null);
 
  const totalCards = commitmentCards.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [progressOffset, setProgressOffset] = useState(0);

 

  return (
    <div className="relative">
      <div className="md:px-10 px-5 md:my-16 my-4 flex md:flex-row flex-col md:gap-5 items-center">
        <div className="md:w-[55vw]">
          <h1 className="lg:text-[55px] text-2xl font-semibold lg:leading-tight">
            Commitment to Excellence for Every Business
          </h1>
        </div>
        <div className="lg:w-[45vw] flex flex-col items-center lg:gap-7 md:gap-3 gap-4">
          <p className="md:pt-5 pt-0">
            We partner with businesses of all sizes, transforming their vision
            into innovative, high-impact, and future-ready digital solutions
            through cutting-edge technology and agile development.
          </p>
          <Link href="/portfolio">
            <GradientButton
              text="SEE FULL PORTFOLIO"
              bgColor="#CEA645"
              textColor="#171717"
              fontSize="18px"
              fontWeight="600"
              padding="14px 16px"
              icon={forwardArrowIcon}
              width={270}
            />
          </Link>
        </div>
      </div>
      <div ref={sectionRef} className="relative ">
        <div className="flex flex-col items-center justify-center lg:gap-10">
          {commitmentCards.map((card, index) => {
            let scale;
            if (index < activeIndex) {
              scale = 0.8;
            } else {
              scale = index === activeIndex ? 1 : 1;
            }
            return (
              <div
                key={card.id}
                className="w-full flex items-center justify-center sticky top-16"
              >
                <div className="md:px-10 px-5 w-full">
                  <div className="bg-white shadow-2xl flex md:flex-row flex-col-reverse lg:gap-3 gap-1 lg:p-3 p-2 rounded-xl relative">
                    <div className="bg-[#F4F4F4] md:px-10 px-4 lg:pt-24 md:pt-4 pt-2 pb-2 flex flex-col lg:gap-8 gap-2 md:gap-4 md:w-[50vw] rounded-xl md:h-[53vh] lg:h-[75vh]">
                      <h1 className="md:text-3xl text-lg md:leading-10 ">
                        {card.title}
                      </h1>
                      <p className="text-gray-600 lg:text-lg text-sm">
                        {card.description}
                      </p>
                      <Link href={`/caseStudy/${card.slug}`}>
                        <GradientButton
                          text="SEE FULL CASE STUDY"
                          bgColor="#CEA645"
                          textColor="#171717"
                          fontSize="16px"
                          fontWeight="600"
                          padding="14px 12px"
                          icon={forwardArrowIcon}
                          width={240}
                        />
                      </Link>
                    </div>
                    <div
                      className="lg:w-[50vw] w-full bg-cover bg-center rounded-xl relative lg:h-[75vh] md:h-[53vh] h-auto"
                      style={{ backgroundImage: `url(${card.bgImage})` }}
                    >
                      <div className="absolute top-2 right-2 border border-white py-[2px] px-2 rounded-full">
                        <span className="text-white text-xs font-semibold">
                          {card.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CustomCommitment;
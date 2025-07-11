import React from "react";
import forwardArrowIcon from "../../assets/icons/forwardArrow.png";
import GradientButton from "./GradientButton";
import Link from "next/link";

function OneStop({ para, title }) {
  return (
    <div className="md:px-10 px-5 md:mt-0">
      <div className="bg-[#171717] text-[#FFFFFF] hover:text-black hover:bg-[linear-gradient(to_right,_#CB9F3C,_#E9DC8A,_#CBB260)] items-center justify-center rounded-2xl flex flex-col md:gap-10 gap-2 md:h-[450px] p-3 md:p-5 transition-all duration-500 ease-in-out">
        <p className="md:text-lg text-sm">{para}</p>
        <h1 className="font-bold md:text-8xl text-xl">{title}</h1>
        <Link href="/hire-us">
          <GradientButton
            text="Get Started"
            bgColor="#CEA645"
            textColor="#171717"
            fontSize="16px"
            fontWeight="600"
            padding="10px 20px"
            icon={forwardArrowIcon}
          />
        </Link>
        <div className="md:text-lg text-[14px]">Building exceptional, results-driven technology solutions for businesses—from dynamic IT portals to robust scalable platforms</div>
      </div>
    </div>
  );
}

export default OneStop;

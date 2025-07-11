import Image from "next/image";
import React from "react";
import CustomHeading from "./CustomHeading";
import TechHeadline from "./TechHeadline";

const Speeds = ({ imageSrc, title, description, stats, imageAlt }) => {
  return (
    <div className="lg:pt-14 pt-0 ">
      {/* <div>{imageSrc && <Image src={imageSrc} alt={imageAlt} />}</div> */}
      <div>
        <TechHeadline />
      </div>
      <div className="py-3 lg:py-16 lg:px-12 px-5">
        <div>
          <h1
            className="lg:text-7xl md:text-4xl text-2xl font-bold "
            style={{ lineHeight: "1.2" }}
          >
            {title}
          </h1>
        </div>
        <div>
          <p
            className="md:text-[20px] text-md lg:w-[700px] w-full pt-2 text-[#3F3F46]"
            style={{ lineHeight: "1.2" }}
          >
            {description}
          </p>
        </div>

        <div className="md:mt-5 ">
          <div className="md:mt-10 mt-3 grid md:grid-cols-3 grid-cols-1 gap-8 w-full ms-0  lg:ms-16">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col   items-center md:items-start ">
                <div className=" ">
                  <h1 className="md:text-5xl text-3xl font-bold  ">
                    {item.value}
                  </h1>
                </div>
                <div className="flex flex-col md:items-start items-center md:gap-2 mt-4 ">
                  <div className="w-fit">
                    <CustomHeading text={item.buttonLabel} />
                  </div>
                  <p className="md:text-left text-center">{item.description}</p>
                  <p className="md:text-left text-center">{item.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speeds;
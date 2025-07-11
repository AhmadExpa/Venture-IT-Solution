import React from "react";
import Image from "next/image";
const ServicesHeaderImage = () => {
  return (
    <div>
      <div className="w-full bg-white  px-4 md:px-8 mt-5">
        <div className="">
          <div className="relative group">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,_#CB9F3C,_#E9DC8A,_#CBB260)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col items-center justify-center  h-full">
                <p className="text-black md:text-[100px] md:ps-20 text-md font-semibold">
                  One-Stop Solutions
                </p>
                <span className="md:ps-10 md:p-0 p-3">
                  Building exceptional, results-driven technology solutions for
                  businesses—from dynamic IT portals to robust, scalable
                  platforms
                </span>
              </div>
            </div>
            <Image
              src={require("../../assets/images/service_team.jpg")}
              alt="Web Development Team"
              className="w-full lg:object-cover object-fill md:mb-3  lg:h-[500px] "
            />
          </div>
          <p className="text-lg font-semibold text-[#212730]  md:w-[600px] lg:w-[900px] w-full mx-auto md:text-2xl leading-8 text-start md:text-justify lg:mb-8 lg:py-10 lg:mt-0 mt-3">
            Transforming ideas into reality, we design custom, high-performance
            systems and applications. Our solutions are built to drive
            innovation, streamline operations, and gear up business growth. From
            the vision to deployment, we deliver scalable, cutting-edge results
            to fulfill your requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeaderImage;

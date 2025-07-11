"use client";
import React from "react";
import icon1 from "../../../assets/icons/rightupArrow.png";
import ventureblub from "../../../assets/images/ventureblub.jpg";
import Image from "next/image";

function EDTech() {
  return (
    <div className="lg:px-10 px-5 lg:py-28 py-5 ">
      <div className="flex w-full justify-between md:flex-row flex-col">
        <div className="flex md:pt-16 pt-14 justify-between md:w-[40vw] w-full">
          <div className="flex flex-col md:gap-16 gap-2">
            <div>
              <h1 className="lg:text-8xl text-2xl font-bold">
                Venture IT Solutions Development
              </h1>
            </div>
            <div className="flex justify-between items-center">
              {/* <p className="font-bold">
                Empower educators and learners{" "}
                <span className="font-normal">
                  with innovative, engaging, and accessible educational
                  technology.
                </span>{" "}
              </p> */}
              <p className="font-bold">
                Revolutionizing businesses with bespoke IT solutions with
                engaging technology, efficiency, and transformation.
              </p>
              <Image src={icon1} alt="arrow-icon" className="object-contain" />
            </div>
          </div>
        </div>

        <div className="relative md:w-[40vw] w-full">
          <Image src={ventureblub} alt="edtech" className=" lg:mt-0 md:mt-16 mt-4 object-cover w-full" />
          <div className="absolute lg:bottom-16 bottom-4 lg:right-12 text-white lg:px-20 px-2   ">
            <p className="lg:text-base text-sm">
              Venture IT solutions have been shown to increase student
              engagement by 50% and improve learning outcomes by up to 30%.
            </p>
            <p className="md:mt-6 mt-2 text-[#CB9F3C] md:text-base text-sm">
              Partner with us for customized Venture IT solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-[50vw] w-full md:mt-16 mt-4 mx-auto">
        <p className="text-[#171717] font-bold md:text-lg text-center">
          We specialize in developing state-of-the-art Venture IT solutions that
          enhance learning experiences, improve outcomes, and make education
          more accessible than ever before.
        </p>
      </div>
    </div>
  );
}

export default EDTech;

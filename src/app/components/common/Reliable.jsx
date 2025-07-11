"use client";
import React from "react";
import Image from "next/image";

const Reliable = ({
  heading,
  paragraph,
  imagesLeft = [],
  imagesRight = [],
}) => {
  return (
    <div className="md:px-10 px-5 md:mt-0 mt-0 py-10">
      <div className="flex justify-end">
        <div className="flex flex-col md:gap-6 gap-3 md:w-[55vw] w-full">
          <h1 className="md:text-7xl text-3xl font-bold  border-2 border-yellow-500">{heading}</h1>
          <p className="text-xl text-[#3F3F46]">{paragraph}</p>
        </div>
      </div>

      <div className="relative overflow-hidden w-full md:mt-20 mt-10">
        <div className="flex gap-8 animate-marquee-left whitespace-nowrap">
          {[...imagesLeft, ...imagesLeft].map((image, index) => (
            <Image
              key={`left-${index}`}
              src={image}
              alt={`Logo ${index + 1}`}
              width={100}
              height={40}
              className="mx-4 object-contain"
            />
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden w-full my-16">
        <div className="flex gap-8 animate-marquee-right whitespace-nowrap">
          {[...imagesRight, ...imagesRight].map((image, index) => (
            <Image
              key={`right-${index}`}
              src={image}
              alt={`Logo ${index + 1}`}
              width={100}
              height={40}
              className="mx-4  object-contain "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reliable;

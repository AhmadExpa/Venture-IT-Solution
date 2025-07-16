"use client";
import React from "react";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

function ExploreDeeper({
  title,
  description,
  exploreText,
  exploreImage,
  articles,
}) {
  return (
    <div className="lg:px-10 px-6">
      {/* Header Section */}
      <div className="flex md:flex-row flex-col gap-2 justify-between w-full">
        <div className="flex flex-col gap-2 md:w-[40vw] w-full">
          <h1 className="text-[#171717] font-bold text-2xl  ">{title}</h1>
          <p className="text-[#3F3F46] md:text-lg text-base ">{description}</p>
        </div>
        <div className="flex gap-2 items-center ">
          <p className="text-[#3F3F46] font-semibold ">{exploreText}</p>
          {exploreImage && (
            <Image
              src={exploreImage}
              alt="Explore"
              className="object-contain "
              width={20}
              height={20}
            />
          )}
        </div>
      </div>

      {/* Articles Section */}
      <div className="lg:mt-0 mt-5  flex flex-wrap justify-center md:gap-24   ">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`flex flex-col md:gap-28 gap-6 md:w-[40vw] w-full  ${
              index % 2 === 1 ? "md:mt-40 mt-10" : "md:mt-20 mt-5"
            }`}
          >
            {article.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="relative group flex flex-col gap-4"
              >
                <Link
                  href={`/blog/${item.slug}`}
                  className="relative overflow-hidden block"
                >
                  {/* Image takes 40vw width */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800} // or use dynamic dimensions
                    height={600}
                    className="object-contain transition-transform duration-300 transform scale-100 group-hover:scale-105"
                  />

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MdOutlineArrowOutward
                      size={40}
                      className="text-white font-bold"
                    />
                  </div>
                </Link>
                {/* Content below the image */}
                <p className="text-[#171717] font-semibold text-xl ">
                  {item.title}
                </p>
                <p className="text-[#3F3F46] text-base ">{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreDeeper;

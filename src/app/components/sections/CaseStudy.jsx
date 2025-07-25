"use client";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Logo from "../../assets/images/Logo.png";
import Link from "next/link";
import useCaseStudies from "@/hooks/useCaseStudy";

const CaseStudy = () => {
  const { caseStudies, isLoading } = useCaseStudies();

  const slides = caseStudies.map((item) => ({
    category: item.excerpt,
    title: item.title,
    logo: Logo,
    bgImage: item.images[0]?.path || "",
    link: `/caseStudy/${item.slug}`,
  }));

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center -mr-5 md:-mr-2 lg:-mr-5 hidden md:flex"
    >
      <MdChevronRight className="w-6 h-6" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center -ml-5 md:-ml-2 lg:-ml-5 hidden md:flex"
    >
      <MdChevronLeft className="w-6 h-6" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          centerMode: false,
        },
      },
    ],
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-10 min-h-[300px]">
        <div className="h-10 w-10 border-4 border-[#D6C270] border-t-transparent rounded-full animate-spin mr-4" />
        <p className="text-sm text-gray-600">Loading case studies...</p>
      </div>
    );
  }

  return (
    <div className="relative w-full mx-auto px-4 md:px-6 lg:px-8 py-4 lg:py-8">
      <div className="case-study-slider">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-2 pb-8">
              <Link href={slide.link} className="block">
                <div
                  className="rounded-3xl relative cursor-pointer group h-[400px] md:h-[500px] overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="p-4 md:p-6 h-full flex flex-col relative">
                    <div className="inline-block px-4 py-2 rounded-full bg-white/20 text-xs md:text-sm font-medium mb-4 text-end">
                      {slide.category}
                    </div>
                    <div
                      style={{ borderRadius: "12px 40px 12px 12px" }}
                      className="flex-grow flex flex-col justify-between p-4 sm:p-6 md:p-10 absolute bg-white top-[270px] left-1 right-1 lg:top-[280px] md:top-[310px] md:right-[50px] md:w-[636px] lg:w-[300px]"
                    >
                      <div className="self-end">
                        <button className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#00b2a9] transition-colors duration-300">
                          <GoArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
                        </button>
                      </div>
                      <div className="space-y-2 md:space-y-4">
                        <div className="w-16 md:w-20 lg:w-28">
                          <Image
                            width={100}
                            height={100}
                            src={slide.logo}
                            alt="Logo"
                            className="w-full object-contain mix-blend-multiply h-auto"
                          />
                        </div>
                        <h3 className="text-medium md:text-md font-bold line-clamp-2">
                          {slide.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CaseStudy;

"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function CustomInnovation({ heading, para, cardData }) {
  const trackRef = useRef(null);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const totalGroups = cardData.length; // Each card is its own group
  const autoplayInterval = useRef(null);

  const scrollToGroup = (groupIndex) => {
    const newIndex = (groupIndex + totalGroups) % totalGroups;
    setCurrentGroup(newIndex);
  };

  const startAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }

    if (!isPaused && totalGroups > 1) {
      autoplayInterval.current = setInterval(() => {
        setCurrentGroup(prevGroup => (prevGroup + 1) % totalGroups);
      }, 3000); // Change slide every 3 seconds
    }
  };

  const stopAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
      autoplayInterval.current = null;
    }
  };

  // Handle manual navigation
  const handleManualNavigation = (direction) => {
    stopAutoplay(); // Stop autoplay when user manually navigates
    scrollToGroup(currentGroup + direction);

    // Restart autoplay after 5 seconds of inactivity
    setTimeout(() => {
      if (!isPaused) {
        startAutoplay();
      }
    }, 5000);
  };

  // Handle dot navigation
  const handleDotNavigation = (index) => {
    stopAutoplay();
    scrollToGroup(index);

    // Restart autoplay after 5 seconds of inactivity
    setTimeout(() => {
      if (!isPaused) {
        startAutoplay();
      }
    }, 5000);
  };

  // Detect mobile on mount and resize
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkMobile(); // Initial check
      window.addEventListener('resize', checkMobile);

      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  useEffect(() => {
    if (trackRef.current && typeof window !== 'undefined') {
      let translateX = 0;

      if (isMobile) {
        // On mobile, each card takes full viewport width
        translateX = -currentGroup * 100; // Move by 100vw for each card
      } else {
        // On desktop, use card width + gap
        const cardWidth = 350 + 24; // card width + gap
        translateX = -currentGroup * cardWidth;
      }

      const transformValue = `translateX(${translateX}${isMobile ? 'vw' : 'px'})`;
      trackRef.current.style.transform = transformValue;
    }
  }, [currentGroup, isMobile]);

  // Handle window resize to update transform position
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      if (trackRef.current) {
        let translateX = 0;

        if (isMobile) {
          translateX = -currentGroup * 100;
        } else {
          const cardWidth = 350 + 24;
          translateX = -currentGroup * cardWidth;
        }

        trackRef.current.style.transform = `translateX(${translateX}${isMobile ? 'vw' : 'px'})`;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentGroup, isMobile]);

  // Start autoplay on component mount
  useEffect(() => {
    startAutoplay();

    // Cleanup on unmount
    return () => {
      stopAutoplay();
    };
  }, [totalGroups, isPaused]);

  // Pause/resume autoplay on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Handle card hover to pause autoplay
  const handleCardMouseEnter = () => {
    setIsPaused(true);
  };

  const handleCardMouseLeave = () => {
    setIsPaused(false);
  };

  // Handle touch events for mobile
  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    // Resume autoplay after a short delay when touch ends
    setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  };

  return (
    <div
      className="relative overflow-hidden md:my-24 my-10 md:px-10 px-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Heading & Paragraph */}
      <div className="flex flex-col gap-3">
        <h1 className="text-[#171717] md:text-5xl text-xl font-semibold ">
          {heading}
        </h1>
        <p className="text-[#3F3F46] text-xl">{para}</p>
      </div>

      {/* Desktop Arrows (outside cards) - Hidden on mobile, visible on md and lg */}
      <button
        onClick={(e) => { e.preventDefault(); handleManualNavigation(-1); }}
        className="absolute md:top-80 top-1/2 left-2 md:left-0 z-10 -translate-y-1/2 bg-white p-1 md:p-2 rounded-full shadow-md hover:bg-gray-200 hidden md:block"
      >
        <FaChevronLeft className="text-lg" />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); handleManualNavigation(1); }}
        className="absolute md:top-80 top-1/2 right-2 md:right-0 z-10 -translate-y-1/2 bg-white p-1 md:p-2 rounded-full shadow-md hover:bg-gray-200 hidden md:block"
      >
        <FaChevronRight className="text-lg" />
      </button>

      {/* Card Track */}
      <div className="relative md:mt-10 mt-3 w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex md:gap-6 gap-0 transition-transform duration-500 ease-in-out"
          style={{
            width: isMobile ? `${cardData.length * 100}vw` : 'auto',
          }}
        >
          {cardData.map((card, index) => (
            <Link href={card.link || "#"} key={index} passHref>
              <div
                className="md:w-[350px] md:flex-shrink-0 flex-shrink-0 md:px-0 px-4"
                style={{
                  width: isMobile ? '100vw' : '350px'
                }}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="border rounded-xl cursor-pointer md:p-5 p-7 flex flex-col gap-4 group transition duration-300 hover:bg-gray-200">
                  <div className="flex md:justify-between justify-evenly items-center">
                    <h1 className="text-[#171717] md:text-[20px] text-xl font-semibold">
                      {card.title}
                    </h1>
                    <MdOutlineArrowOutward className="text-4xl font-bold text-transparent opacity-0 invisible transition duration-300 group-hover:opacity-100 group-hover:visible group-hover:text-[#CB9F3C]" />
                  </div>
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={350}
                      height={200}
                      className="rounded-xl object-cover w-full h-full"
                      unoptimized
                    />
                    {/* Mobile Arrows (on the image) - Visible on mobile, hidden on md and lg */}
                    <button
                      onClick={(e) => { e.preventDefault(); handleManualNavigation(-1); }}
                      className="absolute inset-y-1/2 left-2 z-10 -translate-y-1/2 p-1 md:p-2 rounded-full shadow-md block md:hidden"
                    >
                      <FaChevronLeft className="text-lg text-white" />
                    </button>
                    <button
                      onClick={(e) => { e.preventDefault(); handleManualNavigation(1); }}
                      className="absolute inset-y-1/2 right-2 z-10 -translate-y-1/2 p-1 md:p-2 rounded-full shadow-md block md:hidden"
                    >
                      <FaChevronRight className="text-lg text-white" />
                    </button>
                  </div>
                  <p className="text-[#3F3F46] relative">{card.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* All Dots */}
      <div className="flex justify-center items-center md:mt-6 gap-2 flex-wrap">
        {Array.from({ length: totalGroups }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotNavigation(i)}
            className={`w-2 h-2 rounded-full transition ${
              currentGroup === i ? "bg-yellow-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomInnovation;
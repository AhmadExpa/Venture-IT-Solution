import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const KeyStatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="bg-gray-100 py-6 px-5 font-sans" ref={ref}>
      {/* Top section */}
      <div className="mb-8 pb-6 border-b border-gray-300">
        <div className="max-w-6xl mx-auto">
          <p className="md:text-[40px] text-[25px] font-bold mb-8">
            Your Vision, Realized and Delivered – Seamlessly Beyond Expectations
          </p>
          <div>
            <p className="text-lg">
              Welcome to Venture IT Solutions where innovation meets efficiency! Our team of seasoned experts leverages the latest technologies and tools to deliver top-notch solutions that drive your business forward. From rapid project execution to seamless cloud migrations, we are here to transform your vision into reality.
            </p>
          </div>
        </div>
        
      </div>

      {/* Key stats */}
      <div className="md:max-w-6xl lg:mx-auto">
        <h2 className="md:text-6xl text-2xl font-bold text-[#CB9F3C] mb-5 ">
          Key stats
        </h2>
        <div className="">
          <h1 className=" ">
            We've managed projects impacting 100,000+ users across multiple
            geographies, ensuring seamless transitions and minimal disruptions.
          </h1>
        </div>

        {/* Stats grid - Updated for mobile to show 2 per row instead of stacked */}
        <div className="grid grid-cols-2 md:flex md:flex-row md:mt-10 md:p-5 flex-wrap justify-center items-center gap-5 md:gap-32">
          <div className="min-w-32 text-center px-4">
            <div className="text-base font-bold">Founded In</div>
            <div className="text-2xl md:text-6xl font-light text-[#CB9F3C] mb-2">
              Dallas
            </div>
            
          </div>

          <div className="min-w-32 text-center px-4 md:mt-0 mt-10">
            <div className="text-base font-bold">Project Success Rates</div>
            <div className="text-2xl md:text-6xl font-light text-[#CB9F3C] mb-2">
              {inView && <CountUp end={95} duration={2} suffix="%" />}
            </div>
            
          </div>

          <div className="min-w-32 text-center px-4">
            <div className="text-base font-bold">Satisfied Clients</div>
            <div className="text-2xl md:text-6xl font-light text-[#CB9F3C] mb-2">
              {inView && <CountUp end={30} duration={2} suffix="+" />}
            </div>
          </div>

          <div className="min-w-32 text-center px-4">
            <div className="text-base font-bold">Referral Business</div>
            <div className="text-2xl md:text-6xl font-light text-[#CB9F3C] mb-2">
              {inView && <CountUp end={65} duration={2} suffix="%" />}
            </div>
               </div>
        </div>
      </div>
    </div>
  );
};

export default KeyStatsSection;
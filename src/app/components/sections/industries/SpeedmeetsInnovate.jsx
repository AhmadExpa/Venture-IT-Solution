"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Speeds from "../../common/Speeds";


const SpeedmeetsInnovate = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3, 
  });

  const stats = [
    {
      value: inView ? (
        <CountUp end={65} duration={10} suffix="+" separator="," />
      ) : (
        "300+"
      ),
      buttonLabel: " Referral Business",

    },
    {
      value: inView ? (
        <CountUp end={30} duration={10} suffix="+" separator="," />
      ) : (
        "70+"
      ),
      buttonLabel: "years of market experience ",
    
    },
    {
      value: inView ? <CountUp end={10} duration={10} suffix="+" /> : "10+",
      buttonLabel: "Diverse business sectors covered",
    
    },
  ];

  return (
    <div ref={ref}>
      <Speeds
        imageSrc={require("../../../assets/images/speedQuality.png")}
        imageAlt="Innovation Delivered"
        title="Innovation Delivered"
        description="Our best web development company has been delivering high-end, modern, futuristic applications, websites, and innovative solutions consistently for 10 years across a wide ray of tech industries and startups alike."
        stats={stats}
      />
    </div>
  );
};

export default SpeedmeetsInnovate;

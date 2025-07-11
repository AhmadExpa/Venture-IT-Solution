"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Speeds from "../../common/Speeds";

const SpeedMeetInovation = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      value: inView ? (
        <CountUp end={80} duration={10} suffix="+" separator="," />
      ) : (
        "80+"
      ),
      buttonLabel: "Professional On Board",
      
    },
    {
      value: inView ? (
        <CountUp end={30} duration={10} suffix="+" separator="," />
      ) : (
        "30+"
      ),
      buttonLabel: "Satisfied Client",
    
    },
    {
      value: inView ? <CountUp end={65} duration={10} suffix="+" /> : "65+",
      buttonLabel: "Referral Business",
   
    },
  ];

  return (
    <div ref={ref}>
      <Speeds
        imageSrc={require("../../../assets/images/speedQuality.png")}
        imageAlt="Innovation Delivered"
        title="Shaping Future’s Tech"
        description="We’ve mastered the art of rapid software development & built powerful, proven solutions across a spectrum of non-profit, government, and commercial markets."
        stats={stats}
      />
    </div>
  );
};

export default SpeedMeetInovation;

"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Speeds from "../common/Speeds";

const SpeedAndQuality = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3, 
  });

  const stats = [
    {
      value: inView ? (
        <CountUp end={300} duration={10} suffix="+" separator="," />
      ) : (
        "300+"
      ),
      buttonLabel: "Satisfied Clients",
      description:
        "Collaborated with over 300+ clients worldwide and developed >80% innovative softwares with expert developers.",
    },
    {
      value: inView ? (
        <CountUp end={70} duration={10} suffix="+" separator="," />
      ) : (
        "70+"
      ),
      buttonLabel: "Startups",
      description:
        "Helped 70+ startups to begin their journey in the tech world, and yours is the next.",
    },
    {
      value: inView ? <CountUp end={65} duration={10} suffix="%" /> : "65%",
      buttonLabel: "Referral Business",
      description:
        "Built long-term partnerships by winning the trust of repeated clients for utmost success.",
    },
  ];

  return (
    <div ref={ref}>
      <Speeds
        imageSrc={require("../../assets/images/speedQuality.png")}
        imageAlt="Innovation Delivered"
        title="Innovation Delivered"
        description="Our best web development company has been delivering high-end, modern, futuristic applications, websites, and innovative solutions consistently for 10 years across a wide ray of tech industries and startups alike."
        stats={stats}
      />
    </div>
  );
};

export default SpeedAndQuality;



// "use client";
// import React from "react";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import Speeds from "../../common/Speeds";

// const Today = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   const stats = [
//     {
//       value: inView ? (
//         <CountUp end={20} duration={10} suffix="+" separator="," />
//       ) : (
//         "50+"
//       ),
//       buttonLabel: "Startups",
//     },
//     {
//       value: inView ? (
//         <CountUp end={50} duration={10} suffix="+" separator="," />
//       ) : (
//         "20+"
//       ),
//       buttonLabel: "Satisfied Client",
//     },
//     {
//       value: inView ? <CountUp end={65} duration={10} suffix="%" /> : "65%",
//       buttonLabel: "Referral Business",
      
//     },
//   ];

//   return (
//     <div ref={ref}>
//       <Speeds
//         imageSrc={require("../../../assets/images/speedQuality.png")}
//         imageAlt="Innovation Delivered"
//         title="Today"
//         description="With 30+ years of expertise, we have mastered a set of robust tools that’ll turn impossibilities into reality."
//         stats={stats}
//       />
//     </div>
//   );
// };

// export default Today;
"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Speeds from "../../common/Speeds";

const Today = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      value: inView ? (
        <CountUp end={30} duration={10} suffix="+" separator="," />
      ) : (
        "50+"
      ),
      buttonLabel: "Satisfied Client",
      paragraph: "Helped 70+ startups to begin their journey in the tech world, and yours is the next.",
    },
    {
      value: inView ? (
        <CountUp end={95} duration={10} suffix="%" separator="," />
      ) : (
        "20+"
      ),
      buttonLabel: "Project Success Rate",
      paragraph: "Collaborated with over 300+ clients worldwide and developed 80%  innovative software Solutions with expert developers.",
    },
    {
      value: inView ? <CountUp end={65} duration={10} suffix="%" /> : "65%",
      buttonLabel: "Referral Business",
      paragraph: "Built long-term partnerships by winning the trust of repeated clients for utmost success.",
    },
  ];

  return (
    <div ref={ref}>
      <Speeds
        imageSrc={require("../../../assets/images/speedQuality.png")}
        imageAlt="Innovation Delivered"
        title="Today"
        description="With 30+ years of expertise, we have mastered a set of robust tools that’ll turn impossibilities into reality."
        stats={stats}
      />
    </div>
  );
};

export default Today;

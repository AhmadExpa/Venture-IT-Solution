"use client";
import React from "react";
import img1 from "../../../assets/images/ExploreArrow.png";
import img2 from "../../../assets/images/FutureIot.jpeg";
import img3 from "../../../assets/images/Futureai.jpeg";
import img4 from "../../../assets/images/FutureRobot.jpg";
import img5 from "../../../assets/images/Futuredigital.jpeg";
import img6 from "../../../assets/images/cloudchip.jpg";
import img7 from "../../../assets/images/FutureApp.jpeg";
import ExploreDeeper from "../../common/ExploreDeeper";

const articles = [
  {
    items: [
      {
        image: img2,
        title:
          "The Future of IoT: How Connected Devices Are Reshaping Industries",
      },
      {
        image: img3,
        title:
          "AI in IT Services: Revolutionizing Automation and Decision Making",
      },
    ],
  },
  {
    items: [
      {
        image: img4,
        title:
          "The Rise of Robotics: Enhancing Efficiency in Digital Transformation",
      },
      {
        image: img5,
        title: "Digital Evolution: How Businesses Can Thrive in the Tech Era",
      },
    ],
  },
  {
    items: [
      {
        image: img6,
        title: "Cloud Computing & AI: Unlocking the Power of Data Intelligence",
      },
      {
        image: img7,
        title: "Next-Gen App Development: Key Trends Shaping the Future",
      },
    ],
  },
];

function BehindTheCode() {
  return (
    <ExploreDeeper
      title="Our Technology Stack"
      description="Our engineers master diverse tech stacks, delivering tailored, high-quality software development solutions for businesses across industries, establishing us as a top software development company."
      exploreText="Explore deeper knowledge"
      exploreImage={img1}
      articles={articles}
    />
  );
}

export default BehindTheCode;

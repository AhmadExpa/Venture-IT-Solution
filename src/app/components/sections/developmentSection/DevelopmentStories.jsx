"use client";
import React from "react";
import img1 from "../../../assets/images/ExploreArrow.png";
import img2 from "../../../assets/images/erpsystem.jpg";
import img3 from "../../../../../public/blogthree.jpeg";
import img4 from "../../../assets/images/FutureRobot.jpg";
import img5 from "../../../assets/images/businesstech.jpg";
import img6 from "../../../assets/images/cloudcompute.jpg";
import img7 from "../../../assets/images/appdev.jpg";
import ExploreDeeper from "../../common/ExploreDeeper";

const articles = [
  {
    items: [
      {
        image: img2,
        title:
          "Maximizing ROI from Your ERP System Investment: Strategies and Best Practices",
      },
      {
        image: img3,
        title: "Boost Efficiency with Custom Job Creation & Workflow Automation at VentureIT",
      },
    ],
  },
  {
    items: [
      {
        image: img4,
        title:
          "How Custom Applications Drive Business Growth in the Digital Age ",
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

function DevelopmentStories() {
  return (
    <ExploreDeeper
      title="Latest Stories"
      description="Explore our blogs and recent stories for incredible insights, tips, trends, and inspiration to fuel your growth in the market."
      exploreText="Explore deeper knowledge"
      exploreImage={img1}
      articles={articles}
    />
  );
}

export default DevelopmentStories;

import React from "react";
import ExploreDeeper from "../../common/ExploreDeeper";
const articles = [
  {
    items: [
      {
        image: require("../../../assets/images/hub3.png"),
        title:
          "Swiss Web Design: How Minimalism and Functionality Shape Iconic Digital Experiences",
      },
      {
        image: require("../../../assets/images/hub4.png"),
        title:
          "Back-End Development for Custom Web Applications: A Comprehensive Guide",
      },
    ],
  },
  {
    items: [
      {
        image: require("../../../assets/images/hub5.png"),
        title:
          "API-First Development: The Future of Modern Web App Development",
      },
      {
        image: require("../../../assets/images/hub7.png"),
        title:
          "AI Development Lifecycle: From Data to Deployment (Step-by-Step Guide)",
      },
    ],
  },
  {
    items: [
      {
        image: require("../../../assets/images/hub8.png"),
        title: "Custom Software Development: 10 Ways to Grow Your Business",
      },
      {
        image: require("../../../assets/images/hub9.png"),
        title:
          "Writing a Comprehensive RFP for Agile/Iterative Software or App Development Projects: The Ultimate Guide",
      },
    ],
  },
];
const ExploreAll = () => {
  return (
    <div>
      <ExploreDeeper
        exploreImage={require("../../../assets/images/ExploreArrow.png")}
        articles={articles}
      />
    </div>
  );
};

export default ExploreAll;

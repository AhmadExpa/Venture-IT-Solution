import React from "react";
import Speeds from "../../common/Speeds";
// import speedQuality from "../../../assets/images/speedQuality.png";
import speedQuality from "../../../assets/images/speedQuality.png"; // Updated to use webp format for better performance

const stats = [
  {
    value: "500+",
    buttonLabel: "successful IT projects",
    description:
      "Delivered 500+ cutting-edge IT solutions across various industries worldwide.",
  },
  {
    value: "200+",
    buttonLabel: "happy clients",
    description:
      "Trusted by enterprises, startups, and Fortune 500 companies for reliable IT services.",
  },
  {
    value: "98%",
    buttonLabel: "client satisfaction rate",
    description:
      "Our commitment to quality ensures high client retention and referrals.",
  },
];

function ServiceSpeed() {
  return (
    <>
      <Speeds
        imageSrc={speedQuality}
        imageAlt="IT Excellence"
        title="Accelerating Digital Transformation with Excellence"
        description="With years of expertise, we deliver innovative IT solutions at an accelerated pace without compromising quality."
        stats={stats}
      />
    </>
  );
}

export default ServiceSpeed;

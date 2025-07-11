import React from "react";
import logo1 from "../../../assets/images/clientlogo1.png";
import CustomTestimonial from "../../common/CustomTestimonial";

function IndustriesClientSay() {
  const testimonialData = [
    {
      logoSrc: logo1,
      testimonialText:
        "From the beginning Venture IT Solution an excellent team to work with...",
      avatarSrc: require("../../../assets/images/avatarr.png"),
      name: "Travis Hunter",
      designation: "MIT REAP",
    },
    {
      logoSrc: logo1,
      testimonialText:
        "From the beginning Venture IT Solution an excellent team to work with...",
      avatarSrc: require("../../../assets/images/avatarr.png"),
      name: "Travis Hunter",
      designation: "MIT REAP",
    },
    {
      logoSrc: logo1,
      testimonialText:
        "From the beginning Venture IT Solution an excellent team to work with...",
      avatarSrc: require("../../../assets/images/avatarr.png"),
      name: "Travis Hunter",
      designation: "MIT REAP",
    },
    {
      logoSrc: logo1,
      testimonialText:
        "From the beginning Venture IT Solution an excellent team to work with...",
      avatarSrc: require("../../../assets/images/avatarr.png"),
      name: "Travis Hunter",
      designation: "MIT REAP",
    },
    {
      logoSrc: logo1,
      testimonialText:
        "From the beginning Venture IT Solution an excellent team to work with...",
      avatarSrc: require("../../../assets/images/avatarr.png"),
      name: "Travis Hunter",
      designation: "MIT REAP",
    },
    {
      logoSrc: logo1,
      testimonialText:
        "From the beginning Venture IT Solution an excellent team to work with...",
      avatarSrc: require("../../../assets/images/avatarr.png"),
      name: "Travis Hunter",
      designation: "MIT REAP",
    },
  ];
  return (
    <CustomTestimonial
      heading="What our client says"
      description="Discover how we've transformed businesses through innovation. Hear directly from
our clients about their journey to success."
      testimonials={testimonialData}
    />
  );
}

export default IndustriesClientSay;

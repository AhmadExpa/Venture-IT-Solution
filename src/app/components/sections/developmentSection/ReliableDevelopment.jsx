
"use client";
import React from "react";
import img1 from "../../../assets/images/net.png";
import img2 from "../../../assets/images/clientlogo1.png";
import img3 from "../../../assets/images/oreo.png";
import img4 from "../../../assets/images/samsung.png";
import img5 from "../../../assets/images/national.png";
import Reliable from "../../common/Reliable";

const imagesLeft = [img1, img2, img3, img4, img5, img1, img2, img3, img4];
const imagesRight = [img3, img4, img2, img3, img4, img5, img1, img2, img3];

const ReliableDevelopment = () => {
  return (
    <Reliable
      heading="Trustworthy"
      paragraph="Our experts have partnered with industry leaders to rapidly bring groundbreaking products to market."
      imagesLeft={imagesLeft}
      imagesRight={imagesRight}
    />
  );
};

export default ReliableDevelopment;

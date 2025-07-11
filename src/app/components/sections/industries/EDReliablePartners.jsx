"use client";
import React from "react";
import img1 from "../../../assets/images/clientLogo1.jpg";
import img2 from "../../../assets/images/ClientLogo2.jpg";
import img3 from "../../../assets/images/ClientLogo3.jpg";

import Reliable from "../../common/Reliable";

const imagesLeft = [img1, img2, img3, img3, img3, img1, img2, img3, img3];
const imagesRight = [img3, img3, img2, img3, img3, img3, img1, img2, img3];

const EDReliablePartners = () => {
  return (
    <Reliable
      heading="Reliable"
      paragraph="Our top-tier experts and the team of engineers at web app development company USA help tech industry leaders bring outstanding products to the market."
      imagesLeft={imagesLeft}
      imagesRight={imagesRight}
    />
  );
};

export default EDReliablePartners;

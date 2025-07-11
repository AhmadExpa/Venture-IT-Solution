// "use client";
// import React from "react";
// import img1 from "../../assets/images/net.png";
// import img2 from "../../assets/images/clientlogo1.png";
// import img3 from "../../assets/images/oreo.png";
// import img4 from "../../assets/images/samsung.png";
// import img5 from "../../assets/images/national.png";
// import Reliable from "../common/Reliable";

// const partnersData = {
//   heading: "Reliable ",
//   paragraph: "Our top-tier experts and the team of engineers at web app development company USA help tech industry leaders bring outstanding products to the market.",
//   images: [
//        { src: img1, alt: "Partner 1" },
//         { src: img2, alt: "Partner 2" },
//         { src: img3, alt: "Partner 3" },
//         { src: img4, alt: "Partner 4" },
//         { src: img5, alt: "Partner 5" },
//         { src: img1, alt: "Partner 1" },
//         { src: img2, alt: "Partner 2" },
//         { src: img3, alt: "Partner 3" },
//         { src: img4, alt: "Partner 4" },

//   ],
// };

// const Trustworthy = () => {
//   return <Reliable {...partnersData} />;
// };

// export default Trustworthy;

"use client";
import React from "react";
import img1 from "../../assets/images/clientLogo1.jpg";
import img2 from "../../assets/images/ClientLogo2.jpg";
import img3 from "../../assets/images/ClientLogo3.jpg";


import Reliable from "../common/Reliable";

const imagesLeft = [img1, img2, img3, img3, img3, img1, img2, img3, img3];

const Trustworthy = () => {
  return (
    <Reliable
      heading="Your Trusted Partner in Tech"
      paragraph="Our top-tier experts and the team of engineers at web app development company USA help tech industry leaders bring outstanding products to the market."
      imagesLeft={imagesLeft}
    />
  );
};

export default Trustworthy;

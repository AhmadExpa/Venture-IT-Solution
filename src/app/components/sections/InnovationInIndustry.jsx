// import img1 from "../../assets/images/education.jpg";
// import img2 from "../../assets/images/healthcare.jpg";
// import img5 from "../../assets/images/realstate.jpg";
// import img6 from "../../assets/images/hospital.jpg";
// import img7 from "../../assets/images/sport.jpg";
// import img8 from "../../assets/images/transportation.jpg";
// import img9 from "../../assets/images/hr.jpg";
// import img10 from "../../assets/images/insurence.jpg";
// import img11 from "../../assets/images/oilandgas.jpg";
// import img12 from "../../assets/images/informationtech.jpg";
// import img13 from "../../assets/images/ecommercee.jpg";
// import CustomInnovation from "../common/CustomInnovation";

// const cardData = [
//   {
//     title: "Education",
//     image: img1,
//     description:
//       "We create customized, tech-driven platforms to enhance learning...",
      
//   },
//   {
//     title: "Insurance",
//     image: img10,
//     description:
//       "We engineer advanced digital solutions that drive operational efficiency...",
//   },
//   {
//     title: "Healthcare",
//     image: img2,
//     description:
//       "Improve health tracking, monitoring capabilities, and treatment practices...",
//   },
//   {
//     title: "Information Technology",
//     image: img12,
//     description:
//       "Improve health tracking, monitoring capabilities, and treatment practices...",
//   },
//   {
//     title: "Oil & Gas",
//     image: img11,
//     description:
//       "We develop AI-powered, data-driven platforms that optimize risk...",
//   },
//   {
//     title: "Transportation",
//     image: img8,
//     description:
//       "Improving efficiency and visibility in the logistics and transportation sector...",
//   },
//   {
//     title: "Sports",
//     image: img7,
//     description:
//       "Developing innovative platforms for sports management and fan...",
//   },
//   {
//     title: "Real Estate",
//     image: img5,
//     description:
//       " Our technology-driven web applications development company enhances...",
//   },
//   {
//     title: "Hospitality",
//     image: img6,
//     description:
//       "We Optimize your travel and hotel operations with our indispensable...",
//   },
//   {
//     title: "HR-Finance",
//     image: img9,
//     description:
//       "As a leading US web development company, we innovate HR & Finance... ",
//   },
//   {
//     title: "E-Commerce",
//     image: img13,
//     description:
//       "We assist you in  web development services which enhance...",
//   },
// ];

// function InnovationInIndustry() {
//   return (
//     <CustomInnovation
//       heading="Innovation In Every Industry"
//       para="With an ambitious team of industry experts, we prioritize adaptability and innovation."
//       cardData={cardData}
//     />
//   );
// }

// export default InnovationInIndustry;
import img1 from "../../assets/images/education.jpg";
import img2 from "../../assets/images/healthcare.jpg";
import img5 from "../../assets/images/realstate.jpg";
import img6 from "../../assets/images/hospital.jpg";
import img7 from "../../assets/images/sport.jpg";
import img8 from "../../assets/images/transportation.jpg";
import img9 from "../../assets/images/hr.jpg";
import img10 from "../../assets/images/insurence.jpg";
import img11 from "../../assets/images/oilandgas.jpg";
import img12 from "../../assets/images/informationtech.jpg";
import img13 from "../../assets/images/ecommercee.jpg";
import CustomInnovation from "../common/CustomInnovation";

const cardData = [
  {
    title: "Education",
    image: img1,
    description: "We create customized, tech-driven platforms to enhance learning...",
    link: "/industries#education", 
  },
  {
    title: "Insurance",
    image: img10,
    description: "We engineer advanced digital solutions that drive operational efficiency...",
    link: "/industries#insurance", 
  },
  {
    title: "Healthcare",
    image: img2,
    description: "Improve health tracking, monitoring capabilities, and treatment practices...",
    link: "/industries#healthcare", // Add the link here
  },
  {
    title: "Information Technology",
    image: img12,
    description: "Improve health tracking, monitoring capabilities, and treatment practices...",
    link: "/industries#information", // Add the link here
  },
  {
    title: "Oil & Gas",
    image: img11,
    description: "We develop AI-powered, data-driven platforms that optimize risk...",
    link: "/industries#healthcare", // Add the link here
  },
  {
    title: "Transportation",
    image: img8,
    description: "Improving efficiency and visibility in the logistics and transportation sector...",
    link: "/industries#hr", // Add the link here
  },
  {
    title: "Sports",
    image: img7,
    description: "Developing innovative platforms for sports management and fans...",
    link: "/industries#sport", // Add the link here
  },
  {
    title: "Real Estate",
    image: img5,
    description: "Our technology-driven web applications development company enhances...",
    link: "/industries#realestate", // Add the link here
  },
  {
    title: "Hospitality",
    image: img6,
    description: "We Optimize your travel and hotel operations with our indispensable...",
    link: "/industries#hospital", // Add the link here
  },
  {
    title: "HR-Finance",
    image: img9,
    description: "As a leading US web development company, we innovate HR & Finance... ",
    link: "/industries#hr", // Add the link here
  },
  {
    title: "E-Commerce",
    image: img13,
    description: "We assist you in web development services that enhance.",
    link: "/industries#ecommerce", // Add the link here
  },
];

function InnovationInIndustry() {
  return (
    <CustomInnovation
      heading="Innovation In Every Industry"
      para="With an ambitious team of industry experts, we prioritize adaptability and innovation."
      cardData={cardData}
    />
  );
}

export default InnovationInIndustry;
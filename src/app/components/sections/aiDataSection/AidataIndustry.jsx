import img1 from "../../../assets/images/slidereducation.jpg";
import img2 from "../../../assets/images/sliderhealthcare.jpg";
import img5 from "../../../assets/images/sliderrealestate.jpg";
import img6 from "../../../assets/images/sliderhospitility.jpg";
import img7 from "../../../assets/images/slidertransportation.jpg";
import img8 from "../../../assets/images/slidersports.jpg";
import img9 from "../../../assets/images/sliderfinance.jpg";
import img10 from "../../../assets/images/sliderinsurance.jpg";
import img11 from "../../../assets/images/oilandgas.jpg";
import img12 from "../../../assets/images/informationtechnology.jpg";
import img13 from "../../../assets/images/ecommerce.jpg";
import CustomInnovation from "../../common/CustomInnovation";

const cardData = [
  {
    title: "Education",
    image: img1,
    description:
      "We create customized, tech-driven platforms to enhance learning, streamline management, and improve cloud based educational experiences.",
  },
  {
    title: "Insurance",
    image: img10,
    description:
      "We engineer advanced digital solutions that drive operational efficiency, enhance asset monitoring, and streamline supply chain management through IoT, AI, and big data analytics.",
  },
  {
    title: "Healthcare",
    image: img2,
    description:
      "Improve health tracking, monitoring capabilities, and treatment practices with our modern healthcare cloud application development services.",
  },
  {
    title: "Information Technology",
    image: img12,
    description:
      "Improve health tracking, monitoring capabilities, and treatment practices with our modern healthcare cloud application development services.",
  },
  {
    title: "Oil & Gas",
    image: img11,
    description:
      "We develop AI-powered, data-driven platforms that optimize risk assessment, automate claims processing, and enhance policy management through secure cloud infrastructure and predictive analytics.",
  },
  {
    title: "Transportation",
    image: img7,
    description:
      "Improving efficiency and visibility in the logistics and transportation sector.",
  },
  {
    title: "Sports",
    image: img8,
    description:
      "Developing innovative platforms for sports management and fan experiences.",
  },
  {
    title: "Real Estate",
    image: img5,
    description:
      " Our technology-driven web applications development company enhances efficiency, improves customer engagement, and simplifies transaction management, helping you deliver seamless real estate experiences.",
  },
  {
    title: "Hospitality",
    image: img6,
    description:
      "We Optimize your travel and hotel operations with our indispensable IT solutions to maximize your potential.",
  },
  {
    title: "HR-Finance",
    image: img9,
    description:
      "As a leading US web development company, we innovate HR & Finance with reliable, scalable software that streamlines operations and boosts efficiency. ",
  },
  {
    title: "E-Commerce",
    image: img13,
    description:
      "We assist you in  web development services which enhance your eCommerce store to meet the demands of modern consumers with our skilled team of developers.",
  },
];

function AidataIndustry() {
  return (
    <CustomInnovation
      heading="Innovation In Every Industry"
      para="With an ambitious team of industry experts, we prioritize adaptability and innovation to fulfill the unique needs of various industries."
      cardData={cardData}
    />
  );
}

export default AidataIndustry;


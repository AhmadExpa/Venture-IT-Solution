import img1 from "../../../assets/images/education.png";
import CustomInnovation from "../../common/CustomInnovation";

const cardData = [
    {
      title: "Cloud Computing",
      image: img1,
      description:
        "Leverage scalable and secure cloud solutions to enhance efficiency, collaboration, and business agility.",
    },
    {
      title: "Cybersecurity",
      image: img1,
      description:
        "Protect your business with advanced cybersecurity measures, risk management, and compliance solutions.",
    },
    {
      title: "Software Development",
      image: img1,
      description:
        "Custom software solutions tailored to meet your business needs, from web to enterprise applications.",
    },
    {
      title: "AI & Data Analytics",
      image: img1,
      description:
        "Harness the power of AI and data analytics to gain deep insights and drive business growth.",
    },
    {
      title: "IT Consulting",
      image: img1,
      description:
        "Strategic IT consulting services to optimize your technology stack and drive digital transformation.",
    },
    {
      title: "Managed IT Services",
      image: img1,
      description:
        "Comprehensive IT management, including network monitoring, system maintenance, and support services.",
    },
    {
      title: "DevOps & Automation",
      image: img1,
      description:
        "Improve software delivery and infrastructure management with DevOps best practices and automation.",
    },
  ];
  
  function ServiceExpertise() {
    return (
      <CustomInnovation
        heading="Empowering Businesses with Cutting-Edge IT Solutions"
        para="With deep expertise in diverse IT domains, we provide customized technology solutions that drive innovation and efficiency."
        cardData={cardData}
      />
    );
  }
  
  export default ServiceExpertise;
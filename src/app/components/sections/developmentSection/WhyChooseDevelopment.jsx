import ChooseVentureIT from "../../common/ChooseVentureIT";

const featuresData = [
  {
    number: "1",
    title: "Full-Stack Mastery",
    description:
      "Our comprehensive skill set covers every aspect of web development, ensuring a seamless process.",
  },
  {
    number: "2",
    title: "Agile at Heart",
    description:
      "We embrace flexibility and rapid iteration to deliver value quickly.",
  },
  {
    number: "3",
    title: "Security First",
    description:
      "Your data is our priority. We implement robust security measures to protect your digital assets.",
  },
  {
    number: "4",
    title: "Proven Track Record",
    description:
      "Our portfolio showcases a history of successful projects and satisfied clients.",
  },
  {
    number: "5",
    title: "Client-Centric Approach",
    description:
      "We collaborate closely to understand your vision and deliver tailored solutions.",
  },
  {
    number: "6",
    title: "Dedicated Teams",
    description: "Our expert teams are committed to your project's success.",
  },
];

const WhyChooseDevelopment = () => {
  return (
    <ChooseVentureIT
      title="Why Choose Venture IT Solution for Web Development?"
      description="From concept to launch, we're your trusted partner in building exceptional web applications. Our team of seasoned engineers combines creativity with technical prowess to deliver innovative solutions that drive results."
      features={featuresData}
    />
  );
};

export default WhyChooseDevelopment;

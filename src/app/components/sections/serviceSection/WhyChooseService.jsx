import ChooseVentureIT from "../../common/ChooseVentureIT";

const featuresData = [
  {
    number: "1",
    title: "End-to-End IT Solutions",
    description:
      "From consulting to implementation, we offer comprehensive IT solutions to meet your business needs.",
  },
  {
    number: "2",
    title: "Cutting-Edge Technology",
    description:
      "We leverage the latest technologies, including AI, cloud computing, and cybersecurity, to drive innovation.",
  },
  {
    number: "3",
    title: "Robust Security Measures",
    description:
      "Your data and systems are protected with industry-leading security protocols and compliance standards.",
  },
  {
    number: "4",
    title: "Proven Industry Expertise",
    description:
      "With a strong track record, we have successfully delivered IT solutions across various industries.",
  },
  {
    number: "5",
    title: "Client-Focused Approach",
    description:
      "We work closely with you to understand your unique needs and deliver tailor-made IT solutions.",
  },
  {
    number: "6",
    title: "24/7 Support & Maintenance",
    description:
      "Our dedicated support team ensures your IT infrastructure runs smoothly around the clock.",
  },
];

const WhyChooseService = () => {
  return (
    <ChooseVentureIT
      title="Why Choose Us as Your IT Service Provider?"
      description="We provide innovative, secure, and scalable IT solutions tailored to your business needs. Our expert team ensures seamless technology integration and long-term success."
      features={featuresData}
    />
  );
};

export default WhyChooseService;

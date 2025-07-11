import React from "react";
import GradientButton from "../common/GradientButton";
import Image from "next/image";

const services = [
  {
    image: require("../../assets/images/web.png"),
    alt: "PWA",
    title: "Progressive Web App (PWA)",
    description: "Create PWAs that offer speed, reliability, and engagement.",
    hiddenOnLg: false,
  },
  {
    image: require("../../assets/images/web.png"),
    alt: "MVP",
    title: "Minimum Viable Product (MVP)",
    description:
      "Rapidly develop MVPs to test market fit and iterate for success.",
    hiddenOnLg: false,
  },
  {
    image: require("../../assets/images/web.png"),
    alt: "Productivity",
    title: "Boost Productivity",
    description: "Enhance productivity with our custom solutions.",
    hiddenOnLg: true, // This card is hidden on large screens
  },
];
const WebDevelopmentService = () => {
  return (
    <div className="">
      <div className="bg-black text-white p-8">
        <h1 className="text-4xl font-bold mb-4">
          Full-Service Web Development
        </h1>
        <p className="text-lg mb-8">
          From cloud-based SaaS solutions to streamlined workflow automation, we
          build custom web applications tailored to your specific needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`hover:bg-gray-800 border border-[#CED2DA4D] p-10 rounded-[27px] ${
                service.hiddenOnLg ? "hidden lg:block" : ""
              }`}
            >
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <Image
                src={service.image}
                alt={service.alt}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="pt-10">
          <GradientButton
            text={"Talk to an Expert"}
            fontSize="16px"
            padding="10px 12px"
          />
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentService;

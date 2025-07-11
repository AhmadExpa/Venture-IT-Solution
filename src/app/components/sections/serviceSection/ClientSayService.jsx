import React from "react";
import CustomTestimonial from "../../common/CustomTestimonial";

function ClientSayService() {
  const testimonialData = [
    {
      testimonialText:
        "In creating an app for our SaaS platform, we urgently needed a qualified and hardworking team who understands and implements application functionality. Venture IT’s independent software testing services provided us with high-end development, maintenance, bug fixing, and testing. Their work was really good. We would love to keep our collaboration as long as possible.” — Debbie.",
  
    },
    {
      testimonialText:
        "“Venture IT Solutions is a great tandem of IT and business, helping to quantify the unique demand for software services and driving technology to provide value. They’ve given us a competitive edge in our health industry and helped us with responsive website designs and cloud migration.” — Bruce.",
    },
    {
      testimonialText:
        "I would like to thank the team of Venture IT for top-quality work, timely assistance and efficiency in solving urgent problems in the development & implementation of our complex project. Their developers have offered great web design and development services and given us a highly flexible platform that allows us to handle all aspects of our support across the enterprise and IT infrastructure. The best part is that they’re easy to work with, quick, fun, and collaborative. — Alexander Brown.",
    },
    {
      testimonialText:
        "“We’ve hired the Venture IT Solution’s team to build a web-based app from scratch using React and .NET. They have been very cooperative and efficient, ensuring effective workflow. Their personalized approach and positive attitude are surely the hallmarks of their work.” — Robert H.",
    },
    {
      testimonialText:
        "“The team developed a mobile-friendly iOS application with a payment system, an admin panel, and subscription features within a short deadline. The app looked excellent and worked smoothly. Venture IT is a great software development company USA, which impressed us with its talented development and design team.” — Jamie.",
    },
    {
      testimonialText:
        "“Venture IT helped us to develop, design and implement a complete cycle application and web system for our different warehouses. I enjoy working with their team to formulate and develop new features and ideas to improve our procedures. They have been quick to assist and flexible whenever the need has arisen” — Jordan.",
    },
  ];
  return (
    <CustomTestimonial
      heading="What our client says"
      description="Discover how we've transformed businesses through innovation. Hear directly from our clients about their journey to success."
      testimonials={testimonialData}
    />
  );
}

export default ClientSayService;

import React from "react";
import Image from "next/image";
import img1 from "../../assets/images/quotes.png";

const TestimonialCard = ({
  logoSrc,
  testimonialText,
  avatarSrc,
  name,
  designation,
}) => {
  return (
    <div className="bg-white rounded-2xl relative md:py-10 py-3">
      {/* <div className="mb-4">
        <Image src={logoSrc} width={100} height={100} className="absolute top-8 left-10" />
      </div> */}
      <div className="md:w-[30vw] md:py-10 py-8 md:px-10 px-4 rounded-2xl flex gap-4">
        <Image src={img1} className="w-3 h-3" alt="img"/>
        <p className="text-[#3F3F46] text-lg leading-8">{testimonialText}</p>
      </div>
      <div className="flex gap-2 md:px-10 px-8">
        <div>
          <Image src={avatarSrc} alt={name} />
        </div>
        <div>
          <h2 className="text-[20px] text-[#3F3F46] font-[600]">{name}</h2>
          <span className="text-[#3F3F46] text-[17px]">{designation}</span>
        </div>
      </div>
    </div>
  );
};


const CustomTestimonial = ({ heading, description, testimonials }) => {
  return (
    <div className="bg-[#F2F2F7B2] md:py-20 py-10 md:px-10 px-5">
      <div className="flex justify-end">
        <div className="flex flex-col md:gap-5 gap-2">
          <h1 className="md:text-7xl text-4xl text-[#171717] font-bold ">
            {heading}
          </h1>
          <div className="flex justify-end">
            <p className="md:text-xl text-lg text-[#3F3F46] md:w-[55vw] w-full">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:gap-20 gap-8 items-center justify-center mt-8">
        <div className="flex flex-col items-center justify-center md:gap-28 gap-8">
          {testimonials
            .slice(0, Math.ceil(testimonials.length / 2))
            .map((testimonial, index) => (
              <TestimonialCard key={`left-${index}`} {...testimonial} />
            ))}
        </div>
        <div className="flex flex-col items-center justify-center md:gap-28 gap-8 md:mt-28">
          {testimonials
            .slice(Math.ceil(testimonials.length / 2))
            .map((testimonial, index) => (
              <TestimonialCard key={`right-${index}`} {...testimonial} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CustomTestimonial;

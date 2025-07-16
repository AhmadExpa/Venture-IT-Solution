import React from "react";

const TheFutureBright = () => {
  return (
    <div className="py-20">
      <div className="md:h-[500px] h-full hover:bg-[linear-gradient(to_right,_#CB9F3C,_#E9DC8A,_#CBB260)] bg-black hover:text-black text-white flex items-center justify-center relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-transparent pointer-events-none" />

        {/* Content container */}
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
            The Future is Bright
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-md  mb-12 max-w-3xl mx-auto leading-relaxed">
            As trailblazers in AI, Machine Learning, Web Apps, and Mobile Apps,
            we're not just riding the wave of technological advancement – we're
            creating it.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center"></div>

          {/* Optional subtitle */}
          <p className="mt-6">
            <a
              href="hire-us"
              className="inline-block  underline py-4 rounded-lg"
            >
              Partner with Venture IT Solution-
            </a>
            Let's turn your digital dreams into reality.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-3/4 h-64 bg-purple-600/10 blur-3xl rounded-full" />
      </div>
    </div>
  );
};

export default TheFutureBright;

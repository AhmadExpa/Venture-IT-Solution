import Image from "next/image";
import icon from "../../../assets/images/icon.png";
import bgImage from "../../../assets/images/portfolionew.jpg";

const Hero = () => {
  return (
    <section
      className="relative flex flex-col-reverse md:flex-row md:items-center lg:h-screen md:h-[600px] h-[300px] justify-between px-6 md:px-12 py-8  bg-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center w-full">
        <h1 className="lg:text-[90px] md:text-[50px] md:mb-8 mb-2 font-bold  sm:text-3xl lg:leading-[85px] text-white">
          Digital Brilliance
        </h1>
        <p className="md:text-2xl text-white font-bold">
          Innovation at Its Finest
        </p>
        <div className="flex justify-center items-center">
          <p className=" md:text-base md:w-[700px] w-full text-white">
            Explore our vast portfolio of transformative projects, where
            innovation meets efficiency. Our imaginative team delivers top-notch
            solutions to drive business growth.
          </p>
          <Image src={icon} alt="Hero-icon" className="w-5 " />
        </div>
      </div>
    </section>
  );
};

export default Hero;

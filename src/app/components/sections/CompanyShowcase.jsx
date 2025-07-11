// import Image from "next/image";
// import { IoMdArrowForward } from "react-icons/io";
// import logo1 from "../../assets/images/dag.png";
// import rapid from "../../assets/images/web2.jpg";
// import azure from "../../assets/images/web3.jpg";
// import native from "../../assets/images/web4.jpg";
// import work from "../../assets/images/web1.jpg";
// import Logo from "../../assets/images/Logo.png";
// import PorotfolioCount from "../PorotfolioCount";

// const CompanyShowcase = () => {
//   const companies = [
//     {
//       logo:Logo,
//       industry: "Healthcare",
//       country: "United Kingdom",
//       bgImage: rapid,
//       description:
//         "GitHub Copilot automates coding and reduces development time while guaranteeing quality output.",
     
        

//     },
//     {
//       logo:Logo,
//       bgImage: azure,
//       industry: "Healthcare",
//       country: "Poland",
//       description:
//         "Efficient, secure Azure migration with data optimization, app rehosting, and post-migration support.",
        
//     },
//     {
//       logo:Logo,
//       bgImage: native,
//       industry: "Healthcare",
//       country: "Poland",
//       description:
//         "Leverage Azure Cloud for scalable apps designed for your unique business needs and demands.",
          
//     },
//     {
//       logo:Logo,
//       bgImage: work,
//       industry: "Healthcare",
//       country: "Poland",
//       description:
//         "Customized job creation automates tasks, reduces hectic manual workload and optimizes processes.",
          
//     },
//   ];

//   return (
//     <>
//     <div className="container py-3  mx-auto md:py-12 grid md:grid-cols-2 gap-8">
//       {companies.map((company, index) => (
//         <div
//           key={index}
//           className="group rounded-xl shadow-lg overflow-hidden 
//             flex flex-col bg-[#f4f4f4] hover:bg-[#fff] transition duration-300 cursor-pointer"
//         >
//           <div className="relative">
//             {/* Background Image */}
//             <div
//               style={{ backgroundImage: `url(${company.bgImage.src})` }}
//               className="md:h-[300px] h-full bg-cover bg-center border-[10px] border-black"
//             ></div>

//             {/* Black Overlay - Visible Only on Hover */}
//             <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
//           </div>

//           <div className="p-6 text-[#777] relative">
//             <div className="flex justify-between items-center">
//               <Image src={company.logo} width={100} height={100} />
//               <a
//                 className="border border-black rounded-full w-12 h-12 flex items-center justify-center 
//                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               >
//                 <IoMdArrowForward className="text-xl" />
//               </a>
//             </div>

//             <div className="mb-4 flex gap-6">
//               <div className="space-y-1">
//                 <label className="text-[14px]">Industry</label>
//                 <p className="text-[12px] text-black border border-black rounded-full px-2 py-1">
//                   {company.industry}
//                 </p>
//               </div>
//               <div className="space-y-1">
//                 <label className="text-[14px]">Country</label>
//                 <p className="text-[12px] text-black border border-black rounded-full px-2 py-1">
//                   {company.country}
//                 </p>
//               </div>
//             </div>

//             <p className="text-sm mb-4 font-bold">{company.description}</p>
//           </div>
//         </div>
//       ))}
       
//     </div>
//     <PorotfolioCount/>
//     </>
//   );
// };

// export default CompanyShowcase;
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
import logo1 from "../../assets/images/dag.png"; // This import is not used in the provided code
import rapid from "../../assets/images/web2.jpg";
import azure from "../../assets/images/web3.jpg";
import native from "../../assets/images/web4.jpg";
import work from "../../assets/images/web1.jpg";
import Logo from "../../assets/images/Logo.png";
import PorotfolioCount from "../PorotfolioCount";

const CompanyShowcase = () => {
  const companies = [
    {
      logo: Logo,
      industry: "Healthcare",
      country: "United Kingdom",
      bgImage: rapid,
      description:
        "GitHub Copilot automates coding and reduces development time while guaranteeing quality output.",
    },
    {
      logo: Logo,
      bgImage: azure,
      industry: "Healthcare",
      country: "Poland",
      description:
        "Efficient, secure Azure migration with data optimization, app rehosting, and post-migration support.",
    },
    {
      logo: Logo,
      bgImage: native,
      industry: "Healthcare",
      country: "Poland",
      description:
        "Leverage Azure Cloud for scalable apps designed for your unique business needs and demands.",
    },
    {
      logo: Logo,
      bgImage: work,
      industry: "Healthcare",
      country: "Poland",
      description:
        "Customized job creation automates tasks, reduces hectic manual workload and optimizes processes.",
    },
  ];

  return (
    <>
      <div className="container py-3 mx-auto md:py-12 grid md:grid-cols-2 gap-8">
        {companies.map((company, index) => (
          <div
            key={index}
            className="group rounded-xl shadow-lg overflow-hidden
                       flex flex-col bg-[#f4f4f4] hover:bg-[#fff] transition duration-300 cursor-pointer"
          >
            <div className="relative">
              {/* Background Image */}
              <div
                style={{ backgroundImage: `url(${company.bgImage.src})` }}
                className="h-[200px] md:h-[300px] bg-cover bg-center "
              ></div>

              {/* Black Overlay - Visible Only on Hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 text-[#777] relative">
              <div className="flex justify-between items-center">
                <Image src={company.logo} width={100} height={100} alt="Company Logo" />
                {/* <a
                  className="border border-black rounded-full w-12 h-12 flex items-center justify-center
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <IoMdArrowForward className="text-xl " />
                </a> */}
              </div>

              <div className="mb-4 flex gap-6">
                <div className="space-y-1">
                  <label className="text-[14px]">Industry</label>
                  <p className="text-[12px] text-black border border-black rounded-full px-2 py-1">
                    {company.industry}
                  </p>
                </div>
                <div className="space-y-1">
                  <label className="text-[14px]">Country</label>
                  <p className="text-[12px] text-black border border-black rounded-full px-2 py-1">
                    {company.country}
                  </p>
                </div>
              </div>

              <p className="text-sm mb-4 font-bold">{company.description}</p>
            </div>
          </div>
        ))}
      </div>
      <PorotfolioCount />
    </>
  );
};

export default CompanyShowcase;
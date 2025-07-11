// import React from "react";
// import CountUp from "react-countup";

// const Counter = () => {
//   return (
//     <div className="py-16">
//     <div className="md:px-10 px-5 flex flex-col gap-6">
//       <h1 className="text-7xl font-bold tracking-wide">Your Vision, Realized and Delivered Seamlessly</h1>
//       <p className="text-xl text-gray-600">We’ve engineered a high- speed process for over 8 years that consistently delivers exceptional results, exceeding client expectation and exceeding industry standards.</p>
//     </div>
//       <div className="bg-gray-900 p-6 w-full md:mt-20 mt-8">
//         <div className="flex items-center">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
//             {/* Stats Section */}
//             <div className="col-span-3">
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//                 {/* Professionals Counter */}
//                 <div className="text-center">
//                   <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
//                     <CountUp end={100} duration={2} enableScrollSpy suffix="+" />
//                   </h2>
//                   <p className="text-gray-400 text-sm md:text-base">
//                     professionals
//                     <br />
//                     on board
//                   </p>
//                 </div>

//                 {/* Years Counter */}
//                 <div className="text-center">
//                   <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
//                     <CountUp end={17} duration={2} enableScrollSpy />
//                   </h2>
//                   <p className="text-gray-400 text-sm md:text-base">
//                     years of market
//                     <br />
//                     experience
//                   </p>
//                 </div>

//                 {/* Projects Counter */}
//                 <div className="text-center">
//                   <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
//                     <CountUp
//                       end={100}
//                       duration={2}
//                       enableScrollSpy
//                       suffix="+"
//                     />
//                   </h2>
//                   <p className="text-gray-400 text-sm md:text-base">
//                     successful
//                     <br />
//                     projects
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Counter;

import React from "react";
import CountUp from "react-countup";

const metrics = [
  { label: "Referral rate", value: "96%", type: "percentage" },
  { label: "Client Retention Rate", value: "98%", type: "percentage" },
  { label: "Founded in", value: "Dallas", type: "location" },
  { label: "Employee net promoter score", value: "92%", type: "percentage" },
  { label: "Long-lasting partnerships", value: "96%", type: "percentage" },
  { label: "Professional On Board", value: "80+", type: "location" },
];

const Counter = () => {
  return (
    <div className="py-16 w-full max-w-7xl mx-auto md:px-10 px-2">
      <div className="md:flex space-y-6 gap-10 mb-10">
        <h1 className="md:text-5xl w-full text-2xl font-bold">
          Your Vision, Realized and Delivered Seamlessly
        </h1>
        <p className="text-xl text-gray-600 ">
          We’ve engineered a high-speed process for over 17 years that
          consistently delivers exceptional results, exceeding client
          expectation and exceeding industry standards.
        </p>
      </div>
      <div className="flex">
        <div className="md:w-1/2">
          <p className="text-[#000] text-xl">
            Venture IT Solutions delivers $600,000+ in annual savings for
            clients, driving efficiency and growth through innovative
            collaboration.
          </p>
        </div>
      </div>

      {/* <div className="bg-gray-900 p-6 w-full md:mt-20 mt-8">
        <div className="flex justify-around items-center flex-wrap gap-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <CountUp end={100} duration={2} enableScrollSpy suffix="+" />
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              professionals
              <br />
              on board
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <CountUp end={17} duration={2} enableScrollSpy />
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              years of market
              <br />
              experience
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <CountUp end={100} duration={2} enableScrollSpy suffix="+" />
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              successful
              <br />
              projects
            </p>
          </div>
        </div>
      </div> */}

      <div className=" px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="border-t py-6">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                <p className="text-gray-600 text-sm">{metric.label}</p>
              </div>
              <p className="text-5xl font-medium text-gray-900">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counter;

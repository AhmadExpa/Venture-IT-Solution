// "use client";
// import React from "react";
// import Image from "next/image";

// import jss from "../../assets/logos/javascript.png";
// import tss from "../../assets/logos/typescript.png";
// import ai from "../../assets/logos/ai.png";
// import node from "../../assets/logos/nodejs.png";
// import python from "../../assets/logos/python.png";
// import react from "../../assets/logos/react.png";
// import cloude1 from "../../assets/logos/aws.png";
// import cloude2 from "../../assets/logos/azure.png";
// import dev1 from "../../assets/logos/github.png";
// import flutter from "../../assets/logos/flutter.png";
// import logo2 from "../../assets/logos/android.png";
// import logo4 from "../../assets/logos/ios.png";
// import logo17 from "../../assets/logos/netcore.png";
// import logo8 from "../../assets/logos/java.png";
// import logo11 from "../../assets/logos/Rubyrails.png";
// import logo9 from "../../assets/logos/Angular.png";
// import logo20 from "../../assets/logos/sql.png";
// import logo23 from "../../assets/logos/gcp.png";
// import snowflake from "../../assets/logos/snowflake.png";
// import logo19 from "../../assets/logos/oracle.png";
// import teraform from "../../assets/logos/teraform.png";
// import django from "../../assets/logos/django.png";
// import flask from "../../assets/logos/flask.png";
// import genai from "../../assets/logos/genai.png";
// import solana from "../../assets/logos/solana.png";
// import block from "../../assets/logos/blockchain.png";
// import crypto from "../../assets/logos/crypto.png";
// import llm from "../../assets/logos/llm.png";

// const allTech = [
//   { img: python, name: "Python" },
//   { img: react, name: "React" },
//   { img: node, name: "Node.js" },
//   { img: cloude1, name: "AWS" },
//   { img: cloude2, name: "Azure" },
//   { img: jss, name: "JavaScript" },
//   { img: tss, name: "TypeScript" },
//   { img: ai, name: "AI" },
//   { img: dev1, name: "Github" },
//   { img: flutter, name: "Flutter" },
//   { img: logo2, name: "Android" },
//   { img: teraform, name: "Teraform" },
//   { img: django, name: "Django" },
//   { img: flask, name: "Flask" },
//   { img: genai, name: "GenAI" },
//   { img: logo4, name: "Ios" },
//   { img: logo17, name: ".Net" },
//   { img: logo8, name: "Java" },
//   { img: logo11, name: "Ruby on rail" },
//   { img: logo9, name: "Angular" },
//   { img: solana, name: "Solana" },
//   { img: logo20, name: "SQL" },
//   { img: logo23, name: "Google Cloud Platform" },
//   { img: snowflake, name: "Snowflake" },
//   { img: logo19, name: "Oracle" },
//   { img: crypto, name: "Crypto" },
// ];

// function OurCode() {
//   // Function to chunk array into specified sizes
//   const chunkArray = (arr, size) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i += size) {
//       result.push(arr.slice(i, i + size));
//     }
//     return result;
//   };

//   // Create different row layouts based on screen size
//   // We'll use these in responsive classes
//   const desktopRows = chunkArray(allTech, 8); // 8 items per row on desktop
//   const tabletRows = chunkArray(allTech, 2);  // 2 items per row on tablet/mobile

//   return (
//     <div className="md:my-28 my-10 md:px-10 px-5 flex flex-col items-center justify-center">
//       <div className="flex flex-col md:gap-5 gap-3 md:w-[75vw] w-full">
//         <h1 className="text-[#171717] md:text-7xl text-center text-xl font-bold">
//           Your Vision, Our Technology
//         </h1>
//         <p className="text-[#3F3F46] md:text-xl text-lg text-center">
//           Harness the power of our full-stack development mastery. We blend
//           creativity with cutting-edge technology to build robust, scalable, and
//           secure software solutions.
//         </p>
//       </div>

//       {/* Desktop view (4 rows with multiple items) */}
//       <div className="mt-20 hidden md:flex flex-col gap-12">
//         {desktopRows.map((row, rowIndex) => (
//           <div
//             key={`desktop-row-${rowIndex}`}
//             className="flex flex-wrap justify-center gap-8"
//           >
//             {row.map((tech, index) => (
//               <div key={`desktop-tech-${index}`} className="group relative">
//                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black w-full items-center flex justify-center text-white text-xs py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   {tech.name}
//                 </div>
//                 <div className="p-4 bg-[#F6F6F9] rounded-full transition-all duration-500 ease-in-out group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
//                   <Image
//                     src={tech.img}
//                     alt={tech.name}
//                     className="object-contain w-16 h-16 rounded-lg"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       {/* Mobile/Tablet view (showing only 2 items per row) */}
//       <div className="mt-12 flex md:hidden flex-col gap-6">
//         {tabletRows.map((row, rowIndex) => (
//           <div
//             key={`mobile-row-${rowIndex}`}
//             className="flex justify-center gap-8"
//           >
//             {row.map((tech, index) => (
//               <div key={`mobile-tech-${index}`} className="group relative">
//                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black w-full items-center flex justify-center text-white text-xs py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   {tech.name}
//                 </div>
//                 <div className="p-4 bg-[#F6F6F9] rounded-full transition-all duration-500 ease-in-out group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
//                   <Image
//                     src={tech.img}
//                     alt={tech.name}
//                     className="object-contain w-14 h-14 md:w-16 md:h-16 rounded-lg"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default OurCode;
"use client";
import React from "react";
import Image from "next/image";

import jss from "../../assets/logos/javascript.png";
import tss from "../../assets/logos/typescript.png";
import ai from "../../assets/logos/ai.png";
import node from "../../assets/logos/nodejs.png";
import python from "../../assets/logos/python.png";
import react from "../../assets/logos/react.png";
import cloude1 from "../../assets/logos/aws.png";
import cloude2 from "../../assets/logos/azure.png";
import dev1 from "../../assets/logos/github.png";
import flutter from "../../assets/logos/flutter.png";
import logo2 from "../../assets/logos/android.png";
import logo4 from "../../assets/logos/ios.png";
import logo17 from "../../assets/logos/netcore.png";
import logo8 from "../../assets/logos/java.png";
import logo11 from "../../assets/logos/Rubyrails.png";
import logo9 from "../../assets/logos/Angular.png";
import logo20 from "../../assets/logos/sql.png";
import logo23 from "../../assets/logos/gcp.png";
import snowflake from "../../assets/logos/snowflake.png";
import logo19 from "../../assets/logos/oracle.png";
import teraform from "../../assets/logos/teraform.png";
import django from "../../assets/logos/django.png";
import flask from "../../assets/logos/flask.png";
import genai from "../../assets/logos/genai.png";
import solana from "../../assets/logos/solana.png";
import block from "../../assets/logos/blockchain.png";
import crypto from "../../assets/logos/crypto.png";
import llm from "../../assets/logos/llm.png";

const allTech = [
  { img: python, name: "Python" },
  { img: react, name: "React" },
  { img: node, name: "Node.js" },
  { img: cloude1, name: "AWS" },
  { img: cloude2, name: "Azure" },
  { img: jss, name: "JavaScript" },
  { img: tss, name: "TypeScript" },
  { img: ai, name: "AI" },
  { img: dev1, name: "Github" },
  { img: flutter, name: "Flutter" },
  { img: logo2, name: "Android" },
  { img: teraform, name: "Teraform" },
  { img: django, name: "Django" },
  { img: flask, name: "Flask" },
  { img: genai, name: "GenAI" },
  { img: logo4, name: "Ios" },
  { img: logo17, name: ".Net" },
  { img: logo8, name: "Java" },
  { img: logo11, name: "Ruby on rail" },
  { img: logo9, name: "Angular" },
  { img: solana, name: "Solana" },
  { img: logo20, name: "SQL" },
  { img: logo23, name: "Google Cloud Platform" },
  { img: snowflake, name: "Snowflake" },
  { img: logo19, name: "Oracle" },
  { img: crypto, name: "Crypto" },
  { img: block, name: "Blockchain" },
  { img: llm, name: "LLM" },
];

function OurCode() {
  return (
    <div className="md:my-28 my-10 md:px-10 px-5 flex flex-col items-center justify-center">
      <div className="flex flex-col md:gap-5 gap-3 md:w-[75vw] w-full">
        <h1 className="text-[#171717] md:text-7xl text-center text-xl font-bold">
          Your Vision, Our Technology
        </h1>
        <p className="text-[#3F3F46] md:text-xl text-lg text-center">
          Harness the power of our full-stack development mastery. We blend
          creativity with cutting-edge technology to build robust, scalable, and
          secure software solutions.
        </p>
      </div>

      {/* Grid view for md and up */}
      <div className="mt-20 hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-8">
        {allTech.map((tech, index) => (
          <div key={`desktop-tech-${index}`} className="group relative flex flex-col items-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black w-max px-2 items-center flex justify-center text-white text-xs py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {tech.name}
            </div>
            <div className="p-4 bg-[#F6F6F9] rounded-full transition-all duration-500 ease-in-out group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <Image
                src={tech.img}
                alt={tech.name}
                className="object-contain w-16 h-16 rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view only */}
      <div className="mt-12 grid md:hidden grid-cols-2 gap-6">
        {allTech.map((tech, index) => (
          <div key={`mobile-tech-${index}`} className="group relative flex flex-col items-center">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black w-max px-2 items-center flex justify-center text-white text-xs py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {tech.name}
            </div>
            <div className="p-4 bg-[#F6F6F9] rounded-full transition-all duration-500 ease-in-out group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <Image
                src={tech.img}
                alt={tech.name}
                className="object-contain w-14 h-14 rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurCode;

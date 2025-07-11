// "use client";
// import Image from "next/image";
// import React from "react";
// import web3 from "../../assets/images/webapp3.png";
// import logo1 from "../../assets/images/1logo.png";
// import logo2 from "../../assets/images/2logo.png";
// import logo3 from "../../assets/images/3logo.png";
// import logo4 from "../../assets/images/4logo.png";
// import logo5 from "../../assets/images/5logo.png";
// import logo6 from "../../assets/images/6logo.png";
// import web4 from "../../assets/images/webapp4.png";
// import web2 from "../../assets/images/webapp2.png";
// import web1 from "../../assets/images/webapp1.png";
// import web5 from "../../assets/images/webapp5.png";
// import web6 from "../../assets/images/webapp6.png";

// const WebApp = () => {
//   return (
//     <div className="md:px-10 px-5  md:mt-16 mt-10 ">
//       <div>
//         <div>
//           <h1
//             className="md:text-7xl text-4xl font-bold"
//             style={{ lineHeight: "1.2" }}
//           >
//             Web App <br />
//             Success Stories
//           </h1>
//         </div>

//         <div className="md:mt-4 mt-2">
//           <p className="md:text-xl text-lg text-[#3F3F46] md:w-[80vw] w-full">
//             Our case studies showcase how we create high-performing web apps
//             that drive results. Discover the impact our web solutions can have
//             on your business.
//           </p>
//         </div>
//       </div>

//       <div className="flex justify-end md:mt-10 mt-5">
//         <div className=" mt-10 flex md:flex-row flex-col justify-between md:w-[85vw] w-full ">
//           <div className="flex flex-col md:w-[35vw] w-full gap-3">
//             <div className="flex flex-col gap-5 ">
//               <div>
//                 <Image src={web1} className="w-full" />
//               </div>

//               <div className="flex md:flex-row flex-col gap-2 justify-between items-start">
//                 <div>
//                   <Image src={logo1} className="w-full" />
//                 </div>

//                 <div>
//                   <button className="rounded-md md:px-4 px-2 py-2 bg-[#D4B154] text-[#171717] font-semibold  text-xs">
//                     Simplifying DOT Compliance
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-1">
//               <h1 className="text-3xl font-semibold">
//                 Truckers Compliance Platform{" "}
//               </h1>
//               <p className="text-base text-[#3F3F46]">
//                 DQid automates your driver file management, ensuring DOT
//                 compliance with ease.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col md:w-[35vw] w-full  gap-4 md:mt-28 mt-5">
//             <div className="flex flex-col gap-5 ">
//               <div>
//                 <Image src={web2} className="w-full" />
//               </div>

//               <div className="flex md:flex-row flex-col gap-2 justify-between items-start">
//                 <div>
//                   <Image src={logo2} className="w-full" />
//                 </div>

//                 <div>
//                   <button className="rounded-md md:px-4 px-2 py-2 bg-[#D4B154] text-[#171717] font-semibold  text-xs">
//                     All-in-One Club Companion
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-1">
//               <h1 className="text-3xl font-semibold">
//                 Country Club Management
//               </h1>
//               <p className="text-base text-[#3F3F46]">
//                 Easily manage your membership, book amenities, and stay
//                 connected with the NAOA community.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-end  ">
//         <div className=" mt-10 flex md:flex-row flex-col md:justify-between justify-normal  md:w-[85vw] w-full ">
//           <div className="flex flex-col md:w-[35vw] w-full  gap-4">
//             <div className="flex flex-col gap-5 ">
//               <div>
//                 <Image src={web3} className="w-full" />
//               </div>

//               <div className="flex md:flex-row flex-col gap-2 justify-between items-start">
//                 <div>
//                   <Image src={logo3} className="w-full" />
//                 </div>

//                 <div>
//                   <button className="rounded-md md:px-4 px-2 py-2 bg-[#D4B154] text-[#171717] font-semibold  text-xs">
//                     Powering Private Aviation
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-1">
//               <h1 className="text-3xl font-semibold">
//                 Private Jets Booking System
//               </h1>
//               <p className="text-base text-[#3F3F46]">
//                 The V2Jets booking software simplifies booking for passengers
//                 and management for brokers.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col md:w-[35vw] w-full  gap-4 md:mt-28 mt-5">
//             <div className="flex flex-col gap-5 ">
//               <div>
//                 <Image src={web4} className="w-full" />
//               </div>

//               <div className="flex md:flex-row flex-col gap-2 justify-between items-start">
//                 <div>
//                   <Image src={logo4} className="w-full" />
//                 </div>

//                 <div>
//                   <button className="rounded-md md:px-4 px-2 py-2 bg-[#D4B154] text-[#171717] font-semibold  text-xs">
//                     FINDING PERFECT
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-1">
//               <h1 className="text-3xl font-semibold">
//                 Student Housing Platform
//               </h1>
//               <p className="text-base text-[#3F3F46]">
//                 Our platform helps students find compatible roommates using AI
//                 and social networking tools.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-end  ">
//         <div className=" mt-10 flex md:flex-row flex-col md:justify-between justify-normal  md:w-[85vw] w-full ">
//           <div className="flex flex-col md:w-[35vw] w-full  gap-4">
//             <div className="flex flex-col gap-5 ">
//               <div>
//                 <Image src={web5} className="w-full" />
//               </div>

//               <div className="flex md:flex-row flex-col gap-2 justify-between items-start">
//                 <div>
//                   <Image src={logo5} className="w-full" />
//                 </div>

//                 <div>
//                   <button className="rounded-md md:px-4 px-2 py-2 bg-[#D4B154] text-[#171717] font-semibold  text-xs">
//                     Smart building technology
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-1">
//               <h1 className="text-3xl font-semibold">
//                 AI-Powered Energy Monitoring
//               </h1>
//               <p className="text-base text-[#3F3F46]">
//                 Understand, reduce, and report your energy consumption. Achieve
//                 Net Zero goals with AI-driven monitoring system.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-col md:w-[35vw] w-full  gap-4 md:mt-28 mt-5">
//             <div className="flex flex-col gap-5 ">
//               <div>
//                 <Image src={web6} className="w-full" />
//               </div>

//               <div className="flex md:flex-row flex-col gap-2 justify-between items-start">
//                 <div>
//                   <Image src={logo6} className="w-full" />
//                 </div>

//                 <div>
//                   <button className="rounded-md md:px-4 px-2 py-2 bg-[#D4B154] text-[#171717] font-semibold  text-xs">
//                     Uncover global trends
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col gap-1">
//               <h1 className="text-3xl font-semibold">
//                 MIT Innovation Ecosystem
//               </h1>
//               <p className="text-base text-[#3F3F46]">
//                 The app provides actionable insights from decades of global data
//                 to help entrepreneurs identify growth opportunities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WebApp;

"use client";
import web3 from "../../assets/images/webapp3.png";
import Logo1 from "../../assets/images/clientLogo1.jpg";
import Logo2 from "../../assets/images/ClientLogo2.jpg";
import Logo3 from "../../assets/images/ClientLogo3.jpg";
import web4 from "../../assets/images/webapp4.png";
import web2 from "../../assets/images/webapp2.png";
import web1 from "../../assets/images/webapp1.png";
import web5 from "../../assets/images/webapp5.png";
import web6 from "../../assets/images/webapp6.png";
import CommitmentExcellence from "../common/CommitmentExcellence";
import bgImage1 from "../../assets/images/rapid.jpg";
import bgImage2 from "../../assets/images/data_integration.jpg";
import bgImage3 from "../../assets/images/azurenew.jpg";
import bgImage4 from "../../assets/images/work_flow.jpg";
import CustomCommitment from "../common/CustomCommitment";

// const sectionsData = [
//   [
//     {
//       mainImage: web1,
//       secondaryImage: Logo1,
//       customHeading: "Simplifying DOT Compliance",
//       title: "Claims Management System",
//       description:
//         "Streamline claims filing, tracking, and resolution with a user-friendly platform. IT further ensures faster processing and enhanced customer satisfaction",
//     },
//     {
//       mainImage: web2,
//       secondaryImage: Logo2,
//       customHeading: "All-in-One Club Companion",
//       title: "Fleet Management Compliance Software",
//       description:
//         "Simplify fleet compliance by automating documentation, inspections, and reporting. You can stay ahead with real-time tracking and alerts.",
//     },
//   ],
//   [
//     {
//       mainImage: web3,
//       secondaryImage: Logo3,
//       customHeading: "Powering Private Aviation",
//       title: "Telemedicine Platform",
//       description:
//         "IT Revolutionizes patient care with virtual consultations, remote diagnostics, and integrated health records for simple and easy healthcare access.",
//     },
//     {
//       mainImage: web4,
//       secondaryImage: Logo3,
//       customHeading: "FINDING PERFECT",
//       title: "Appointment Booking System",
//       description:
//         "This software optimizes scheduling with a smart booking platform for clinics and labs. It further simplifies patient management with automated reminders.",
//     },
//     {
//       mainImage: web5,
//       secondaryImage: Logo1,
//       customHeading: "FINDING PERFECT",
//       title: "Customer Relationship Management (CRM)",
//       description:
//         "Empower insurance agents with tools to manage policies, renewals, and customer interactions. Improve efficiency and client engagement.",
//     },
//     {
//       mainImage: web6,
//       secondaryImage: Logo2,
//       customHeading: "FINDING PERFECT",
//       title: "Data Governance Platform",
//       description:
//         "Ensure data integrity and compliance with a secure, scalable platform. Automate workflows and maintain data quality effortlessly.",
//     },
//     {
//       mainImage: web1,
//       secondaryImage: Logo3,
//       customHeading: "FINDING PERFECT",
//       title: "Electronic Health Records (EHR)",
//       description:
//         "Centralize patient data for faster diagnosis and improved care coordination. Access vital records anytime, anywhere.",
//     },
//     {
//       mainImage: web1,
//       secondaryImage: Logo3,
//       customHeading: "FINDING PERFECT",
//       title: "Predictive Analytics Tools",
//       description:
//         "It helps to unlock actionable insights with AI-driven analytics. It Forecasts trends, optimizes policies, and drives smarter business decisions.",
//     },
//   ],
// ];

const commitmentCards = [
  {
    id: 0,
    title: "Rapid Development with Github Copilot",
    description:
      "Leverage cutting-edge AI with GitHub Copilot to accelerate  your development workflow. Our AI-driven coding solutions streamline processes, enhance code quality, and accelerate project delivery.",
    bgImage: bgImage1,
    tag: "Rapid Development",
    slug: "rapid-development",
  },
  {
    id: 1,
    title: "Advanced Data Integration with SSIS and ETL Tools",
    description:
      "Efficient data integration powers smarter business decisions. Streamline complex workflows with SSIS and advanced ETL tools to transform raw data into actionable insights.",
    bgImage: bgImage2,
    tag: "Data Integration",
    slug: "Advanced-data-integration",
  },
  {
    id: 2,
    title: "Complete Migration to Azure Cloud",
    description:
      "Unlock scalability and performance with seamless Azure cloud migration. We ensure secure, efficient transitions of applications, data, and workloads, tailored to your business needs.",
    bgImage: bgImage3,
    tag: "Migration to Azure Cloud",
    slug: "Migration-to-azure-cloud",
  },
  {
    id: 3,
    title: "Custom Job Creation and Workflow Automation",
    description:
      "Optimize operations with custom job creation and workflow automation. We streamline processes, reduce manual effort, and integrate systems for maximum efficiency and productivity.",
    bgImage: bgImage4,
    tag: "Workflow Automation",
    slug: "Job-creation-and-workflow-automation",
  },
];

export default function WebApp() {
  return (
    //     <CommitmentExcellence
    //       heading="Web App Success Stories"
    //       subheading="Our case studies showcase how we create high-performing web apps that drive results. Discover the impact our
    // web solutions can have on your business."
    //       sections={sectionsData}
    //     />
    <CustomCommitment commitmentCards={commitmentCards} />
  );
}

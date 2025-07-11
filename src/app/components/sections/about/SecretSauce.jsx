// import React from "react";

// const SecretSauce = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6 md:p-12">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Secret Sauce</h1>
//           <p className="text-gray-600">
//             We go the extra mile for our clients, taking personal responsibility
//             for our shared success.
//           </p>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Commitment Card */}
//           <div className="bg-white  p-6 shadow-sm md:w-[430px] w-full md:h-[190px] h-full border-[1px] rounded-[27px] border-[#CED2DA]">
//             <div className="flex items-start gap-3 mb-4">
//               <span className="text-2xl">💪</span>
//               <h2 className="text-xl font-bold">Commitment</h2>
//             </div>
//             <p className="text-gray-600">
//               We pledge unwavering dedication, owning our commitments to clients
//               and self with passion.
//             </p>
//           </div>

//           {/* Mastery in Tech Card */}
//           <div className="bg-white md:w-[430px] w-full md:h-[190px] h-full border-[1px] rounded-[27px] border-[#CED2DA] p-6 shadow-sm md:mt-14">
//             <h2 className="text-xl font-bold mb-4">Mastery in Tech</h2>
//             <p className="text-gray-600">
//               Our focus on Python, JS, TypeScript, and PHP has enabled us to
//               refine our craft & deliver excellence.
//             </p>
//           </div>

//           {/* Faster Is Better Card */}
//           <div className="bg-white md:w-[430px] w-full md:h-[190px] h-full border-[1px] rounded-[27px] border-[#CED2DA] p-6 shadow-sm">
//             <div className="flex items-start gap-3 mb-4">
//               <span className="text-2xl">⚡</span>
//               <h2 className="text-xl font-bold">Faster Is Better</h2>
//             </div>
//             <p className="text-gray-600">
//               A sprint-based approach means rapid delivery, letting you validate
//               ideas quickly and iterate effectively.
//             </p>
//           </div>

//           {/* Transparency Card */}
//           <div className="bg-white md:w-[430px] w-full md:h-[190px] h-full border-[1px] rounded-[27px] border-[#CED2DA] p-6 shadow-sm md:mt-14">
//             <div className="flex items-start gap-3 mb-4">
//               <span className="text-2xl">🌈</span>
//               <h2 className="text-xl font-bold">Transparency</h2>
//             </div>
//             <p className="text-gray-600">
//               We foster transparent collaborations, ensuring you see and control
//               every phase of your project.
//             </p>
//           </div>

//           {/* Discovery Spirit Card */}
//           <div className="bg-white md:w-[430px] w-full md:h-[190px] h-full border-[1px] rounded-[27px] border-[#CED2DA] p-6 shadow-sm">
//             <div className="flex items-start gap-3 mb-4">
//               <span className="text-2xl">🔍</span>
//               <h2 className="text-xl font-bold">Discovery Spirit</h2>
//             </div>
//             <p className="text-gray-600">
//               With a proactive and inquisitive spirit, we experiment fearlessly,
//               always offering viable alternatives to drive success.
//             </p>
//           </div>

//           {/* Product Thinking Card */}
//           <div className="bg-white md:w-[430px] w-full md:h-[190px] h-full border-[1px] rounded-[27px] border-[#CED2DA] p-6 shadow-sm md:mt-14">
//             <div className="flex items-start gap-3 mb-4">
//               <span className="text-2xl">🎯</span>
//               <h2 className="text-xl font-bold">Product Thinking</h2>
//             </div>
//             <p className="text-gray-600">
//               We don't just code, we think critically about your business goals,
//               ensuring the product fits your audience perfectly.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecretSauce;
import React from "react";

const SecretSauce = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Secret Sauce</h1>
          <p className="text-gray-600">
            We go the extra mile for our clients, taking personal responsibility
            for our shared success.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Commitment Card */}
          <div className="bg-white p-6 shadow-sm w-full min-h-[190px] border border-[#CED2DA] rounded-[27px]">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">💪</span>
              <h2 className="text-xl font-bold">Commitment</h2>
            </div>
            <p className="text-gray-600">
              We pledge unwavering dedication, owning our commitments to clients
              and self with passion.
            </p>
          </div>

          {/* Mastery in Tech Card */}
          <div className="bg-white p-6 shadow-sm w-full min-h-[190px] border border-[#CED2DA] rounded-[27px] md:mt-14">
            <h2 className="text-xl font-bold mb-4">Mastery in Tech</h2>
            <p className="text-gray-600">
              Our focus on Python, JS, TypeScript, and PHP has enabled us to
              refine our craft & deliver excellence.
            </p>
          </div>

          {/* Faster Is Better Card */}
          <div className="bg-white p-6 shadow-sm w-full min-h-[190px] border border-[#CED2DA] rounded-[27px]">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">⚡</span>
              <h2 className="text-xl font-bold">Faster Is Better</h2>
            </div>
            <p className="text-gray-600">
              A sprint-based approach means rapid delivery, letting you validate
              ideas quickly and iterate effectively.
            </p>
          </div>

          {/* Transparency Card */}
          <div className="bg-white p-6 shadow-sm w-full min-h-[190px] border border-[#CED2DA] rounded-[27px] md:mt-14">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">🌈</span>
              <h2 className="text-xl font-bold">Transparency</h2>
            </div>
            <p className="text-gray-600">
              We foster transparent collaborations, ensuring you see and control
              every phase of your project.
            </p>
          </div>

          {/* Discovery Spirit Card */}
          <div className="bg-white p-6 shadow-sm w-full min-h-[190px] border border-[#CED2DA] rounded-[27px]">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">🔍</span>
              <h2 className="text-xl font-bold">Discovery Spirit</h2>
            </div>
            <p className="text-gray-600">
              With a proactive and inquisitive spirit, we experiment fearlessly,
              always offering viable alternatives to drive success.
            </p>
          </div>

          {/* Product Thinking Card */}
          <div className="bg-white p-6 shadow-sm w-full min-h-[190px] border border-[#CED2DA] rounded-[27px] md:mt-14">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">🎯</span>
              <h2 className="text-xl font-bold">Product Thinking</h2>
            </div>
            <p className="text-gray-600">
              We don't just code, we think critically about your business goals,
              ensuring the product fits your audience perfectly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretSauce;
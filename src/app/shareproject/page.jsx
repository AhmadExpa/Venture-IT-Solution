import React from "react";
import GradientButton from "../components/common/GradientButton";
const steps = [
  { icon: "💡", text: "Tell us your vision" },
  { icon: "🧠", text: "We review and brainstorm" },
  { icon: "📅", text: "Free consultation call" },
  { icon: "📑", text: "Customized quote" },
  { icon: "🚀", text: "Project initiated" },
];
const shareproject = () => {
  return (
    <div>
      <div className="md:h-[500px] h-[500px] flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-8 md:space-y-12">
            <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
              Plan. Start. Succeed.
            </h1>
            <div className="flex justify-end">
              <p className="text-lg md:text-xl text-gray-600 md:w-[600px] w-full">
                We’ll thoroughly review your business needs and project details
                and set up a consultation to offer a final quote.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="p-6 md:p-8">
          <div className="md:flex justify-between">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Launch with Confidence OR Starting Projects Right
              </h1>
              <h2 className="text-lg md:text-xl text-gray-600 mb-4">
                You Dream It. We Build It.
              </h2>

              <p className="text-gray-600 mb-6">
                Ready to accelerate your growth with the flexible software
                development teams? Explore our refined process that turns your
                ideas into reality, from submission to finalization.
              </p>

              {/* Process Steps */}
              <div className="space-y-3 mb-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-xl">{step.icon}</span>
                    <span className="text-gray-700">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <form className="space-y-6 w-full">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Enter your company name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    placeholder="Enter your linkedin url"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="">Select your project type</option>
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="desktop">Desktop Application</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="nda"
                  className="rounded text-yellow-600 focus:ring-yellow-500"
                />
                <label htmlFor="nda" className="text-sm text-gray-700">
                  Send me an NDA first
                </label>
              </div>

              <div className="md:flex md:gap-20">
                <GradientButton text={"Submit"} padding={"10px 40px"} />

                <p className="text-sm text-gray-500">
                  The above information will be saved for busines purposes only.
                  For more info, must check out our Privacy Policy.
                </p>
              </div>
            </form>
          </div>
          <div className="mt-8 bg-[#F2F2F7] p-4 rounded-lg md:w-[400px] w-full">
            <p className="text-gray-700">
              Want to offer your services instead? Follow {""}
              <a href="#" className="text-yellow-600 hover:underline">
                this link.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default shareproject;

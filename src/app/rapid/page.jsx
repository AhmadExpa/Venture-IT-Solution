// pages/index.js
'use client'
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}

      {/* Hero Section */}
      <div className=" text-black py-12 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Rapid Development with AI</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            GitHub Copilot automates coding and reduces development time while guaranteeing quality output.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Case Study Header */}
          <div className="bg-indigo-100 p-6 border-b border-indigo-200">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800">
              Accelerating Development with GitHub Copilot
            </h2>
          </div>

          {/* Case Study Content */}
          <div className="p-6">
            <div className="space-y-8">
              {/* Overview Section */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Overview</h3>
                <p className="text-gray-700">
                  In a recent project, we helped a client significantly reduce their 
                  <span className="font-semibold"> development lifecycle</span> by integrating 
                  <span className="font-semibold"> GitHub Copilot</span>, an 
                  <span className="font-semibold"> AI-powered coding assistant</span>. This tool streamlined the coding 
                  process by automating repetitive tasks, offering 
                  <span className="font-semibold"> intelligent code suggestions</span>, and improving overall 
                  <span className="font-semibold"> code quality</span> and 
                  <span className="font-semibold"> efficiency</span>.
                </p>
              </section>

              {/* Challenge Section */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Challenge</h3>
                <p className="text-gray-700">
                  The client struggled with 
                  <span className="font-semibold"> extended development cycles</span> and 
                  <span className="font-semibold"> inconsistent code quality</span> across teams. They required a solution to 
                  speed up the development process without sacrificing the 
                  <span className="font-semibold"> performance</span> and 
                  <span className="font-semibold"> reliability</span> of their application.
                </p>
              </section>

              {/* Solution Section */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Solution</h3>
                <p className="text-gray-700">
                  By leveraging 
                  <span className="font-semibold"> GitHub Copilot</span>, we automated tasks like 
                  <span className="font-semibold"> code completion</span>, 
                  <span className="font-semibold"> bug fixes</span>, and 
                  <span className="font-semibold"> documentation generation</span>. Copilot's 
                  <span className="font-semibold"> context-aware AI</span> provided 
                  <span className="font-semibold"> accurate code suggestions</span> in real-time, enabling developers to 
                  focus on <span className="font-semibold">high-value tasks</span> instead of repetitive coding activities.
                </p>
              </section>

              {/* Results Section */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                  <div className="bg-indigo-50 p-6 rounded-lg shadow">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Faster Time-to-Market</h4>
                    <p className="text-gray-700">
                      Project timelines were reduced by <span className="font-semibold">30%</span>, enabling quicker feature delivery and system updates.
                    </p>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-lg shadow">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Enhanced Code Quality</h4>
                    <p className="text-gray-700">
                      <span className="font-semibold">Code consistency</span> and <span className="font-semibold">error reduction</span> improved, ensuring more reliable and maintainable software.
                    </p>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-lg shadow">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold mb-2">Increased Development Efficiency</h4>
                    <p className="text-gray-700">
                      Developer productivity surged by <span className="font-semibold">25%</span>, allowing teams to focus more on <span className="font-semibold">innovation</span> and less on manual tasks.
                    </p>
                  </div>
                </div>
              </section>

              {/* Conclusion Section */}
              <section>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Conclusion</h3>
                <p className="text-gray-700">
                  By integrating <span className="font-semibold">GitHub Copilot</span> into the development workflow, we empowered the client to enhance <span className="font-semibold">development efficiency</span>, accelerate delivery, and ensure top-tier code quality, demonstrating how <span className="font-semibold">AI-driven tools</span> can revolutionize <span className="font-semibold">software development processes</span>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
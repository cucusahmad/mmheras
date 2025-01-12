"use client";
import React from "react";

export const Content = () => (
  <div className="h-full flex flex-col items-center justify-center text-center py-10 px-6 bg-white text-gray-800">
    {/* Detailed Explanation Section */}
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Manual Material Handling Tasks – Ergonomic Risk Assessment System (MMH-ERAS)</h1>
      <p className="text-lg mb-4 text-gray-700">
        The Manual Material Handling Tasks – Ergonomic Risk Assessment System (MMH-ERAS) is a cutting-edge solution designed to promote workplace safety and enhance ergonomic practices. By addressing the risks associated with manual material handling tasks, this system empowers organizations to create healthier, more productive environments.
      </p>
      <p className="text-lg mb-4 text-gray-700">
        MMH-ERAS evaluates physical risk factors such as posture, force, repetition, and duration. These assessments provide actionable insights to mitigate ergonomic risks, reduce workplace injuries, and improve overall employee well-being. The system is user-friendly, comprehensive, and aligned with modern ergonomic standards.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">Key Features</h2>
      <ul className="list-disc list-inside text-left text-gray-700">
        <li>Comprehensive analysis of ergonomic risks across multiple body parts.</li>
        <li>Intuitive scoring system to identify and quantify risk levels.</li>
        <li>Customizable reporting tools for clear, actionable insights.</li>
        <li>Guidance on implementing ergonomic interventions.</li>
        <li>Real-time tracking to monitor progress and improvements.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">Benefits of Using MMH-ERAS</h2>
      <p className="text-lg mb-4 text-gray-700">
        By utilizing MMH-ERAS, organizations can:
      </p>
      <ul className="list-disc list-inside text-left text-gray-700">
        <li>Reduce workplace injuries and associated costs.</li>
        <li>Improve employee health, satisfaction, and productivity.</li>
        <li>Ensure compliance with ergonomic safety standards.</li>
        <li>Create a proactive approach to workplace safety.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4 text-blue-500">How It Works</h2>
      <p className="text-lg mb-4 text-gray-700">
        MMH-ERAS operates through a structured process:
      </p>
      <ol className="list-decimal list-inside text-left text-gray-700">
        <li>Input task-specific data, including posture, force, and duration.</li>
        <li>Analyze risks using the ergonomic scoring system.</li>
        <li>Generate detailed reports with recommendations for improvement.</li>
        <li>Implement suggested interventions and monitor progress.</li>
      </ol>

      <p className="text-lg mt-6 text-gray-700">
        MMH-ERAS is more than just a tool; it’s a commitment to creating safer, more efficient workplaces. By adopting this system, organizations can prioritize the health and safety of their workforce while achieving operational excellence.
      </p>
    </div>

    <footer className="mt-10 text-sm text-gray-600">
      <p>
        Empowering workplaces through ergonomic innovation. | © {new Date().getFullYear()} MMH-ERAS
      </p>
    </footer>
  </div>
);

"use client";
import React from "react";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";

export const Content = () => (
  <div className="h-full flex flex-col items-center justify-center text-center py-10 px-6 bg-white text-gray-800">
    {/* Welcome Section */}
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to the Manual Material Handling Tasks – Ergonomic Risk Assessment System (MMH-ERAS)</h1>
      <p className="text-lg mb-6 text-gray-700">
        MMH-ERAS is a comprehensive system designed to assess and minimize ergonomic risks associated with manual material handling tasks. It provides tools and resources to help organizations identify potential hazards, implement safer practices, and ensure the well-being of workers.
      </p>
      <p className="text-lg mb-6 text-gray-700">
        With MMH-ERAS, you can analyze task-specific risks, generate detailed reports, and track progress towards creating a safer work environment. Join us in promoting ergonomic safety and improving productivity.
      </p>
    </div>

    {/* Navigation Buttons */}
    <div className="flex flex-wrap gap-4 justify-center mt-8">
      <Link
        href="/asess"
        as={NextLink}
        className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-200"
      >
        Get Started
      </Link>
      <Link
        href="/learnmore"
        as={NextLink}
        className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-purple-600 transition duration-200"
      >
        Learn More
      </Link>
    </div>

    {/* Decorative Footer */}
    <footer className="mt-10 text-sm text-gray-600">
      <p>
        Empowering workplaces through ergonomic innovation. | © {new Date().getFullYear()} MMH-ERAS
      </p>
    </footer>
  </div>
);

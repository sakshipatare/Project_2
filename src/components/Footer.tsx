import React from 'react';
import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            About
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            Terms
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            Contact
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1 flex items-center justify-center md:justify-start">
          <Brain className="h-6 w-6 text-indigo-600 mr-2" />
          <p className="text-center text-base text-gray-400">
            &copy; 2024 HireInsight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
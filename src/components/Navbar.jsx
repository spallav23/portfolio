import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
              PALLAV SHAH
            </a>
          </div>
          <div className="hidden md:flex space-x-8 pt-5">
            <a href="/about" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">
              About
            </a>
            <a href="/project" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">
              Projects
            </a>
            <a href="/skills" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">
            Experience
            </a>
            <a href="/contact" className="text-gray-800 hover:text-blue-500 transition-colors duration-300">
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block text-gray-800 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              About
            </a>
            <a href="#projects" className="block text-gray-800 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              Projects
            </a>
            <a href="#skills" className="block text-gray-800 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              Skills
            </a>
            <a href="#contact" className="block text-gray-800 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

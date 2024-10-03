import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-white">MyPortfolio</h1>
            <p className="mt-1 text-sm">© 2024 MyPortfolio. All rights reserved.</p>
          </div>

          {/* Middle Section */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="/about" className="hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="/projects" className="hover:text-white transition-colors duration-300">
              Projects
            </a>
            <a href="/skills" className="hover:text-white transition-colors duration-300">
              Skills
            </a>
            <a href="/contact" className="hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Right Section: Social Links */}
          <div className="flex space-x-6">
            <a href="https://github.com/spallav23/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.418 2.867 8.165 6.839 9.489.5.092.682-.217.682-.482v-1.69c-2.781.603-3.369-1.343-3.369-1.343-.455-1.158-1.111-1.467-1.111-1.467-.909-.622.07-.61.07-.61 1.004.07 1.533 1.038 1.533 1.038.892 1.528 2.341 1.087 2.911.831.091-.646.35-1.087.636-1.337-2.22-.252-4.555-1.11-4.555-4.942 0-1.09.39-1.981 1.029-2.679-.103-.253-.446-1.27.097-2.646 0 0 .84-.269 2.75 1.025A9.562 9.562 0 0112 6.8a9.57 9.57 0 012.511.337c1.91-1.294 2.75-1.025 2.75-1.025.543 1.376.2 2.393.098 2.646.64.698 1.028 1.588 1.028 2.679 0 3.841-2.336 4.687-4.563 4.935.36.311.682.925.682 1.861v2.764c0 .268.18.578.687.481A10.013 10.013 0 0022 12c0-5.52-4.48-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/pallavshah2310/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.538 20h-3.462v-11h3.462v11zm-1.731-12.712c-1.13 0-2.038-.908-2.038-2.038 0-1.131.908-2.038 2.038-2.038 1.131 0 2.038.907 2.038 2.038 0 1.131-.907 2.038-2.038 2.038zm14.269 12.712h-3.462v-5.304c0-1.267-.025-2.899-1.764-2.899-1.765 0-2.036 1.38-2.036 2.803v5.4h-3.462v-11h3.324v1.502h.046c.463-.876 1.597-1.797 3.289-1.797 3.516 0 4.167 2.315 4.167 5.325v6.97z"
                />
              </svg>
            </a>
            <a href="mailto:pallav23102003@gmail.com" className="hover:text-white transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l11.985-7.465c-.271-.212-.619-.342-1.003-.342h-21.964c-.384 0-.733.13-1.003.342l11.985 7.465zm12-7.926v11.405c0 .684-.424 1.262-1.018 1.494l-10.982-6.82-10.982 6.82c-.595-.232-1.018-.81-1.018-1.494v-11.405c0-.684.424-1.262 1.018-1.494l10.982 6.82 10.982-6.82c.595.232 1.018.81 1.018 1.494z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

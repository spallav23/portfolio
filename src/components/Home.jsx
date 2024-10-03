import React from 'react';

const Home = () => {
  return (
    <section id="home" className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Profile Photo */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src='src/assets/WhatsApp Image 2024-06-25 at 14.43.21.jpeg'
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Animated Text Section */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 animate-pulse">Hi, I'm Pallav Shah</h1>
          <p className="mt-4 text-xl text-gray-600">
            A passionate <span className="text-blue-500">Frontend Developer</span> &amp; <span className="text-blue-500">React Enthusiast</span>
          </p>

          {/* Animated Headline */}
          <div className="mt-6 text-lg font-medium text-gray-700 space-y-2">
            <p className="transition-transform duration-500 transform hover:scale-110 hover:text-blue-500">
              Creating dynamic and responsive web applications.
            </p>
            <p className="transition-transform duration-500 transform hover:scale-110 hover:text-blue-500">
              Turning designs into beautiful code.
            </p>
            <p className="transition-transform duration-500 transform hover:scale-110 hover:text-blue-500">
              Let's build something amazing together!
            </p>
          </div>

          {/* Button */}
          <div className="mt-8">
            <a href="/contact" className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 transition-all duration-300">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

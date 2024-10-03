import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-28 h-11/12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">About Me</h2>

        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Image Section */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mx-auto">
              <img
                src="src/assets/WhatsApp Image 2024-06-25 at 14.43.21.jpeg"
                alt="About Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text Section */}
          <div className="md:w-2/3 text-center md:text-left">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Hi! I'm Pallav Shah, Enthusiastic and dedicated Computer Engineering student with a strong foundation in technical skills and problem-solving abilities. Currently pursuing a B.Tech at SAL College of Engineering in Ahmedabad, expected to graduate in 2025. Known for a keen interest in software development, coding, and new technologies.
              I love building beautiful and efficient web applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              My journey into web development started with learning JavaScript, and soon after, I delved into the MERN Stack, which is now my favorite Technology. I’ve worked on numerous projects involving APIs, UI/UX design, and component-based architectures.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              I am constantly learning new technologies and frameworks to stay on the cutting edge of web development. Let’s collaborate and create something amazing together!
            </p>

            {/* Skills Section */}
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Skills</h3>
              <div className="flex flex-wrap justify-center md:justify-start">
                <span className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
                  HTML
                </span>
                <span className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
                  CSS
                </span>
                <span className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
                  JavaScript
                </span>
                <span className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
                  React
                </span>
                <span className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
                  Tailwind CSS
                </span>
                <span className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
                  API Integration
                </span>
                <span className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
                  Node.js
                </span>
                <span className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
                  Express
                </span>
                <span className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
                  MongoDb
                </span>
                <span className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
                  git/github
                </span>
                <span className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
                  Oops
                </span>
                <span className="bg-blue-500 text-white py-2 px-4 rounded-full m-2">
                  DBMS(sql)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

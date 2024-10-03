import React from 'react';

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "InfoLabz IT Services Pvt. Ltd.",
    duration: "June 2024 - July 2024",
    description:
      "Worked on the fundamentals of JavaScript, ES6, and React. Developed an API-based React application that helped improve project efficiency. Gained valuable experience in building responsive and dynamic UI components.",
  },
  {
    role: "Backend technology Intern",
    company: "oceanmnc",
    duration: "June 2024 - July 2024",
    description:
      "Worked on  JavaScript,node , express , mongodb.  Gained valuable experience in building responsive and dynamic website.",
  },
  
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-100 py-28 h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{experience.role}</h3>
              <h4 className="text-xl text-gray-600 mb-1">{experience.company}</h4>
              <p className="text-gray-500 mb-4">{experience.duration}</p>
              <p className="text-gray-700">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

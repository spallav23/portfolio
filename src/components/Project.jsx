import React from 'react';

const projects = [
  {
    title: "My Building Project",
    description: "A website for storing and maintaining the information of the socity members. made using React , node , express , mongodb , html , css , js , tailwind css. function for adding new member ,updating details (maintenance details )of the members.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "API","Node","Express","Mongodb"],
    link: "https://github.com/spallav23/my-building-", // replace with actual URL
  },
  {
    title: "Health Care 24/7",
    description: "A website for consulting with doctor and for lab test booking.made using React , node , express , mongodb , html , css , js , tailwind css.video call function using google meet API .",
    technologies: ["React", "Tailwind CSS", "JavaScript", "API","Node","Express","Mongodb"],
    link: "https://github.com/spallav23/HealthCare", // replace with actual URL
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my projects, skills, and background. Built with React and Tailwind CSS for responsive design.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/spallav23/portfolio", // replace with actual URL
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-28 h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {/* Technologies Used */}
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm m-1">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Project Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-all duration-300" >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

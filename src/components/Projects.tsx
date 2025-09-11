import React from "react";
import {
  ExternalLink,
  Github,
  Bone as Drone,
  Cpu,
  Wifi,
  Plane,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MyTrip – Airline Management & Booking System",
      description:
        "MyTrip is a sophisticated web-based system for flight reservations, designed to offer a modern and seamless user experience. Passengers can effortlessly search, book, update, cancel, and manage payments for their flights. Built with React, JavaScript, HTML, CSS, and integrated with various APIs, MyTrip emphasizes speed, reliability, and an intuitive interface. The branding concept features a dynamic 3D airplane effect that enhances the user's journey, making flight booking a visually engaging process.",
      image: "/MyTrip Website.png",
      technologies: ["React", "JavaScript", "HTML", "CSS", "APIs"],
      features: [
        "Flight search and booking",
        "Update and cancel reservations",
        "Payment management",
        "Modern and intuitive interface",
        "Dynamic 3D airplane effect",
      ],
      icon: Plane,
      gradient: "from-blue-500 to-indigo-600",
      overlayText: "MyTrip",
    },
    {
      title: "Autonomous Drone System",
      description:
        "Advanced frontend-backend integration for autonomous drone control using DroneKit-Python, MAVLink protocol, and React. Features real-time telemetry, flight path planning, and mission control interface.",
      image: "/Autonomus drone Project.jpg",
      technologies: [
        "React",
        "Python",
        "DroneKit",
        "MAVLink",
        "WebSocket",
        "Node.js",
      ],
      features: [
        "Real-time telemetry monitoring",
        "Interactive flight path planning",
        "Autonomous mission execution",
        "Live video streaming integration",
      ],
      icon: Drone,
      gradient: "from-teal-500 to-blue-600",
      overlayText: "Automomus Drone",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
              Explore my portfolio of innovative projects that demonstrate my
              expertise in frontend development and system integration.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } flex flex-col lg:flex-row items-center gap-8 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2 relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.overlayText && (
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm font-semibold">
                      {project.overlayText}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

                  {/* Project Icon */}
                  <div
                    className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center`}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}
                          ></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      <Github className="w-4 h-4" />
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

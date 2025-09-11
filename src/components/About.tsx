import React from "react";
import { User, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}

            <div className="relative">
              <img
                src="./src/assets/Gemini_Generated_Image_k18bxlk18bxlk18b.png"
                alt="Profile"
                className="w-80 h-80 mx-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500 rounded-full opacity-20"></div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                As a passionate Front-End Developer, I craft intuitive and
                engaging user interfaces using HTML, CSS, JavaScript, and React.
                My focus is on creating seamless web experiences that captivate
                users and drive interaction.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My background in Electronics & Communication Engineering
                provides a unique edge, with strong skills in C, Python,
                embedded systems, and digital communications. I'm eager to
                contribute to innovative projects, building robust and scalable
                web applications from the ground up.
              </p>

              {/* Quick Info */}
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Alexandria, Egypt
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Available for opportunities
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                    3.41
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    GPA / 4.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

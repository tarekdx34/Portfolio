import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Education Card */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-500 to-blue-600 opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>

            <div className="relative z-10">
              {/* University Logo/Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Alexandria University
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Faculty of Engineering
                  </p>
                </div>
              </div>

              {/* Degree Information */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Bachelor of Science in Communication & Electronics Engineering
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Comprehensive program covering digital systems, signal
                  processing, embedded systems, and modern communication
                  technologies with hands-on laboratory experience.
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <Calendar className="w-5 h-5 text-teal-500" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Duration
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      2021 – 2026
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <Award className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      GPA
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      3.41 / 4.0
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      Location
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Alexandria, Egypt
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Coursework */}
              <div className="mt-8">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Key Coursework
                </h5>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Programming Fundamentals",
                    "Creative Thinking",
                    "Embedded Systems",
                    "Computer Networks",
                    "Microprocessors",
                    "Data Structures",
                    "Operating Systems",
                    "Computer Architecture",
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

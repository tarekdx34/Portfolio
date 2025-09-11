import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Alex Eagles Aero Design',
      location: 'Alexandria, Egypt',
      period: '2024 – Present',
      description: 'Leading frontend development for autonomous drone systems, implementing real-time data visualization and control interfaces using React and modern web technologies.',
      highlights: [
        'Developed responsive web interfaces for drone control systems',
        'Integrated real-time data visualization components',
        'Collaborated with hardware teams for seamless system integration',
        'Implemented secure authentication and user management systems'
      ],
      current: true
    },
    {
      title: 'Software Engineer Intern',
      company: 'ALX',
      location: 'Remote',
      period: '2023 – 2024',
      description: 'Participated in intensive software engineering program focused on full-stack development, algorithms, and system design with hands-on projects.',
      highlights: [
        'Completed comprehensive full-stack development curriculum',
        'Built scalable web applications using modern frameworks',
        'Practiced algorithmic problem-solving and data structures',
        'Collaborated on team projects using Agile methodologies'
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-blue-600"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full ${
                  exp.current 
                    ? 'bg-teal-500 shadow-lg shadow-teal-500/30' 
                    : 'bg-blue-500 shadow-lg shadow-blue-500/30'
                } z-10`}>
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'
                }`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="mb-2 sm:mb-0">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      
                      {exp.current && (
                        <span className="inline-flex items-center px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
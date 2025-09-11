import React from 'react';
import { 
  Code2, 
  Palette, 
  Database, 
  Wrench, 
  Globe, 
  Cpu,
  Smartphone,
  GitBranch,
  Terminal,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'Programming Languages',
      icon: Terminal,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'C', level: 85 },
        { name: 'Embedded C', level: 80 },
        { name: 'Assembly', level: 75 },
        { name: 'MATLAB', level: 70 },
        { name: 'JavaScript', level: 90 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      gradient: 'from-teal-500 to-green-500',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'DroneKit-Python', level: 80 },
        { name: 'MAVLink', level: 75 },
        { name: 'Node.js', level: 70 },
        { name: 'Responsive Design', level: 90 }
      ]
    },
    {
      title: 'Languages',
      icon: Globe,
      gradient: 'from-orange-500 to-red-500',
      skills: [
        { name: 'English', level: 95 },
        { name: 'Arabic', level: 100 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across 
              various technologies and programming languages.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out group-hover/skill:animate-pulse`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Other Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Problem Solving',
                'Team Collaboration',
                'Agile Methodologies',
                'System Design',
                'Hardware Integration',
                'API Development',
                'Database Design',
                'Performance Optimization',
                'Testing & Debugging',
                'Technical Documentation'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full text-sm font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
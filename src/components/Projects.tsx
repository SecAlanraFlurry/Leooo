import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Smart Dispenser',
    description: 'A smart dispenser. Just place your glass infront Ultrasonic Sensor.',
    image: 'project/src/assets/WhatsApp Image 2024-11-29 at 20.33.01_ab231a71.jpg' ,
    technologies: ['C++', 'Arduino Uno', 'HC-SR04'],
    githubUrl: 'https://github.com/secalanraflurry',
    liveUrl: 'https://www.instagram.com/737max_/',
  },
  {
    title: 'Automatic Clock',
    description: 'A collaborative ESP8266 tool with real-time updates',
    image: 'project/src/assets/WhatsApp Image 2024-11-29 at 20.37.15_52e923e6.jpg',
    technologies: ['ESP8266', 'NTP', 'Dot Matrix', 'C++'],
    githubUrl: 'https://github.com/secalanraflurry',
    liveUrl: 'https://www.instagram.com/737max_/',
  },
  {
    title: '(SOON) Garden Monitoring Dashboard',
    description: 'Real-time weather, humidity, and temperature monitoring dashboard with detailed forecasts',
    image: 'project/src/assets/Screenshot 2024-11-25 133707.png',
    technologies: ['XAMPP', 'PHP', 'JAVASCRIPT', 'SQL' ],
    githubUrl: 'https://github.com/secalanraflurry',
    liveUrl: 'https://www.instagram.com/737max_/',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">Featured Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
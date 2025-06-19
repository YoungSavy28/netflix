import React from 'react';

// Profile Selection Screen Components
export const ProfileSelectionScreen = ({ onProfileSelect }) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Netflix Logo */}
      <div className="absolute top-6 left-6">
        <h1 className="text-red-600 text-4xl font-bold">NETFLIX</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-light mb-4">Who's watching?</h2>
        </div>

        {/* Profile Selection */}
        <div className="flex flex-col items-center">
          <div 
            className="group cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={() => onProfileSelect('recruiter')}
          >
            {/* Profile Avatar */}
            <div className="w-40 h-40 rounded-lg overflow-hidden mb-4 relative">
              <img 
                src="https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg" 
                alt="Recruiter Profile"
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-200"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
            </div>
            
            {/* Profile Name */}
            <p className="text-gray-400 text-xl font-light group-hover:text-white transition-colors duration-200">
              Recruiter
            </p>
          </div>
        </div>

        {/* Manage Profiles */}
        <div className="mt-12">
          <button className="text-gray-400 text-lg font-light hover:text-white transition-colors duration-200 border border-gray-600 px-6 py-2 hover:border-white">
            Manage Profiles
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Portfolio Components
export const NetflixHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-3xl font-bold">PORTFOLIO</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Projects</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Skills</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Experience</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Contact</a>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export const HeroBanner = ({ project }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
      <img 
        src={project.backgroundImage} 
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center px-6 md:px-12">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-colors flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              View Project
            </button>
            <button className="bg-gray-600 bg-opacity-70 text-white px-8 py-3 rounded font-bold hover:bg-opacity-50 transition-all">
              More Info
            </button>
          </div>
        </div>
      </div>
      
      {/* Fade to black at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </div>
  );
};

export const ProjectCard = ({ project, isLarge = false }) => {
  return (
    <div className={`relative group cursor-pointer transition-transform duration-300 hover:scale-105 ${isLarge ? 'w-80 h-48' : 'w-64 h-36'}`}>
      <div className="rounded-lg overflow-hidden bg-gray-800">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
            <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-1 justify-center">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span key={index} className="bg-red-600 text-white px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectRow = ({ title, projects, isLarge = false }) => {
  return (
    <div className="px-6 md:px-12 mb-8">
      <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
        {projects.map((project, index) => (
          <div key={index} className="flex-shrink-0">
            <ProjectCard project={project} isLarge={isLarge} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "SASS"]
    },
    {
      category: "Backend Development", 
      skills: ["Node.js", "Python", "Django", "FastAPI", "GraphQL", "REST APIs"]
    },
    {
      category: "Database & Cloud",
      skills: ["MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes", "Redis"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Jest", "Cypress", "Figma", "Adobe XD", "Agile"]
    }
  ];

  return (
    <div className="px-6 md:px-12 mb-12">
      <h2 className="text-white text-2xl font-bold mb-6">Skills & Technologies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <h3 className="text-red-600 font-bold text-lg mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Projects</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Web Applications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-white transition-colors">APIs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Skills</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Frontend</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Backend</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DevOps</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Experience</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Work History</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-red-600 text-2xl font-bold mb-2">PORTFOLIO</p>
          <p>&copy; 2025 Professional Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
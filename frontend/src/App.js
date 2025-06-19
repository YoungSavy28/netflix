import React, { useState } from "react";
import "./App.css";
import { 
  ProfileSelectionScreen, 
  NetflixHeader, 
  HeroBanner, 
  ProjectRow, 
  SkillsSection, 
  ExperienceSection,
  Footer 
} from './Components';

// Xavier Cabrera's Real Portfolio Data
const xavierPortfolioData = {
  featuredProject: {
    title: "Savy Bet Live",
    description: "AI-powered sports prediction platform using player stats and real-time data. Built with machine learning algorithms to provide accurate betting insights and predictions for various sports.",
    technologies: ["React", "Python", "TensorFlow", "Node.js", "AI/ML"],
    backgroundImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    status: "Under Construction",
    link: "https://jumping-clay-law-527.vscodeedu.app/"
  },
  
  currentProjects: [
    {
      title: "Savy Bet Live",
      description: "AI-powered sports prediction platform using player stats and real-time data for accurate betting insights.",
      technologies: ["React", "Python", "TensorFlow", "AI/ML"],
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      status: "Under Construction",
      link: "https://jumping-clay-law-527.vscodeedu.app/"
    },
    {
      title: "AI Driven Connect 4",
      description: "A Connect 4 game powered by AI logic for smart competitive play with advanced game strategies.",
      technologies: ["Python", "AI Logic", "Game Development"],
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://i.imgur.com/TXMq9ap.gif"
    },
    {
      title: "Grocery List Manager",
      description: "Android app to create and manage grocery lists with login and database features using SQL.",
      technologies: ["Android Studio", "Java", "SQL", "UX/UI"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      period: "Mar 2024 – May 2024",
      github: "https://github.com/YoungSavy28/glm"
    },
    {
      title: "TipMaster",
      description: "Tip calculator app focused on UX design, frontend/backend features, and collaborative testing.",
      technologies: ["Android Studio", "Java", "Mobile Dev", "UX/UI"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      period: "Feb 2024 – Mar 2024"
    }
  ],

  mobileApplications: [
    {
      title: "Grocery List Manager",
      description: "Android app for creating and managing grocery lists with secure login and SQL database integration.",
      technologies: ["Android Studio", "Java", "SQL", "Frontend"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/YoungSavy28/glm"
    },
    {
      title: "Reminders App",
      description: "Task and reminders app with smooth UI, calendar features, and local storage capabilities.",
      technologies: ["Android Studio", "Java", "Mobile App", "Database"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/YoungSavy28/rlm"
    },
    {
      title: "TipMaster Calculator",
      description: "Advanced tip calculator with UX-focused design and collaborative testing framework.",
      technologies: ["Android Studio", "Java", "UX/UI", "Testing"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "iOS Social App",
      description: "Social networking app built with Swift following iOS development best practices and team collaboration.",
      technologies: ["Swift", "Xcode", "iOS Dev", "Teamwork"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ],

  securityAndGames: [
    {
      title: "AWS Security Audit Tool",
      description: "Comprehensive security auditing tool that strengthened AWS infrastructure using OWASP ZAP and compliance monitoring.",
      technologies: ["OWASP ZAP", "AWS", "Security Auditing", "Compliance"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      link: "https://docs.google.com/document/d/1Mg2hNpyi_YvMFjdOQlLFBcCc57uaaWusApRmjSokhtU/edit?usp=sharing"
    },
    {
      title: "Classic Pong Game",
      description: "Recreation of the classic Pong game built in Python using Pygame with team collaboration and version control.",
      technologies: ["Python", "Pygame", "PyCharm", "Teamwork"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/YoungSavy28/Pong"
    },
    {
      title: "AI Connect 4 Engine",
      description: "Advanced Connect 4 game featuring intelligent AI opponent with strategic gameplay algorithms.",
      technologies: ["Python", "AI Logic", "Game Development", "Algorithms"],
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      demo: "https://i.imgur.com/TXMq9ap.gif"
    }
  ],

  experience: [
    {
      company: "Fiverr",
      role: "Software Developer",
      period: "Jul 2023 – Present",
      type: "Freelancer",
      achievements: [
        "Delivered diverse software projects with high client retention and satisfaction using Java and Python",
        "Enhanced web applications improving user experience and retention rates with HTML, CSS, and JavaScript",
        "Developed custom solutions meeting evolving customer needs across multiple domains"
      ]
    },
    {
      company: "Ubiq",
      role: "Ubiq Insider Program - Software Development & UX/UI Collaboration",
      period: "Jan 2025 – Apr 2025",
      type: "Program Participant",
      achievements: [
        "Enhanced Ubiq's spatial media platform capabilities through intensive development program",
        "Tested immersive 3D interfaces, improving user interaction and interface reliability",
        "Implemented UX/UI improvements from agile workshops, increasing user satisfaction",
        "Collaborated cross-functionally with designers and engineers to enhance application stability"
      ]
    },
    {
      company: "La Nueva Quisqueya Car Service Inc.",
      role: "Technology Consultant",
      period: "Jun 2024 – Dec 2024",
      location: "Queens, New York",
      achievements: [
        "Modernized dispatch operations by implementing software solutions reducing customer wait times",
        "Digitized customer records and trip data using Excel and Python scripts for streamlined processes",
        "Automated manual data entry processes, significantly increasing operational efficiency"
      ]
    }
  ],

  skills: {
    languages: ["HTML", "Python", "CSS", "JavaScript", "Java", "C++", "Swift"],
    frameworks: ["React.js", "Next.js", "Bootstrap", "TensorFlow/PyTorch", "Pandas", "NumPy", "Matplotlib"],
    tools: ["Android Studio", "Xcode", "Git", "AWS", "SQL", "MongoDB", "Node.js"]
  },

  certifications: [
    "CodePath Certification",
    "Verizon Cloud Platform Job Simulation",
    "JP Morgan Software Engineering Job Simulation"
  ],

  contact: {
    email: "Xavier.Cabrera4528@gmail.com",
    phone: "(347) 238-0833",
    github: "https://github.com/YoungSavy28",
    linkedin: "https://www.linkedin.com/in/xaviercabrera28/"
  },

  bio: {
    name: "Xavier Cabrera",
    title: "Computer Science Student & Full-Stack Developer",
    school: "Queens College",
    graduation: "June 2025",
    description: "Computer Science student at Queens College passionate about turning ideas into powerful full-stack and AI-powered web applications. From sports prediction platforms to real-time games, I build with React, Node.js, MongoDB, and Python — blending clean design with smart functionality and practical innovation.",
    personalNote: "As a first-generation college student, I'm driven by more than just code — I aim to uplift my family and community through meaningful, purpose-driven technology."
  }
};

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  if (!selectedProfile) {
    return <ProfileSelectionScreen onProfileSelect={handleProfileSelect} />;
  }

  return (
    <div className="App bg-black min-h-screen">
      <NetflixHeader />
      
      {/* Hero Section */}
      <HeroBanner project={xavierPortfolioData.featuredProject} />
      
      {/* Project Sections */}
      <div className="relative z-10 bg-black">
        <ProjectRow 
          title="Current Projects" 
          projects={xavierPortfolioData.currentProjects} 
          isLarge={true}
        />
        
        <ProjectRow 
          title="Mobile Applications" 
          projects={xavierPortfolioData.mobileApplications} 
        />
        
        <ProjectRow 
          title="Security & Games" 
          projects={xavierPortfolioData.securityAndGames} 
        />
        
        {/* Experience Section */}
        <ExperienceSection experience={xavierPortfolioData.experience} />
        
        {/* Skills Section */}
        <SkillsSection skills={xavierPortfolioData.skills} certifications={xavierPortfolioData.certifications} />
        
        {/* Footer */}
        <Footer contact={xavierPortfolioData.contact} />
      </div>
    </div>
  );
}

export default App;
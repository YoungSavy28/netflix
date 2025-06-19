import React, { useState } from "react";
import "./App.css";
import { 
  ProfileSelectionScreen, 
  NetflixHeader, 
  HeroBanner, 
  ProjectRow, 
  SkillsSection, 
  Footer 
} from './Components';

// Mock Portfolio Data
const mockPortfolioData = {
  featuredProject: {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and real-time order tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
  },
  
  recentProjects: [
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with geolocation and 7-day forecasting capabilities.",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and scheduling.",
      technologies: ["Next.js", "D3.js", "Prisma", "MySQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Fitness Tracker",
      description: "Mobile-responsive fitness tracking application with workout plans and progress monitoring.",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Recipe Finder",
      description: "Recipe discovery app with ingredient-based search and meal planning features.",
      technologies: ["Angular", "Spoonacular API", "SCSS"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ],

  webApplications: [
    {
      title: "Real Estate Platform",
      description: "Modern real estate listing platform with advanced search and virtual tours.",
      technologies: ["React", "GraphQL", "Mapbox", "Stripe"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course creation, progress tracking, and interactive quizzes.",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Event Management System",
      description: "Comprehensive event planning and management platform with ticketing integration.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Inventory Management",
      description: "Enterprise inventory management system with barcode scanning and reporting.",
      technologies: ["React", "Django", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ],

  mobileApps: [
    {
      title: "Food Delivery App",
      description: "Cross-platform food delivery application with real-time tracking and payments.",
      technologies: ["React Native", "Firebase", "Google Maps", "Stripe"],
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with end-to-end encryption and media sharing capabilities.",
      technologies: ["React Native", "Socket.io", "Firebase", "WebRTC"],
      image: "https://images.pexels.com/photos/15940012/pexels-photo-15940012.jpeg"
    },
    {
      title: "Gaming Platform",
      description: "Mobile gaming platform with multiplayer capabilities and leaderboards.",
      technologies: ["Unity", "C#", "Firebase", "Photon"],
      image: "https://images.pexels.com/photos/7915306/pexels-photo-7915306.jpeg"
    },
    {
      title: "Expense Tracker",
      description: "Personal finance management app with budgeting and expense categorization.",
      technologies: ["React Native", "Redux", "SQLite", "Chart.js"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ],

  advancedProjects: [
    {
      title: "AI Analytics Dashboard",
      description: "Machine learning-powered analytics platform with predictive insights and data visualization.",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "FastAPI"],
      image: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg"
    },
    {
      title: "Blockchain Platform",
      description: "Decentralized application with smart contracts and cryptocurrency integration.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      image: "https://images.pexels.com/photos/9577233/pexels-photo-9577233.jpeg"
    },
    {
      title: "AI Assistant Platform",
      description: "Intelligent virtual assistant with natural language processing and machine learning.",
      technologies: ["Python", "OpenAI API", "NLP", "React", "TensorFlow"],
      image: "https://images.pexels.com/photos/18069158/pexels-photo-18069158.png"
    },
    {
      title: "IoT Monitoring System",
      description: "Real-time IoT device monitoring and control system with edge computing capabilities.",
      technologies: ["Node.js", "MQTT", "InfluxDB", "Grafana", "Docker"],
      image: "https://images.unsplash.com/photo-1716436329476-fd6cbaa1fc71"
    }
  ]
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
      <HeroBanner project={mockPortfolioData.featuredProject} />
      
      {/* Project Sections */}
      <div className="relative z-10 bg-black">
        <ProjectRow 
          title="Recent Projects" 
          projects={mockPortfolioData.recentProjects} 
          isLarge={true}
        />
        
        <ProjectRow 
          title="Web Applications" 
          projects={mockPortfolioData.webApplications} 
        />
        
        <ProjectRow 
          title="Mobile Applications" 
          projects={mockPortfolioData.mobileApps} 
        />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Star, PlusCircle, Check, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const portfolioProjects = [
  {
    title: "E-Commerce Platform",
    client: "RetailFusion",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    description: "An architectural overhaul of a legacy e-commerce system, focusing on performance optimization and mobile responsiveness.",
    results: [
      "Increased mobile conversion rate by 46%",
      "Reduced page load time from 4.2s to 0.9s",
      "Improved Core Web Vitals scores across all metrics"
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "GraphQL"]
  },
  {
    title: "SaaS Dashboard",
    client: "AnalyticsPro",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552",
    description: "A complete rebuild of a complex analytics dashboard with an emphasis on data visualization and user experience.",
    results: [
      "Reduced user onboarding time by 68%",
      "Increased daily active users by 42%",
      "Decreased support tickets related to UI by 73%"
    ],
    tech: ["Vue.js", "D3.js", "Firebase", "Typescript"]
  },
  {
    title: "Content Platform",
    client: "MediaStream",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "A content delivery platform designed for speed and accessibility, with advanced caching and media optimization.",
    results: [
      "Achieved 99/100 PageSpeed score on mobile and desktop",
      "Implemented WCAG 2.1 AA compliance across all pages",
      "Enhanced media streaming performance by 67%"
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Redis"]
  }
];

const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState(0); // RetailFusion is active by default
  const [showBlueprint, setShowBlueprint] = useState(true);
  
  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-[#0e1016] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Project navigation */}
        <div className="flex flex-wrap gap-2 sm:gap-6 mb-10 justify-center">
          {portfolioProjects.map((project, index) => (
            <button
              key={index}
              aria-pressed={activeProject === index}
              className={`py-2 px-6 font-mono text-sm border transition-all duration-300 ${
                activeProject === index 
                  ? 'border-blue-400 text-blue-400 bg-blue-400/5' 
                  : 'border-blue-400/30 text-gray-400 hover:border-blue-400/60'
              }`}
              onClick={() => {
                setActiveProject(index);
                setShowBlueprint(true);
              }}
            >
              {project.client}
            </button>
          ))}
        </div>
        
        {/* Active project display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative">
          {/* Project image/blueprint - takes 7 columns on desktop */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto overflow-hidden">
            <div className="absolute inset-0 border border-blue-400/20 z-0"></div>
            
            {/* Blueprint toggle in top-right */}
            <button
              className="absolute top-4 right-4 z-30 bg-[#0e1016]/90 backdrop-blur-sm p-2 font-mono text-xs flex items-center gap-2 text-blue-400 border border-blue-400/30 hover:border-blue-400 transition-all duration-300"
              onClick={() => setShowBlueprint(!showBlueprint)}
              aria-label={showBlueprint ? "View implementation" : "View blueprint"}
            >
              <PlusCircle className="h-4 w-4" />
              {showBlueprint ? "VIEW IMPLEMENTATION" : "VIEW BLUEPRINT"}
            </button>
            
            {/* Main image with blueprint/implementation styling */}
            <div className="relative w-full h-full">
              <img 
                src={portfolioProjects[activeProject].image}
                alt={portfolioProjects[activeProject].title} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                  showBlueprint ? 'filter grayscale brightness-[0.85]' : ''
                }`}
              />
              
              {/* Blueprint annotations - only visible in blueprint mode */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${showBlueprint ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute top-4 left-4 font-mono text-xs text-blue-400 bg-[#0e1016]/90 backdrop-blur-sm p-2 z-20">
                  ARCHITECTURE PLAN v1.3
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-xs text-blue-400 bg-[#0e1016]/90 backdrop-blur-sm p-2 z-20">
                  SCALE: 1:100
                </div>
                
                {/* Blueprint architectural marker */}
                <div className="absolute top-[280px] left-[320px] z-20">
                  <div className="w-3 h-3 rounded-full border border-blue-400/60 bg-blue-400/10"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Project details - takes 5 columns on desktop */}
          <div className="lg:col-span-5 bg-[#131832]/90 backdrop-blur-sm p-6 sm:p-8 border border-blue-400/20 flex flex-col">
            <div className="mb-4">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">{portfolioProjects[activeProject].title}</h4>
              <p className="text-sm text-blue-400 font-mono">CLIENT: {portfolioProjects[activeProject].client}</p>
            </div>
            
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              {portfolioProjects[activeProject].description}
            </p>
            
            <div className="mb-6">
              <h5 className="text-sm font-mono text-blue-400 mb-3 uppercase">ARCHITECTURAL ACHIEVEMENTS</h5>
              <ul className="space-y-2">
                {portfolioProjects[activeProject].results.map((result, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto pt-4 border-t border-blue-400/10">
              <h5 className="text-sm font-mono text-blue-400 mb-3 uppercase">TECHNICAL SPECIFICATIONS</h5>
              <div className="flex flex-wrap gap-2 mb-6">
                {portfolioProjects[activeProject].tech.map((tech, idx) => (
                  <span key={idx} className="bg-blue-900/20 px-2 py-1 text-xs font-mono text-blue-300 border border-blue-400/20">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a href="#" aria-label={`View complete case study for ${portfolioProjects[activeProject].title}`}>
                <Button 
                  className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2.5 text-sm flex items-center justify-center gap-2 mt-2 rounded-none"
                >
                  VIEW COMPLETE CASE STUDY
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

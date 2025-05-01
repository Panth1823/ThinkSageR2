
import React, { useState } from 'react';
import { Star, PlusCircle, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";

const portfolioProjects = [
  {
    title: "E-Commerce Platform",
    client: "RetailFusion",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    blueprint: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
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
    blueprint: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
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
    blueprint: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
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
  const [activeProject, setActiveProject] = useState(0);
  const [showBlueprint, setShowBlueprint] = useState(false);
  
  return (
    <section id="portfolio" className="py-20 bg-background relative">
      <div className="blueprint-grid"></div>
      
      <div className="container relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Star className="h-6 w-6 text-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-primary">
            Architectural Portfolio
          </h2>
        </div>
        
        <h3 className="section-title">Completed Structures</h3>
        <p className="section-subtitle">
          Examine the blueprints and final implementations of successfully delivered projects
        </p>
        
        <div className="mt-16">
          {/* Project navigation */}
          <div className="flex flex-wrap gap-4 mb-10 justify-center">
            {portfolioProjects.map((project, index) => (
              <button
                key={index}
                className={`py-2 px-4 font-mono text-sm border transition-all duration-300 ${
                  activeProject === index 
                    ? 'border-primary text-primary' 
                    : 'border-primary/30 text-foreground/70 hover:border-primary/60'
                }`}
                onClick={() => {
                  setActiveProject(index);
                  setShowBlueprint(false);
                }}
              >
                {project.client}
              </button>
            ))}
          </div>
          
          {/* Active project display */}
          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Project image/blueprint */}
            <div className="relative aspect-video">
              <div className="absolute inset-0 border-2 border-primary/20 z-0"></div>
              
              {/* Background grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>
              
              {/* Blueprint toggle */}
              <button
                className="absolute top-4 right-4 z-20 bg-secondary/80 backdrop-blur-sm p-2 font-mono text-xs flex items-center gap-2 text-primary border border-primary/30 hover:border-primary transition-all duration-300"
                onClick={() => setShowBlueprint(!showBlueprint)}
              >
                <PlusCircle className="h-4 w-4" />
                {showBlueprint ? "VIEW IMPLEMENTATION" : "VIEW BLUEPRINT"}
              </button>
              
              {/* Main image or blueprint */}
              <img 
                src={showBlueprint ? portfolioProjects[activeProject].blueprint : portfolioProjects[activeProject].image} 
                alt={portfolioProjects[activeProject].title} 
                className={`w-full h-full object-cover z-10 transition-all duration-500 ${
                  showBlueprint ? 'filter grayscale brightness-90' : ''
                }`}
              />
              
              {/* Blueprint annotations */}
              {showBlueprint && (
                <>
                  <div className="absolute top-8 left-8 font-mono text-xs text-primary/80 bg-secondary/60 backdrop-blur-sm p-2 z-20">
                    ARCHITECTURE PLAN v1.3
                  </div>
                  <div className="absolute bottom-8 right-8 font-mono text-xs text-primary/80 bg-secondary/60 backdrop-blur-sm p-2 z-20">
                    SCALE: 1:100
                  </div>
                  <div className="absolute bottom-1/2 right-1/4 w-16 h-px bg-primary z-20"></div>
                  <div className="absolute bottom-1/2 right-1/4 w-2 h-2 border border-primary bg-secondary/80 z-20"></div>
                </>
              )}
            </div>
            
            {/* Project details */}
            <div className="blueprint-card">
              <div className="mb-4">
                <h4 className="text-2xl font-bold text-foreground mb-1">{portfolioProjects[activeProject].title}</h4>
                <p className="text-sm text-primary/70 font-mono">CLIENT: {portfolioProjects[activeProject].client}</p>
              </div>
              
              <p className="text-foreground/80 mb-6">
                {portfolioProjects[activeProject].description}
              </p>
              
              <div className="mb-6">
                <h5 className="text-sm font-mono text-primary mb-3 uppercase">Architectural Achievements</h5>
                <ul className="space-y-2">
                  {portfolioProjects[activeProject].results.map((result, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-dashed border-primary/30">
                <h5 className="text-sm font-mono text-primary mb-3 uppercase">Technical Specifications</h5>
                <div className="flex flex-wrap gap-2">
                  {portfolioProjects[activeProject].tech.map((tech, idx) => (
                    <span key={idx} className="bg-secondary px-2 py-1 text-xs font-mono text-primary/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="btn-primary">
                  VIEW COMPLETE CASE STUDY
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

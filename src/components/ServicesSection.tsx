
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, Layers, Zap, Hammer, Check } from 'lucide-react';

const services = [
  {
    icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    title: "Foundation Engineering",
    code: "FDN-01",
    description: "Core web development with solid architecture principles for stability and scalability.",
    benefits: [
      "Semantic HTML structure for accessibility and SEO",
      "Progressive enhancement methodology",
      "Cross-browser compatibility testing",
      "Clean, maintainable codebase architecture"
    ]
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Structural Optimization",
    code: "STR-02",
    description: "Performance tuning to ensure your site loads quickly and runs smoothly under all conditions.",
    benefits: [
      "Core Web Vitals optimization",
      "Asset minification and compression",
      "Lazy loading implementation",
      "Server-side rendering where appropriate"
    ]
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Facade Design",
    code: "FAC-03",
    description: "UI/UX implementation focused on creating intuitive, conversion-focused interfaces.",
    benefits: [
      "Conversion-centered design principles",
      "Intuitive navigation architecture",
      "Consistent visual language and patterns",
      "Thoughtful microinteractions and feedback"
    ]
  },
  {
    icon: <Hammer className="h-10 w-10 text-primary" />,
    title: "Building Renovation",
    code: "RNV-04",
    description: "Site redesign and refactoring that preserves SEO equity while modernizing the experience.",
    benefits: [
      "Gradual migration to preserve SEO value",
      "Technical debt elimination",
      "Modern framework implementation",
      "Analytics-informed architectural decisions"
    ]
  }
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="blueprint-grid"></div>
      
      <div className="container relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Layers className="h-6 w-6 text-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-primary">
            Architectural Services
          </h2>
        </div>
        
        <h3 className="section-title">Professional Blueprints</h3>
        <p className="section-subtitle">
          Specialized architectural services designed to create structurally sound digital experiences
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 relative">
          {/* Technical grid lines */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 pointer-events-none z-0">
            <div className="border-r border-dashed border-primary/20 hidden md:block"></div>
          </div>

          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative border-2 border-primary/20 hover:border-primary transition-all duration-300 bg-card/60 backdrop-blur-sm"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Blueprint decoration elements */}
              <div className="absolute top-0 right-0 border-t-2 border-r-2 border-primary/40 w-8 h-8"></div>
              <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-primary/40 w-8 h-8"></div>
              
              {/* Service code */}
              <div className="absolute top-3 left-3 font-mono text-xs text-primary/70">
                {service.code}
              </div>
              
              <CardContent className="p-8">
                <div className="mb-4">{service.icon}</div>
                
                <h4 className="text-xl font-bold text-foreground mb-2 font-mono uppercase">{service.title}</h4>
                <p className="text-base text-foreground/70 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Technical specifications that appear on hover */}
                <div className={`mt-6 font-mono text-xs text-primary/70 transition-opacity duration-300 ${
                  hoveredService === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="grid grid-cols-2 gap-2">
                    <div>SPEC: A-{index + 1}0</div>
                    <div>REV: 2.{index + 1}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

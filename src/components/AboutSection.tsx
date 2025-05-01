
import React from 'react';
import { User, Code, Compass } from 'lucide-react';

const skills = [
  "React & Next.js", 
  "Vue.js", 
  "TypeScript", 
  "Tailwind CSS",
  "Performance Optimization", 
  "Accessibility (WCAG)", 
  "UI/UX Architecture", 
  "GraphQL"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="blueprint-grid"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5">
            <div className="relative">
              {/* Blueprint-style decorative elements */}
              <div className="absolute inset-0 border-2 border-primary/20 z-0"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>
              
              {/* Architectural workspace image */}
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                alt="The Architect's workspace" 
                className="relative z-10 object-cover w-full h-auto border-2 border-primary/40 filter contrast-125"
              />
              
              {/* Blueprint annotations */}
              <div className="absolute top-4 left-4 font-mono text-xs text-primary/80 bg-secondary/60 backdrop-blur-sm p-2 z-20">
                THE ARCHITECT'S STUDIO
              </div>
              
              {/* Measurement lines */}
              <div className="absolute top-0 left-10 h-4 w-px bg-primary/60 z-20"></div>
              <div className="absolute top-0 right-10 h-4 w-px bg-primary/60 z-20"></div>
              <div className="absolute top-0 left-10 right-10 h-px bg-primary/60 z-20"></div>
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 font-mono text-xs text-primary/60 z-20">
                W: 100%
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="flex items-center gap-2 mb-4">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-primary">
                Chief Architect
              </h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Turning Complex Requirements Into <span className="text-primary">Elegant Structures</span>
            </h3>
            
            <div className="space-y-4 text-foreground/80 mb-8">
              <p>
                With over 8 years specializing in frontend architecture, I approach website development as a structural engineer would approach a building – with precision, attention to detail, and a focus on both form and function.
              </p>
              <p>
                My philosophy combines architectural principles with digital execution. Every project begins with a solid foundation, careful planning of the structural components, and meticulous attention to how users will navigate through the completed space.
              </p>
              <p>
                I believe that truly exceptional digital experiences require both technical excellence and architectural vision – websites that are not only beautiful but structurally sound, performant, and built to last.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Code className="h-5 w-5 text-primary" />
                  <h4 className="text-lg font-semibold font-mono text-foreground">TECHNICAL BLUEPRINTS</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="bg-secondary/60 px-3 py-1 text-foreground/80 border border-primary/20 font-mono text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="h-5 w-5 text-primary" />
                  <h4 className="text-lg font-semibold font-mono text-foreground">ARCHITECTURAL APPROACH</h4>
                </div>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Mobile-first responsive architecture</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Accessibility as a foundational element</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Performance-driven development practices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span>Conversion-centered design principles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

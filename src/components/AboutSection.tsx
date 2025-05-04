import React from 'react';
import { User, Code, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  "React & Next.js", 
  "Vue.js", 
  "TypeScript", 
  "Tailwind CSS",
  "Performance", 
  "Accessibility", 
  "UI/UX", 
  "GraphQL"
];

const approaches = [
  "Mobile-first responsive architecture",
  "Accessibility as a foundational element",
  "Performance-driven development practices",
  "Conversion-centered design principles"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-[#0e1016] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 border border-blue-400/20 z-0"></div>
              
              {/* Architect's workspace image */}
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                alt="The Architect's workspace" 
                className="relative z-10 object-cover w-full h-auto border border-blue-400/30 filter contrast-125"
              />
              
              {/* Blueprint annotation */}
              <div className="absolute top-4 left-4 font-mono text-xs text-blue-400 bg-[#131832] backdrop-blur-sm p-2 z-20">
                THE ARCHITECT'S STUDIO
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <User className="h-5 w-5 text-blue-400" />
              <h2 className="text-sm font-mono uppercase tracking-wider text-blue-400">
                Chief Architect
              </h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Turning Complex Requirements Into <br />
              <span className="text-blue-400">Elegant Structures</span>
            </h3>
            
            {/* Simplified Content */}
            <div className="space-y-4 text-gray-300 mb-8 max-w-2xl">
              <p>
                With over 8 years specializing in frontend architecture, I approach website development as a structural engineer would approach a building – with precision, attention to detail, and a focus on both form and function.
              </p>
              <p>
                I believe that truly exceptional digital experiences require both technical excellence and architectural vision – websites that are not only beautiful but structurally sound, performant, and built to last.
              </p>
            </div>
            
            {/* Skills and Approach */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code className="h-4 w-4 text-blue-400" />
                  <h4 className="text-sm font-bold font-mono text-blue-400">TECHNICAL BLUEPRINTS</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span key={index} className="bg-[#131832] px-3 py-1 text-gray-300 border border-blue-400/20 font-mono text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Architectural Approach */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Compass className="h-4 w-4 text-blue-400" />
                  <h4 className="text-sm font-bold font-mono text-blue-400">ARCHITECTURAL APPROACH</h4>
                </div>
                <ul className="space-y-2 text-gray-300">
                  {approaches.map((approach, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                      <span className="text-sm">{approach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

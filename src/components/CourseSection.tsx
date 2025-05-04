import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: '💻',
    title: 'Frontend Development',
    description: 'Custom web applications built with modern frameworks and best practices'
  },
  {
    icon: '🎨',
    title: 'UI/UX Audits',
    description: 'Comprehensive analysis and improvement recommendations for your interfaces'
  },
  {
    icon: '🔍',
    title: 'Code Reviews',
    description: 'In-depth code analysis and actionable feedback for your team'
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Fluid layouts that work perfectly across all devices'
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    description: 'Speed up your applications and improve user experience'
  },
  {
    icon: '🎓',
    title: 'Technical Mentorship',
    description: 'Guide your team in modern frontend development practices'
  },
  {
    icon: '🏗️',
    title: 'Architecture Planning',
    description: 'Design scalable and maintainable frontend architectures'
  },
  {
    icon: '🔄',
    title: 'Legacy Code Migration',
    description: 'Modernize outdated codebases with minimal disruption'
  },
  {
    icon: '🎯',
    title: 'Technical Consulting',
    description: 'Expert advice on technology choices and implementation'
  },
  {
    icon: '🛠️',
    title: 'Custom Development',
    description: 'Tailored solutions for your specific needs'
  },
  {
    icon: '📊',
    title: 'Analytics Integration',
    description: 'Track user behavior and improve conversion rates'
  },
  {
    icon: '🔒',
    title: 'Frontend Security',
    description: 'Implement best practices for secure web applications'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-[#0e1016] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">
            Professional Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Elevate your digital presence with expert frontend development services and technical consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-[#1E1E3F] p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Blueprint corner decorations */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-blue-400/40"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blue-400/40"></div>
              
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-blue-400 text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              
              {/* Service details preview */}
              <div className="absolute inset-x-6 bottom-0 h-0 group-hover:h-1 bg-blue-400/20 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 font-bold border border-blue-400/40 relative group">
            <span className="relative z-10">Schedule Consultation</span>
            {/* Blueprint hover effect */}
            <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 

import React from 'react';
import { CalendarCheck } from 'lucide-react';

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We begin with a detailed consultation to understand your business goals, target audience, and current challenges.",
    timeline: "1-2 days"
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Based on the discovery, I create wireframes and design concepts focused on achieving your business objectives.",
    timeline: "3-5 days"
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "I build your site with clean, efficient code, optimized for performance and thoroughly tested across devices.",
    timeline: "1-3 weeks"
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description: "After deployment, we monitor performance and make data-driven refinements to maximize conversions.",
    timeline: "Ongoing"
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-brand-50">
      <div className="container">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <CalendarCheck className="h-6 w-6 text-brand-500" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-600">
            My Process
          </h2>
        </div>
        
        <h3 className="section-title">How We'll Work Together</h3>
        <p className="section-subtitle">
          A transparent, collaborative approach focused on your business success
        </p>
        
        <div className="mt-16">
          {processSteps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-16 last:mb-0">
              <div className="md:w-1/4 mb-6 md:mb-0">
                <div className="flex flex-row md:flex-col md:items-start items-center gap-4 md:gap-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-brand-300">
                    {step.number}
                  </span>
                  <span className="text-brand-500 font-medium text-sm whitespace-nowrap">
                    Typical timeline: {step.timeline}
                  </span>
                </div>
              </div>
              
              <div className="md:w-3/4 md:border-l-2 md:border-brand-200 md:pl-8 pb-4">
                <h4 className="text-2xl font-bold text-brand-800 mb-4">
                  {step.title}
                </h4>
                <p className="text-brand-700">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

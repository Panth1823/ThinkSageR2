
import React from 'react';
import { Users } from 'lucide-react';

const skills = [
  "React & Next.js", 
  "Tailwind CSS", 
  "TypeScript", 
  "Responsive Design",
  "Performance Optimization", 
  "Accessibility (WCAG)", 
  "UI/UX Design Integration", 
  "REST & GraphQL APIs"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-brand-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-300/30 rounded-3xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                alt="Professional frontend developer" 
                className="relative z-10 rounded-2xl shadow-xl object-cover w-full h-auto"
              />
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-6 w-6 text-brand-500" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-600">
                About Me
              </h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-brand-900">
              Turning Complex Ideas Into Simple, Beautiful Experiences
            </h3>
            
            <div className="space-y-4 text-brand-700 mb-8">
              <p>
                With over 8 years of experience specializing in frontend development, I've helped businesses of all sizes transform their online presence into high-converting digital assets.
              </p>
              <p>
                My approach combines technical expertise with a deep understanding of user behavior and business goals. I don't just build websites—I create digital experiences that drive measurable results.
              </p>
              <p>
                Having worked with startups and enterprise clients across industries, I bring a wealth of knowledge to every project, ensuring you get a solution that's tailored to your specific needs and objectives.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3 text-brand-800">Technical Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-white px-4 py-2 rounded-full text-brand-700 border border-brand-200 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

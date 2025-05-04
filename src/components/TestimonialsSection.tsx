import React, { useEffect, useRef } from 'react';
import { Star, Award } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Aditi Mehra",
    position: "Product Manager, FinTech Startup",
    quote: "I wish I had found CodeArchitect earlier! The frontend review and architecture optimization gave me the confidence to launch our product. Responsive design, detailed feedback, and actionable implementations made all the difference.",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    project: "Frontend Architecture",
    improvement: "+2 conversion rate"
  },
  {
    name: "Vikram Sharma",
    position: "Software Engineer, SaaS Company",
    quote: "It was an extremely worthwhile investment. The performance optimization and responsive design overhaul helped our app get noticed by top clients. I saw page load speeds improve dramatically within weeks!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    project: "Performance Optimization",
    improvement: "+4x faster loads"
  },
  {
    name: "Megha Choudhry",
    position: "Business Analyst, CRM Solutions",
    quote: "Our platform used to have small yet costly UI issues that affected user experience. The UX audit and component library services were game changers. User engagement metrics improved immediately!",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    project: "UX Audit + Component Library",
    improvement: "+3x engagement"
  }
];

// Removed clientLogos array

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section className="py-16 md:py-20 bg-[#0e1016] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Award className="h-5 w-5 text-blue-400" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-blue-400">
            Structural Reviews
          </h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Building Inspections
        </h3>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
          Reports from clients on the structural integrity and performance of delivered projects
        </p>
        
        <motion.div 
          ref={containerRef}
          className="grid md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border border-blue-400/20 bg-[#131832]/50 backdrop-blur-sm overflow-hidden group h-full flex flex-col">
                {/* Stamp effect */}
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full border-2 border-blue-500 rotate-12 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                  <span className="font-mono text-blue-400 text-[10px] text-center">{testimonial.improvement}</span>
                </div>
                
                <CardContent className="pt-6 relative flex-grow">
                  {/* Certificate number */}
                  <div className="absolute top-3 left-3 font-mono text-xs text-blue-400/60">
                    CERT: {(index + 1).toString().padStart(3, '0')}-{new Date().getFullYear()}
                  </div>
                  
                  <div className="flex text-yellow-400 mb-4 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-300 italic mb-6 relative">
                    <span className="absolute -left-2 -top-2 text-4xl text-blue-400/20">"</span>
                    <span className="relative z-10">{testimonial.quote}</span>
                  </blockquote>
                  
                  <div className="font-mono text-xs text-blue-400/60 mb-2 flex justify-between">
                    <span>PROJECT: {testimonial.project}</span>
                    <span>RESULT: {testimonial.improvement}</span>
                  </div>
                </CardContent>
                
                <CardFooter className="flex items-center gap-4 border-t border-blue-400/20 py-4 bg-[#0e1016]/80">
                  <div className="h-10 w-10 rounded-full overflow-hidden border border-blue-400/30">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-blue-400/80 font-mono">{testimonial.position}</p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

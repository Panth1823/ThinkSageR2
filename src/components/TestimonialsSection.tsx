
import React from 'react';
import { Star, Award } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director, TechFlow",
    quote: "Working with Code Architect transformed our website from a digital liability into a strategic asset. The architectural approach to frontend development resulted in a site that's not only beautiful but structurally sound.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    project: "E-Commerce Platform",
    improvement: "+45% conversion"
  },
  {
    name: "Michael Chen",
    position: "Founder, GrowthStride",
    quote: "The precision and attention to detail in our site's architecture made all the difference. Our platform now loads 3x faster and provides a seamless experience that has dramatically improved user engagement.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    project: "SaaS Dashboard",
    improvement: "+68% retention"
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager, InnovateCorp",
    quote: "Beyond technical skills, what impressed me most was how the architectural planning phase helped us clarify our business needs. The blueprint-to-building process was transparent and resulted in exactly what we needed.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    project: "Content Platform",
    improvement: "-30% bounce rate"
  }
];

// Client logos (placeholders)
const clientLogos = [
  { name: "Company 1", logo: "https://via.placeholder.com/150x50?text=Company+Logo" },
  { name: "Company 2", logo: "https://via.placeholder.com/150x50?text=Company+Logo" },
  { name: "Company 3", logo: "https://via.placeholder.com/150x50?text=Company+Logo" },
  { name: "Company 4", logo: "https://via.placeholder.com/150x50?text=Company+Logo" },
  { name: "Company 5", logo: "https://via.placeholder.com/150x50?text=Company+Logo" }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30 relative">
      <div className="blueprint-grid"></div>
      
      <div className="container relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-primary">
            Structural Reviews
          </h2>
        </div>
        
        <h3 className="section-title">Building Inspections</h3>
        <p className="section-subtitle">
          Reports from clients on the structural integrity and performance of delivered projects
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-primary/20 bg-card/60 backdrop-blur-sm overflow-hidden group">
              {/* Stamp effect */}
              <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full border-2 border-accent rotate-12 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                <span className="font-mono text-accent text-[10px] text-center">{testimonial.improvement}</span>
              </div>
              
              <CardContent className="pt-6 relative">
                {/* Certificate number */}
                <div className="absolute top-3 left-3 font-mono text-xs text-primary/60">
                  CERT: {(index + 1).toString().padStart(3, '0')}-{new Date().getFullYear()}
                </div>
                
                <div className="flex text-accent mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-foreground/80 italic mb-6 relative">
                  <span className="absolute -left-2 -top-2 text-4xl text-primary/20">"</span>
                  <span className="relative z-10">{testimonial.quote}</span>
                </blockquote>
                
                <div className="font-mono text-xs text-primary/60 mb-2 flex justify-between">
                  <span>PROJECT: {testimonial.project}</span>
                  <span>RESULT: {testimonial.improvement}</span>
                </div>
              </CardContent>
              
              <CardFooter className="flex items-center gap-4 border-t border-primary/20 py-4 bg-secondary/20">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-10 w-10 rounded-full object-cover border border-primary/30"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-primary/80 font-mono">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-center text-lg text-foreground/80 mb-8 font-mono">TRUSTED BY INNOVATIVE COMPANIES</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((client, index) => (
              <img 
                key={index}
                src={client.logo}
                alt={client.name}
                className="h-8 md:h-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-70 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

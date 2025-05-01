
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from 'lucide-react';
import { Input } from "@/components/ui/input";

const CtaSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/40 relative">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-medium opacity-20"></div>
      
      <div className="container max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-primary">
              Breaking Ground
            </h2>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground uppercase">
            Ready To Commission Your <span className="text-primary">Digital Structure</span>?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Schedule an architectural consultation to discuss your project requirements and receive a personalized blueprint and estimate.
          </p>
        </div>
        
        <div className="relative">
          {/* Blueprint paper background */}
          <div className="absolute inset-0 border-2 border-primary/30"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          
          {/* Architectural permit application form */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
              <div className="flex-1">
                <h3 className="font-mono text-lg mb-4 text-foreground">PROJECT COMMISSIONER</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-mono text-primary/80 mb-1">NAME</label>
                    <Input 
                      type="text" 
                      placeholder="Full Name" 
                      className="bg-card border-primary/40 text-foreground h-12 font-mono placeholder:text-foreground/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-primary/80 mb-1">EMAIL</label>
                    <Input 
                      type="email" 
                      placeholder="email@example.com" 
                      className="bg-card border-primary/40 text-foreground h-12 font-mono placeholder:text-foreground/30"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-mono text-lg mb-4 text-foreground">PROJECT SPECIFICATIONS</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-mono text-primary/80 mb-1">PROJECT TYPE</label>
                    <select className="w-full h-12 bg-card border border-primary/40 text-foreground px-3 font-mono">
                      <option value="">Select Project Type</option>
                      <option value="landing">Landing Page</option>
                      <option value="business">Business Website</option>
                      <option value="ecommerce">E-Commerce Platform</option>
                      <option value="webapp">Web Application</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-primary/80 mb-1">TARGET TIMELINE</label>
                    <select className="w-full h-12 bg-card border border-primary/40 text-foreground px-3 font-mono">
                      <option value="">Select Timeline</option>
                      <option value="urgent">Urgent (2-4 weeks)</option>
                      <option value="standard">Standard (4-8 weeks)</option>
                      <option value="flexible">Flexible (8+ weeks)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-mono text-primary/80 mb-1">PROJECT BRIEF</label>
              <textarea 
                rows={4} 
                placeholder="Brief description of your project requirements..." 
                className="w-full bg-card border border-primary/40 text-foreground p-3 font-mono placeholder:text-foreground/30 resize-none"
              ></textarea>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
              <Button className="btn-primary text-lg group" size="lg">
                SCHEDULE CONSULTATION
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute -bottom-2 -right-2 bg-accent text-xs font-mono py-0.5 px-1 text-black rotate-6">
                  PRIORITY
                </span>
              </Button>
              <Button variant="outline" className="btn-secondary text-lg" size="lg">
                VIEW PORTFOLIO FIRST
              </Button>
            </div>
          </div>
          
          {/* Decorative blueprint elements */}
          <div className="absolute top-4 right-4 flex items-center gap-2 font-mono text-xs text-primary/60 bg-background/10 p-1">
            <span>REF: COMM-{new Date().getFullYear()}</span>
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-xs text-primary/60">
            Architectural Proposal Request
          </div>
        </div>
        
        <div className="mt-16 pt-12 border-t border-primary/30">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2 font-mono text-foreground">BLUEPRINT UPDATES</h3>
            <p className="text-foreground/70">
              Subscribe for architecture tips and frontend development insights
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60" />
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="pl-10 bg-card/80 border-primary/40 text-foreground placeholder:text-foreground/30 h-12"
                required
              />
            </div>
            <Button type="submit" className="btn-primary whitespace-nowrap h-12">
              SUBSCRIBE TO UPDATES
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

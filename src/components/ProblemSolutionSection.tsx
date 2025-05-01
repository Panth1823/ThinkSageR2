
import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Gauge, Zap, Smartphone, Code } from 'lucide-react';

const ProblemSolutionSection = () => {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <section id="problems" className="py-20 bg-secondary/30 relative">
      <div className="section-grid"></div>
      
      <div className="container relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Gauge className="h-6 w-6 text-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-primary">
            Structural Integrity Analysis
          </h2>
        </div>
        
        <h3 className="section-title">Building Better Foundations</h3>
        <p className="section-subtitle">
          Identify structural weaknesses in your current digital presence
        </p>
        
        <div className="mt-16 max-w-5xl mx-auto">
          {/* Slider comparison tool */}
          <div className="mb-12">
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              step={1}
              className="py-4"
            />
            <div className="flex justify-between mt-2 font-mono text-xs text-primary/60">
              <span>UNSTABLE FOUNDATION</span>
              <span>REINFORCED STRUCTURE</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className={`transition-all duration-500 ${sliderValue[0] > 50 ? 'opacity-40' : 'opacity-100'}`}>
              <h4 className="text-xl font-bold mb-6 text-destructive/90 flex items-center">
                <span className="font-mono mr-2 text-sm">01.</span>
                STRUCTURAL DEFICIENCIES
              </h4>
              
              <div className="space-y-8">
                <div className="flex gap-4 blueprint-card">
                  <Zap className="h-10 w-10 text-destructive/80 flex-shrink-0" />
                  <div>
                    <h5 className="font-mono text-foreground mb-2">SLOW PERFORMANCE</h5>
                    <p className="text-sm text-foreground/70">
                      Sites that take {'>'}3 seconds to load lose 53% of mobile visitors. Bloated code and unoptimized assets create structural weaknesses.
                    </p>
                    <div className="mt-3 h-1 w-full bg-secondary">
                      <div className="h-full bg-destructive/60" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 blueprint-card">
                  <Smartphone className="h-10 w-10 text-destructive/80 flex-shrink-0" />
                  <div>
                    <h5 className="font-mono text-foreground mb-2">UNSTABLE MOBILE FOUNDATION</h5>
                    <p className="text-sm text-foreground/70">
                      Over 60% of web traffic is mobile, yet many sites provide a compromised experience on smaller devices.
                    </p>
                    <div className="mt-3 h-1 w-full bg-secondary">
                      <div className="h-full bg-destructive/60" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 blueprint-card">
                  <Code className="h-10 w-10 text-destructive/80 flex-shrink-0" />
                  <div>
                    <h5 className="font-mono text-foreground mb-2">TECHNICAL DEBT</h5>
                    <p className="text-sm text-foreground/70">
                      Legacy code and quick fixes create compounding issues that become more expensive to fix over time.
                    </p>
                    <div className="mt-3 h-1 w-full bg-secondary">
                      <div className="h-full bg-destructive/60" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-500 ${sliderValue[0] < 50 ? 'opacity-40' : 'opacity-100'}`}>
              <h4 className="text-xl font-bold mb-6 text-primary flex items-center">
                <span className="font-mono mr-2 text-sm">02.</span>
                ENGINEERED SOLUTIONS
              </h4>
              
              <div className="space-y-8">
                <div className="flex gap-4 blueprint-card border-primary/50">
                  <Zap className="h-10 w-10 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-mono text-foreground mb-2">PERFORMANCE OPTIMIZATION</h5>
                    <p className="text-sm text-foreground/70">
                      Streamlined code, optimized assets, and advanced caching techniques to deliver sub-second loading times.
                    </p>
                    <div className="mt-3 h-1 w-full bg-secondary">
                      <div className="h-full bg-primary/60" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 blueprint-card border-primary/50">
                  <Smartphone className="h-10 w-10 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-mono text-foreground mb-2">RESPONSIVE ARCHITECTURE</h5>
                    <p className="text-sm text-foreground/70">
                      Mobile-first design approach ensuring perfect experiences across all devices, from smartphones to large displays.
                    </p>
                    <div className="mt-3 h-1 w-full bg-secondary">
                      <div className="h-full bg-primary/60" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 blueprint-card border-primary/50">
                  <Code className="h-10 w-10 text-primary flex-shrink-0" />
                  <div>
                    <h5 className="font-mono text-foreground mb-2">CLEAN ARCHITECTURE</h5>
                    <p className="text-sm text-foreground/70">
                      Meticulously organized code following industry best practices for long-term maintainability.
                    </p>
                    <div className="mt-3 h-1 w-full bg-secondary">
                      <div className="h-full bg-primary/60" style={{width: '90%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;

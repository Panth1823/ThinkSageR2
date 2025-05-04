import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Gauge, Zap, Smartphone, Code } from 'lucide-react';
import { motion } from "framer-motion";

const ProblemSolutionSection = () => {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <section id="problems" className="py-16 md:py-20 bg-[#0e1016] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Gauge className="h-5 w-5 text-blue-400" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-blue-400">
            Structural Integrity Analysis
          </h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Building Better Foundations
        </h3>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
          Identify structural weaknesses in your current digital presence
        </p>
        
        <div className="mt-12 max-w-5xl mx-auto">
          {/* Slider comparison tool */}
          <div className="mb-12">
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              step={1}
              className="py-4"
            />
            <div className="flex justify-between mt-2 font-mono text-xs text-blue-400/60">
              <span>UNSTABLE FOUNDATION</span>
              <span>REINFORCED STRUCTURE</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Problems Column */}
            <div className={`transition-all duration-500 h-full ${sliderValue[0] > 50 ? 'opacity-40' : 'opacity-100'}`}>
              <h4 className="text-xl font-bold mb-6 text-red-500 flex items-center">
                <span className="font-mono mr-2 text-sm">01.</span>
                STRUCTURAL DEFICIENCIES
              </h4>
              
              <div className="space-y-8 h-[calc(100%-3rem)]">
                {/* Each problem card has fixed height */}
                <div className="flex gap-4 border border-red-500/30 p-6 bg-[#131832]/50 h-[calc(33.33%-1rem)]">
                  <Zap className="h-8 w-8 text-red-500/80 flex-shrink-0" />
                  <div>
                    <h5 className="font-mono text-white mb-2">SLOW PERFORMANCE</h5>
                    <p className="text-sm text-gray-300">
                      Sites that take {'>'}3 seconds to load lose 53% of mobile visitors. Bloated code and unoptimized assets create structural weaknesses.
                    </p>
                    <div className="mt-3 h-1 w-full bg-[#131832]">
                      <div className="h-full bg-red-500/60" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 border border-red-500/30 p-6 bg-[#131832]/50 h-[calc(33.33%-1rem)]">
                  <Smartphone className="h-8 w-8 text-red-500/80 flex-shrink-0" />
                  <div>
                    <h5 className="font-mono text-white mb-2">UNSTABLE MOBILE FOUNDATION</h5>
                    <p className="text-sm text-gray-300">
                      Over 60% of web traffic is mobile, yet many sites provide a compromised experience on smaller devices.
                    </p>
                    <div className="mt-3 h-1 w-full bg-[#131832]">
                      <div className="h-full bg-red-500/60" style={{width: '65%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 border border-red-500/30 p-6 bg-[#131832]/50 h-[calc(33.33%-1rem)]">
                  <Code className="h-8 w-8 text-red-500/80 flex-shrink-0" />
                  <div>
                    <h5 className="font-mono text-white mb-2">TECHNICAL DEBT</h5>
                    <p className="text-sm text-gray-300">
                      Legacy code and quick fixes create compounding issues that become more expensive to fix over time.
                    </p>
                    <div className="mt-3 h-1 w-full bg-[#131832]">
                      <div className="h-full bg-red-500/60" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Solutions Column */}
            <div className={`transition-all duration-500 h-full ${sliderValue[0] < 50 ? 'opacity-40' : 'opacity-100'}`}>
              <h4 className="text-xl font-bold mb-6 text-blue-400 flex items-center">
                <span className="font-mono mr-2 text-sm">02.</span>
                ENGINEERED SOLUTIONS
              </h4>
              
              <div className="space-y-8 h-[calc(100%-3rem)]">
                <div className="flex gap-4 border border-blue-400/30 p-6 bg-[#131832]/50 h-[calc(33.33%-1rem)]">
                  <Zap className="h-8 w-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <h5 className="font-mono text-white mb-2">PERFORMANCE OPTIMIZATION</h5>
                    <p className="text-sm text-gray-300">
                      Streamlined code, optimized assets, and advanced caching techniques to deliver sub-second loading times.
                    </p>
                    <div className="mt-3 h-1 w-full bg-[#131832]">
                      <div className="h-full bg-blue-400/60" style={{width: '95%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 border border-blue-400/30 p-6 bg-[#131832]/50 h-[calc(33.33%-1rem)]">
                  <Smartphone className="h-8 w-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <h5 className="font-mono text-white mb-2">RESPONSIVE ARCHITECTURE</h5>
                    <p className="text-sm text-gray-300">
                      Mobile-first design approach ensuring perfect experiences across all devices, from smartphones to large displays.
                    </p>
                    <div className="mt-3 h-1 w-full bg-[#131832]">
                      <div className="h-full bg-blue-400/60" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4 border border-blue-400/30 p-6 bg-[#131832]/50 h-[calc(33.33%-1rem)]">
                  <Code className="h-8 w-8 text-blue-400 flex-shrink-0" />
                  <div>
                    <h5 className="font-mono text-white mb-2">CLEAN ARCHITECTURE</h5>
                    <p className="text-sm text-gray-300">
                      Meticulously organized code following industry best practices for long-term maintainability.
                    </p>
                    <div className="mt-3 h-1 w-full bg-[#131832]">
                      <div className="h-full bg-blue-400/60" style={{width: '90%'}}></div>
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

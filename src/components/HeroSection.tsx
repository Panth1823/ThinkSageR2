
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      // Subtle grid movement based on mouse position
      gridRef.current.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-[100vh] pt-32 pb-20 overflow-hidden">
      {/* Blueprint grid background */}
      <div 
        ref={gridRef}
        className="absolute inset-0 bg-grid-pattern bg-grid-medium opacity-20 transition-all duration-300 ease-out"
        style={{ backgroundSize: '40px 40px' }}
      ></div>

      {/* Decorative blueprint elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 border border-primary/30 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/4 left-10 w-48 h-48 border border-primary/20 opacity-20 rotate-45"></div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            {/* Architectural reference number */}
            <div className="inline-block mb-6 font-mono text-xs border border-primary/40 px-3 py-1 text-primary">
              REF: FE-ARCH-2025
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground uppercase animate-fade-in">
              ARCHITECTING<br />
              <span className="text-primary">THE FRONTEND</span><br />
              EXPERIENCE
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/70 max-w-2xl mx-auto lg:mx-0 animate-fade-in font-light" style={{animationDelay: '0.1s'}}>
              Precision-engineered websites that convert visitors into customers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Button className="btn-primary group relative">
                COMMISSION YOUR PROJECT
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute -bottom-2 -right-2 bg-accent text-xs font-mono py-0.5 px-1 text-black">
                  APRVD
                </span>
              </Button>
              <Button variant="outline" className="btn-secondary">
                VIEW BLUEPRINTS
              </Button>
            </div>
            
            {/* Blueprint coordinates */}
            <div className="mt-10 hidden lg:flex justify-between text-primary/50 font-mono text-xs">
              <span>X: 0.0.0</span>
              <span>Y: 0.0.0</span>
              <span>SCALE: 1:1</span>
            </div>
          </div>
          
          <div className="flex-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Blueprint "paper" background */}
              <div className="absolute inset-0 border-2 border-primary/20 bg-secondary/30"></div>
              
              {/* Blueprint overlay effect */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
              
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
                alt="Professional developer workspace" 
                className="relative z-10 mix-blend-luminosity border-2 border-primary/40 object-cover w-full h-auto"
              />
              
              {/* Blueprint annotations */}
              <div className="absolute top-4 right-4 font-mono text-xs text-primary rotate-6 bg-secondary/60 p-2 backdrop-blur-sm">
                FRONTEND STRUCTURE v2.5
              </div>
              <div className="absolute bottom-10 left-0 w-20 h-px bg-primary/60"></div>
              <div className="absolute bottom-8 left-24 font-mono text-xs text-primary/80">
                RESPONSIVE VIEWPORT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

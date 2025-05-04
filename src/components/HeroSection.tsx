import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import gsap from "gsap";

const HeroSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const techIconsRef = useRef<HTMLDivElement>(null);
  const ctaBtnRef = useRef<HTMLButtonElement>(null);
  const particlesContainerRef = useRef<HTMLDivElement>(null);
  const backgroundGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create animated particles
    if (particlesContainerRef.current) {
      const container = particlesContainerRef.current;
      const particleCount = 30;
      
      // Clear any existing particles
      container.innerHTML = '';
      
      // Create particles
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Random properties
        const size = Math.random() * 5 + 1;
        const opacity = Math.random() * 0.5 + 0.1;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        // Set particle style
        particle.className = 'absolute bg-blue-400 rounded-full';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${startX}%`;
        particle.style.top = `${startY}%`;
        particle.style.opacity = `${opacity}`;
        
        container.appendChild(particle);
        
        // Animate each particle
        gsap.to(particle, {
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          duration: Math.random() * 20 + 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
        
        // Pulsate opacity
        gsap.to(particle, {
          opacity: opacity / 2,
          duration: Math.random() * 2 + 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }
    
    // Animate background glow
    if (backgroundGlowRef.current) {
      gsap.to(backgroundGlowRef.current, {
        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0), rgba(59, 130, 246, 0))',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      // Move the glow slightly based on mouse position (subtle effect)
      const moveGlow = (e) => {
        if (!backgroundGlowRef.current) return;
        
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        gsap.to(backgroundGlowRef.current, {
          background: `radial-gradient(circle at ${x}% ${y}%, rgba(59, 130, 246, 0.12), rgba(59, 130, 246, 0), rgba(59, 130, 246, 0))`,
          duration: 1.5,
          ease: "power1.out"
        });
      };
      
      window.addEventListener('mousemove', moveGlow);
      return () => {
        window.removeEventListener('mousemove', moveGlow);
      };
    }
  }, []);

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

  useEffect(() => {
    // GSAP entrance animations
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.3, ease: "power3.out" }
    );
    gsap.fromTo(
      statsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.6, ease: "power3.out" }
    );
    // Floating tech icons
    if (techIconsRef.current) {
      gsap.to(techIconsRef.current.querySelectorAll('img'), {
        y: "-=5",
        repeat: -1,
        yoyo: true,
        duration: 2,
        stagger: 0.2,
        ease: "sine.inOut"
      });
    }
  }, []);

  useEffect(() => {
    // CTA button microinteraction
    if (!ctaBtnRef.current) return;
    const btn = ctaBtnRef.current;
    const onMouseDown = () => {
      gsap.to(btn, { scale: 0.95, duration: 0.1 });
    };
    const onMouseUp = () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: "elastic.out(1, 0.5)" });
    };
    btn.addEventListener('mousedown', onMouseDown);
    btn.addEventListener('mouseup', onMouseUp);
    btn.addEventListener('mouseleave', onMouseUp);
    return () => {
      btn.removeEventListener('mousedown', onMouseDown);
      btn.removeEventListener('mouseup', onMouseUp);
      btn.removeEventListener('mouseleave', onMouseUp);
    };
  }, []);

  return (
    <section 
      className="relative min-h-[90vh] md:min-h-[100vh] pt-20 md:pt-28 pb-16 md:pb-20 overflow-hidden bg-[#0e1016]"
      aria-label="Hero section"
      id="hero"
    >
      {/* Blueprint accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500"></div>

      {/* Background glow effect */}
      <div 
        ref={backgroundGlowRef} 
        className="absolute inset-0 z-0 opacity-90"
        style={{ 
          background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.08), rgba(59, 130, 246, 0), rgba(59, 130, 246, 0))',
          width: '100%',
          height: '100%'
        }}
        aria-hidden="true"
      ></div>

      {/* Animated particles */}
      <div 
        ref={particlesContainerRef} 
        className="absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      ></div>

      {/* Blueprint grid background */}
      <div 
        ref={gridRef}
        className="absolute inset-0 bg-grid-pattern opacity-5 transition-all duration-300 ease-out z-0"
        style={{ backgroundSize: '40px 40px' }}
        aria-hidden="true"
      ></div>

      {/* Code lines background effect */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-5" aria-hidden="true">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-px bg-blue-400/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              transform: `rotate(${Math.random() * 180}deg)`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          ></div>
        ))}
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left column: Heading and CTA */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main heading */}
            <h1 ref={headingRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 text-white">
              Crafting Digital<br />
              <span className="text-blue-400">Experiences</span>
            </h1>
            
            <p ref={subheadingRef} className="text-lg sm:text-xl mb-6 md:mb-8 text-gray-300 max-w-xl">
              Expert frontend development, UI audits, and technical mentorship to help your projects succeed. Let's build something extraordinary together.
            </p>
            
            <div className="flex mt-8">
              <Button 
                ref={ctaBtnRef}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 text-sm rounded-none flex items-center gap-2"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                EXPLORE SERVICES
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Stats */}
            <div ref={statsRef} className="mt-16 grid grid-cols-3 gap-8 max-w-md">
              <div className="text-center lg:text-left">
                <div className="text-blue-400 text-4xl font-bold">50+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-blue-400 text-4xl font-bold">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-blue-400 text-4xl font-bold">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column: Services grid */}
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0 lg:pl-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="bg-[#131832] p-6 border border-blue-500/20 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-blue-400 font-medium mb-2">Frontend Dev</h3>
                <p className="text-sm text-gray-300">Modern web applications with React & TypeScript</p>
              </div>
              <div className="bg-[#131832] p-6 border border-blue-500/20 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-blue-400 font-medium mb-2">UI Audits</h3>
                <p className="text-sm text-gray-300">Comprehensive interface analysis</p>
              </div>
              <div className="bg-[#131832] p-6 border border-blue-500/20 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-blue-400 font-medium mb-2">Mentorship</h3>
                <p className="text-sm text-gray-300">Technical guidance & code reviews</p>
              </div>
              <div className="bg-[#131832] p-6 border border-blue-500/20 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-blue-400 font-medium mb-2">Consulting</h3>
                <p className="text-sm text-gray-300">Architecture & best practices</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

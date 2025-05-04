import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ProcessSection from '@/components/ProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import ClientsSection from '@/components/ClientsSection'; // Added import
import AchievementsSection from '@/components/AchievementsSection'; // Added import
import PricingSection from '@/components/PricingSection';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import CourseSection from '@/components/CourseSection';

const Index = () => {
  // Easter egg: Hidden measuring tool that responds to mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Only show the measuring tool when Alt key is pressed
      if (e.altKey) {
        const measuringTool = document.getElementById('measuring-tool');
        if (!measuringTool) {
          const tool = document.createElement('div');
          tool.id = 'measuring-tool';
          tool.style.position = 'fixed';
          tool.style.pointerEvents = 'none';
          tool.style.zIndex = '9999';
          tool.style.width = '100px';
          tool.style.height = '100px';
          tool.style.border = '1px dashed rgba(0, 191, 255, 0.5)';
          tool.style.borderRadius = '50%';
          tool.style.transition = 'opacity 0.3s ease';
          
          const horizontalLine = document.createElement('div');
          horizontalLine.style.position = 'absolute';
          horizontalLine.style.top = '50%';
          horizontalLine.style.left = '0';
          horizontalLine.style.width = '100%';
          horizontalLine.style.height = '1px';
          horizontalLine.style.backgroundColor = 'rgba(0, 191, 255, 0.5)';
          
          const verticalLine = document.createElement('div');
          verticalLine.style.position = 'absolute';
          verticalLine.style.left = '50%';
          verticalLine.style.top = '0';
          verticalLine.style.width = '1px';
          verticalLine.style.height = '100%';
          verticalLine.style.backgroundColor = 'rgba(0, 191, 255, 0.5)';
          
          const coordinates = document.createElement('div');
          coordinates.style.position = 'absolute';
          coordinates.style.bottom = '-20px';
          coordinates.style.right = '-60px';
          coordinates.style.color = 'rgba(0, 191, 255, 0.8)';
          coordinates.style.fontFamily = '"JetBrains Mono", monospace';
          coordinates.style.fontSize = '10px';
          coordinates.textContent = `X:${mouseX} Y:${mouseY}`;
          
          tool.appendChild(horizontalLine);
          tool.appendChild(verticalLine);
          tool.appendChild(coordinates);
          document.body.appendChild(tool);
        }
        
        const tool = document.getElementById('measuring-tool') as HTMLElement;
        tool.style.left = `${mouseX - 50}px`;
        tool.style.top = `${mouseY - 50}px`;
        tool.style.opacity = '1';
        
        const coordinates = tool.querySelector('div:last-child') as HTMLElement;
        coordinates.textContent = `X:${mouseX} Y:${mouseY}`;
      } else {
        const tool = document.getElementById('measuring-tool');
        if (tool) {
          tool.style.opacity = '0';
          setTimeout(() => {
            if (tool.parentNode) {
              tool.parentNode.removeChild(tool);
            }
          }, 300);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      const tool = document.getElementById('measuring-tool');
      if (tool && tool.parentNode) {
        tool.parentNode.removeChild(tool);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CourseSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <ClientsSection /> {/* Added ClientsSection */}
        <AchievementsSection /> {/* Added AchievementsSection */}
        <TestimonialsSection />
        <AboutSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

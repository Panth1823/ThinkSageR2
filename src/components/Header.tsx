import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Layers, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Close mobile menu on window resize (transition to desktop)
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking on a link
  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex h-16 sm:h-20 items-center justify-between relative">
        <div className="flex items-center">
          <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2 sm:mr-3" />
          <div className="font-mono font-bold text-lg sm:text-xl text-foreground">
            <span className="text-primary">CODE</span>ARCHITECT
          </div>
        </div>

        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? 
              <X className="h-5 w-5 text-primary" /> : 
              <Menu className="h-5 w-5 text-primary" />
            }
          </Button>
        </div>

        <nav 
          id="mobile-menu"
          className={`${
            isMobileMenuOpen
              ? "absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md py-4 px-6 shadow-md flex flex-col space-y-4 items-start"
              : "hidden lg:flex"
          } lg:space-x-8 lg:items-center`}
        >
          <a href="#services" onClick={handleNavLinkClick} className="text-foreground hover:text-primary font-mono uppercase text-sm tracking-wider w-full lg:w-auto py-2 lg:py-0 border-b lg:border-b-0 border-border/10 lg:border-transparent">Services</a>
          <a href="#process" onClick={handleNavLinkClick} className="text-foreground hover:text-primary font-mono uppercase text-sm tracking-wider w-full lg:w-auto py-2 lg:py-0 border-b lg:border-b-0 border-border/10 lg:border-transparent">Process</a>
          <a href="#portfolio" onClick={handleNavLinkClick} className="text-foreground hover:text-primary font-mono uppercase text-sm tracking-wider w-full lg:w-auto py-2 lg:py-0 border-b lg:border-b-0 border-border/10 lg:border-transparent">Portfolio</a>
          <a href="#about" onClick={handleNavLinkClick} className="text-foreground hover:text-primary font-mono uppercase text-sm tracking-wider w-full lg:w-auto py-2 lg:py-0 border-b lg:border-b-0 border-border/10 lg:border-transparent">About</a>
          <a href="#pricing" onClick={handleNavLinkClick} className="text-foreground hover:text-primary font-mono uppercase text-sm tracking-wider w-full lg:w-auto py-2 lg:py-0 border-b lg:border-b-0 border-border/10 lg:border-transparent">Pricing</a>
          <a href="#faq" onClick={handleNavLinkClick} className="text-foreground hover:text-primary font-mono uppercase text-sm tracking-wider w-full lg:w-auto py-2 lg:py-0">Standards</a>
          <Button className="mt-4 w-full lg:hidden" onClick={handleNavLinkClick}>
            COMMISSION PROJECT
          </Button>
        </nav>

        <Button className="hidden lg:flex">
          COMMISSION PROJECT
        </Button>
      </div>
    </header>
  );
};

export default Header;

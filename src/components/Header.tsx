
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container flex h-20 items-center justify-between relative">
        <div className="flex items-center">
          <Layers className="h-6 w-6 text-primary mr-3" />
          <div className="font-mono font-bold text-xl text-foreground">
            <span className="text-primary">CODE</span>ARCHITECT
          </div>
        </div>

        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? 
              <X className="h-5 w-5 text-primary" /> : 
              <Menu className="h-5 w-5 text-primary" />
            }
          </Button>
        </div>

        <nav className={`${
          isMobileMenuOpen
            ? "absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md py-4 shadow-md flex flex-col space-y-4 items-center"
            : "hidden lg:flex"
        } lg:space-x-8 lg:items-center`}>
          <a href="#services" className="text-foreground hover:text-primary font-mono uppercase text-sm tracking-wider">Services</a>
          <a href="#process" className="text-foreground hover:text-primary font-mono uppercase text-sm tracking-wider">Process</a>
          <a href="#portfolio" className="text-foreground hover:text-primary font-mono uppercase text-sm tracking-wider">Portfolio</a>
          <a href="#about" className="text-foreground hover:text-primary font-mono uppercase text-sm tracking-wider">About</a>
          <a href="#pricing" className="text-foreground hover:text-primary font-mono uppercase text-sm tracking-wider">Pricing</a>
          <a href="#faq" className="text-foreground hover:text-primary font-mono uppercase text-sm tracking-wider">Standards</a>
        </nav>

        <Button className="hidden lg:flex btn-primary">
          COMMISSION PROJECT
        </Button>
      </div>
    </header>
  );
};

export default Header;

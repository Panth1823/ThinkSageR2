
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-heading font-bold text-2xl text-brand-700">
          DevConvert
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#services" className="text-brand-700 hover:text-brand-500 font-medium">Services</a>
          <a href="#about" className="text-brand-700 hover:text-brand-500 font-medium">About</a>
          <a href="#process" className="text-brand-700 hover:text-brand-500 font-medium">Process</a>
          <a href="#pricing" className="text-brand-700 hover:text-brand-500 font-medium">Pricing</a>
          <a href="#faq" className="text-brand-700 hover:text-brand-500 font-medium">FAQ</a>
        </nav>
        <Button className="bg-brand-500 hover:bg-brand-600">
          Contact Me
        </Button>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-24 pb-16">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-brand-200 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-brand-900 animate-fade-in">
              Professional Frontend Development That <span className="text-brand-500">Converts Visitors</span> into Customers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-700 max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{animationDelay: '0.1s'}}>
              I build fast, accessible, and beautiful websites that help businesses grow their online presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Button className="btn-primary text-lg group" size="lg">
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary text-lg" size="lg">
                View My Work
              </Button>
            </div>
          </div>
          <div className="flex-1 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
                alt="Professional developer workspace" 
                className="relative z-10 rounded-2xl shadow-2xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

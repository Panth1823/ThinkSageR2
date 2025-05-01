
import React from 'react';
import { Check, FileText, Building, Building2, Warehouse } from 'lucide-react';
import { Button } from "@/components/ui/button";

const plans = [
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    name: "Residential",
    code: "RES-01",
    description: "Essential frontend development for small business websites and landing pages",
    price: "$3,500",
    popular: false,
    features: [
      "Responsive 5-page website architecture",
      "Mobile-first structural design",
      "Performance optimization",
      "Basic SEO foundation",
      "Contact form integration",
      "2 rounds of revisions",
      "30 days of architectural support"
    ]
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    name: "Commercial",
    code: "COM-02",
    description: "Advanced development for business sites requiring complex functionality",
    price: "$7,500",
    popular: true,
    features: [
      "Comprehensive 10-15 page architecture",
      "Advanced responsive structural design",
      "Core Web Vitals optimization",
      "Conversion rate optimization",
      "Custom interactive components",
      "JavaScript animation integration",
      "Content management system",
      "3 rounds of revisions",
      "60 days of architectural support",
      "Post-launch performance analysis"
    ]
  },
  {
    icon: <Warehouse className="h-8 w-8 text-primary" />,
    name: "Skyscraper",
    code: "SKY-03",
    description: "Enterprise-level development for complex web applications and platforms",
    price: "Custom Quote",
    popular: false,
    features: [
      "Custom application architecture",
      "Complex state management systems",
      "Advanced frontend framework implementation",
      "High-performance data visualization",
      "API integration and development",
      "Authentication systems",
      "Comprehensive testing architecture",
      "Advanced animation systems",
      "Multi-language support",
      "Unlimited revisions",
      "120 days of architectural support",
      "Quarterly performance audits"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary/30 relative">
      <div className="blueprint-grid"></div>
      
      <div className="container relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <FileText className="h-6 w-6 text-primary" />
          <h2 className="text-sm font-bold uppercase font-mono tracking-wider text-primary">
            Project Estimates
          </h2>
        </div>
        
        <h3 className="section-title">Construction Estimates</h3>
        <p className="section-subtitle">
          Transparent architectural specifications and pricing for your digital project
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border-2 ${plan.popular ? 'border-primary' : 'border-primary/30'} overflow-hidden transition-all duration-300 backdrop-blur-sm relative group`}
            >
              {/* Blueprint grid background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>
              
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary"></div>
              
              {plan.popular && (
                <div className="bg-primary text-background py-2 px-4 text-center font-mono text-sm">
                  RECOMMENDED STRUCTURE
                </div>
              )}
              
              <div className="p-8 relative z-10 bg-card/30">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-primary/70 font-mono text-xs">STRUCTURE TYPE: {plan.code}</p>
                  </div>
                  {plan.icon}
                </div>
                
                <p className="text-foreground/70 mb-6">{plan.description}</p>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-primary/80 ml-2 font-mono text-sm">base structure</span>
                </div>
                
                {/* Blueprint separator */}
                <div className="w-full h-px bg-primary/30 mb-6 relative">
                  <div className="absolute -top-3 left-0 font-mono text-xs text-primary/70">SPECIFICATIONS</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full btn-primary group relative ${plan.popular ? 'bg-primary' : 'bg-secondary border border-primary'}`}
                >
                  {plan.name === "Skyscraper" ? "REQUEST BLUEPRINT" : "COMMISSION PROJECT"}
                  {plan.popular && (
                    <span className="absolute -top-2 -right-2 bg-accent text-xs font-mono py-0.5 px-1 text-black">
                      RECOMMENDED
                    </span>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-foreground/80 mb-2">
            Need a custom architectural solution for your specific requirements?
          </p>
          <Button variant="link" className="text-primary hover:text-primary/70 font-medium font-mono">
            Schedule a free architectural consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

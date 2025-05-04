import React, { useState } from 'react';
import { Check, FileText, Building, Building2, Warehouse } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// USD to INR conversion rate (approximately 83 as of current rates)
const usdToInrRate = 83;

const plans = [
  {
    icon: <Building className="h-7 w-7 text-blue-400" />,
    name: "Residential",
    code: "RES-01",
    description: "Essential frontend development for small business websites and landing pages",
    priceINR: 290500, // 3500 * 83
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
    icon: <Building2 className="h-7 w-7 text-blue-400" />,
    name: "Commercial",
    code: "COM-02",
    description: "Advanced development for business sites requiring complex functionality",
    priceINR: 622500, // 7500 * 83
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
    icon: <Warehouse className="h-7 w-7 text-blue-400" />,
    name: "Skyscraper",
    code: "SKY-03",
    description: "Enterprise-level development for complex web applications and platforms",
    priceINR: null, // Custom quote
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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: { 
    y: -5,
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Format currency function
const formatCurrency = (amount, currency) => {
  if (amount === null) return "Custom Quote";
  
  return currency === 'USD' 
    ? `$${Math.round(amount / usdToInrRate).toLocaleString()}`
    : `₹${amount.toLocaleString()}`;
};

const PricingSection = () => {
  const [preferUSD, setPreferUSD] = useState(false);
  
  return (
    <section id="pricing" className="py-16 md:py-20 bg-[#0e1016] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <FileText className="h-5 w-5 text-blue-400" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-blue-400">
            Project Estimates
          </h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Construction Estimates
        </h3>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-6">
          Transparent architectural specifications and pricing for your digital project
        </p>
        
        {/* Currency switcher */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center bg-[#131832] border border-blue-400/30 rounded-sm overflow-hidden">
            <button 
              className={`px-4 py-2 text-xs font-mono transition-colors ${!preferUSD ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-[#192045]'}`}
              onClick={() => setPreferUSD(false)}
            >
              ₹ INR
            </button>
            <button 
              className={`px-4 py-2 text-xs font-mono transition-colors ${preferUSD ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-[#192045]'}`}
              onClick={() => setPreferUSD(true)}
            >
              $ USD
            </button>
          </div>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className={`border ${plan.popular ? 'border-blue-400' : 'border-blue-400/30'} h-full flex flex-col bg-[#0e1016] relative`}
              variants={cardVariants}
              whileHover="hover"
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white py-2 px-4 text-center font-mono text-xs">
                  RECOMMENDED STRUCTURE
                </div>
              )}
              
              <div className="p-6 sm:p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-blue-400/80 font-mono text-xs">STRUCTURE TYPE: {plan.code}</p>
                  </div>
                  <div className="p-2 border border-blue-400/30 bg-[#131832]">
                    {plan.icon}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 text-sm">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-2xl md:text-3xl font-bold text-white">
                      {preferUSD ? formatCurrency(plan.priceINR, 'USD') : formatCurrency(plan.priceINR, 'INR')}
                    </span>
                    <span className="text-blue-400/80 ml-2 font-mono text-xs">base structure</span>
                  </div>
                  {plan.priceINR !== null && (
                    <p className="text-blue-300/80 font-mono text-xs mt-2">
                      {preferUSD ? `${formatCurrency(plan.priceINR, 'INR')} INR` : `${formatCurrency(plan.priceINR, 'USD')} USD`}
                    </p>
                  )}
                </div>
                
                {/* Blueprint separator */}
                <div className="w-full h-px bg-blue-400/30 mb-6 relative">
                  <div className="absolute -top-2 left-0 font-mono text-xs text-blue-400/80 bg-[#0e1016] pr-2">SPECIFICATIONS</div>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full rounded-none font-mono text-sm ${
                    plan.popular 
                      ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                      : 'bg-[#131832] border border-blue-400/40 hover:border-blue-400 hover:bg-[#192045] text-white'
                  }`}
                >
                  {plan.name === "Skyscraper" ? "REQUEST BLUEPRINT" : "COMMISSION PROJECT"}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-3">
            Need a custom architectural solution for your specific requirements?
          </p>
          <Button className="bg-transparent hover:bg-blue-900/30 text-blue-400 border border-blue-400/40 hover:border-blue-400 font-mono text-sm rounded-none">
            Schedule a free architectural consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

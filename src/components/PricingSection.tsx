
import React from 'react';
import { Check, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essential",
    description: "Perfect for small businesses just starting out",
    price: "$2,500",
    popular: false,
    features: [
      "Responsive 5-page website",
      "Basic SEO optimization",
      "Contact form integration",
      "Mobile optimization",
      "2 rounds of revisions",
      "1 month of support"
    ]
  },
  {
    name: "Growth",
    description: "Ideal for established businesses ready to scale",
    price: "$5,000",
    popular: true,
    features: [
      "Responsive 10-page website",
      "Advanced SEO strategy",
      "Lead generation optimization",
      "Performance optimization",
      "Custom animations",
      "Newsletter integration",
      "3 rounds of revisions",
      "3 months of support"
    ]
  },
  {
    name: "Custom Solution",
    description: "Tailored for complex, unique requirements",
    price: "Custom Quote",
    popular: false,
    features: [
      "Fully custom website development",
      "Complex functionality integration",
      "Advanced interactive features",
      "Comprehensive SEO strategy",
      "Conversion rate optimization",
      "Unlimited revisions",
      "6 months of priority support",
      "Monthly performance reports"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <FileText className="h-6 w-6 text-brand-500" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-600">
            Pricing
          </h2>
        </div>
        
        <h3 className="section-title">Transparent Investment Options</h3>
        <p className="section-subtitle">
          Focused solutions for your business needs with clear deliverables and no hidden fees
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border ${plan.popular ? 'border-brand-500 shadow-lg shadow-brand-100' : 'border-brand-200'} overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="bg-brand-500 text-white py-2 px-4 text-center font-medium">
                  Recommended
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-brand-800 mb-2">{plan.name}</h3>
                <p className="text-brand-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-brand-900">{plan.price}</span>
                  {plan.name !== "Custom Solution" && <span className="text-brand-600"> one-time</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-brand-500 hover:bg-brand-600 text-white' : 'bg-white border border-brand-300 text-brand-700 hover:bg-brand-50'}`}
                >
                  {plan.name === "Custom Solution" ? "Request Quote" : "Get Started"}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-brand-700 mb-2">
            Not sure which plan is right for you?
          </p>
          <Button variant="link" className="text-brand-500 hover:text-brand-700 font-medium">
            Schedule a free consultation call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

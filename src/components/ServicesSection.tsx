
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutDashboard, Sliders, Zap, Code, Check } from 'lucide-react';

const services = [
  {
    icon: <LayoutDashboard className="h-10 w-10 text-brand-500" />,
    title: "Responsive Web Development",
    description: "Websites that look and function beautifully on any device, from desktop to mobile phones.",
    benefits: [
      "Reach all potential customers regardless of device",
      "Improve search engine rankings with mobile-friendly design",
      "Future-proof your web presence"
    ]
  },
  {
    icon: <Sliders className="h-10 w-10 text-brand-500" />,
    title: "UI/UX Optimization",
    description: "Strategic design that creates intuitive user journeys and increases conversion rates.",
    benefits: [
      "Reduce bounce rates with engaging interfaces",
      "Guide users toward conversion actions",
      "Create memorable brand experiences"
    ]
  },
  {
    icon: <Zap className="h-10 w-10 text-brand-500" />,
    title: "Performance Tuning",
    description: "Lightning-fast websites that retain visitors and rank higher in search results.",
    benefits: [
      "Improve Core Web Vitals scores",
      "Increase conversion rates with faster load times",
      "Enhance user satisfaction and engagement"
    ]
  },
  {
    icon: <Code className="h-10 w-10 text-brand-500" />,
    title: "Code Refactoring",
    description: "Clean, maintainable code that scales with your business and reduces future costs.",
    benefits: [
      "Improve site stability and reliability",
      "Reduce long-term maintenance costs",
      "Enable faster feature development"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Services That Drive Results</h2>
        <p className="section-subtitle">
          Focused solutions that transform your web presence and deliver measurable business outcomes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-brand-100 hover:border-brand-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-brand-800">{service.title}</CardTitle>
                <CardDescription className="text-base text-brand-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

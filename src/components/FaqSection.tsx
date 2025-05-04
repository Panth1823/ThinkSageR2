import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    code: "1.1",
    question: "What is your architectural design process?",
    answer: "My process follows systematic architectural principles: Discovery (understanding requirements), Blueprint Development (wireframing, information architecture), Foundation Building (core HTML/CSS structure), Structural Development (JavaScript functionality), Finishing (visual elements and animations), and Final Inspection (testing and optimization)."
  },
  {
    code: "1.2",
    question: "How long does it take to construct a typical website?",
    answer: "Project timelines vary based on structural complexity, but most websites take 4-8 weeks from blueprint to final construction. Simple landing pages may be completed in 2-3 weeks, while complex web applications with custom functionality can take 10-12 weeks. Each project receives a detailed timeline during the architectural planning phase."
  },
  {
    code: "1.3",
    question: "Do your architectural designs work on all devices and browsers?",
    answer: "Yes, all digital structures are built with responsive architecture as a foundational principle. I employ mobile-first design methodology and thoroughly test across devices (mobile, tablet, desktop) and modern browsers. Compatibility with legacy browsers is available as an optional specification when required."
  },
  {
    code: "2.1",
    question: "How do you ensure structural performance and loading speed?",
    answer: "Performance is built into the architectural foundation through techniques like code optimization, asset compression, lazy loading, responsive image delivery, and modern caching strategies. Every project undergoes Core Web Vitals testing and optimization to ensure the structure performs optimally under various network conditions."
  },
  {
    code: "3.2",
    question: "What ongoing maintenance do web structures require?",
    answer: "Like physical buildings, digital structures benefit from regular maintenance. All projects include post-construction support (ranging from 30-120 days depending on your plan). For ongoing structural integrity, I offer maintenance packages that include security updates, performance monitoring, feature enhancements, and adaptation to evolving browser standards."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-[#0e1016] relative">
      <div className="blueprint-grid"></div>
      
      <div className="container max-w-4xl relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <HelpCircle className="h-6 w-6 text-primary" />
          <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-primary">
            Architectural Standards
          </h2>
        </div>
        
        <h3 className="section-title">Building Codes</h3>
        <p className="section-subtitle">
          Frequently referenced architectural standards and specifications
        </p>
        
        <div className="mt-12 relative">
          {/* Blueprint decorative elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40"></div>
          
          <Accordion type="single" collapsible className="bg-card/60 backdrop-blur-sm border-2 border-primary/30 relative">
            {/* Blueprint title */}
            <div className="absolute top-4 left-4 font-mono text-xs text-primary/70">
              DOCUMENT: FAQv3.2
            </div>
            
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-primary/20"
              >
                <AccordionTrigger className="text-left px-6 py-4 text-foreground font-medium hover:text-primary group">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-primary/70 group-hover:text-primary">{faq.code}</span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-foreground/80 border-l-2 border-primary/20 ml-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
            
            {/* Blueprint footer */}
            <div className="px-6 py-4 border-t border-primary/20 flex justify-between font-mono text-xs text-primary/50">
              <span>REV: 3.2.1</span>
              <span>UPDATED: {new Date().getFullYear()}</span>
            </div>
          </Accordion>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-foreground/70 text-sm">
            Have additional questions about architectural specifications?
          </p>
          <a href="#contact" className="text-primary hover:text-primary/80 font-mono text-sm inline-block mt-2">
            CONTACT THE ARCHITECT
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

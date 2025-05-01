
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
    question: "How long does it typically take to complete a website project?",
    answer: "Project timelines vary based on complexity, but most websites take 3-6 weeks from kickoff to launch. Simple landing pages may be completed in as little as 2 weeks, while more complex sites with custom functionality can take 8-10 weeks. I'll provide you with a specific timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support after the website launches?",
    answer: "Yes, all projects include a support period after launch (ranging from 1-6 months depending on your package). During this time, I'll address any issues, make minor adjustments, and ensure everything is running smoothly. For ongoing maintenance and updates, I offer affordable monthly maintenance packages."
  },
  {
    question: "Will my website work on mobile devices and tablets?",
    answer: "Absolutely! All websites I build are fully responsive, ensuring they look and function perfectly across all devices - from smartphones to desktop computers. I follow a mobile-first development approach, which means your site will provide an optimal experience regardless of screen size."
  },
  {
    question: "How do you ensure the websites you build will convert visitors to customers?",
    answer: "Conversion is central to my design process. I combine proven UX principles, strategic placement of calls-to-action, clear value propositions, and optimized user flows to guide visitors toward conversion actions. I also implement analytics to track user behavior and make data-driven improvements over time."
  },
  {
    question: "What information do you need from me to get started?",
    answer: "To begin, I'll need your business goals, target audience information, brand assets (logo, colors, etc.), content for the site, and examples of websites you like. Don't worry if you don't have everything ready—I provide a detailed questionnaire and can guide you through the content creation process if needed."
  }
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 bg-brand-50">
      <div className="container max-w-4xl">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <HelpCircle className="h-6 w-6 text-brand-500" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-brand-600">
            FAQ
          </h2>
        </div>
        
        <h3 className="section-title">Frequently Asked Questions</h3>
        <p className="section-subtitle">
          Answers to common questions about working together
        </p>
        
        <div className="mt-12">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-md">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left px-6 py-4 text-brand-800 font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-brand-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

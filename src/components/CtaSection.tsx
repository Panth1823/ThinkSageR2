
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from 'lucide-react';
import { Input } from "@/components/ui/input";

const CtaSection = () => {
  return (
    <section className="py-20 bg-brand-900 text-white">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            Let's create a website that doesn't just look great but drives real business results and gives you a competitive advantage.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
          <Button className="bg-brand-500 hover:bg-brand-400 text-white text-lg py-6" size="lg">
            Book Your Strategy Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6" size="lg">
            View Case Studies
          </Button>
        </div>
        
        <div className="mt-16 pt-12 border-t border-brand-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-brand-200">
              Subscribe for tips on improving your website's performance and conversion rates
            </p>
          </div>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-400" />
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="pl-10 bg-brand-800 border-brand-700 text-white placeholder:text-brand-400 h-12"
                required
              />
            </div>
            <Button type="submit" className="bg-brand-500 hover:bg-brand-400 whitespace-nowrap h-12">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

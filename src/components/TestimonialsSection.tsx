
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director, TechFlow",
    quote: "Working with this developer transformed our website from just a digital brochure into a powerful lead-generation tool. Our conversion rate increased by 45% within the first month after launch.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    position: "Founder, GrowthStride",
    quote: "The attention to detail and focus on performance made all the difference. Our site loads 3x faster now, and we've seen a significant improvement in user engagement and sales.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    position: "Product Manager, InnovateCorp",
    quote: "Beyond technical skills, what impressed me most was how well they understood our business goals and translated them into an effective website strategy. Our bounce rate dropped by 30%.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  }
];

// Client logos (placeholders)
const clientLogos = [
  { name: "Company 1", logo: "https://via.placeholder.com/150x50?text=Company+Logo" },
  { name: "Company 2", logo: "https://via.placeholder.com/150x50?text=Company+Logo" },
  { name: "Company 3", logo: "https://via.placeholder.com/150x50?text=Company+Logo" },
  { name: "Company 4", logo: "https://via.placeholder.com/150x50?text=Company+Logo" },
  { name: "Company 5", logo: "https://via.placeholder.com/150x50?text=Company+Logo" }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">What My Clients Say</h2>
        <p className="section-subtitle">
          Don't just take my word for it – hear from businesses I've helped succeed
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-brand-100 h-full">
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <blockquote className="text-brand-700 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-brand-900">{testimonial.name}</h4>
                  <p className="text-sm text-brand-500">{testimonial.position}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-20">
          <h3 className="text-center text-xl text-brand-700 mb-8">Trusted by Innovative Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((client, index) => (
              <img 
                key={index}
                src={client.logo}
                alt={client.name}
                className="h-8 md:h-10 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

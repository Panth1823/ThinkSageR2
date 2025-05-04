import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, Layers, Zap, Hammer, Check, Code, Search, Users, BookOpen, Wrench, Shield, Laptop, MessageSquare } from 'lucide-react';
import gsap from "gsap";

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Career Clarity",
    code: "CR-01",
    description: "Personalized sessions to help you define your career goals and create a clear roadmap.",
    benefits: [
      "Identify your strengths",
      "Set actionable goals",
      "Overcome career blocks",
      "Gain long-term vision"
    ]
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Resume Makeover",
    code: "RS-02",
    description: "Transform your resume to showcase your skills, achievements, and land more interviews.",
    benefits: [
      "ATS-friendly formatting",
      "Impactful bullet points",
      "Personal branding",
      "Modern design"
    ]
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Cover Letter Writing",
    code: "CL-03",
    description: "Craft compelling cover letters tailored to your dream roles.",
    benefits: [
      "Personalized messaging",
      "Highlight your value",
      "Role-specific targeting",
      "Professional tone"
    ]
  },
  {
    icon: <Laptop className="h-10 w-10 text-primary" />,
    title: "Video Resume",
    code: "VR-04",
    description: "Stand out with a professional video resume that showcases your personality and skills.",
    benefits: [
      "Script guidance",
      "On-camera coaching",
      "Editing support",
      "Distribution tips"
    ]
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "LinkedIn Optimization",
    code: "LI-05",
    description: "Upgrade your LinkedIn profile to attract recruiters and grow your network.",
    benefits: [
      "Profile audit",
      "SEO for LinkedIn",
      "Content strategy",
      "Network growth"
    ]
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Job Search Strategy",
    code: "JS-06",
    description: "Get a proven job search plan, including tools, templates, and accountability.",
    benefits: [
      "Custom job tracker",
      "Outreach templates",
      "Weekly check-ins",
      "Progress analytics"
    ]
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Networking & Referrals",
    code: "NW-07",
    description: "Learn how to build relationships and get referrals for hidden opportunities.",
    benefits: [
      "Networking scripts",
      "Referral strategies",
      "Event guidance",
      "Follow-up templates"
    ]
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Interview Coaching",
    code: "IC-08",
    description: "Ace your interviews with mock sessions, feedback, and confidence-building techniques.",
    benefits: [
      "Mock interviews",
      "Behavioral questions",
      "STAR technique",
      "Live feedback"
    ]
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Salary Negotiation",
    code: "SN-09",
    description: "Maximize your offers with proven negotiation tactics and scripts.",
    benefits: [
      "Market research",
      "Negotiation scripts",
      "Role-play scenarios",
      "Offer review"
    ]
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    title: "Time Management",
    code: "TM-10",
    description: "Boost your productivity and balance your job search with your current commitments.",
    benefits: [
      "Personalized routines",
      "Productivity tools",
      "Goal tracking",
      "Work-life balance"
    ]
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "Content Strategy",
    code: "CS-11",
    description: "Build your personal brand with a content plan for LinkedIn and beyond.",
    benefits: [
      "Content calendar",
      "Post templates",
      "Engagement tactics",
      "Brand positioning"
    ]
  },
  {
    icon: <Hammer className="h-10 w-10 text-primary" />,
    title: "Job Location & Relocation",
    code: "JL-12",
    description: "Guidance on finding jobs in your preferred location or relocating for new opportunities.",
    benefits: [
      "Location research",
      "Relocation checklist",
      "Remote job tips",
      "Transition support"
    ]
  }
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // GSAP staggered entrance for cards
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    // GSAP hover microinteraction for card
    if (hoveredService !== null && cardsRef.current[hoveredService]) {
      gsap.to(cardsRef.current[hoveredService], { scale: 1.04, boxShadow: '0 0 24px #3B82F6AA', borderColor: '#3B82F6', duration: 0.25, ease: 'power2.out' });
    }
    // Reset all others
    cardsRef.current.forEach((card, idx) => {
      if (card && idx !== hoveredService) {
        gsap.to(card, { scale: 1, boxShadow: '0 0 0px #0000', borderColor: '#3B82F633', duration: 0.25, ease: 'power2.inOut' });
      }
    });
  }, [hoveredService]);

  return (
    <section id="services" className="py-20 bg-background relative">
      <div className="blueprint-grid"></div>
      
      <div className="container relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Layers className="h-6 w-6 text-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-primary">
            Professional Services
          </h2>
        </div>
        
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-6">Expert Solutions</h3>
        <p className="text-lg text-center text-foreground/70 max-w-2xl mx-auto mb-12">
          Comprehensive frontend development services to help you build, optimize, and maintain exceptional web experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 relative">
          {/* Technical grid lines */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-8 pointer-events-none z-0">
            <div className="border-r border-dashed border-primary/20 hidden md:block"></div>
          </div>

          {services.map((service, index) => (
            <Card 
              key={index} 
              ref={el => cardsRef.current[index] = el}
              className="relative border-2 border-primary/20 hover:border-primary transition-all duration-300 bg-card/60 backdrop-blur-sm group"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Blueprint decoration elements */}
              <div className="absolute top-0 right-0 border-t-2 border-r-2 border-primary/40 w-8 h-8 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
              <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-primary/40 w-8 h-8 transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
              
              {/* Service code */}
              <div className="absolute top-3 left-3 font-mono text-xs text-primary/70">
                {service.code}
              </div>
              
              <CardContent className="p-6 md:p-8">
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                
                <h4 className="text-xl font-bold text-foreground mb-2 font-mono uppercase">{service.title}</h4>
                <p className="text-base text-foreground/70 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Technical specifications that appear on hover */}
                <div className={`mt-6 font-mono text-xs text-primary/70 transition-opacity duration-300 ${
                  hoveredService === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="grid grid-cols-2 gap-2">
                    <div>SPEC: A-{index + 1}0</div>
                    <div>REV: 2.{index + 1}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

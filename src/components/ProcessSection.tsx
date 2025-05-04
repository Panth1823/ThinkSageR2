import gsap from "gsap";
import React, { useState, useEffect, useRef } from 'react';
import { CalendarCheck, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "Initial consultation to understand your career goals, challenges, and aspirations.",
    timeline: "1 day",
    icon: "📞"
  },
  {
    number: "02",
    title: "Resume & Profile Audit",
    description: "In-depth review of your resume, LinkedIn, and personal brand to identify improvement areas.",
    timeline: "1-2 days",
    icon: "📄"
  },
  {
    number: "03",
    title: "Personalized Action Plan",
    description: "Receive a step-by-step plan for resume, cover letter, LinkedIn, and job search strategy.",
    timeline: "2-3 days",
    icon: "📝"
  },
  {
    number: "04",
    title: "Interview Preparation",
    description: "Mock interviews, feedback, and confidence-building to help you ace real interviews.",
    timeline: "2-5 days",
    icon: "🎤"
  },
  {
    number: "05",
    title: "Offer & Negotiation",
    description: "Guidance on evaluating offers, negotiating salary, and making the right career move.",
    timeline: "1-2 days",
    icon: "💼"
  },
  {
    number: "06",
    title: "Success Handover",
    description: "Celebrate your new job! Get onboarding tips and ongoing support for your next chapter.",
    timeline: "Ongoing",
    icon: "🎉"
  }
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // GSAP staggered entrance for steps
    gsap.fromTo(
      stepRefs.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    // GSAP hover microinteraction for step
    if (activeStep !== null && stepRefs.current[activeStep]) {
      gsap.to(stepRefs.current[activeStep], { scale: 1.04, borderColor: '#3B82F6', boxShadow: '0 0 16px #3B82F6AA', duration: 0.22, ease: 'power2.out' });
    }
    // Reset all others
    stepRefs.current.forEach((step, idx) => {
      if (step && idx !== activeStep) {
        gsap.to(step, { scale: 1, borderColor: '#3B82F64D', boxShadow: '0 0 0px #0000', duration: 0.22, ease: 'power2.inOut' });
      }
    });
  }, [activeStep]);

  return (
    <section id="process" className="py-20 bg-secondary/30 relative">
      <div className="blueprint-grid"></div>
      
      <div className="container relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <CalendarCheck className="h-6 w-6 text-primary" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-primary">
            Construction Phases
          </h2>
        </div>
        
        <h3 className="section-title">From Blueprint To Building</h3>
        <p className="section-subtitle">
          A systematic approach to transforming concepts into functional digital architecture
        </p>
        
        {/* Timeline visualization */}
        <div className="mt-16 relative">
          {/* Horizontal connecting line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-primary/30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                ref={el => stepRefs.current[index] = el}
                className="relative"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Node on timeline */}
                <div className="hidden md:flex absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    activeStep === index ? 'bg-primary' : 'bg-secondary border-2 border-primary/50'
                  } transition-all duration-300`}>
                    <CheckCircle className={`h-4 w-4 ${
                      activeStep === index ? 'text-background' : 'text-primary/50'
                    }`} />
                  </div>
                </div>

                <div className={`blueprint-card min-h-[220px] transition-all duration-300 ${
                  activeStep === index ? 'border-primary' : 'border-primary/30'
                }`}>
                  <div className="mb-4 flex justify-between items-center">
                    <span className="text-4xl font-bold text-primary/40 font-mono">{step.number}</span>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-mono text-foreground">{step.title}</h4>
                    <p className="text-sm text-foreground/70">{step.description}</p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-dashed border-primary/30 flex justify-between">
                    <span className="text-xs text-primary/70 font-mono">PHASE {step.number}</span>
                    <span className="text-xs text-primary/70 font-mono">{step.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

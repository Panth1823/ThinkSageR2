import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react"; // Removed unused icons
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Added Textarea import
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Added Select imports
import gsap from "gsap";

// Removed testimonials, clientLogos, and achievements arrays

const CtaSection = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const ctaBtnRef = useRef<HTMLButtonElement>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // GSAP entrance for form container
    if (formContainerRef.current) {
      gsap.fromTo(
        formContainerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    // CTA button microinteraction
    if (!ctaBtnRef.current) return;
    const btn = ctaBtnRef.current;
    const onMouseDown = () => {
      gsap.to(btn, { scale: 0.96, duration: 0.1 });
    };
    const onMouseUp = () => {
      gsap.to(btn, { scale: 1, duration: 0.2, ease: "elastic.out(1, 0.5)" });
    };
    btn.addEventListener("mousedown", onMouseDown);
    btn.addEventListener("mouseup", onMouseUp);
    btn.addEventListener("mouseleave", onMouseUp);
    return () => {
      btn.removeEventListener("mousedown", onMouseDown);
      btn.removeEventListener("mouseup", onMouseUp);
      btn.removeEventListener("mouseleave", onMouseUp);
    };
  }, []);

  useEffect(() => {
    // Input focus microinteraction
    inputRefs.current.forEach((input) => {
      if (!input) return;
      const onFocus = () => {
        gsap.to(input, { boxShadow: "0 0 0 2px #3B82F6", duration: 0.2 });
      };
      const onBlur = () => {
        gsap.to(input, { boxShadow: "0 0 0 0px #3B82F6", duration: 0.2 });
      };
      input.addEventListener("focus", onFocus);
      input.addEventListener("blur", onBlur);
      return () => {
        input.removeEventListener("focus", onFocus);
        input.removeEventListener("blur", onBlur);
      };
    });
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-secondary/40 relative overflow-hidden"
    >
      {" "}
      {/* Added overflow-hidden */}
      {/* Enhanced background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-large opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/30 pointer-events-none"></div>
      <div className="container max-w-6xl relative z-10">
        {/* Removed Social Proof Section */}

        <div className="text-center mb-16">
          {" "}
          {/* Increased margin bottom */}
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-sm font-bold font-mono uppercase tracking-wider text-primary">
              Start Your Career Growth
            </h2>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Ready to Land Your Dream Job{" "}
            <span className="text-primary">Faster</span>?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Book a free consultation to get personalized advice on your resume,
            LinkedIn, interview prep, and more. Let's unlock your next
            opportunity together!
          </p>
        </div>

        {/* Enhanced Consultation Form Container */}
        <div
          ref={formContainerRef}
          className="relative border-2 border-primary/30 bg-card/60 backdrop-blur-lg shadow-xl shadow-primary/10 rounded-lg overflow-hidden"
        >
          {/* Inner grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern bg-grid-small opacity-10 pointer-events-none"></div>

          {/* Project consultation form */}
          <div className="relative z-10 p-8 md:p-16">
            {" "}
            {/* Increased padding */}
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
              <div className="flex-1">
                <h3 className="font-mono text-lg mb-4 text-foreground">
                  PROJECT DETAILS
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-mono text-primary/80 mb-1">
                      NAME
                    </label>
                    <Input
                      ref={(el) => (inputRefs.current[0] = el)}
                      type="text"
                      placeholder="Full Name"
                      className="bg-card border-primary/40 text-foreground h-12 font-mono placeholder:text-foreground/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-primary/80 mb-1">
                      EMAIL
                    </label>
                    <Input
                      ref={(el) => (inputRefs.current[1] = el)}
                      type="email"
                      placeholder="email@example.com"
                      className="bg-card border-primary/40 text-foreground h-12 font-mono placeholder:text-foreground/30"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-mono text-lg mb-4 text-foreground">
                  PROJECT SCOPE
                </h3>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="project-type"
                      className="block text-sm font-mono text-primary/80 mb-1"
                    >
                      SERVICE NEEDED
                    </label>
                    <Select>
                      <SelectTrigger
                        id="project-type"
                        className="w-full h-12 bg-card border-primary/40 text-foreground font-mono"
                      >
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="resume">Resume Review</SelectItem>
                        <SelectItem value="linkedin">
                          LinkedIn Optimization
                        </SelectItem>
                        <SelectItem value="coverletter">
                          Cover Letter Writing
                        </SelectItem>
                        <SelectItem value="interview">
                          Interview Coaching
                        </SelectItem>
                        <SelectItem value="strategy">
                          Job Search Strategy
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-mono text-primary/80 mb-1"
                    >
                      TARGET TIMELINE
                    </label>
                    <Select>
                      <SelectTrigger
                        id="timeline"
                        className="w-full h-12 bg-card border-primary/40 text-foreground font-mono"
                      >
                        <SelectValue placeholder="Select Timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">
                          Urgent (2-4 weeks)
                        </SelectItem>
                        <SelectItem value="standard">
                          Standard (4-8 weeks)
                        </SelectItem>
                        <SelectItem value="flexible">
                          Flexible (8+ weeks)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8 col-span-1 md:col-span-2">
              {" "}
              {/* Make textarea span full width on larger screens */}
              <label
                htmlFor="requirements"
                className="block text-sm font-mono text-primary/80 mb-1"
              >
                PROJECT REQUIREMENTS
              </label>
              <Textarea
                id="requirements"
                rows={5} // Increased rows
                placeholder="Describe your project vision, key features, and requirements..."
                className="w-full bg-card border-primary/40 text-foreground p-3 font-mono placeholder:text-foreground/30 resize-y rounded-md" // Allow vertical resize
              />
            </div>
            {/* Restored Original Button Styling */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-center mt-8">
              <Button
                ref={ctaBtnRef}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 px-10 rounded-md group shadow-md hover:shadow-lg transition-shadow" // Restored original classes, adjusted for foreground color
                size="lg"
              >
                <span className="flex items-center justify-center font-semibold">
                  {" "}
                  {/* Removed relative z-10 */}
                  SCHEDULE CONSULTATION
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Removed gradient div */}
              </Button>
              {/* Optional: Keep secondary button or remove if not needed */}
              {/* <Button 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary/10 text-lg py-6 px-10 rounded-md"
                size="lg"
              >
                VIEW PORTFOLIO FIRST
              </Button> */}
            </div>
          </div>

          {/* Decorative blueprint elements */}
          <div className="absolute top-4 right-4 flex items-center gap-2 font-mono text-xs text-primary/60 bg-background/10 p-1">
            <span>REF: PROJ-{new Date().getFullYear()}</span>
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-xs text-primary/60">
            Project Consultation Request
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-primary/30">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-2 font-mono text-foreground">
              STAY UPDATED
            </h3>
            <p className="text-foreground/70">
              Subscribe for frontend development insights and industry best
              practices
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/60" />
              <Input
                ref={(el) => (inputRefs.current[2] = el)}
                type="email"
                placeholder="Enter your email"
                className="pl-10 bg-card/80 border-primary/40 text-foreground placeholder:text-foreground/30 h-12"
                required
              />
            </div>
            <Button type="submit">SUBSCRIBE TO UPDATES</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

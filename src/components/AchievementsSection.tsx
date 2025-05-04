import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Code, Smile } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";

const achievements = [
  { 
    icon: <Award className="h-8 w-8 text-blue-400" />, 
    value: 5, 
    suffix: "+", 
    label: "Years Experience" 
  },
  { 
    icon: <Users className="h-8 w-8 text-blue-400" />, 
    value: 50, 
    suffix: "+", 
    label: "Projects Completed" 
  },
  { 
    icon: <Code className="h-8 w-8 text-blue-400" />, 
    value: 1000000, // 1M
    suffix: "+", 
    label: "Lines of Code",
    format: true 
  },
  { 
    icon: <Smile className="h-8 w-8 text-blue-400" />, 
    value: 98, 
    suffix: "%", 
    label: "Client Satisfaction" 
  },
];

const Counter = ({ value, duration = 2.5, suffix = "", format = false }) => {
  const [count, setCount] = useState(0);
  const [countComplete, setCountComplete] = useState(false);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const totalValue = value;
    const incrementTime = duration * 1000 / totalValue;
    let timer;
    
    const run = () => {
      timer = setInterval(() => {
        start += Math.ceil(totalValue / 125); // Increment faster for larger numbers
        if (start > totalValue) {
          setCount(totalValue);
          setCountComplete(true);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
    };
    
    run();
    
    return () => clearInterval(timer);
  }, [isInView, value, duration]);
  
  const formatNumber = (num) => {
    if (!format) return num;
    
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  };
  
  return (
    <span ref={nodeRef} className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2 font-mono">
      {format || countComplete ? formatNumber(count) : count}{suffix}
    </span>
  );
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-16 md:py-20 bg-[#0e1016] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Award className="h-5 w-5 text-blue-400" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-blue-400">
            Proven Track Record
          </h2>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
          Milestones & Achievements
        </h3>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="relative border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 bg-[#131832]/50 backdrop-blur-sm overflow-hidden group h-full">
                {/* Blueprint decoration */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-blue-400/30 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border border-dashed border-blue-400/30 rounded-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <CardContent className="p-6 md:p-8 text-center relative z-10 flex flex-col items-center">
                  <div className="mb-4 inline-block transform transition-transform duration-300 group-hover:scale-110">
                    {achievement.icon}
                  </div>
                  <div className="mb-2">
                    <Counter 
                      value={achievement.value} 
                      suffix={achievement.suffix} 
                      format={achievement.format} 
                    />
                  </div>
                  <p className="text-lg text-gray-300">{achievement.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;

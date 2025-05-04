import React from 'react';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

// Client logos data
const clientLogos = [
  { name: 'Creative Studio', path: '/clients/creativestudio.svg' },
  { name: 'Digital Forge', path: '/clients/digitalforge.svg' },
  { name: 'Innovate Hub', path: '/clients/innovatehub.svg' },
  { name: 'Startup X', path: '/clients/startupx.svg' },
  { name: 'Tech Corp', path: '/clients/techcorp.svg' },
];

// Duplicate logos for seamless looping (triple to ensure enough coverage)
const allLogos = [...clientLogos, ...clientLogos, ...clientLogos];

const ClientsSection = () => {
  return (
    <section id="clients" className="py-16 bg-[#0e1016] overflow-hidden relative">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <Users className="h-5 w-5 text-blue-400" />
          <h2 className="text-sm font-mono uppercase tracking-wider text-blue-400">
            Trusted By Leading Companies
          </h2>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">Our Valued Partners</h3>
        
        {/* Single carousel - left to right */}
        <div className="relative w-full overflow-hidden py-6">
          <motion.div
            className="flex gap-20 md:gap-24 lg:gap-28"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {allLogos.map((client, index) => (
              <div 
                key={index} 
                className="flex justify-center items-center flex-shrink-0"
              >
                <img 
                  src={client.path} 
                  alt={`${client.name} Logo`} 
                  className="h-12 md:h-14 lg:h-16 object-contain filter grayscale opacity-80"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

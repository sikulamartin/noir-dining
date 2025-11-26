import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  {
    id: 1,
    name: "Alexandre Dubois",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1780&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Elena Rossi",
    role: "Head Sommelier",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Sous Chef",
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?q=80&w=1887&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Sarah Jenkin",
    role: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=1787&auto=format&fit=crop"
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-noir-bg relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-noir-gold font-sans text-xs tracking-[0.2em] uppercase"
          >
            The Artisans
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-white mt-4 mb-8"
          >
            Culinary Excellence
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="font-sans text-noir-sub font-light text-lg leading-relaxed"
          >
            Our kitchen is a studio where tradition meets avant-garde innovation. Led by Chef Alexandre Dubois, we strive to transform the finest seasonal ingredients into edible art, respecting their origins while challenging the palate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-bg via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-xl text-white mb-1">{member.name}</h3>
                  <p className="font-sans text-noir-gold text-xs tracking-widest uppercase">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
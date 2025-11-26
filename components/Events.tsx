import React from 'react';
import { motion } from 'framer-motion';

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-noir-card relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-radial from-noir-gold/5 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row bg-noir-bg border border-white/5 overflow-hidden">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 p-12 flex flex-col justify-center"
          >
            <span className="text-noir-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">Upcoming Event</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Chef's Tasting Night</h2>
            <div className="flex items-center space-x-4 mb-6 text-noir-sub font-sans text-sm">
              <span className="border border-white/10 px-3 py-1">OCT 24</span>
              <span className="border border-white/10 px-3 py-1">20:00 PM</span>
            </div>
            <p className="font-sans text-noir-sub font-light mb-10 leading-relaxed">
              An exclusive 9-course journey exploring the depths of umami. Paired with rare vintages from our cellar. Limited to 12 seats for an intimate encounter with the culinary team.
            </p>
            <div>
              <button className="bg-white text-noir-bg px-8 py-3 font-sans text-sm font-medium tracking-widest uppercase hover:bg-noir-gold transition-colors duration-300">
                Book Experience
              </button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative h-64 md:h-auto"
          >
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
              alt="Chef Plating" 
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-noir-gold/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Events;
import React from 'react';
import { motion } from 'framer-motion';

const Atmosphere: React.FC = () => {
  return (
    <section id="atmosphere" className="py-24 bg-noir-card overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:w-1/2 md:pr-16 mb-12 md:mb-0 relative z-10"
          >
            <span className="block text-noir-gold font-sans text-xs tracking-[0.2em] uppercase mb-4">The Ambience</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Shadows & <br /> <span className="italic text-noir-sub">Silhouettes</span>
            </h2>
            <p className="font-sans text-noir-sub font-light text-lg leading-relaxed mb-8">
              Designed to be an escape from the ordinary. Our interior merges brutalist minimalism with warm, organic textures. Every corner creates a private moment.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
             className="md:w-1/2 relative"
          >
             <div className="relative aspect-[4/3] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1770&auto=format&fit=crop" 
                 alt="Restaurant Interior" 
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s]"
               />
               <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-noir-gold/50 hidden md:block" />
             </div>
          </motion.div>
        </div>

        {/* Row 2 (Reversed) */}
        <div className="flex flex-col md:flex-row-reverse items-center">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:w-1/2 md:pl-16 mb-12 md:mb-0 relative z-10"
          >
            <span className="block text-noir-gold font-sans text-xs tracking-[0.2em] uppercase mb-4">The Experience</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Intimate <br /> <span className="italic text-noir-sub">Dining</span>
            </h2>
            <p className="font-sans text-noir-sub font-light text-lg leading-relaxed mb-8">
              A sensory journey where lighting, sound, and taste converge. The perfect setting for those who appreciate the subtle details.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
             className="md:w-1/2 relative"
          >
             <div className="relative aspect-[4/3] overflow-hidden">
               <img 
                 src="https://images.squarespace-cdn.com/content/v1/5e00f3dc6288c25737f857ab/1726645971496-50333T4WQKR62Y868LUR/In+finity+poool+terrace+dinner+sunset.jpg?format=2500w" 
                 alt="Private Dining Table" 
                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-[2s]"
               />
                <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-noir-gold/50 hidden md:block" />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
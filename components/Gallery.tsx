import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://grandwesternsteaks.com/media/catalog/product/cache/c4a8b97347133f8bf6df5ac55676bb3c/s/h/shutterstock_1776899162.jpg",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1770&auto=format&fit=crop",
  "https://paleosnadno.cz/wp-content/uploads/2014/10/DSC0156.jpg",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1770&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1770&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1890&auto=format&fit=crop"
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-noir-bg relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <span className="text-noir-gold font-sans text-xs tracking-[0.2em] uppercase mb-4 block">The Visuals</span>
              <h2 className="font-serif text-4xl text-white">Visual Symphony</h2>
           </motion.div>
           <div className="hidden md:block">
              <span className="text-noir-sub text-sm font-sans">@NOIR_DINING</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden group aspect-square ${index === 1 || index === 4 ? 'md:aspect-[3/4] md:row-span-2' : ''}`}
            >
              <img 
                src={src} 
                alt="Gallery Item" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s] ease-in-out filter brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-sans text-xs tracking-widest uppercase border border-white/30 px-4 py-2">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
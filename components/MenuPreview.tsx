import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "Smoked Wagyu Tartare",
    description: "Caviar, quail egg, truffle emulsion.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1769&auto=format&fit=crop",
    price: "$32"
  },
  {
    id: 2,
    title: "Pan-Seared Scallops",
    description: "Cauliflower purée, saffron foam.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1770&auto=format&fit=crop",
    price: "$38"
  },
  {
    id: 3,
    title: "Black Cod Miso",
    description: "Yuzu glaze, pickled ginger root.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1769&auto=format&fit=crop",
    price: "$45"
  }
];

const MenuPreview: React.FC = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-noir-bg relative">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20 md:flex md:justify-between md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Signature Creations</h2>
            <p className="font-sans text-noir-sub text-sm tracking-widest uppercase">Crafted with passion. Presented with precision.</p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="hidden md:block"
          >
             <a href="#" className="text-noir-gold hover:text-white transition-colors duration-300 font-sans text-sm tracking-widest border-b border-noir-gold pb-1">VIEW FULL MENU</a>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative cursor-pointer"
            >
              {/* Image Container */}
              <div className="overflow-hidden aspect-[4/5] relative mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700"
                />
                
                {/* Glass Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                   <span className="text-white font-serif italic text-2xl tracking-wide">{item.price}</span>
                </div>
              </div>

              {/* Text */}
              <div className="relative">
                <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-noir-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-noir-sub font-light text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
                <div className="w-12 h-[1px] bg-noir-gold/30 mt-6 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 md:hidden text-center">
            <a href="#" className="text-noir-gold hover:text-white transition-colors duration-300 font-sans text-sm tracking-widest border-b border-noir-gold pb-1">VIEW FULL MENU</a>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  const features = [
    {
      title: "Foraging",
      description: "We scour the Scottish Highlands for wild herbs, mushrooms, and botanicals that define our terroir."
    },
    {
      title: "Sourcing",
      description: "Direct partnerships with ethical day-boat fishermen and sustainable heritage breed farmers."
    },
    {
      title: "Alchemy",
      description: "Applying molecular precision to ancient preservation techniques: fermentation, curing, and smoking."
    }
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-noir-bg relative border-b border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-noir-gold font-sans text-xs tracking-[0.2em] uppercase mb-4 block">Our Philosophy</span>
              <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
                Origin & <br /> <span className="italic text-zinc-500">Alchemy</span>
              </h2>
              <p className="font-sans text-noir-sub font-light text-lg leading-relaxed mb-8 border-l border-noir-gold pl-6">
                We believe that true luxury lies in the story behind every ingredient. Our kitchen is not just a place of cooking, but a laboratory where nature's raw chaos is refined into edible geometry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.6 }}
                >
                  <h3 className="text-white font-serif text-xl mb-3">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm font-sans leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Composition */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1770&auto=format&fit=crop" 
                alt="Plating detail" 
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            
            {/* Decorative parallax element */}
            <motion.div 
               className="absolute -top-12 -right-12 w-2/3 h-2/3 border border-noir-gold/30 z-0 hidden md:block"
               initial={{ y: 0 }}
               whileInView={{ y: 40 }}
               transition={{ duration: 2, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
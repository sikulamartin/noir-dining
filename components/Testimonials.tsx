import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    source: "The Culinary Times",
    quote: "A masterpiece of shadow and flavor. Noir redefines what it means to dine in the dark.",
    rating: "★★★★★"
  },
  {
    source: "Michelin Guide",
    quote: "Innovative, daring, and deeply atmospheric. The tasting menu is a narrative journey.",
    rating: "1 Star"
  },
  {
    source: "Modern Epicure",
    quote: "Not just a dinner, but a piece of performance art where the guest plays the lead role.",
    rating: "9.5/10"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-noir-card relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-noir-gold/50 to-transparent opacity-30" />
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-white mb-2"
          >
            Critical Acclaim
          </motion.h2>
          <div className="w-12 h-0.5 bg-noir-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center group"
            >
              <div className="text-noir-gold text-4xl font-serif mb-6 opacity-50">"</div>
              <p className="font-serif text-xl md:text-2xl text-white italic leading-relaxed mb-8 min-h-[120px]">
                {review.quote}
              </p>
              <div className="flex flex-col items-center">
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-noir-gold mb-2">{review.source}</span>
                <span className="text-white/40 text-sm font-light">{review.rating}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
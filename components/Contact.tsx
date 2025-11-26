import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-noir-bg relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">Reserve Your Moment</h2>
          <p className="font-sans text-noir-sub font-light text-lg mb-12">
            Experience the art of dining. For parties larger than 8, please contact us directly.
          </p>
          
          <a 
            href="#"
            className="inline-block bg-noir-gold text-noir-bg px-12 py-4 font-sans font-semibold tracking-widest uppercase text-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            Reserve Now
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 border-t border-white/10 pt-12">
            <div>
              <h4 className="font-serif text-xl text-white mb-4">Location</h4>
              <p className="font-sans text-noir-sub font-light text-sm leading-loose">
                124 Connaught Place<br />
                Edinburgh, EH2 4AY<br />
                United Kingdom
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl text-white mb-4">Hours</h4>
              <p className="font-sans text-noir-sub font-light text-sm leading-loose">
                Tue - Thu: 17:30 - 23:00<br />
                Fri - Sat: 17:00 - 00:00<br />
                Sun - Mon: Closed
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl text-white mb-4">Contact</h4>
              <p className="font-sans text-noir-sub font-light text-sm leading-loose">
                <a href="tel:+44123456789" className="hover:text-noir-gold transition-colors">+44 (0) 131 555 1234</a><br />
                <a href="mailto:reservations@noir.com" className="hover:text-noir-gold transition-colors">reservations@noir.com</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-noir-bg border-t border-white/5 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <span className="font-serif text-2xl font-bold text-white tracking-wider">NOIR<span className="text-noir-gold">.</span></span>
        </div>
        
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#" className="text-noir-sub hover:text-noir-gold transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-noir-sub hover:text-noir-gold transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-noir-sub hover:text-noir-gold transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-noir-sub text-xs font-sans tracking-wide">
            © 2024 NOIR Dining. All rights reserved.
          </p>
          <div className="mt-2 text-[10px] text-zinc-600 space-x-4">
             <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
             <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
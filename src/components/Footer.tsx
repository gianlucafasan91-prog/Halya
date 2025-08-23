import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-slate-400 text-sm text-center lg:text-left">
            © 2025 Halya — Tutti i diritti riservati · Questo è un mock dimostrativo.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-slate-400">
              <strong className="text-white">Contatti:</strong> Gianluca Fasan
            </span>
            <a 
              href="mailto:gianluca.fasan91@gmail.com" 
              className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              gianluca.fasan91@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
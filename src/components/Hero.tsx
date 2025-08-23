import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-8 border-b border-white/6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center py-16">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] mb-6 text-white">
              IA che <span className="text-teal-400">organizza</span> il lavoro del terapeuta — non lo sostituisce
            </h1>
            
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Registri o carichi la seduta. Halya sintetizza i punti chiave, struttura appunti e referti, 
              mantiene lo storico per obiettivi e scale, e ti permette di condividere il diario clinico 
              con il paziente in totale sicurezza.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => scrollToSection('dashboard')}
                className="bg-gradient-to-r from-teal-600 to-teal-400 text-white px-6 py-3 rounded-xl font-semibold shadow-xl shadow-black/25 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Guarda la dashboard
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('caratteristiche')}
                className="bg-gray-800 text-gray-200 px-6 py-3 rounded-xl font-semibold border border-white/8 hover:bg-gray-700 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Scopri come funziona
              </button>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2 text-center">
                <div className="text-teal-400 font-bold text-sm">-35%</div>
                <div className="text-slate-400 text-xs">tempo su note</div>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2 text-center">
                <div className="text-teal-400 font-bold text-sm">+1.5x</div>
                <div className="text-slate-400 text-xs">continuità</div>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2 text-center">
                <div className="text-orange-400 font-bold text-sm">1 click</div>
                <div className="text-slate-400 text-xs">Report</div>
              </div>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2 text-center">
                <div className="text-green-400 font-bold text-sm">Privacy</div>
                <div className="text-slate-400 text-xs">by-design</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="max-w-lg w-full transform scale-110">
              <img 
                src="/images/ChatGPT Image 22 ago 2025, 12_37_34.png" 
                alt="Halya - colibrì simbolo di precisione e agilità"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
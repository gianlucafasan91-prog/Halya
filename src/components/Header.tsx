import React from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/6">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 font-bold text-xl tracking-wide">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-600 to-teal-400 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-white">Halya</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('caratteristiche')}
              className="px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Caratteristiche
            </button>
            <button
              onClick={() => scrollToSection('dashboard')}
              className="px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Dashboard
            </button>
            <button
              onClick={() => scrollToSection('seduta')}
              className="px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Seduta
            </button>
            <button
              onClick={() => scrollToSection('diario')}
              className="px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Diario paziente
            </button>
            <button
              onClick={() => scrollToSection('sicurezza')}
              className="px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Sicurezza
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-teal-600 to-teal-400 text-white px-4 py-2.5 rounded-xl font-semibold shadow-xl shadow-black/25 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-105"
            >
              Richiedi una demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/6">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('caratteristiche')}
                className="text-left px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Caratteristiche
              </button>
              <button
                onClick={() => scrollToSection('dashboard')}
                className="text-left px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Dashboard
              </button>
              <button
                onClick={() => scrollToSection('seduta')}
                className="text-left px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Seduta
              </button>
              <button
                onClick={() => scrollToSection('diario')}
                className="text-left px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Diario paziente
              </button>
              <button
                onClick={() => scrollToSection('sicurezza')}
                className="text-left px-3 py-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Sicurezza
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-4 bg-gradient-to-r from-teal-600 to-teal-400 text-white px-4 py-2.5 rounded-xl font-semibold shadow-xl shadow-black/25 text-center"
              >
                Richiedi una demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
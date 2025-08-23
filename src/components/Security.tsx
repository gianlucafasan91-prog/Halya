import React from 'react';
import { Shield, Lock, UserCheck } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Cifratura end-to-end",
      description: "Archivio e scambi documentali cifrati per-tenant con controllo accessi e audit trail."
    },
    {
      icon: UserCheck,
      title: "Consensi granulari",
      description: "Gestione consenso informato, scelte di condivisione e revoca in autonomia del paziente."
    },
    {
      icon: Shield,
      title: "Validazione clinica",
      description: "Le analisi sono sempre validate dal professionista prima della pubblicazione nel diario."
    }
  ];

  return (
    <section id="sicurezza" className="py-20 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Sicurezza & privacy
          </h2>
          <p className="text-slate-400 text-lg">
            Halya è progettata per proteggere i tuoi dati e quelli dei pazienti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:bg-white/5 hover:border-white/10 text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-600/20 to-teal-400/20 border border-teal-400/30 rounded-2xl flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-teal-400" />
                  </div>
                </div>
                <h4 className="text-white font-semibold text-lg mb-4">
                  {feature.title}
                </h4>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Security;
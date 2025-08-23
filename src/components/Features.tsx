import React from 'react';
import { 
  FileText, 
  Target, 
  BarChart3, 
  Lock, 
  Share2, 
  Shield, 
  RefreshCw 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "Registrazione & trascrizione",
      description: "Registra o importa le sedute. Trascrizioni accurate con evidenziazione di momenti salienti e marcatori temporali."
    },
    {
      icon: Target,
      title: "Riassunti & note strutturate",
      description: "Outline automatico (stato, insight, piano). Tutto è modificabile e riutilizzabile come referto."
    },
    {
      icon: BarChart3,
      title: "Storico per obiettivi e scale",
      description: "Timeline di obiettivi, temi e scale (PHQ-9, GAD-7, ecc.) con andamento nel tempo."
    },
    {
      icon: Lock,
      title: "Diario clinico condiviso",
      description: "Condivisione selettiva con il paziente: decidi tu cosa e quando pubblicare nel diario."
    },
    {
      icon: Share2,
      title: "Export & condivisione sicura",
      description: "Report PDF, invio cifrato e tracciato. Perfetto per passaggi di consegne o second opinion."
    },
    {
      icon: Shield,
      title: "Privacy by-design",
      description: "Consensi granulari, crittografia per-tenant, audit trail. Le decisioni cliniche restano al professionista."
    },
    {
      icon: RefreshCw,
      title: "Interazione terapeuta–IA",
      description: "Il terapeuta, modificando e integrando le analisi di Halya, permette al sistema di imparare e migliorare nel tempo, rendendo gli output sempre più personalizzati allo stile clinico del professionista."
    }
  ];

  return (
    <section id="caratteristiche" className="py-20 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Perché Halya è utile ai terapeuti
          </h2>
          <p className="text-slate-400 text-lg">
            Riduci la burocrazia, aumenta la qualità clinica, mantieni il controllo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-6 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:bg-white/5 hover:border-white/10"
              >
                <div className="mb-4">
                  <IconComponent className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {feature.title}
                </h3>
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

export default Features;
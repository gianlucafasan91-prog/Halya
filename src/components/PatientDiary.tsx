import React from 'react';
import { Heart, CheckCircle, Clock, Star } from 'lucide-react';

const PatientDiary = () => {
  return (
    <section id="diario" className="py-20 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Diario paziente — vista condivisa
          </h2>
          <p className="text-slate-400 text-lg">
            Esempio di ciò che il paziente vede dopo la validazione del terapeuta.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-6 shadow-xl shadow-black/10">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-400" />
                Analisi del percorso (condivisa)
              </h4>
              <ul className="text-slate-300 space-y-2 text-sm list-disc list-inside">
                <li><strong className="text-white">Umore</strong>: progressivo miglioramento (PHQ-9 14→8).</li>
                <li><strong className="text-white">Gestione ansia</strong>: tecniche di grounding e journaling utili; ruminazione serale ↓.</li>
                <li><strong className="text-white">Relazioni</strong>: aumento assertività; 2 interazioni sociali/sett. mantenute.</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-5 shadow-xl shadow-black/10">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  Insight in corso
                </h4>
                <ul className="text-slate-300 space-y-2 text-sm list-disc list-inside">
                  <li>Autocritica elevata nei momenti di stress.</li>
                  <li>Gestione richieste extra-lavoro.</li>
                </ul>
              </div>
              
              <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-5 shadow-xl shadow-black/10">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Insight risolti
                </h4>
                <ul className="text-slate-300 space-y-2 text-sm list-disc list-inside">
                  <li>Ruminazione notturna (remissione parziale).</li>
                  <li>Evitamento sociale livello 3–4.</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-400/20 rounded-2xl p-6 shadow-xl shadow-black/10">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Messaggio motivazionale
              </h4>
              <p className="text-green-100">
                🎉 <strong>Ottimo lavoro!</strong> Nelle ultime 4 settimane hai mantenuto le attività gratificanti 
                e comunicato i tuoi limiti in modo rispettoso. Ricorda: <em>progressi, non perfezione</em>. 
                I piccoli passi costanti costruiscono risultati duraturi.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-6 shadow-xl shadow-black/10">
              <h4 className="text-white font-semibold mb-4">Storico sedute (condiviso)</h4>
              <ul className="text-slate-300 space-y-2 text-sm list-disc list-inside">
                <li>26/09 — Assertività al lavoro (role-play)</li>
                <li>19/09 — Ruminazione serale & igiene del sonno</li>
                <li>12/09 — Autocritica: ABC pensiero</li>
              </ul>
            </div>
            
            <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-6 shadow-xl shadow-black/10">
              <h4 className="text-white font-semibold mb-4">Prossimi passi (dal terapeuta)</h4>
              <ol className="text-slate-300 space-y-2 text-sm list-decimal list-inside">
                <li>Esercizio "script del no" in una situazione reale, riflessione post-evento.</li>
                <li>BA: due attività piacevoli (mar/sab).</li>
                <li>Routine pre-sonno: 30′ senza schermi + "parcheggio pensieri".</li>
              </ol>
              <p className="text-slate-500 text-xs mt-4">
                Nota: le indicazioni hanno finalità di supporto e non sostituiscono il giudizio clinico del professionista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientDiary;
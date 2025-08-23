import React from 'react';
import { User, Lightbulb, Target } from 'lucide-react';

const SessionDetail = () => {
  return (
    <section id="seduta" className="py-20 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Dettaglio seduta — 26/09/2025 (Luca Bianchi)
          </h2>
          <p className="text-slate-400 text-lg">
            Estratto completo e strutturato: trascrizione, insight rilevati e suggerimenti azionabili (con citazioni).
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-6">
          {/* Left Column - Transcript */}
          <div>
            <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-6 shadow-xl shadow-black/10">
              <h4 className="text-white font-semibold mb-6">Trascrizione (estratti estesi)</h4>
              
              <div className="bg-slate-900/50 rounded-xl p-4 max-h-80 overflow-auto space-y-4">
                {/* Transcript Messages */}
                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-slate-800 border border-white/6 rounded-xl p-3 flex-1">
                    <div className="text-white font-medium mb-1">Paziente</div>
                    <div className="text-blue-100 text-sm">
                      «Questa settimana ho detto "no" a una richiesta extra del collega. 
                      Subito dopo ho pensato: "Ora mi considereranno poco collaborativo".»
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 bg-slate-800 rounded"></div>
                  </div>
                  <div className="bg-slate-800 border border-white/6 rounded-xl p-3 flex-1">
                    <div className="text-white font-medium mb-1">Terapeuta</div>
                    <div className="text-blue-100 text-sm">
                      «Qual è la prova a favore e contro questa previsione? Che cosa è realmente accaduto?»
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-slate-800 border border-white/6 rounded-xl p-3 flex-1">
                    <div className="text-white font-medium mb-1">Paziente</div>
                    <div className="text-blue-100 text-sm">
                      «Il collega ha detto che aveva capito e ha chiesto a Marco. 
                      In effetti non è successo nulla di negativo.»
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-slate-800 border border-white/6 rounded-xl p-3 flex-1">
                    <div className="text-white font-medium mb-1">Ristrutturazione</div>
                    <div className="text-blue-100 text-sm">
                      da «Se non aiuto sempre ⇒ deludo» a «Posso aiutare quando è sostenibile e chiaro, 
                      comunicando limiti in modo rispettoso».
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Insights & Suggestions */}
          <div className="space-y-6">
            <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-6 shadow-xl shadow-black/10">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-orange-400" />
                Insight rilevati
              </h4>
              <ul className="text-slate-300 space-y-2 text-sm list-disc list-inside">
                <li>Distorsioni: <em>catastrofizzazione</em>, <em>lettura del pensiero</em>, <em>doverizzazioni</em>.</li>
                <li>Trigger: interruzioni del capo; richieste urgenti fuori priorità.</li>
                <li>Risposte efficaci: respirazione diaframmatica 2×/die; journaling; script assertivo.</li>
              </ul>
            </div>

            <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-6 shadow-xl shadow-black/10">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-400" />
                Suggerimenti azionabili
              </h4>
              <ol className="text-slate-300 space-y-3 text-sm list-decimal list-inside">
                <li>
                  <strong className="text-white">Role-play assertivo</strong> con registrazione audio; 
                  revisione feedback in seduta successiva.
                  <div className="inline-block bg-slate-800 px-2 py-1 rounded-full text-xs text-slate-400 ml-2">
                    Beck, 1979
                  </div>
                </li>
                <li>
                  <strong className="text-white">Behavioral Activation</strong>: 2 attività gratificanti/sett. 
                  (camminata, contatto sociale).
                  <div className="inline-block bg-slate-800 px-2 py-1 rounded-full text-xs text-slate-400 ml-2">
                    Dimidjian et al., 2014
                  </div>
                </li>
                <li>
                  <strong className="text-white">Sleep hygiene</strong> + limitare ruminazione serale 
                  (tecnica "parcheggio pensieri").
                  <div className="inline-block bg-slate-800 px-2 py-1 rounded-full text-xs text-slate-400 ml-2">
                    Carney et al., 2017
                  </div>
                </li>
              </ol>
              <p className="text-slate-500 text-xs mt-4">
                Riferimenti esemplificativi: Beck A.T. (1979); Dimidjian S. et al. (2014); 
                Carney C.E. et al. (2017); linee guida NICE (2022).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionDetail;
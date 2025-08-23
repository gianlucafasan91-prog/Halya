import React from 'react';
import { Calendar, CheckCircle, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-20 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Esempio di dashboard — vista terapeuta
          </h2>
          <p className="text-slate-400 text-lg">
            Paziente fittizio: <strong className="text-white">Luca Bianchi</strong> (in carico dal 2024-11). 
            Di seguito un estratto verosimile dei contenuti.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Summary */}
            <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-6 shadow-xl shadow-black/10">
              <div className="flex items-start justify-between gap-4 mb-6">
                <h4 className="text-white font-semibold text-lg">Riassunto percorso</h4>
                <div className="bg-gray-800 border border-white/8 rounded-lg px-3 py-1 text-xs text-slate-400">
                  PHQ-9: 14→8 · GAD-7: 12→7 · Ultimo accesso: 18/09
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li><strong className="text-white">Umore</strong> in miglioramento; ridotta ruminazione serale.</li>
                    <li><strong className="text-white">Assertività</strong>: script "no" usato 3/5 occasioni, ansia anticipatoria ↓.</li>
                    <li><strong className="text-white">Relazioni</strong>: meno evitamento; 2 attività sociali/sett.</li>
                    <li><strong className="text-white">Sonno</strong>: latenza addormentamento −18′; igiene del sonno mantenuta.</li>
                  </ul>
                </div>
                <div>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li><strong className="text-white">Fattori di mantenimento</strong>: autocritica; sovraccarico al lavoro.</li>
                    <li><strong className="text-white">Leve efficaci</strong>: journaling, grounding 5′ × 2/die, esposizioni graduali.</li>
                    <li><strong className="text-white">Obiettivi Q4</strong>: stabilizzare sonno, consolidare assertività, BA 2×/sett.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Insights Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-5 shadow-xl shadow-black/10">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Insight risolti
                </h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>Ruminazione notturna — <span className="text-green-400">remissione parziale</span> (igiene del sonno + journaling).</li>
                  <li>Evitamento sociale — <span className="text-green-400">completate</span> esposizioni livello 3–4.</li>
                </ul>
              </div>
              
              <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-5 shadow-xl shadow-black/10">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-400" />
                  Insight da monitorare
                </h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li>Autocritica schema "tutto o nulla" — <span className="text-orange-400">in trattamento</span>.</li>
                  <li>Stress da scadenze multiple — pianificazione settimanale + coping.</li>
                </ul>
              </div>
            </div>

            {/* Next Session Plan */}
            <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-6 shadow-xl shadow-black/10">
              <h4 className="text-white font-semibold mb-4">Dettagli prossima seduta (piano)</h4>
              <ol className="text-slate-300 space-y-2 text-sm list-decimal list-inside">
                <li><strong className="text-white">Role-play</strong> assertività con collega A; riassegnare compiti senza scusarsi.</li>
                <li><strong className="text-white">Behavioral activation</strong>: attività gratificanti mar/sab (30′ camminata + chiamata amico).</li>
                <li><strong className="text-white">Ristrutturazione</strong>: rivedere ABC pensiero del 18/09.</li>
              </ol>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Emotional Chart */}
            <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-6 shadow-xl shadow-black/10">
              <h4 className="text-white font-semibold mb-4">Andamento emozionale (ult. 8 settimane)</h4>
              <div className="bg-slate-900/80 rounded-lg p-4 mb-4">
                <svg viewBox="0 0 420 160" className="w-full h-40" preserveAspectRatio="xMidYMid meet">
                  <rect x="0" y="0" width="420" height="160" fill="#0a1324" rx="10" />
                  <g stroke="#374151" strokeWidth="1">
                    {[40, 85, 130, 175, 220, 265, 310, 355].map((x, i) => (
                      <line key={i} x1={x} y1="20" x2={x} y2="140" />
                    ))}
                  </g>
                  <path 
                    d="M40 110 L85 110 L130 100 L175 100 L220 90 L265 90 L310 80 L355 80" 
                    fill="none" 
                    stroke="#74C0C4" 
                    strokeWidth="2.5"
                  />
                  {[
                    [40, 110], [85, 110], [130, 100], [175, 100],
                    [220, 90], [265, 90], [310, 80], [355, 80]
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="4" fill="#FFC857" />
                  ))}
                  <text x="10" y="18" fill="#9fb3d1" fontSize="12">alto</text>
                  <text x="10" y="140" fill="#9fb3d1" fontSize="12">basso</text>
                </svg>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full">
                  <div className="w-2.5 h-2.5 bg-teal-400 rounded-full"></div>
                  <span className="text-slate-300 text-xs">Ansia</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full">
                  <div className="w-2.5 h-2.5 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300 text-xs">Punti chiave</span>
                </div>
                <div className="bg-slate-800 px-3 py-1 rounded-full text-slate-300 text-xs">PHQ-9 14→8</div>
                <div className="bg-slate-800 px-3 py-1 rounded-full text-slate-300 text-xs">GAD-7 12→7</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sessions History */}
        <div className="mt-8">
          <div className="bg-white/3 backdrop-blur border border-white/6 rounded-2xl p-6 shadow-xl shadow-black/10">
            <h4 className="text-white font-semibold mb-4">Storico sedute (cliccabili)</h4>
            <div className="space-y-3">
              {[
                { date: '26/09/2025', title: 'Assertività al lavoro (role-play)', status: 'validata', statusColor: 'bg-green-400/20 text-green-300' },
                { date: '19/09/2025', title: 'Ruminazione serale & igiene del sonno', status: 'validata', statusColor: 'bg-green-400/20 text-green-300' },
                { date: '12/09/2025', title: 'Autocritica: ABC pensiero', status: 'da rivedere', statusColor: 'bg-orange-400/20 text-orange-300' }
              ].map((session, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-900/50 border border-white/6 rounded-xl hover:bg-slate-900/70 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <div>
                      <span className="text-white font-medium">{session.date}</span>
                      <span className="text-slate-400 ml-2">— {session.title}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${session.statusColor} border border-current/20`}>
                    {session.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
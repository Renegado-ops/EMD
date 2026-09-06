import React from 'react';

interface SystemMetricsWidgetProps {
  isDarkMode: boolean;
  t?: any;
}

export const SystemMetricsWidget: React.FC<SystemMetricsWidgetProps> = ({ isDarkMode, t }) => {
  // Verificamos si estamos en inglés (por una de las traducciones globales) para cambiar el texto manual
  const isEn = t?.nav?.about === 'About Us';
  const isFr = t?.nav?.about === 'À propos';

  return (
    <div className={`p-5 rounded-2xl border h-full flex flex-col justify-between transition-all ${
      isDarkMode 
        ? 'bg-[#151d2a]/90 border-slate-700/80 text-slate-200 shadow-xl' 
        : 'bg-white border-slate-300 text-slate-800 shadow-sm'
    }`}>
      <div>
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-700/40">
          <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-teal-400">
            // {isEn ? 'STATUS & METRICS' : isFr ? 'STATUT & MÉTRIQUES' : 'ESTADO & MÉTRICAS'}
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-teal-400 text-xs">●</span>
              <h4 className="text-xs font-bold">
                {isEn ? 'Systems 100% Operational' : isFr ? 'Systèmes 100% Opérationnels' : 'Sistemas 100% Operativos'}
              </h4>
            </div>
            <p className={`text-[10px] pl-3.5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              {isEn ? 'Globally distributed Edge servers' : isFr ? 'Serveurs Edge distribués mondialement' : 'Servidores Edge distribuidos globalmente'}
            </p>
          </div>

          <div className="space-y-1.5 pt-2">
            <div className="flex justify-between text-[11px] font-mono">
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                {isEn ? 'Performance (Lighthouse)' : isFr ? 'Performance (Lighthouse)' : 'Rendimiento (Lighthouse)'}
              </span>
              <span className="text-teal-400 font-bold">100/100</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-teal-400 rounded-full w-[100%]" />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-mono">
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                {isEn ? 'Avg. Load Time' : isFr ? 'Temps de Charge Moyen' : 'Tiempo de Carga Promedio'}
              </span>
              <span className="text-teal-400 font-bold">&lt; 0.6s</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-sky-400 rounded-full w-[95%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-700/40">
        <span className="text-[9px] font-mono uppercase tracking-widest block text-slate-400 mb-2 font-semibold">
          {isEn ? 'EMD CERTIFIED STACK' : isFr ? 'STACK CERTIFIÉ EMD' : 'STACK CERTIFICADO EMD'}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {['React', 'Tailwind', 'TypeScript', 'Node.js'].map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[9px] font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
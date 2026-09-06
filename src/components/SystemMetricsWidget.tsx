import React from 'react';

interface SystemMetricsWidgetProps {
  isDarkMode?: boolean;
}

export const SystemMetricsWidget: React.FC<SystemMetricsWidgetProps> = ({ isDarkMode = true }) => {
  return (
    <div
      className={`p-6 rounded-2xl border flex flex-col justify-between h-full transition-all duration-300 ${
        isDarkMode
          ? 'bg-[#151d2a]/90 border-slate-700/60 shadow-lg'
          : 'bg-[#f8fafc] border-slate-300 shadow-sm'
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3
          className={`text-sm font-bold font-mono uppercase tracking-wider ${
            isDarkMode ? 'text-slate-300' : 'text-slate-800'
          }`}
        >
          Estado & Métricas
        </h3>
        <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>

      <div className="space-y-6">
        {/* MÉTRICA 1: ESTADO DEL SERVIDOR CON LUZ PARPADEANTE */}
        <div>
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <span className="absolute w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75"></span>
            </div>
            <span className={`text-xs font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Sistemas 100% Operativos
            </span>
          </div>
          <p className={`text-[10px] pl-5 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Servidores Edge distribuidos globalmente.
          </p>
        </div>

        {/* MÉTRICA 2: RENDIMIENTO (LIGHTHOUSE) */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className={`text-[11px] font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Performance (Lighthouse)
            </span>
            <span className="text-[10px] font-mono text-teal-400 font-bold">100/100</span>
          </div>
          <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-700/50' : 'bg-slate-200'}`}>
            <div className="w-full h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
          </div>
        </div>

        {/* MÉTRICA 3: TIEMPO DE RESPUESTA */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className={`text-[11px] font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Tiempo de Carga Promedio
            </span>
            <span className="text-[10px] font-mono text-teal-400 font-bold">&lt; 0.6s</span>
          </div>
          <div className={`w-full h-1.5 rounded-full overflow-hidden ${isDarkMode ? 'bg-slate-700/50' : 'bg-slate-200'}`}>
            <div className="w-[90%] h-full bg-gradient-to-r from-teal-500 to-sky-400 rounded-full"></div>
          </div>
        </div>

        {/* MÉTRICA 4: STACK TECNOLÓGICO (ETIQUETAS) */}
        <div className={`pt-4 border-t ${isDarkMode ? 'border-slate-700/80' : 'border-slate-300'}`}>
          <span className={`text-[9px] font-mono uppercase tracking-widest block mb-3 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Stack Certificado EMD
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="text-[9px] font-mono font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/30 px-2 py-1 rounded-md">
              React
            </span>
            <span className="text-[9px] font-mono font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/30 px-2 py-1 rounded-md">
              Tailwind
            </span>
            <span className="text-[9px] font-mono font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/30 px-2 py-1 rounded-md">
              TypeScript
            </span>
            <span className="text-[9px] font-mono font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/30 px-2 py-1 rounded-md">
              Node.js
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
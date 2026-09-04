interface PortfolioSectionProps {
  isDarkMode: boolean;
  t: {
    title: string;
    subtitle: string;
    viewLive: string;
    viewProject: string;
    item1Title: string;
    item1Tag: string;
    item1Desc: string;
    item2Title: string;
    item2Tag: string;
    item2Desc: string;
    item3Title: string;
    item3Tag: string;
    item3Desc: string;
  };
}

export const PortfolioSection = ({ isDarkMode, t }: PortfolioSectionProps) => {
  const projects = [
    {
      id: 'rebeccart',
      title: t.item1Title,
      tag: t.item1Tag,
      description: t.item1Desc,
      url: 'https://rebeccart.vercel.app/',
      isLive: true,
      accentColor: 'from-teal-500/20 to-emerald-500/20',
    },
    {
      id: 'nova',
      title: t.item2Title,
      tag: t.item2Tag,
      description: t.item2Desc,
      url: 'https://nova-boutique-mauve.vercel.app/',
      isLive: true,
      accentColor: 'from-sky-500/20 to-amber-900/20',
    },
    {
      id: 'studio-arch',
      title: t.item3Title,
      tag: t.item3Tag,
      description: t.item3Desc,
      url: 'https://studioarch-xi.vercel.app/',
      isLive: true,
      accentColor: 'from-slate-500/20 to-teal-500/20',
    },
  ];

  return (
    <section id="portafolio" className="py-12 border-t border-slate-800/40">
      <div className="mb-8">
        <span className="text-teal-500 font-mono text-xs uppercase tracking-widest block font-bold mb-1">
          // PORTAFOLIO EMD
        </span>
        <h2 className={`text-2xl md:text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          {t.title}
        </h2>
        <p className={`text-xs md:text-sm mt-1 max-w-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`border rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group ${
              isDarkMode
                ? 'bg-[#151d2a]/90 border-slate-700/60 hover:border-teal-400/50'
                : 'bg-white border-slate-300 shadow-sm hover:border-teal-600'
            }`}
          >
            <div>
              {/* VISTA PREVIA VISUAL DE TARJETA */}
              <div
                className={`h-40 rounded-xl mb-4 bg-gradient-to-br ${project.accentColor} border ${
                  isDarkMode ? 'border-slate-700/50' : 'border-slate-200'
                } flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform`}
              >
                <div className="w-full h-full rounded-lg bg-[#0b111e]/80 border border-slate-700/80 p-3 flex flex-col justify-between shadow-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400/80"></span>
                      <span className="w-2 h-2 rounded-full bg-yellow-400/80"></span>
                      <span className="w-2 h-2 rounded-full bg-green-400/80"></span>
                    </div>
                    {project.isLive && (
                      <span className="text-[9px] font-mono bg-teal-500/20 text-teal-400 border border-teal-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                        LIVE DEMO
                      </span>
                    )}
                  </div>
                  <div className="text-center my-auto">
                    <span className="font-bold text-sm text-slate-100 tracking-wide block">
                      {project.title}
                    </span>
                    <span className="text-[10px] text-teal-300/80 font-mono">
                      {project.url.replace('https://', '').replace('/', '')}
                    </span>
                  </div>
                </div>
              </div>

              {/* TÍTULO Y DESCRIPCIÓN */}
              <span className="text-[10px] font-mono font-semibold text-teal-500 uppercase tracking-wider block mb-1">
                {project.tag}
              </span>
              <h3 className={`text-base font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {project.title}
              </h3>
              <p className={`text-xs leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {project.description}
              </p>
            </div>

            {/* BOTÓN DE ACCIÓN */}
            {project.isLive ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-teal-500 text-[#0b111e] font-bold text-xs text-center hover:bg-teal-400 transition-all shadow-[0_0_12px_rgba(20,184,166,0.3)] flex items-center justify-center gap-2"
              >
                <span>{t.viewLive}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ) : (
              <button
                disabled
                className={`w-full py-2.5 rounded-xl font-semibold text-xs text-center border cursor-not-allowed opacity-60 ${
                  isDarkMode ? 'border-slate-700 text-slate-500' : 'border-slate-300 text-slate-400'
                }`}
              >
                {t.viewProject} (Próximamente)
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
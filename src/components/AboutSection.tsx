interface AboutSectionProps {
  isDarkMode: boolean;
  t: {
    tag: string;
    title: string;
    description1: string;
    description2: string;
    pillar1: string;
    pillar1Desc: string;
    pillar2: string;
    pillar2Desc: string;
    pillar3: string;
    pillar3Desc: string;
  };
}

export const AboutSection = ({ isDarkMode, t }: AboutSectionProps) => {
  return (
    <section id="about" className="py-12 border-t border-slate-800/40 scroll-mt-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        
        {/* COLUMNA IZQUIERDA: Textos de persuasión */}
        <div className="flex-1 w-full">
          <span className="text-teal-500 font-mono text-xs uppercase tracking-widest block font-bold mb-3">
            // {t.tag}
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            {t.title}
          </h2>
          
          <div className={`space-y-4 text-sm leading-relaxed border-l-2 border-teal-500 pl-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            <p>{t.description1}</p>
            <p>{t.description2}</p>
          </div>
        </div>

        {/* COLUMNA DERECHA: Los 3 Pilares (Grilla de valores) */}
        <div className="flex-1 w-full grid gap-4">
          
          {/* Pilar 1 */}
          <div className={`p-5 rounded-2xl border transition-all hover:-translate-y-1 ${
            isDarkMode ? 'bg-slate-800/30 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className={`font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{t.pillar1}</h3>
            </div>
            <p className={`text-xs pl-11 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>{t.pillar1Desc}</p>
          </div>

          {/* Pilar 2 */}
          <div className={`p-5 rounded-2xl border transition-all hover:-translate-y-1 ${
            isDarkMode ? 'bg-slate-800/30 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              </div>
              <h3 className={`font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{t.pillar2}</h3>
            </div>
            <p className={`text-xs pl-11 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>{t.pillar2Desc}</p>
          </div>

          {/* Pilar 3 */}
          <div className={`p-5 rounded-2xl border transition-all hover:-translate-y-1 ${
            isDarkMode ? 'bg-slate-800/30 border-slate-700/60' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <h3 className={`font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{t.pillar3}</h3>
            </div>
            <p className={`text-xs pl-11 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>{t.pillar3Desc}</p>
          </div>

        </div>
      </div>
    </section>
  );
};
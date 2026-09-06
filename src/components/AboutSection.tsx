import React from 'react';

interface AboutSectionProps {
  isDarkMode?: boolean;
  t?: any;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isDarkMode = true, t }) => {
  const defaultFeatures = [
    {
      id: 'engineering',
      title: t?.pillar1 || 'Ingeniería a Medida',
      desc: t?.pillar1Desc || 'No usamos plantillas lentas. Desarrollamos desde cero para garantizar velocidad y seguridad.',
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'design',
      title: t?.pillar2 || 'Diseño Funcional',
      desc: t?.pillar2Desc || 'Estética minimalista orientada a la conversión y experiencia del usuario (UX/UI).',
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      id: 'support',
      title: t?.pillar3 || 'Soporte Continuo',
      desc: t?.pillar3Desc || 'Acompañamiento técnico constante. Tu plataforma siempre en línea y optimizada.',
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="nosotros" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* COLUMNA IZQUIERDA */}
        <div className="lg:col-span-6 space-y-6">
          <div className="border-l-2 border-teal-500 pl-4">
            <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block font-bold mb-1">
              // {t?.tag || 'IDENTIDAD CORPORATIVA'}
            </span>
            <h2 className={`text-3xl md:text-5xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {t?.title1 || 'Tu aliado tecnológico'}{' '}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-indigo-400">
                {t?.titleHighlight || 'estratégico.'}
              </span>
            </h2>
          </div>

          <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {t?.description1 || 'Creemos que la tecnología debe ser un motor de crecimiento...'}
          </p>

          <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
            {t?.description2 || 'Nos encargamos de la arquitectura del código...'}
          </p>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="lg:col-span-6 space-y-4">
          {defaultFeatures.map((feat) => (
            <div
              key={feat.id}
              className={`p-5 rounded-2xl border transition-all duration-300 group flex items-start gap-4 ${
                isDarkMode
                  ? 'bg-[#151d2a]/80 border-slate-700/60 hover:border-teal-400/50 hover:bg-[#151d2a]'
                  : 'bg-white border-slate-200 hover:border-teal-600 shadow-sm'
              }`}
            >
              <div className="p-3 bg-[#0b111e] border border-slate-700/80 rounded-xl group-hover:border-teal-500/50 transition-colors shrink-0">
                {feat.icon}
              </div>
              <div>
                <h3 className={`text-base font-bold mb-1 group-hover:text-teal-400 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {feat.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
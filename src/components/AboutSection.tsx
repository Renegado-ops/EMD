interface AboutSectionProps {
  isDarkMode?: boolean;
  t?: any;
}

export const AboutSection = ({ isDarkMode = true, t }: AboutSectionProps) => {
  const defaultFeatures = [
    {
      id: 'engineering',
      title: 'Ingeniería a Medida',
      desc: 'No usamos plantillas lentas. Desarrollamos desde cero para garantizar velocidad extrema y seguridad.',
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'design',
      title: 'Diseño Funcional',
      desc: 'Estética minimalista orientada a la conversión de clientes y una experiencia de usuario (UX/UI) fluida.',
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      id: 'support',
      title: 'Soporte Continuo',
      desc: 'Acompañamiento técnico constante. Tu plataforma siempre en línea, protegida y optimizada.',
      icon: (
        <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="nosotros" className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* COLUMNA IZQUIERDA: MENSAJE PRINCIPAL DE LA AGENCIA */}
        <div className="lg:col-span-6 space-y-6">
          <div className="border-l-2 border-teal-500 pl-4">
            <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block font-bold mb-1">
              // IDENTIDAD CORPORATIVA
            </span>
            <h2 className={`text-3xl md:text-5xl font-black tracking-tight leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Tu aliado tecnológico <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-indigo-400">
                estratégico.
              </span>
            </h2>
          </div>

          <p className={`text-sm md:text-base leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Creemos que la tecnología debe ser un motor de crecimiento, no un dolor de cabeza. EMD nace con la visión de ofrecer soluciones digitales de nivel ejecutivo a empresas y emprendedores que buscan escalar su presencia en internet sin complicaciones.
          </p>

          <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>
            Nos encargamos de la arquitectura del código, la infraestructura de servidores y la estética visual. Tú pones la visión de negocio, nosotros construimos el ecosistema para hacerlo realidad.
          </p>
        </div>

        {/* COLUMNA DERECHA: TARJETAS DE PROPUESTA DE VALOR */}
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
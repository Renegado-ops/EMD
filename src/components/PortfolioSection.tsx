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
      accentColor: 'from-amber-900/40 to-stone-900/60',
    },
    {
      id: 'nova',
      title: t.item2Title,
      tag: t.item2Tag,
      description: t.item2Desc,
      url: 'https://nova-boutique-mauve.vercel.app/',
      isLive: true,
      accentColor: 'from-[#79a3c3]/30 to-[#3a2119]/40',
    },
    {
      id: 'studio-arch',
      title: t.item3Title,
      tag: t.item3Tag,
      description: t.item3Desc,
      url: 'https://studioarch-xi.vercel.app/',
      isLive: true,
      accentColor: 'from-teal-500/20 to-slate-900/60',
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
              {/* MARCO VIRTUAL DE NAVEGADOR Y MINI-PORTADA REALISTA */}
              <div className="h-52 rounded-xl mb-5 bg-[#0b111e] border border-slate-700/80 p-2.5 flex flex-col justify-between shadow-lg relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                {/* BARRA SUPERIOR DEL NAVEGADOR */}
                <div className="flex justify-between items-center mb-2 z-20">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400/80"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-400/80"></span>
                    <span className="w-2 h-2 rounded-full bg-green-400/80"></span>
                  </div>
                  {project.isLive && (
                    <span className="text-[9px] font-mono bg-teal-500/20 text-teal-400 border border-teal-500/40 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                      LIVE DEMO
                    </span>
                  )}
                </div>

                {/* CONTENIDO MINI PORTADA SEGÚN PROYECTO */}
                <div className="w-full h-full rounded-lg overflow-hidden relative border border-slate-800">
                  {/* 1. PORTADA REBECCART (ILUSTRACIÓN VECTORIAL DEL SOMBRERO GARANTIZADA SIN ERRORES) */}
                  {project.id === 'rebeccart' && (
                    <div className="w-full h-full bg-[#392f28] flex text-[#f5efe6] relative overflow-hidden font-serif">
                      {/* ENCABEZADO VERDE OLIVA SUPERIOR */}
                      <div className="absolute top-0 left-0 w-full bg-[#2a362b] px-2.5 py-1.5 flex justify-between items-center text-[7px] border-b border-[#3d4d3e] z-20">
                        <span className="font-serif font-bold tracking-widest text-[#d8c29d] text-[9px]">
                          REBECCART
                        </span>
                        <div className="flex gap-1.5 text-[6px] font-sans text-amber-100/80 font-semibold uppercase tracking-wider">
                          <span className="text-amber-200 underline">TODOS</span>
                          <span>DEPORTIVOS</span>
                          <span>INICIALES</span>
                          <span>FLORALES</span>
                          <span>TEMÁTICOS</span>
                        </div>
                      </div>

                      {/* LADO IZQUIERDO: TEXTO DE COLECCIÓN */}
                      <div className="w-[52%] pt-7 p-2.5 flex flex-col justify-between z-10 my-auto">
                        <div className="space-y-0.5">
                          <span className="text-[5.5px] font-sans uppercase tracking-widest text-[#cba980] block font-medium">
                            COLECCIÓN ATELIER · EDICIÓN LIMITADA
                          </span>
                          <h4 className="font-serif text-xs md:text-sm font-normal leading-tight text-[#fdfbf7]">
                            Elegancia en <br />
                            <span className="font-semibold">Cada Detalle</span>
                          </h4>
                          <p className="text-[4.8px] text-[#cfc2b2] font-sans leading-tight line-clamp-2 max-w-[95%] opacity-85 my-0.5">
                            Sombreros moldeados a mano en nuestro taller, con fieltro de lana merina y paja panamá.
                          </p>
                          <div className="pt-1">
                            <span className="bg-white text-[#2b221b] text-[6.5px] font-sans font-bold px-2 py-0.5 rounded-sm shadow-sm inline-block">
                              EXPLORAR COLECCIÓN →
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* LADO DERECHO: EXHIBICIÓN DEL SOMBRERO (PAMELA DE RAFIA EN BEIGE CÁLIDO) */}
                      <div className="w-[48%] pt-5 h-full bg-[#f4ece1] flex flex-col items-center justify-center p-2 relative overflow-hidden border-l border-[#5a4d3e]/30">
                        {/* Vector de Pamela Rafia & Lazo */}
                        <svg className="w-full h-auto max-h-[100px] drop-shadow-md" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="100" cy="98" rx="85" ry="10" fill="#000000" fillOpacity="0.1" />
                          <path d="M10 90C10 90 45 76 100 76C155 76 190 90 190 90C190 90 160 100 100 100C40 100 10 90 10 90Z" fill="#e2c8a2" stroke="#c4a57b" strokeWidth="1.5" />
                          <path d="M62 80C60 48 72 24 100 24C128 24 140 48 138 80Z" fill="#edd9bc" stroke="#c4a57b" strokeWidth="1.5" />
                          <path d="M85 27C92 32 108 32 115 27" stroke="#be9a6e" strokeWidth="2" strokeLinecap="round" />
                          <path d="M61 78C75 74 125 74 139 78C140 82 139 84 139 84C125 80 75 80 61 84C61 84 60 82 61 78Z" fill="#392f28" />
                          <path d="M125 75L135 86L122 84Z" fill="#2a362b" />
                        </svg>
                        <span className="text-[6.5px] font-sans font-bold text-[#5c493a] uppercase tracking-wider mt-1">
                          Pamela Rafia & Lazo
                        </span>
                        <span className="text-[5px] font-mono text-[#8c7664]">Paja Natural Trenzada</span>

                        {/* Botón Flotante WhatsApp */}
                        <div className="absolute bottom-1.5 right-1.5 bg-[#25d366] text-white p-1 rounded-full shadow-md z-30 flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.35 5L2 22l5.1-1.31A9.93 9.93 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. PORTADA NOVA BOUTIQUE */}
                  {project.id === 'nova' && (
                    <div className="w-full h-full bg-[#79a3c3] flex flex-col justify-between text-[#3a2119]">
                      <div className="bg-[#6892b2] px-2 py-1 flex justify-between items-center text-[8px] font-extrabold border-b border-[#628ba8]">
                        <span className="italic">NOVA</span>
                        <span className="opacity-80">MARSHALLS | HOMEGOODS</span>
                      </div>
                      <div className="text-center py-1">
                        <h4 className="text-base font-black italic tracking-tighter">
                          NOVA<span className="text-white not-italic text-xs font-bold">.boutique</span>
                        </h4>
                        <div className="flex justify-center gap-2 text-[7px] font-extrabold lowercase mt-0.5">
                          <span>llegadas</span>
                          <span>mujer</span>
                          <span>calzado</span>
                          <span>clearance</span>
                        </div>
                      </div>
                      <div className="bg-[#f8f4ef] text-[7px] text-center py-0.5 border-y border-[#ede6dd] font-bold">
                        envío gratis en pedidos de $89+
                      </div>
                      <div className="grid grid-cols-4 gap-0.5 bg-slate-200 p-0.5 h-12">
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=150&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                        <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=150&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  )}

                  {/* 3. PORTADA STUDIO ARCH */}
                  {project.id === 'studio-arch' && (
                    <div className="w-full h-full bg-[#0b111e] flex flex-col justify-between p-3 text-slate-100">
                      <div className="flex justify-between items-center text-[9px] border-b border-slate-800 pb-1 font-mono">
                        <span className="font-bold tracking-widest text-white">STUDIO<span className="text-teal-400">ARCH</span></span>
                        <span className="text-[7px] text-teal-400 border border-teal-500/40 px-1.5 py-0.2 rounded">Consulta</span>
                      </div>
                      <div className="my-auto">
                        <span className="text-[7px] font-mono text-teal-400 block uppercase tracking-wider mb-0.5">
                          // ARQUITECTURA & INTERIORISMO
                        </span>
                        <h4 className="text-xs font-extrabold leading-snug">
                          Espacios que definen <br />
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-300">
                            el futuro del diseño.
                          </span>
                        </h4>
                      </div>
                      <div className="grid grid-cols-4 gap-1 text-center border-t border-slate-800 pt-1 text-[7px] font-mono text-slate-400">
                        <div><strong className="text-white block">+45</strong>Obra Nueva</div>
                        <div><strong className="text-white block">12k m²</strong>Diseño</div>
                        <div><strong className="text-white block">8</strong>Premios</div>
                        <div><strong className="text-teal-400 block">100%</strong>Garantía</div>
                      </div>
                    </div>
                  )}
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
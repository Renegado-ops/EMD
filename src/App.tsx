import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ServiceCard } from './components/ServiceCard';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SystemMetricsWidget } from './components/SystemMetricsWidget';
import { translations } from './utils/translations';
import type { Language } from './utils/translations';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<Language>('es');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('web');

  const t = translations[language];

  const handleOpenModal = (serviceType?: string) => {
    if (serviceType) {
      setSelectedService(serviceType);
    } else {
      setSelectedService('web');
    }
    setIsModalOpen(true);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-300 relative overflow-hidden ${
      isDarkMode ? 'bg-[#0f172a] text-slate-200' : 'bg-[#e2e8f0] text-slate-800'
    }`}>
      
      {/* MALLA DE PUNTOS TECH & LUCES AMBIENTALES SIMÉTRICAS */}
      {isDarkMode && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Malla de Puntos (Dot Grid) */}
          <div 
            className="absolute inset-0 opacity-[0.35]" 
            style={{
              backgroundImage: `radial-gradient(rgba(45, 212, 191, 0.4) 1.5px, transparent 1.5px)`,
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(ellipse 90% 90% at 50% 20%, black 60%, transparent 100%)'
            }}
          />

          {/* Luces Ambientales Balanceadas */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-teal-500/18 blur-[150px] rounded-full" />
          <div className="absolute top-[350px] -left-20 w-[450px] h-[450px] bg-teal-400/12 blur-[140px] rounded-full" />
          <div className="absolute top-[350px] -right-20 w-[450px] h-[450px] bg-teal-400/12 blur-[140px] rounded-full" />
          <div className="absolute top-[1050px] -left-20 w-[450px] h-[450px] bg-sky-500/12 blur-[140px] rounded-full" />
          <div className="absolute top-[1050px] -right-20 w-[450px] h-[450px] bg-sky-500/12 blur-[140px] rounded-full" />
        </div>
      )}

      {/* NAVBAR */}
      <Navbar 
        isDarkMode={isDarkMode} 
        t={t.nav} 
        onOpenModal={handleOpenModal} 
      />

      {/* CONTENEDOR PRINCIPAL */}
      <main className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-12 flex-grow w-full space-y-16 relative z-10">
        
        {/* SECCIÓN 1: SERVICIOS */}
        <section id="servicios" className="relative">
          <div className={`p-6 md:p-8 rounded-3xl border transition-all relative overflow-hidden isolate ${
            isDarkMode 
              ? 'bg-[#182335]/90 border-slate-700/80 shadow-2xl shadow-black/40' 
              : 'bg-white/90 border-slate-300 shadow-sm'
          }`}>
            {/* LÍNEA NEÓN SUPERIOR INSET */}
            {isDarkMode && (
              <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-80 pointer-events-none" />
            )}

            <div className="mb-8 border-l-2 border-teal-500 pl-4">
              <span className="text-teal-400 font-mono text-xs uppercase tracking-widest block font-bold mb-1">
                // NUESTROS SERVICIOS
              </span>
              <h1 className={`text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Soluciones digitales de alto rendimiento
              </h1>
              <p className={`text-xs md:text-sm mt-2 max-w-2xl ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {t.hero.subtitle}
              </p>
            </div>

            {/* GRID DE SERVICIOS + WIDGET */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 flex-grow w-full">
                <ServiceCard 
                  type="app"
                  title="Desarrollo Web & Software"
                  description="Páginas corporativas, tiendas online y plataformas web a medida optimizadas para conversión."
                  buttonText="Solicitar Cotización"
                  isDarkMode={isDarkMode}
                  onClick={() => handleOpenModal('web')}
                />
                <ServiceCard 
                  type="seo"
                  title="Edición & Contenido Digital"
                  description="Edición de video profesional, contenido para redes sociales y piezas publicitarias de alto impacto."
                  buttonText="Solicitar Cotización"
                  isDarkMode={isDarkMode}
                  onClick={() => handleOpenModal('content')}
                />
                <ServiceCard 
                  type="hosting"
                  title="Infraestructura & Cloud IT"
                  description="Alojamiento ultrarrápido en la nube, optimización SEO técnica y mantenimiento continuo de tu sistema."
                  buttonText="Solicitar Cotización"
                  isDarkMode={isDarkMode}
                  onClick={() => handleOpenModal('it')}
                />
              </div>

              {/* WIDGET DE MÉTRICAS */}
              <aside className="w-full lg:w-[280px] shrink-0">
                <SystemMetricsWidget isDarkMode={isDarkMode} />
              </aside>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: PORTAFOLIO */}
        <section className="relative">
          <div className={`p-6 md:p-8 rounded-3xl border transition-all relative overflow-hidden isolate ${
            isDarkMode 
              ? 'bg-[#182335]/90 border-slate-700/80 shadow-2xl shadow-black/40' 
              : 'bg-white/90 border-slate-300 shadow-sm'
          }`}>
            {isDarkMode && (
              <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-80 pointer-events-none" />
            )}
            <PortfolioSection 
              isDarkMode={isDarkMode} 
              t={t.portfolioSection} 
            />
          </div>
        </section>

        {/* SECCIÓN 3: SOBRE NOSOTROS */}
        <section className="relative">
          <div className={`p-6 md:p-8 rounded-3xl border transition-all relative overflow-hidden isolate ${
            isDarkMode 
              ? 'bg-[#182335]/90 border-slate-700/80 shadow-2xl shadow-black/40' 
              : 'bg-white/90 border-slate-300 shadow-sm'
          }`}>
            {isDarkMode && (
              <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-80 pointer-events-none" />
            )}
            <AboutSection 
              isDarkMode={isDarkMode} 
            />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        language={language}
        onLanguageChange={setLanguage}
        t={t.footer}
      />

      {/* MODAL DE COTIZACIÓN */}
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        isDarkMode={isDarkMode} 
        t={t.modal} 
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ServiceCard } from './components/ServiceCard';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { translations } from './utils/translations';
import type { Language } from './utils/translations';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<Language>('es');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = translations[language];

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
      isDarkMode ? 'bg-[#0b111e] text-slate-200' : 'bg-[#e2e8f0] text-slate-800'
    }`}>
      {/* NAVBAR */}
      <Navbar 
        isDarkMode={isDarkMode} 
        t={t.nav} 
        onOpenModal={() => setIsModalOpen(true)} 
      />

      <main className="max-w-7xl mx-auto px-6 py-10 flex-grow w-full space-y-16">
        {/* HERO Y SERVICIOS */}
        <section>
          <div className="text-center mb-10">
            <h1 className={`text-2xl md:text-3xl font-bold tracking-wide transition-colors ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              EDIT • MEDIA • DEV - <span className={`font-normal ${
                isDarkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>{t.hero.subtitle}</span>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow w-full">
              <ServiceCard 
                type="app"
                title={t.cards.appTitle}
                description={t.cards.appDesc}
                buttonText={t.cards.learnMore}
                isDarkMode={isDarkMode}
              />
              <ServiceCard 
                type="hosting"
                title={t.cards.hostingTitle}
                description={t.cards.hostingDesc}
                buttonText={t.cards.learnMore}
                isDarkMode={isDarkMode}
              />
              <ServiceCard 
                type="seo"
                title={t.cards.seoTitle}
                description={t.cards.seoDesc}
                buttonText={t.cards.learnMore}
                isDarkMode={isDarkMode}
              />
            </div>

            <aside className="w-full lg:w-44 space-y-6 text-xs pt-2 flex flex-row lg:flex-col justify-between lg:justify-start">
              <div>
                <h4 className={`font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.sidebar.filters}</h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2 text-teal-600 font-medium">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                    <span>Muted Balance</span>
                  </li>
                  <li className={`hover:text-teal-600 transition cursor-pointer flex justify-between items-center ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-700'
                  }`}>
                    <span>{t.sidebar.category}</span>
                    <span className="text-[10px]">∨</span>
                  </li>
                  <li className={`hover:text-teal-600 transition cursor-pointer flex justify-between items-center ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-700'
                  }`}>
                    <span>{t.sidebar.location}</span>
                    <span className="text-[10px]">∨</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* SECCIÓN PORTAFOLIO */}
        <PortfolioSection 
          isDarkMode={isDarkMode} 
          t={t.portfolioSection} 
        />

        {/* SECCIÓN SOBRE NOSOTROS */}
        <AboutSection 
          isDarkMode={isDarkMode} 
          t={t.aboutSection} 
        />
      </main>

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
      />
    </div>
  );
}

export default App;
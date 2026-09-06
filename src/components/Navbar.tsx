import { useState } from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  onOpenModal: (serviceType?: string) => void;
  t: {
    services: string;
    webDev: string;
    webDevDesc: string;
    content: string;
    contentDesc: string;
    itServices: string;
    itServicesDesc: string;
    portfolio: string;
    about: string;
    quote: string;
  };
}

export const Navbar = ({ isDarkMode, onOpenModal, t }: NavbarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceType: string) => {
    setIsDropdownOpen(false);
    onOpenModal(serviceType);
  };

  return (
    <header className={`border-b sticky top-0 z-50 px-5 md:px-8 py-3.5 backdrop-blur-md transition-all duration-300 ${
      isDarkMode 
        ? 'border-slate-800/80 bg-[#0b111e]/85 text-slate-300' 
        : 'border-slate-300/80 bg-[#e2e8f0]/90 text-slate-800'
    }`}>
      {/* CAMBIO AQUÍ: max-w-6xl en lugar de 7xl */}
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <a 
          href="#top" 
          onClick={scrollToTop}
          className="flex items-center cursor-pointer hover:opacity-90 transition-opacity"
        >
          <Logo className="w-32 md:w-36 h-auto" isDarkMode={isDarkMode} />
        </a>

        {/* NAVEGACIÓN PRINCIPAL */}
        <nav className="hidden md:flex items-center space-x-8 text-xs md:text-sm font-medium tracking-wide">
          
          {/* DESPLEGABLE SERVICIOS */}
          <div 
            className="relative py-1 group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-1.5 transition-colors outline-none cursor-pointer ${
                isDarkMode ? 'group-hover:text-teal-400' : 'group-hover:text-teal-600'
              }`}
            >
              <span>{t.services}</span>
              <svg 
                className={`w-3.5 h-3.5 text-teal-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 rounded-full group-hover:w-full transition-all duration-300 pointer-events-none" />

            {/* PANEL DESPLEGABLE */}
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-3 animate-in fade-in zoom-in-95 duration-150">
                <div className={`border rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl flex flex-col gap-1 ${
                  isDarkMode 
                    ? 'bg-[#151d2a]/95 border-slate-700/80 text-slate-200' 
                    : 'bg-white/95 border-slate-300 text-slate-800'
                }`}>
                  <button 
                    onClick={() => handleServiceClick('web')}
                    className={`text-left w-full p-2.5 rounded-xl transition-all cursor-pointer ${
                      isDarkMode ? 'hover:bg-slate-800/80' : 'hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-bold text-xs block text-teal-400 mb-0.5">{t.webDev}</span>
                    <span className={`text-[10px] leading-tight block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{t.webDevDesc}</span>
                  </button>

                  <button 
                    onClick={() => handleServiceClick('content')}
                    className={`text-left w-full p-2.5 rounded-xl transition-all cursor-pointer ${
                      isDarkMode ? 'hover:bg-slate-800/80' : 'hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-bold text-xs block text-teal-400 mb-0.5">{t.content}</span>
                    <span className={`text-[10px] leading-tight block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{t.contentDesc}</span>
                  </button>

                  <button 
                    onClick={() => handleServiceClick('it')}
                    className={`text-left w-full p-2.5 rounded-xl transition-all cursor-pointer ${
                      isDarkMode ? 'hover:bg-slate-800/80' : 'hover:bg-slate-100'
                    }`}
                  >
                    <span className="font-bold text-xs block text-teal-400 mb-0.5">{t.itServices}</span>
                    <span className={`text-[10px] leading-tight block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{t.itServicesDesc}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative py-1 group">
            <a href="#portafolio" className={`transition-colors ${isDarkMode ? 'group-hover:text-teal-400' : 'group-hover:text-teal-600'}`}>
              {t.portfolio}
            </a>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 rounded-full group-hover:w-full transition-all duration-300 pointer-events-none" />
          </div>

          <div className="relative py-1 group">
            <a href="#nosotros" className={`transition-colors ${isDarkMode ? 'group-hover:text-teal-400' : 'group-hover:text-teal-600'}`}>
              {t.about}
            </a>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 rounded-full group-hover:w-full transition-all duration-300 pointer-events-none" />
          </div>
        </nav>

        {/* BOTÓN COTIZAR GENERAL */}
        <button 
          onClick={() => onOpenModal('web')}
          className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 border outline-none cursor-pointer ${
            isDarkMode 
              ? 'bg-teal-500/10 border-teal-500/50 text-teal-400 hover:bg-teal-500 hover:text-[#0b111e] shadow-[0_0_15px_rgba(20,184,166,0.25)] hover:shadow-[0_0_20px_rgba(20,184,166,0.5)]' 
              : 'bg-teal-700/10 border-teal-700/40 text-teal-800 hover:bg-teal-700 hover:text-white'
          }`}
        >
          {t.quote}
        </button>
      </div>
    </header>
  );
};
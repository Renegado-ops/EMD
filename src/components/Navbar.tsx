import { useState } from 'react';
import { Logo } from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  onOpenModal: () => void;
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

  return (
    <header className={`border-b sticky top-0 z-50 px-8 py-4 backdrop-blur-md transition-colors duration-300 ${
      isDarkMode 
        ? 'border-slate-800/80 bg-[#0b111e]/90 text-slate-300' 
        : 'border-slate-300 bg-[#e2e8f0]/90 text-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <a 
          href="#top" 
          onClick={scrollToTop}
          className="flex items-center cursor-pointer hover:opacity-90 transition-opacity"
        >
          <Logo className="w-36 h-auto" isDarkMode={isDarkMode} />
        </a>

        {/* NAVEGACIÓN PRINCIPAL */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          
          <div 
            className="relative py-1 group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1.5 group-hover:text-teal-600 transition-colors outline-none cursor-pointer">
              <span>{t.services}</span>
              <svg 
                className={`w-3.5 h-3.5 text-teal-600 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-600 rounded-full group-hover:w-full transition-all duration-300 pointer-events-none" />

            {/* PANEL DESPLEGABLE */}
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-3">
                <div className={`border rounded-2xl p-2.5 shadow-lg backdrop-blur-xl flex flex-col gap-1 ${
                  isDarkMode 
                    ? 'bg-[#0e1626]/95 border-slate-700/80' 
                    : 'bg-[#f1f5f9] border-slate-300 text-slate-800'
                }`}>
                  <a href="#desarrollo-web" className="p-2.5 rounded-xl hover:bg-slate-200/80 transition-all">
                    <span className="font-semibold text-xs block text-teal-600">{t.webDev}</span>
                    <span className="text-[10px] opacity-80 text-slate-500">{t.webDevDesc}</span>
                  </a>
                  <a href="#contenido" className="p-2.5 rounded-xl hover:bg-slate-200/80 transition-all">
                    <span className="font-semibold text-xs block text-teal-600">{t.content}</span>
                    <span className="text-[10px] opacity-80 text-slate-500">{t.contentDesc}</span>
                  </a>
                  <a href="#servicios-it" className="p-2.5 rounded-xl hover:bg-slate-200/80 transition-all">
                    <span className="font-semibold text-xs block text-teal-600">{t.itServices}</span>
                    <span className="text-[10px] opacity-80 text-slate-500">{t.itServicesDesc}</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="relative py-1 group">
            <a href="#portafolio" className="group-hover:text-teal-600 transition-colors">{t.portfolio}</a>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-600 rounded-full group-hover:w-full transition-all duration-300 pointer-events-none" />
          </div>

          <div className="relative py-1 group">
            <a href="#about" className="group-hover:text-teal-600 transition-colors">{t.about}</a>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-600 rounded-full group-hover:w-full transition-all duration-300 pointer-events-none" />
          </div>

        </nav>

        {/* BOTÓN COTIZAR CON ACCIÓN PARA EL MODAL */}
        <button 
          onClick={onOpenModal}
          className={`px-6 py-2 rounded-xl font-semibold text-sm transition-all border outline-none cursor-pointer ${
            isDarkMode 
              ? 'bg-teal-500/10 border-teal-500/50 text-teal-300 glow-btn' 
              : 'bg-teal-700/10 border-teal-700/40 text-teal-800 hover:bg-teal-700/20'
          }`}
        >
          {t.quote}
        </button>
      </div>
    </header>
  );
};
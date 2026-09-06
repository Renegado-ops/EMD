import React from 'react';
import { Logo } from './Logo';
import type { Language } from '../utils/translations';

interface FooterProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: {
    missionLabel: string;
    mission: string;
    services: string;
    information: string;
    legal: string;
    language: string;
    darkMode: string;
    aboutUs: string;
    privacy: string;
    terms: string;
    rights: string;
  };
}

export const Footer = ({ isDarkMode, onToggleDarkMode, language, onLanguageChange, t }: FooterProps) => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors duration-300 pt-12 pb-8 px-5 md:px-8 text-xs relative ${
      isDarkMode 
        ? 'border-slate-800/80 bg-[#070c16] text-slate-400' 
        : 'border-slate-300 bg-[#d8dfe8] text-slate-700'
    }`}>
      {/* CAMBIO AQUÍ: max-w-6xl en lugar de 7xl */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
        
        {/* MARCA E INFO */}
        <div className="md:col-span-1 space-y-3">
          <a href="#top" onClick={scrollToTop} className="inline-block cursor-pointer hover:opacity-90 transition-opacity">
            <Logo className="w-32 h-auto" isDarkMode={isDarkMode} />
          </a>
          <div className="space-y-1.5 text-[11px] pt-1">
            <p className={`flex items-center gap-1.5 transition-colors ${isDarkMode ? 'text-slate-300 hover:text-teal-400' : 'text-slate-800 hover:text-teal-600'}`}>
              <span className="text-teal-500 font-bold">✉</span> info@emd.pro
            </p>
            <p className={`flex items-center gap-1.5 transition-colors ${isDarkMode ? 'text-slate-300 hover:text-teal-400' : 'text-slate-800 hover:text-teal-600'}`}>
              <span className="text-teal-500 font-bold">📞</span> +1 809 123 4567
            </p>
          </div>

          {/* MISIÓN DINÁMICA SEGÚN IDIOMA */}
          <div className="pt-2">
            <span className="text-teal-500 font-mono text-[9px] uppercase tracking-widest block font-bold mb-1 opacity-90">
              // {t.missionLabel}
            </span>
            <p className={`text-[11px] leading-relaxed transition-colors ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {t.mission}
            </p>
          </div>
        </div>

        {/* ENLACES SERVICIOS */}
        <div>
          <h5 className={`font-bold mb-3 text-sm tracking-wide ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.services}</h5>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#servicios" className="hover:text-teal-400 transition-colors">Creación de Contenido</a></li>
            <li><a href="#servicios" className="hover:text-teal-400 transition-colors">Desarrollo Web</a></li>
            <li><a href="#servicios" className="hover:text-teal-400 transition-colors">Servicios IT</a></li>
          </ul>
        </div>

        {/* ENLACES INFORMACIÓN */}
        <div>
          <h5 className={`font-bold mb-3 text-sm tracking-wide ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.information}</h5>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#nosotros" className="hover:text-teal-400 transition-colors">{t.aboutUs}</a></li>
            <li><a href="#portafolio" className="hover:text-teal-400 transition-colors">Portafolio</a></li>
          </ul>
        </div>

        {/* ENLACES LEGAL */}
        <div>
          <h5 className={`font-bold mb-3 text-sm tracking-wide ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.legal}</h5>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#" className="hover:text-teal-400 transition-colors">{t.privacy}</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">{t.terms}</a></li>
          </ul>
        </div>

        {/* SELECTOR DE IDIOMA E INTERRUPTOR */}
        <div className="space-y-5">
          <div>
            <h5 className={`font-bold mb-2 text-sm tracking-wide ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.language}</h5>
            
            <div className="relative">
              <select 
                value={language}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className={`border rounded-xl px-3 py-2 w-full text-xs outline-none cursor-pointer appearance-none pr-8 transition-colors ${
                  isDarkMode 
                    ? 'bg-[#151d2a] border-slate-700/80 text-slate-200 focus:border-teal-400' 
                    : 'bg-white border-slate-300 text-slate-800 focus:border-teal-600'
                }`}
              >
                <option value="es" className={isDarkMode ? 'bg-[#151d2a] text-slate-200' : 'bg-white text-slate-800'}>🇪🇸 Español ES</option>
                <option value="en" className={isDarkMode ? 'bg-[#151d2a] text-slate-200' : 'bg-white text-slate-800'}>🇺🇸 English US</option>
                <option value="fr" className={isDarkMode ? 'bg-[#151d2a] text-slate-200' : 'bg-white text-slate-800'}>🇫🇷 Français FR</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-teal-400 text-[10px]">
                ▼
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 select-none">
            <span className={`text-[11px] font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
              {t.darkMode}
            </span>
            <button 
              onClick={onToggleDarkMode}
              className={`w-11 h-6 rounded-full relative transition-colors duration-300 p-0.5 outline-none cursor-pointer ${
                isDarkMode ? 'bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.3)]' : 'bg-slate-400'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isDarkMode ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </button>
          </div>
        </div>

      </div>

      <div className={`max-w-6xl mx-auto border-t pt-5 text-center text-[10px] font-mono ${
        isDarkMode ? 'border-slate-800/80 text-slate-500' : 'border-slate-300/80 text-slate-600'
      }`}>
        &copy; 2026 {t.rights}
      </div>
    </footer>
  );
};
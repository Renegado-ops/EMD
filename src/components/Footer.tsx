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
    <footer className={`border-t transition-colors duration-300 pt-10 pb-6 px-8 text-xs relative ${
      isDarkMode 
        ? 'border-slate-800/80 bg-[#070c16] text-slate-400' 
        : 'border-slate-300 bg-[#d8dfe8] text-slate-700'
    }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
        
        {/* MARCA E INFO */}
        <div className="md:col-span-1 space-y-3">
          <a href="#top" onClick={scrollToTop} className="inline-block cursor-pointer hover:opacity-90 transition-opacity">
            <Logo className="w-32 h-auto" isDarkMode={isDarkMode} />
          </a>
          <div className="space-y-1 text-[11px] pt-1">
            <p className={`flex items-center gap-1.5 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
              <span className="text-teal-500 font-bold">✉</span> info@emd.pro
            </p>
            <p className={`flex items-center gap-1.5 ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
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
          <h5 className={`font-bold mb-3 text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.services}</h5>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#contenido" className="hover:text-teal-500 transition">Creación de Contenido</a></li>
            <li><a href="#desarrollo-web" className="hover:text-teal-500 transition">Desarrollo Web</a></li>
            <li><a href="#servicios-it" className="hover:text-teal-500 transition">Servicios IT</a></li>
          </ul>
        </div>

        {/* ENLACES INFORMACIÓN */}
        <div>
          <h5 className={`font-bold mb-3 text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.information}</h5>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#about" className="hover:text-teal-500 transition">{t.aboutUs}</a></li>
            <li><a href="#portafolio" className="hover:text-teal-500 transition">Portafolio</a></li>
          </ul>
        </div>

        {/* ENLACES LEGAL */}
        <div>
          <h5 className={`font-bold mb-3 text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.legal}</h5>
          <ul className="space-y-2 text-[11px]">
            <li><a href="#privacy" className="hover:text-teal-500 transition">{t.privacy}</a></li>
            <li><a href="#terms" className="hover:text-teal-500 transition">{t.terms}</a></li>
          </ul>
        </div>

        {/* SELECTOR DE IDIOMA E INTERRUPTOR */}
        <div className="space-y-4">
          <div>
            <h5 className={`font-bold mb-2 text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.language}</h5>
            <select 
              value={language}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className={`border rounded-lg px-3 py-1.5 w-full text-xs outline-none cursor-pointer ${
                isDarkMode ? 'bg-slate-800/80 border-slate-700 text-slate-200' : 'bg-[#e2e8f0] border-slate-400 text-slate-800'
              }`}
            >
              <option value="es">🇪🇸 Español ES</option>
              <option value="en">🇺🇸 English US</option>
              <option value="fr">🇫🇷 Français FR</option>
            </select>
          </div>

          <div className="flex items-center justify-between pt-1 select-none">
            <span className={`text-[11px] font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-800'}`}>
              {t.darkMode}
            </span>
            <button 
              onClick={onToggleDarkMode}
              className={`w-10 h-5 rounded-full relative transition-colors duration-300 p-0.5 outline-none ${
                isDarkMode ? 'bg-teal-400' : 'bg-slate-400'
              }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isDarkMode ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-400/40 pt-4 text-center text-[10px] text-slate-500">
        &copy; 2026 {t.rights}
      </div>
    </footer>
  );
};
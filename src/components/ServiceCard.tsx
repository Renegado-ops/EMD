interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  type: 'app' | 'hosting' | 'seo';
  isDarkMode?: boolean;
  onClick?: () => void;
}

export const ServiceCard = ({
  title,
  description,
  buttonText,
  type,
  isDarkMode = true,
  onClick,
}: ServiceCardProps) => {
  return (
    <div
      className={`border rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden transition-all duration-300 group hover:border-teal-400/50 ${
        isDarkMode
          ? 'bg-[#151d2a]/90 border-slate-700/60'
          : 'bg-[#f1f5f9] border-slate-300 hover:border-slate-400 shadow-sm'
      }`}
    >
      <div>
        {/* ÁREA DE ILUSTRACIÓN */}
        <div
          className={`h-48 rounded-xl mb-5 relative flex items-center justify-center p-4 overflow-hidden border transition-transform duration-300 group-hover:scale-[1.02] ${
            isDarkMode
              ? 'bg-[#0b111e] border-slate-700/80'
              : 'bg-slate-200 border-slate-300'
          }`}
        >
          {isDarkMode && (
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-transparent to-indigo-500/10" />
          )}

          {/* ILUSTRACIÓN 1: DEV / WEBS */}
          {type === 'app' && (
            <div className="flex items-center justify-center gap-3 relative z-10">
              <div className="w-12 h-22 bg-[#151d2a] rounded-xl border border-teal-400/60 p-1.5 shadow-xl flex flex-col items-center justify-between">
                <div className="w-4 h-1 bg-teal-400/60 rounded-full"></div>
                <div className="w-full h-10 bg-teal-500/10 rounded-lg p-1 flex flex-col gap-1 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-teal-400/80 flex items-center justify-center text-[7px] text-[#151d2a] font-bold">
                    &lt;/&gt;
                  </div>
                </div>
                <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              </div>
              <div className="w-28 h-18 bg-[#151d2a] rounded-lg border border-slate-700 p-2 flex flex-col justify-between shadow-lg">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/80"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/80"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400/80"></div>
                </div>
                <div className="w-full h-2.5 bg-teal-500/30 rounded"></div>
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-slate-700 rounded"></div>
                  <div className="w-3/4 h-1.5 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          )}

          {/* ILUSTRACIÓN 2: EDIT / CONTENIDO */}
          {type === 'seo' && (
            <div className="relative z-10">
              <div className="w-32 h-20 bg-[#151d2a] rounded-xl border border-teal-400/60 shadow-xl p-2.5 flex flex-col justify-between items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400/80 flex items-center justify-center text-teal-400 shadow-md">
                  ▶
                </div>
                <span className="text-[8px] font-mono text-teal-300 mt-1 uppercase tracking-wider">Media & Video</span>
              </div>
            </div>
          )}

          {/* ILUSTRACIÓN 3: HOSTING & IT */}
          {type === 'hosting' && (
            <div className="flex items-center justify-center gap-3 relative z-10">
              <div className="w-20 h-28 bg-[#151d2a] rounded-xl border border-teal-400/60 p-2 flex flex-col justify-between shadow-xl">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-6 bg-[#0b111e] rounded border border-slate-700/80 px-2 flex items-center justify-between"
                  >
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                      <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                    </div>
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <h3
          className={`text-base font-bold mb-1.5 group-hover:text-teal-400 transition-colors ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-xs leading-relaxed mb-6 ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      </div>

      <button
        onClick={onClick}
        className={`w-full py-2.5 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
          isDarkMode
            ? 'bg-teal-500 text-[#0b111e] hover:bg-teal-400 shadow-[0_0_12px_rgba(20,184,166,0.3)]'
            : 'bg-teal-700 text-white hover:bg-teal-800'
        }`}
      >
        <span>{buttonText}</span>
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
};
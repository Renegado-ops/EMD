interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  type: 'app' | 'hosting' | 'seo';
  isDarkMode?: boolean;
}

export const ServiceCard = ({ title, description, buttonText, type, isDarkMode = true }: ServiceCardProps) => {
  return (
    <div className={`border rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
      isDarkMode 
        ? 'bg-[#151d2a]/90 border-slate-700/60 hover:border-teal-400/40' 
        : 'bg-[#f1f5f9] border-slate-300 hover:border-slate-400 shadow-sm'
    }`}>
      <div>
        {/* ÁREA DE ILUSTRACIÓN */}
        <div className={`h-48 rounded-xl mb-5 relative flex items-center justify-center p-4 overflow-hidden ${
          type === 'seo' ? (isDarkMode ? 'bg-[#212c3d]' : 'bg-[#e2e8f0]') : 'bg-[#82a396]'
        }`}>
          {/* Ilustraciones */}
          {type === 'app' && (
            <div className="flex items-center justify-center gap-3 relative z-10">
              <div className="w-16 h-28 bg-[#151d2a] rounded-xl border-2 border-teal-300/80 p-1.5 shadow-xl flex flex-col items-center">
                <div className="w-6 h-1 bg-teal-400/60 rounded-full mb-2"></div>
                <div className="w-full h-full bg-[#212c3d] rounded-lg p-1 flex flex-col gap-1">
                  <div className="w-4 h-4 rounded-full bg-teal-400/80 flex items-center justify-center text-[7px] text-[#151d2a] font-bold">A</div>
                  <div className="w-full h-1.5 bg-slate-600 rounded"></div>
                  <div className="w-2/3 h-1.5 bg-slate-600 rounded"></div>
                </div>
              </div>
              <div className="w-32 h-20 bg-white rounded-lg shadow-md border border-slate-300 p-2 flex flex-col justify-between">
                <div className="flex gap-1 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                </div>
                <div className="w-full h-3 bg-teal-600 rounded"></div>
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-slate-300 rounded"></div>
                  <div className="w-3/4 h-1.5 bg-slate-300 rounded"></div>
                </div>
              </div>
            </div>
          )}

          {type === 'hosting' && (
            <div className="flex items-center justify-center gap-3 relative z-10">
              <div className="w-20 h-28 bg-[#1e2736] rounded-lg border border-slate-600 p-2 flex flex-col justify-between shadow-xl">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-6 bg-[#121824] rounded border border-slate-700/80 px-2 flex items-center justify-between">
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

          {type === 'seo' && (
            <div className="relative z-10">
              <div className="w-36 h-24 bg-white rounded-xl shadow-md p-2.5 border border-slate-300 relative">
                <div className="flex gap-1 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                </div>
                <div className="w-full h-12 border-b border-slate-300 flex items-end justify-around px-2 pb-1">
                  <div className="w-3 h-4 bg-teal-500 rounded-t"></div>
                  <div className="w-3 h-7 bg-teal-600 rounded-t"></div>
                  <div className="w-3 h-10 bg-teal-700 rounded-t"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <h3 className={`text-base font-bold mb-1.5 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        <p className={`text-xs leading-relaxed mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{description}</p>
      </div>

      <button className={`w-2/5 py-2 rounded-xl font-semibold text-xs border transition-all ${
        isDarkMode 
          ? 'bg-teal-500/20 border-teal-500/60 text-teal-300 hover:bg-teal-500/30' 
          : 'bg-teal-700/10 border-teal-700/30 text-teal-800 hover:bg-teal-700/20'
      }`}>
        {buttonText}
      </button>
    </div>
  );
};
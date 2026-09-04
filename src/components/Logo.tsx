interface LogoProps {
  className?: string;
  isDarkMode?: boolean;
}

export const Logo = ({ className = "w-36 h-auto", isDarkMode = true }: LogoProps) => {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <span 
        className={`text-3xl md:text-4xl italic font-bold tracking-wider font-['Playfair_Display',serif] leading-tight transition-colors duration-300 ${
          isDarkMode 
            ? 'text-[#80E5D0] drop-shadow-[0_0_12px_rgba(128,229,208,0.8)]' 
            : 'text-teal-600 drop-shadow-[0_0_6px_rgba(13,148,136,0.3)]'
        }`}
      >
        EMD
      </span>

      <span className={`font-bold text-[8px] md:text-[9px] tracking-[0.25em] uppercase mt-1 whitespace-nowrap font-mono ${
        isDarkMode ? 'text-[#80E5D0] opacity-90' : 'text-teal-700'
      }`}>
        EDIT • MEDIA • DEV
      </span>
    </div>
  );
};
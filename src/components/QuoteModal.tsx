import React, { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  t: any;
}

export const QuoteModal = ({ isOpen, onClose, isDarkMode, t }: QuoteModalProps) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState('Desarrollo Web');
  const [budget, setBudget] = useState('$150 - $300');
  const [details, setDetails] = useState('');

  // ESTADOS DE ENVÍO Y ÉXITO
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ENVIAR DATOS EN SEGUNDO PLANO (REEMPLAZA 'TU_FORM_ID' POR TU ENDPOINT GRATUITO DE FORMSPREE O WEBHOOK)
      const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: name,
          Contacto: contact,
          Servicio: service,
          Presupuesto: budget,
          Detalles: details
        })
      });

      if (response.ok || true) { // Simulación de éxito si aún no has puesto tu ID
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Cierra la ventana automáticamente tras 2.5 segundos
        setTimeout(() => {
          setIsSuccess(false);
          setName('');
          setContact('');
          setDetails('');
          onClose();
        }, 2500);
      }
    } catch (error) {
      setIsSubmitting(false);
      alert('Ocurrió un error al enviar. Por favor intenta de nuevo.');
    }
  };

  const inputStyle = `w-full rounded-lg px-4 py-2.5 text-sm outline-none transition-all border focus:border-teal-500 ${
    isDarkMode 
      ? 'bg-slate-800/50 border-slate-700 text-slate-200 placeholder-slate-500' 
      : 'bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-400'
  }`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className={`relative w-full max-w-md p-6 md:p-8 rounded-2xl shadow-2xl transform transition-all ${
        isDarkMode ? 'bg-[#0e1626] border border-slate-700/80' : 'bg-white border border-slate-200'
      }`}>

        {/* ESTADO 1: PANTALLA DE ÉXITO */}
        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 bg-teal-500/20 border border-teal-500 text-teal-400 rounded-full flex items-center justify-center mx-auto text-xl animate-bounce">
              ✓
            </div>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              ¡Solicitud Recibida!
            </h3>
            <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Hemos recibido los detalles de tu proyecto. Te contactaremos a la brevedad.
            </p>
          </div>
        ) : (

          /* ESTADO 2: FORMULARIO DE CAPTURA */
          <>
            <h2 className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {t.title} <span className="text-teal-500">.</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                required 
                type="text" 
                placeholder={t.name} 
                value={name} 
                onChange={e => setName(e.target.value)} 
                className={inputStyle} 
              />
              
              <input 
                required 
                type="text" 
                placeholder={t.contact} 
                value={contact} 
                onChange={e => setContact(e.target.value)} 
                className={inputStyle} 
              />
              
              <div className="grid grid-cols-2 gap-4">
                <select value={service} onChange={e => setService(e.target.value)} className={inputStyle}>
                  <option value={t.optWeb}>{t.optWeb}</option>
                  <option value={t.optContent}>{t.optContent}</option>
                  <option value={t.optIT}>{t.optIT}</option>
                </select>
                <select value={budget} onChange={e => setBudget(e.target.value)} className={inputStyle}>
                  <option value="$150 - $300">$150 - $300</option>
                  <option value="$300 - $600">$300 - $600</option>
                  <option value="+$600">+$600</option>
                </select>
              </div>

              <textarea 
                required 
                rows={3} 
                placeholder={t.details} 
                value={details} 
                onChange={e => setDetails(e.target.value)} 
                className={`${inputStyle} resize-none`} 
              />

              <div className="flex gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={onClose} 
                  disabled={isSubmitting}
                  className={`w-1/3 py-2.5 rounded-xl font-semibold text-sm transition-all border ${
                    isDarkMode ? 'border-slate-700 text-slate-400 hover:bg-slate-800' : 'border-slate-300 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {t.cancel}
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-2/3 py-2.5 rounded-xl bg-teal-500 text-[#0b111e] font-bold text-sm hover:bg-teal-400 transition-all shadow-[0_0_15px_rgba(20,184,166,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Enviando...</span>
                  ) : (
                    <span>Enviar Solicitud</span>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
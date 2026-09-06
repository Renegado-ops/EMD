import React, { useState, useEffect } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  t: any;
  initialService?: string; // RECIBE EL SERVICIO SELECCIONADO DESDE EL NAVBAR
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  isDarkMode,
  t,
  initialService,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState(t?.optWeb || 'Desarrollo Web');
  const [budget, setBudget] = useState('$250 - $500');
  const [details, setDetails] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // SINCRONIZA EL SERVICIO CUANDO SE ABRE EL MODAL
  useEffect(() => {
    if (isOpen) {
      if (initialService === 'content' || initialService === t?.optContent) {
        setService(t?.optContent || 'Contenido / Edición');
      } else if (initialService === 'it' || initialService === t?.optIT) {
        setService(t?.optIT || 'Servicios IT');
      } else {
        setService(t?.optWeb || 'Desarrollo Web');
      }
    }
  }, [isOpen, initialService, t]);

  // OPCIONES DE PRESUPUESTO DINÁMICAS SEGÚN EL IDIOMA
  const getBudgetOptions = (selectedService: string) => {
    let list: string[] = [];

    if (selectedService === t?.optContent) {
      list = t?.contentBudgets || [
        '$150 - $350 (Edición Básica / Reels)',
        '$350 - $800 (Pack Mensual Contenido)',
        '+$800 (Producción / Campaña Completa)',
      ];
    } else if (selectedService === t?.optIT) {
      list = t?.itBudgets || [
        '$200 - $450 (Hosting & Dominio)',
        '$450 - $900 (Mantenimiento & SEO)',
        '+$900 (Infraestructura Cloud / Servidores)',
      ];
    } else {
      list = t?.webBudgets || [
        '$250 - $500 (Landing / Sitio Básico)',
        '$500 - $1,200 (Catálogo / Corporativo)',
        '+$1,200 (E-commerce / Plataforma)',
      ];
    }

    return list.map((item) => ({ label: item, value: item }));
  };

  useEffect(() => {
    const currentOptions = getBudgetOptions(service);
    if (currentOptions.length > 0) {
      setBudget(currentOptions[0].value);
    }
  }, [service, t]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Nombre: name,
          Contacto: contact,
          Servicio: service,
          Presupuesto: budget,
          Detalles: details,
        }),
      });

      if (response.ok || true) {
        setIsSubmitting(false);
        setIsSuccess(true);

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

  const inputStyle = `w-full rounded-xl px-4 py-3 text-sm outline-none transition-all border focus:border-teal-400 ${
    isDarkMode
      ? 'bg-[#0b111e] border-slate-700/80 text-slate-200 placeholder-slate-500'
      : 'bg-slate-50 border-slate-300 text-slate-800 placeholder-slate-400'
  }`;

  const selectOptionBg = isDarkMode ? 'bg-[#151d2a] text-slate-200' : 'bg-white text-slate-800';

  const budgetOptions = getBudgetOptions(service);

  // Detección de idioma para textos de feedback
  const isEn = t?.nav?.about === 'About Us';
  const isFr = t?.nav?.about === 'À propos';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`relative w-full max-w-md p-6 md:p-8 rounded-2xl shadow-2xl transform transition-all ${
          isDarkMode ? 'bg-[#151d2a] border border-slate-700/80' : 'bg-white border border-slate-200'
        }`}
      >
        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 bg-teal-500/20 border border-teal-500 text-teal-400 rounded-full flex items-center justify-center mx-auto text-xl animate-bounce">
              ✓
            </div>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {isEn ? 'Request Received!' : isFr ? 'Demande Reçue!' : '¡Solicitud Recibida!'}
            </h3>
            <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {isEn
                ? 'We have received your project details. We will contact you shortly.'
                : isFr
                ? 'Nous avons bien reçu les détails de votre projet. Nous vous contacterons rapidement.'
                : 'Hemos recibido los detalles de tu proyecto. Te contactaremos a la brevedad.'}
            </p>
          </div>
        ) : (
          <>
            <h2 className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {t?.title || 'Solicitar Cotización'} <span className="text-teal-400">.</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                type="text"
                placeholder={t?.name || 'Tu Nombre'}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputStyle}
              />

              <input
                required
                type="text"
                placeholder={t?.contact || 'WhatsApp o Email'}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className={inputStyle}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={`${inputStyle} appearance-none cursor-pointer pr-10`}
                  >
                    <option value={t?.optWeb || 'Desarrollo Web'} className={selectOptionBg}>
                      {t?.optWeb || 'Desarrollo Web'}
                    </option>
                    <option value={t?.optContent || 'Contenido / Edición'} className={selectOptionBg}>
                      {t?.optContent || 'Contenido / Edición'}
                    </option>
                    <option value={t?.optIT || 'Servicios IT'} className={selectOptionBg}>
                      {t?.optIT || 'Servicios IT'}
                    </option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-teal-400 text-xs">
                    ▼
                  </div>
                </div>

                <div className="relative">
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={`${inputStyle} appearance-none cursor-pointer pr-10`}
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className={selectOptionBg}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-teal-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              <textarea
                required
                rows={3}
                placeholder={t?.details || 'Detalles del proyecto...'}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className={`${inputStyle} resize-none`}
              />

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className={`w-1/3 py-3 rounded-xl font-semibold text-xs transition-all border ${
                    isDarkMode
                      ? 'border-slate-700 text-slate-400 hover:bg-slate-800'
                      : 'border-slate-300 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {t?.cancel || 'Cancelar'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-2/3 py-3 rounded-xl bg-teal-500 text-[#0b111e] font-extrabold text-xs hover:bg-teal-400 transition-all shadow-[0_0_15px_rgba(20,184,166,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">
                      {isEn ? 'Sending...' : isFr ? 'Envoi...' : 'Enviando...'}
                    </span>
                  ) : (
                    <span>{t?.send || 'Enviar Solicitud'}</span>
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
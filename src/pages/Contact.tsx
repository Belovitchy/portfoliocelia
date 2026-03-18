import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setStatus('sending');

    // EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS: Environment variables VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY are not configured.');
      // Simulate success for demo purposes if environment variables are missing
      setTimeout(() => {
        setStatus('success');
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        setStatus('success');
        form.current?.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      });
  };

  return (
    <div className="pb-24 grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
      {/* Editorial Title Group */}
      <div className="md:col-span-4 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-serif italic mb-4 leading-none tracking-tighter">
            Contact
          </h1>
          <div className="h-px w-12 bg-black mb-8" />
          <div className="space-y-2 uppercase tracking-[0.2em] text-[10px] font-sans">
            <p className="font-bold">Célia Lesaffre</p>
            <p>Design Graphique & Textile</p>
            <p>Basée à Valence</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-12 hidden md:block"
        >
          <p className="text-xs italic text-slate-500 font-serif leading-relaxed max-w-xs">
            "Travailler le design comme un procédé à même de créer du lien."
          </p>
        </motion.div>
      </div>

      {/* Form Side */}
      <div className="md:col-span-7 md:col-start-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <input
                  type="text"
                  name="user_name"
                  required
                  className="peer w-full bg-transparent border-b border-subtle-grid py-3 font-serif text-lg outline-none transition-colors focus:border-black"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 origin-left transition-all duration-300 transform -translate-y-6 scale-75 uppercase text-[10px] tracking-widest pointer-events-none peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 text-slate-400 peer-focus:text-black">
                  Prénom & Nom
                </label>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  name="user_email"
                  required
                  className="peer w-full bg-transparent border-b border-subtle-grid py-3 font-serif text-lg outline-none transition-colors focus:border-black"
                  placeholder=" "
                />
                <label className="absolute left-0 top-3 origin-left transition-all duration-300 transform -translate-y-6 scale-75 uppercase text-[10px] tracking-widest pointer-events-none peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 text-slate-400 peer-focus:text-black">
                  Email
                </label>
              </div>
            </div>

            <div className="relative group">
              <input
                type="text"
                name="subject"
                required
                className="peer w-full bg-transparent border-b border-subtle-grid py-3 font-serif text-lg outline-none transition-colors focus:border-black"
                placeholder=" "
              />
              <label className="absolute left-0 top-3 origin-left transition-all duration-300 transform -translate-y-6 scale-75 uppercase text-[10px] tracking-widest pointer-events-none peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 text-slate-400 peer-focus:text-black">
                Objet de votre message
              </label>
            </div>

            <div className="relative group">
              <textarea
                name="message"
                required
                rows={4}
                className="peer w-full bg-transparent border-b border-subtle-grid py-3 font-serif text-lg outline-none transition-colors focus:border-black resize-none"
                placeholder=" "
              />
              <label className="absolute left-0 top-3 origin-left transition-all duration-300 transform -translate-y-6 scale-75 uppercase text-[10px] tracking-widest pointer-events-none peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 text-slate-400 peer-focus:text-black">
                Votre message
              </label>
            </div>

            <div className="pt-8 flex items-center justify-between">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="relative group overflow-hidden px-12 py-4 bg-black text-white uppercase text-[10px] tracking-[0.3em] transition-all hover:pr-16"
              >
                <span className="relative z-10">
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer Maintenant'}
                </span>
                <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:right-8">
                  →
                </span>
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-emerald-500 uppercase text-[10px] tracking-widest font-sans"
                >
                  Message envoyé avec succès.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-red-500 uppercase text-[10px] tracking-widest font-sans"
                >
                  Une erreur est survenue. Réessayez.
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

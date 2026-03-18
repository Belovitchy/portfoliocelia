import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full z-50 bg-base-off-white/80 backdrop-blur-md border-b border-subtle-grid px-8 py-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="text-[10px] tracking-[0.3em] font-sans font-light uppercase order-2 md:order-1 mt-4 md:mt-0 md:w-1/3 flex justify-start">
          CÉLIA LESAFFRE
        </div>

        <div className="order-1 md:order-2 md:w-1/3 flex justify-center">
          <Link to="/">
            <img
              src="/logoheader/logoheader.webp"
              alt="Célia Lesaffre"
              className="h-24 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>

        <nav className="order-3 mt-4 md:mt-0 md:w-1/3 flex justify-end">
          <ul className="flex space-x-12 text-[10px] tracking-widest font-sans uppercase">
            <li>
              <Link to="/" className={`nav-link text-brandDark ${location.pathname === '/' ? 'underline underline-offset-4' : ''}`}>
                TRAVAUX
              </Link>
            </li>
            <li>
              <Link to="/about" className={`nav-link text-brandDark ${location.pathname === '/about' ? 'underline underline-offset-4' : ''}`}>
                À PROPOS
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`nav-link text-brandDark ${location.pathname === '/contact' ? 'underline underline-offset-4' : ''}`}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow pt-40 px-8 max-w-[1800px] mx-auto w-full">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="px-8 py-12 border-t border-subtle-grid mt-24">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-sans text-[10px] uppercase tracking-widest-editorial text-slate-500">
            © 2026 CÉLIA LESAFFRE — TOUS DROITS RÉSERVÉS
          </p>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/celia.lesaffre?igsh=aGR6OTByZHFneWxj" target="_blank" rel="noopener noreferrer" className="nav-link text-slate-500">Instagram</a>
            <a href="https://www.linkedin.com/in/celia-lesaffre-485221253/" target="_blank" rel="noopener noreferrer" className="nav-link text-slate-500">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

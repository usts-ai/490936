import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Vue globale', id: 'overview' },
  { label: 'Rendez-vous', id: 'rdv' },
  { label: 'Paiements', id: 'paiements' },
  { label: 'Structures', id: 'structures' },
];

interface HeaderProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,45,98,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            type="button"
            onClick={() => onNavigate('overview')}
            className="flex items-center gap-2.5 group"
          >
            <span className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#007BFF] to-[#40E0D0] shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg tracking-tight">P</span>
            </span>
            <span className="flex flex-col items-start">
              <span
                className="text-lg sm:text-xl font-bold tracking-tight text-[#002D62]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Prestia
              </span>
              <span className="text-[10px] sm:text-xs text-[#007BFF]/font-medium tracking-wide uppercase">
                SaaS B2B2C
              </span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-[#333333] hover:text-[#007BFF] transition-colors duration-300"
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#007BFF] to-[#00C9FF] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
            >
              Nouveau dossier
            </motion.button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#007BFF]/5 transition-colors"
            aria-label="Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-[#002D62] origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-[#002D62]"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-[#002D62] origin-center"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-[#007BFF]/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    onNavigate(item.id);
                    setOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-[#007BFF]/10 to-[#40E0D0]/10 text-[#007BFF]'
                      : 'text-[#333333] hover:bg-[#F5F9FC]'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.button
                type="button"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#007BFF] to-[#00C9FF]"
              >
                Nouveau dossier
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

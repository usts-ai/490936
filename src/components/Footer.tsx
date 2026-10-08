import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'X', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
];

const legalLinks = [
  { label: 'Mentions légales', href: '#' },
  { label: 'Politique de confidentialité', href: '#' },
  { label: 'CGU', href: '#' },
  { label: 'Cookies', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16 sm:mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#002D62] via-[#003d7a] to-[#007BFF]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, #40E0D0 0%, transparent 40%), radial-gradient(circle at 80% 20%, #00C9FF 0%, transparent 35%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#40E0D0] to-[#00C9FF]">
                <span className="text-white font-bold text-lg">P</span>
              </span>
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Prestia
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              La plateforme SaaS qui sécurise les paiements, réduit les impayés et
              automatise l&apos;administratif des professionnels sur rendez-vous.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white/90 bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Plateforme
            </h4>
            <ul className="space-y-2.5">
              {['Tableau de bord', 'Paiements Stripe', 'Multi-structures', 'Notifications'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#overview"
                      className="text-white/60 text-sm hover:text-[#40E0D0] transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Légal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/60 text-sm hover:text-[#40E0D0] transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/50 text-xs text-center sm:text-left">
            © 2026 Prestia — Tous droits réservés. Paiements sécurisés via Stripe Connect.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#40E0D0] animate-pulse" />
            <span className="text-white/50 text-xs">Systèmes opérationnels</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

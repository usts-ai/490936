import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { appointments } from '../data/mock';

const statusStyles: Record<string, string> = {
  Payé: 'bg-[#40E0D0]/20 text-[#0a8a7a]',
  Confirmé: 'bg-[#007BFF]/15 text-[#007BFF]',
  'En attente': 'bg-[#00C9FF]/15 text-[#0088aa]',
  Incident: 'bg-[#FF5252]/15 text-[#c62828]',
};

const filters = ['Tous', 'Payé', 'Confirmé', 'En attente', 'Incident'];

const AppointmentsPanel: React.FC = () => {
  const [filter, setFilter] = useState('Tous');

  const filtered =
    filter === 'Tous' ? appointments : appointments.filter((a) => a.statut === filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-white p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,45,98,0.06)] border border-[#007BFF]/8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
        <div>
          <h3
            className="text-lg sm:text-xl font-bold text-[#002D62]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Dossiers & rendez-vous
          </h3>
          <p className="text-xs sm:text-sm text-[#333333]/60 mt-0.5">
            Suivi des prestations et conditions financières
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-[#007BFF] to-[#00C9FF] text-white shadow-md shadow-blue-500/20'
                  : 'bg-[#F5F9FC] text-[#333333]/70 hover:bg-[#007BFF]/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2.5">
        <AnimatePresence mode="popLayout">
          {filtered.map((rdv, i) => (
            <motion.div
              key={rdv.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              whileHover={{ scale: 1.01, x: 4 }}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[#F8FBFE] hover:bg-gradient-to-r hover:from-[#007BFF]/5 hover:to-[#40E0D0]/5 border border-transparent hover:border-[#007BFF]/15 transition-colors cursor-pointer"
            >
              <img
                src={rdv.avatar}
                alt={rdv.client}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-white shadow-md shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-semibold text-[#002D62] truncate">{rdv.client}</p>
                  <span className="text-[10px] text-[#333333]/40 font-mono">{rdv.id}</span>
                </div>
                <p className="text-xs text-[#333333]/60 truncate mt-0.5">
                  {rdv.pro} · {rdv.structure}
                </p>
                <p className="text-[11px] text-[#333333]/40 mt-0.5 sm:hidden">{rdv.date}</p>
              </div>
              <div className="hidden sm:block text-right shrink-0">
                <p className="text-xs text-[#333333]/50">{rdv.date}</p>
              </div>
              <div className="text-right shrink-0 flex flex-col items-end gap-1">
                <p
                  className="text-sm font-bold text-[#002D62]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {rdv.montant}
                </p>
                <span
                  className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold ${
                    statusStyles[rdv.statut]
                  }`}
                >
                  {rdv.statut}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AppointmentsPanel;

import React from 'react';
import { motion } from 'framer-motion';
import { activities } from '../data/mock';

const typeColors: Record<string, string> = {
  paiement: '#40E0D0',
  lien: '#007BFF',
  relance: '#FF5252',
  dossier: '#00C9FF',
  pdf: '#92FE9D',
};

const ActivityFeed: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-2xl bg-white p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,45,98,0.06)] border border-[#007BFF]/8 h-full"
    >
      <h3
        className="text-lg sm:text-xl font-bold text-[#002D62] mb-1"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        Activité en direct
      </h3>
      <p className="text-xs sm:text-sm text-[#333333]/60 mb-5">
        Notifications SMS, email & paiements
      </p>

      <div className="relative space-y-0">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[#007BFF]/40 via-[#40E0D0]/30 to-transparent" />
        {activities.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="relative flex gap-3 sm:gap-4 py-3 group"
          >
            <span
              className="relative z-10 mt-1 h-[10px] w-[10px] ml-[10px] rounded-full ring-4 ring-white shrink-0 group-hover:scale-125 transition-transform duration-300"
              style={{
                background: typeColors[a.type],
                boxShadow: `0 0 10px ${typeColors[a.type]}80`,
              }}
            />
            <div className="flex-1 min-w-0 pl-1">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-[#002D62] group-hover:text-[#007BFF] transition-colors">
                  {a.titre}
                </p>
                <span className="text-[10px] text-[#333333]/40 whitespace-nowrap shrink-0">
                  {a.time}
                </span>
              </div>
              <p className="text-xs text-[#333333]/55 mt-0.5 truncate">{a.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ActivityFeed;

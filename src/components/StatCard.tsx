import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
  accent: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  delta,
  positive,
  accent,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_24px_rgba(0,45,98,0.06)] border border-[#007BFF]/8 hover:border-[#007BFF]/20 hover:shadow-[0_12px_40px_rgba(0,123,255,0.12)] transition-shadow duration-300"
    >
      <div
        className="absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500"
        style={{ background: accent }}
      />
      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs sm:text-sm font-medium text-[#333333]/70">{label}</span>
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
          />
        </div>
        <p
          className="text-2xl sm:text-3xl font-bold text-[#002D62] tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {value}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold ${
              positive
                ? 'bg-[#40E0D0]/15 text-[#0a8a7a]'
                : 'bg-[#FF5252]/15 text-[#c62828]'
            }`}
          >
            {delta}
          </span>
          <span className="text-[11px] text-[#333333]/50">vs mois précédent</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;

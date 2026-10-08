import React from 'react';
import { motion } from 'framer-motion';
import { structures, roles } from '../data/mock';

const StructuresGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        {structures.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(0,45,98,0.08)] cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#002D62]/90 via-[#002D62]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h4
                className="text-white font-bold text-base"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {s.name}
              </h4>
              <div className="flex items-center justify-between mt-1.5">
                <span className="text-white/70 text-xs">{s.pros} professionnels</span>
                <span className="text-[#40E0D0] text-sm font-semibold">{s.ca}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="rounded-2xl bg-white p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,45,98,0.06)] border border-[#007BFF]/8"
      >
        <h3
          className="text-lg font-bold text-[#002D62] mb-1"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Rôles & accès
        </h3>
        <p className="text-xs text-[#333333]/60 mb-5">Multi-utilisateurs sécurisé · 2FA</p>
        <div className="space-y-4">
          {roles.map((r, i) => (
            <motion.div
              key={r.role}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-[#002D62]">{r.role}</span>
                <span className="text-xs font-semibold text-[#333333]/60">
                  {r.users.toLocaleString('fr-FR')}
                </span>
              </div>
              <div className="h-2 rounded-full bg-[#F5F9FC] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(100, (r.users / 1240) * 100 + 15)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${r.color}, ${r.color}99)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StructuresGrid;

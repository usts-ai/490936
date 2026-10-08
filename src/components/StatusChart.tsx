import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { paymentStatus } from '../data/mock';

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl bg-white/95 backdrop-blur-md px-3 py-2 shadow-xl border border-[#007BFF]/10">
      <p className="text-xs font-semibold text-[#002D62]">
        {payload[0].name} : {payload[0].value}%
      </p>
    </div>
  );
};

const StatusChart: React.FC = () => {
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
        Statut des paiements
      </h3>
      <p className="text-xs sm:text-sm text-[#333333]/60 mb-4">Répartition temps réel</p>

      <div className="h-48 sm:h-56 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={paymentStatus}
              cx="50%"
              cy="50%"
              innerRadius="55%"
              outerRadius="80%"
              paddingAngle={4}
              dataKey="value"
              animationDuration={1200}
              stroke="none"
            >
              {paymentStatus.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p
              className="text-2xl font-bold text-[#002D62]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              86%
            </p>
            <p className="text-[10px] text-[#333333]/50 uppercase tracking-wider">sécurisés</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-2">
        {paymentStatus.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08 }}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#F5F9FC] transition-colors"
          >
            <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: s.color }} />
            <span className="text-xs text-[#333333] truncate">{s.name}</span>
            <span className="text-xs font-semibold text-[#002D62] ml-auto">{s.value}%</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatusChart;

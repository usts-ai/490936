import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { revenueData } from '../data/mock';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl bg-white/95 backdrop-blur-md px-4 py-3 shadow-xl border border-[#007BFF]/10">
      <p className="text-xs font-semibold text-[#002D62] mb-1">{label}</p>
      {payload.map((p: any) => (
        <p key={p.dataKey} className="text-xs text-[#333333]">
          <span style={{ color: p.color }} className="font-medium">
            {p.name}
          </span>
          {' : '}
          {Number(p.value).toLocaleString('fr-FR')} €
        </p>
      ))}
    </div>
  );
};

const RevenueChart: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl bg-white p-4 sm:p-6 shadow-[0_4px_24px_rgba(0,45,98,0.06)] border border-[#007BFF]/8 h-full"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h3
            className="text-lg sm:text-xl font-bold text-[#002D62]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Encaissements
          </h3>
          <p className="text-xs sm:text-sm text-[#333333]/60 mt-0.5">
            Flux sécurisés via Stripe Connect
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#007BFF]" />
            Encaissé
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#40E0D0]" />
            En attente
          </span>
        </div>
      </div>
      <div className="h-56 sm:h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="gradEncaisse" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#007BFF" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#007BFF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradAttente" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#40E0D0" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#40E0D0" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#007BFF15" vertical={false} />
            <XAxis
              dataKey="mois"
              tick={{ fill: '#33333399', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: '#33333366', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="encaissé"
              name="Encaissé"
              stroke="#007BFF"
              strokeWidth={2.5}
              fill="url(#gradEncaisse)"
              animationDuration={1400}
            />
            <Area
              type="monotone"
              dataKey="enAttente"
              name="En attente"
              stroke="#40E0D0"
              strokeWidth={2.5}
              fill="url(#gradAttente)"
              animationDuration={1600}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;

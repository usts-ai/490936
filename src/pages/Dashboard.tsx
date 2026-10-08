import React, { useCallback, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import StatusChart from '../components/StatusChart';
import AppointmentsPanel from '../components/AppointmentsPanel';
import ActivityFeed from '../components/ActivityFeed';
import StructuresGrid from '../components/StructuresGrid';
import { stats } from '../data/mock';

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 400], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const orbX = useTransform(scrollY, [0, 500], [0, 80]);

  const onNavigate = useCallback((id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F7FC] overflow-x-hidden">
      <Header activeSection={activeSection} onNavigate={onNavigate} />

      <section
        id="overview"
        className="relative pt-24 sm:pt-28 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <motion.div
            style={{ x: orbX }}
            className="absolute -top-20 -right-20 w-72 h-72 sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-br from-[#007BFF]/20 to-[#40E0D0]/25 blur-3xl"
          />
          <div className="absolute top-40 -left-32 w-64 h-64 rounded-full bg-gradient-to-r from-[#00C9FF]/15 to-[#92FE9D]/20 blur-3xl" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-14">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-[#007BFF]/15 shadow-sm mb-5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#40E0D0] animate-pulse" />
                <span className="text-xs font-medium text-[#007BFF]">
                  Tableau de bord · Temps réel
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002D62] leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Gérez vos prestations,{' '}
                <span className="bg-gradient-to-r from-[#007BFF] via-[#00C9FF] to-[#40E0D0] bg-clip-text text-transparent">
                  sécurisez vos paiements
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-4 text-sm sm:text-base text-[#333333]/70 leading-relaxed max-w-lg"
              >
                Prestia centralise la gestion administrative et financière des professionnels
                sur rendez-vous. Moins d&apos;impayés, plus de fluidité pour vos clients.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 flex flex-wrap gap-3"
              >
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('rdv')}
                  className="px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#007BFF] to-[#00C9FF] shadow-lg shadow-blue-500/25"
                >
                  Voir les rendez-vous
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('paiements')}
                  className="px-5 py-3 rounded-xl text-sm font-semibold text-[#007BFF] bg-white border border-[#007BFF]/20 hover:border-[#007BFF]/40 shadow-sm transition-colors"
                >
                  Suivi des paiements
                </motion.button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -8 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-[#007BFF]/20 aspect-[16/10]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=560&fit=crop&q=80"
                  alt="Professionnel en consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#002D62]/50 via-transparent to-[#40E0D0]/20" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -bottom-4 -left-2 sm:bottom-6 sm:-left-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-[#007BFF]/10 max-w-[200px]"
              >
                <p className="text-[10px] text-[#333333]/50 uppercase tracking-wider">
                  Taux d&apos;encaissement
                </p>
                <p
                  className="text-2xl font-bold text-[#002D62] mt-0.5"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  96,2%
                </p>
                <div className="mt-2 h-1.5 rounded-full bg-[#F0F7FC] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '96%' }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -top-3 right-2 sm:top-4 sm:right-4 bg-white/95 backdrop-blur rounded-xl px-3 py-2 shadow-lg border border-[#40E0D0]/20"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#40E0D0] animate-pulse" />
                  <span className="text-xs font-semibold text-[#002D62]">Stripe Connect actif</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <StatCard key={s.id} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="paiements" className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 sm:mb-6"
          >
            <h2
              className="text-xl sm:text-2xl font-bold text-[#002D62]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Performance financière
            </h2>
            <p className="text-xs sm:text-sm text-[#333333]/60 mt-1">
              Encaissement différé, incidents et relances automatiques
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div>
              <StatusChart />
            </div>
          </div>
        </div>
      </section>

      <section id="rdv" className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
            <div className="lg:col-span-3">
              <AppointmentsPanel />
            </div>
            <div className="lg:col-span-2">
              <ActivityFeed />
            </div>
          </div>
        </div>
      </section>

      <section id="structures" className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 sm:mb-6"
          >
            <h2
              className="text-xl sm:text-2xl font-bold text-[#002D62]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Multi-structures & équipes
            </h2>
            <p className="text-xs sm:text-sm text-[#333333]/60 mt-1">
              Espaces dédiés gestionnaires, assistants, professionnels et clients
            </p>
          </motion.div>
          <StructuresGrid />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-8 sm:mt-12 relative overflow-hidden rounded-2xl sm:rounded-3xl"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=400&fit=crop&q=80"
                alt="Paiement sécurisé"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#002D62]/95 via-[#002D62]/80 to-[#007BFF]/60" />
            </div>
            <div className="relative px-6 sm:px-10 py-10 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="max-w-lg">
                <h3
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Parcours client simplifié
                </h3>
                <p className="text-white/70 text-sm mt-2 leading-relaxed">
                  Lien personnel ou QR code, acceptation numérique des conditions financières,
                  paiement anticipé et attestations PDF automatiques.
                </p>
              </div>
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="shrink-0 px-6 py-3.5 rounded-xl text-sm font-semibold text-[#002D62] bg-gradient-to-r from-[#40E0D0] to-[#92FE9D] shadow-lg"
              >
                Générer un lien client
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;

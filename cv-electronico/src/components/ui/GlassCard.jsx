import React from 'react';
import { motion } from 'framer-motion';

export function GlassCard({ children, className = '', hoverGlow = false, onClick, ...props }) {
  return (
    <motion.div
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 p-6 shadow-xl transition-all duration-300 ${
        hoverGlow
          ? 'hover:border-cyan-500/40 hover:shadow-cyan-500/10 hover:shadow-2xl hover:-translate-y-1'
          : ''
      } ${className}`}
      {...props}
    >
      {/* Subtle top light border effect */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}

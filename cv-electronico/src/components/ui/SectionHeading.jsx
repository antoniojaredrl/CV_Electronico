import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeading({ title, subtitle, category, icon: Icon, align = 'left' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}
    >
      {category && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide uppercase mb-3 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="text-cyan-400 font-bold">&lt;/&gt;</span>
          {category}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight flex items-center gap-3 flex-wrap justify-start">
        {Icon && <Icon className="w-8 h-8 text-cyan-400 inline-block" />}
        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}

      {/* Decorative gradient bar */}
      <div className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 ${isCenter ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}

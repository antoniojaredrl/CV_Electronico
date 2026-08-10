import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, ChevronRight } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

export function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 sm:pl-10"
    >
      {/* Timeline Node Light Circle */}
      <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-md shadow-cyan-500/50 flex items-center justify-center -translate-x-[9px] z-10 group">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
      </div>

      <GlassCard hoverGlow className="space-y-4">
        {/* Header Header Info */}
        <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-slate-800/80">
          <div>
            <span className="inline-block text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
              {exp.company}
            </span>
            <h3 className="text-xl font-bold text-slate-100 mt-0.5">
              {exp.role}
            </h3>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              {exp.period}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hidden sm:inline-block">
              {exp.type}
            </span>
          </div>
        </div>

        {/* General Description */}
        <p className="text-sm text-slate-300 leading-relaxed font-normal">
          {exp.description}
        </p>

        {/* Responsibilities */}
        <div className="space-y-2 pt-1">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
            Responsabilidades Clave:
          </h4>
          <ul className="space-y-1.5">
            {exp.responsibilities.map((resp, rIdx) => (
              <li key={rIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements if present */}
        {exp.achievements && exp.achievements.length > 0 && (
          <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 space-y-1.5">
            <span className="text-xs font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-400" />
              Logros Destacados:
            </span>
            {exp.achievements.map((ach, aIdx) => (
              <p key={aIdx} className="text-xs text-slate-300 pl-5 relative">
                <span className="absolute left-1 top-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {ach}
              </p>
            ))}
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="pt-2 flex flex-wrap items-center gap-1.5">
          {exp.technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

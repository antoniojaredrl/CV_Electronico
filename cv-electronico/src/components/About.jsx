import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Code2, Cpu, Layers, Quote, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { personal } from '../data/personal';
import { philosophyQuotes } from '../data/philosophy';
import { GlassCard } from './ui/GlassCard';
import { SectionHeading } from './ui/SectionHeading';

const iconMap = {
  Calendar: Calendar,
  Code2: Code2,
  Cpu: Cpu,
  Layers: Layers,
};

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        category="Sobre Mí"
        title="Perfil Profesional"
        subtitle="Mi enfoque combina desarrollo, infraestructura y soporte para resolver problemas tecnológicos de forma integral, desde la creación de software hasta la configuración, mantenimiento y conectividad de los sistemas que lo hacen posible."
        icon={User}
      />

      {/* Main Bio & Stats Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Bio Text Column */}
        <div className="lg:col-span-7 space-y-6">
          <GlassCard className="space-y-4">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Visión & Enfoque de Ingeniería</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {personal.about.summary}
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              {personal.about.philosophy}
            </p>
          </GlassCard>

          {/* Key Focus Areas */}
          <GlassCard className="space-y-3">
            <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              // Áreas de Especialización
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {personal.about.focusAreas.map((area, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Stats Grid Column */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {personal.stats.map((stat, idx) => {
            const IconComp = iconMap[stat.icon] || Code2;
            return (
              <GlassCard
                key={idx}
                hoverGlow
                className="flex flex-col justify-between p-5 border-l-4 border-l-cyan-500"
              >
                <div className="flex items-center justify-between text-cyan-400 mb-2">
                  <IconComp className="w-6 h-6" />
                  <span className="text-xs font-mono text-slate-500">SYS_METRIC</span>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Philosophy Quotes Showcase */}
      <div className="mt-12">
        <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest text-center mb-6">
          // Filosofía de Trabajo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophyQuotes.map((item, idx) => (
            <GlassCard key={idx} hoverGlow className="flex flex-col justify-between relative group">
              <Quote className="w-8 h-8 text-cyan-500/20 absolute top-4 right-4 group-hover:text-cyan-500/40 transition-colors" />
              <p className="text-slate-300 text-sm italic leading-relaxed pt-2">
                "{item.quote}"
              </p>
              <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="font-mono text-cyan-400 font-semibold">{item.highlight}</span>
                <span className="text-slate-500">{item.author}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

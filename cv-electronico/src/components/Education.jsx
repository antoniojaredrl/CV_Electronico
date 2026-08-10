import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Bookmark } from 'lucide-react';
import { education } from '../data/education';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';

export function Education() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        category="Formación Académica"
        title="Educación & Certificaciones"
        subtitle="Grado universitario en Ingeniería en Sistemas y constante actualización profesional en tecnologías clave."
        icon={GraduationCap}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Degree Card */}
        <div className="lg:col-span-6">
          <GlassCard hoverGlow className="space-y-4 border-l-4 border-l-cyan-500">
            <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                  Título Universitario
                </span>
                <h3 className="text-2xl font-bold text-slate-100 mt-1">
                  {education.degree}
                </h3>
                <p className="text-slate-300 text-sm font-medium">
                  {education.university}
                </p>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                {education.status}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {education.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {education.location}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pt-1">
              {education.description}
            </p>
          </GlassCard>
        </div>

        {/* Certifications List */}
        <div className="lg:col-span-6 space-y-3">
          <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold mb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-400" />
            Certificaciones & Cursos Destacados
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {education.certifications.map((cert, idx) => (
              <GlassCard key={idx} hoverGlow className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                    {cert.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">{cert.year}</span>
                </div>
                <h5 className="text-sm font-bold text-slate-200 line-clamp-2">
                  {cert.title}
                </h5>
                <p className="text-xs text-slate-400">{cert.issuer}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

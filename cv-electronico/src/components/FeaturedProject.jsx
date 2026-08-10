import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, CheckCircle2, Box, Cpu, ChevronRight } from 'lucide-react';
import { GithubIcon } from './ui/Icons';
import { GlassCard } from './ui/GlassCard';

export function FeaturedProject({ project }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <GlassCard className="border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
        {/* Ambient Top Glow Tag */}
        <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-l from-cyan-500 to-emerald-500 text-slate-950 font-extrabold text-xs font-mono uppercase tracking-wider rounded-bl-2xl flex items-center gap-1.5 shadow-lg">
          <Sparkles className="w-3.5 h-3.5" />
          PROYECTO DESTACADO // 01
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          {/* Left Column: Project Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Box className="w-4 h-4 text-emerald-400" />
                {project.category} · System Showcase
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              {project.tagline}
            </p>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase">
                  Desafío / Problema:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30 space-y-1">
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                  Solución Implementada:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Results */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                Resultados Medibles:
              </span>
              <div className="space-y-1.5">
                {project.results.map((res, rIdx) => (
                  <div key={rIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Badges & Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex flex-wrap items-center gap-1.5">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                    title="Ver repositorio"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                  >
                    <span>Ver Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup / Architecture Dashboard representation */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 font-mono-code text-xs space-y-4 shadow-2xl relative group">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-500" />
                  <span className="text-slate-200 font-semibold">odoo_enterprise_module</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">STATUS: PRODUCTION</span>
              </div>

              {/* Simulated Code Architecture Snippet */}
              <div className="space-y-2 text-slate-300">
                <p className="text-cyan-400"># Odoo Architecture Model</p>
                <p><span className="text-pink-400">class</span> <span className="text-amber-300">ConstructionControl</span>(models.Model):</p>
                <p className="pl-4 text-slate-400">_name = <span className="text-emerald-300">'construction.work.order'</span></p>
                <p className="pl-4 text-slate-400">_description = <span className="text-emerald-300">'Work Order & Cost Control'</span></p>
                <p className="pl-4">budget_total = fields.Monetary(string=<span className="text-emerald-300">'Presupuesto'</span>)</p>
                <p className="pl-4">progress_percent = fields.Float(compute=<span className="text-emerald-300">'_compute_progress'</span>)</p>
                <p className="pl-4 text-cyan-400">@api.depends('work_lines.completed')</p>
                <p className="pl-4"><span className="text-pink-400">def</span> <span className="text-amber-300">_compute_progress</span>(self):</p>
                <p className="pl-8 text-slate-400 font-italic"># Real-time progress metric calculation</p>
                <p className="pl-8">self.progress_percent = sum(self.work_lines.mapped('weight'))</p>
              </div>

              {/* Status bar */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                <span>PostgreSQL DB Sync: OK</span>
                <span className="text-cyan-400 font-bold">100% ERP Integrated</span>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

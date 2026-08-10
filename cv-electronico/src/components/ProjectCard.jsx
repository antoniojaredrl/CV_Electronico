import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './ui/Icons';
import { GlassCard } from './ui/GlassCard';

export function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <GlassCard hoverGlow className="h-full flex flex-col justify-between group relative overflow-hidden">
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="space-y-4">
          {/* Card Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors">
              <FolderGit2 className="w-5 h-5" />
            </div>

            <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] font-mono">
              {project.category}
            </span>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-1.5">
            <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-cyan-400 shrink-0" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Solution & Results */}
          <div className="pt-2 text-xs text-slate-400 space-y-1 border-t border-slate-800/60">
            <p className="line-clamp-2">
              <strong className="text-slate-200 font-medium">Solución:</strong> {project.solution}
            </p>
          </div>
        </div>

        {/* Footer: Tech Badges & Buttons */}
        <div className="pt-6 space-y-4">
          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-1.5">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-mono group-hover:border-slate-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 text-xs font-semibold text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

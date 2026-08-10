import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitFork, Star, Code, ExternalLink } from 'lucide-react';
import { GithubIcon } from './ui/Icons';
import { personal } from '../data/personal';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';

export function GithubShowcase() {
  const mockRepos = [
    { name: 'odoo-custom-modules', desc: 'Módulos nativos de Odoo ERP en Python y XML para control de obras.', stars: 12, forks: 4, lang: 'Python', color: '#3572A5' },
    { name: 'react-enterprise-dashboard', desc: 'Dashboard interactivo de analítica con React y Tailwind CSS.', stars: 18, forks: 6, lang: 'JavaScript', color: '#f1e05a' },
    { name: 'server-status-monitor', desc: 'CLI experimental para monitoreo de contenedores Docker y Linux.', stars: 8, forks: 2, lang: 'Python', color: '#3572A5' }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <GlassCard className="border-slate-800 bg-slate-950/80 p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700 text-slate-100">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span>Actividad en GitHub & Repositorios</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                // Código abierto, contribuciones y proyectos públicos
              </p>
            </div>
          </div>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 text-xs font-mono flex items-center gap-2 transition-colors"
          >
            <span>@Ver Perfil GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mock Activity Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {mockRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span className="font-mono text-cyan-400">{repo.name}</span>
                <span className="flex items-center gap-1 text-amber-400 text-[11px]">
                  <Star className="w-3 h-3 fill-amber-400" />
                  {repo.stars}
                </span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">{repo.desc}</p>
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.color }} />
                  {repo.lang}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {repo.forks}
                </span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}

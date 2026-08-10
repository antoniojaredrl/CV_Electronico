import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Layout,
  Server,
  Building2,
  Database,
  GitBranch,
  Network,
  Code,
  FileCode,
  Palette,
  Globe,
  Terminal as TerminalIcon,
  Cpu,
  Workflow,
  Box,
  Briefcase,
  Table,
  GitCommit,
  Container,
  Cloud,
  Zap,
  ShieldCheck,
  HardDrive,
  Info
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { skillCategories } from '../data/skills';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';

const iconMap = {
  Layout,
  Server,
  Building2,
  Database,
  GitBranch,
  Network,
  Code,
  FileCode,
  Palette,
  Globe,
  Terminal: TerminalIcon,
  Cpu,
  Workflow,
  Box,
  Layers,
  Briefcase,
  Table,
  GitCommit,
  Github: GithubIcon,
  Container,
  Cloud,
  Zap,
  ShieldCheck,
  HardDrive
};

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="stack" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        category="Stack Tecnológico"
        title="Herramientas, Lenguajes & Ecosistema"
        subtitle="Dominio técnico organizado por áreas de especialidad. Pasa el cursor sobre cualquier tecnología para ver detalles de experiencia."
        icon={Layers}
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-start gap-2 mb-10">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
            activeCategory === 'all'
              ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
              : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          [Todas las Categorías]
        </button>

        {skillCategories.map((cat) => {
          const IconComponent = iconMap[cat.icon] || Layers;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-cyan-950 border border-cyan-500/50 text-cyan-300 shadow-md'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <IconComponent className="w-3.5 h-3.5 text-cyan-400" />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => {
          const CategoryIcon = iconMap[category.icon] || Layers;
          return (
            <GlassCard key={category.id} className="flex flex-col justify-between">
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">{category.title}</h3>
                    <p className="text-xs text-slate-400 leading-tight">{category.description}</p>
                  </div>
                </div>

                {/* Skills Badges List */}
                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => {
                    const SkillIcon = iconMap[skill.icon] || Code;
                    const isHovered = hoveredSkill?.name === skill.name;

                    return (
                      <div
                        key={sIdx}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                          isHovered
                            ? 'bg-cyan-950/40 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                            : 'bg-slate-900/40 border-slate-800/60 hover:bg-slate-900/90 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <SkillIcon className={`w-4 h-4 ${isHovered ? 'text-cyan-300' : 'text-cyan-400'}`} />
                            <span className="text-sm font-semibold text-slate-200">
                              {skill.name}
                            </span>
                          </div>

                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                            {skill.level}
                          </span>
                        </div>

                        {/* Interactive Hover Info Reveal */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2.5 pt-2 border-t border-cyan-500/20 text-xs text-slate-300 flex items-start gap-1.5"
                            >
                              <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{skill.hoverInfo}</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}

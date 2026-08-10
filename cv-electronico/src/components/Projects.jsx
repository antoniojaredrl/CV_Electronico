import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import { SectionHeading } from './ui/SectionHeading';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const featuredProj = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  const filteredProjects =
    activeCategory === 'Todos'
      ? regularProjects
      : regularProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        category="Portafolio"
        title="Proyectos & Sistemas Desarrollados"
        subtitle="Soluciones tecnológicas empresariales, módulos ERP personalizados, tableros de métricas y herramientas de desarrollo."
        icon={FolderGit2}
      />

      {/* Featured Project Big Showcase Card */}
      {featuredProj && <FeaturedProject project={featuredProj} />}

      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Filter className="w-4 h-4 text-cyan-400" />
          <span>Filtrar por categoría:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === category
                  ? 'bg-cyan-950 border border-cyan-500/60 text-cyan-300 shadow-md font-semibold'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

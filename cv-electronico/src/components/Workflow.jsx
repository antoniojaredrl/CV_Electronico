import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Workflow as WorkflowIcon,
  BrainCircuit,
  PenTool,
  Code2,
  CheckCircle2,
  Rocket,
  TrendingUp
} from 'lucide-react';
import { workflowSteps } from '../data/workflow';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';

const iconMap = {
  BrainCircuit,
  PenTool,
  Code2,
  CheckCircle2,
  Rocket,
  TrendingUp
};

export function Workflow() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const progressLineWidth = useTransform(scrollYProgress, [0.1, 0.7], ['0%', '100%']);

  return (
    <section id="workflow" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <SectionHeading
        category="Metodología"
        title="Cómo Trabajo & Proceso de Desarrollo"
        subtitle="Un enfoque estructurado de 6 etapas que convierte problemas complejos en productos funcionales y mantenibles."
        icon={WorkflowIcon}
      />

      <div ref={containerRef} className="relative mt-16">
        {/* Animated Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 z-0" />
        <motion.div
          style={{ width: progressLineWidth }}
          className="hidden lg:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-400 shadow-[0_0_12px_#06b6d4] -translate-y-1/2 z-0"
        />

        {/* Workflow 6-Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
          {workflowSteps.map((item, index) => {
            const IconComp = iconMap[item.icon] || Code2;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard hoverGlow className="h-full flex flex-col justify-between p-5 space-y-3 relative group">
                  {/* Step Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                      {item.step}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 group-hover:text-emerald-400 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cyan-400/80 font-mono font-medium">
                      {item.shortDesc}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed pt-2">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

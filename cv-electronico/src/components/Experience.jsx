import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experience';
import { SectionHeading } from './ui/SectionHeading';
import { ExperienceCard } from './ExperienceCard';

export function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      <SectionHeading
        category="Trayectoria"
        title="Experiencia Profesional"
        subtitle="Evolución en desarrollo de software, sistemas ERP empresariales, optimización de infraestructura e integración de tecnologías."
        icon={Briefcase}
      />

      <div ref={containerRef} className="relative mt-12 space-y-12">
        {/* Base Timeline Line */}
        <div className="absolute left-[3px] top-3 bottom-3 w-[2px] bg-slate-800" />

        {/* Illuminated Progress Line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[3px] top-3 w-[2px] bg-gradient-to-b from-cyan-400 via-emerald-400 to-cyan-500 shadow-[0_0_12px_#06b6d4]"
        />

        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Send, MapPin, CheckCircle2, Cpu, Code } from 'lucide-react';
import { personal } from '../data/personal';
import { Terminal } from './Terminal';

export function Hero() {
  const [specialtyIndex, setSpecialtyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpecialtyIndex((prev) => (prev + 1) % personal.specialties.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern overflow-hidden"
    >
      {/* Background Glow Lights */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Greeting & Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{personal.status}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-sm font-mono text-cyan-400 uppercase tracking-widest">
              Hola, soy
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-100 tracking-tight leading-none">
              {personal.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent pt-1">
              {personal.role}
            </h2>
          </div>

          {/* Specialty Cycling Text */}
          <div className="h-10 flex items-center text-lg sm:text-xl font-mono text-slate-300">
            <span className="text-slate-500 mr-2">&gt;</span>
            <span className="text-cyan-400 font-semibold underline decoration-cyan-500/50 decoration-2 underline-offset-4">
              {personal.specialties[specialtyIndex]}
            </span>
            <span className="animate-pulse ml-1 text-cyan-400 font-bold">|</span>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal pt-2">
            "{personal.heroTagline}"
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('experience')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2 group"
            >
              <span>Explorar mi experiencia</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={personal.cvPdf}
              download
              className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Descargar CV</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 font-semibold text-sm transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Contactarme</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Terminal Component */}
        <div className="lg:col-span-5 w-full">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
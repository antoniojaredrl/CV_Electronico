import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, CheckCircle2, Send, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import confetti from 'canvas-confetti';
import { personal } from '../data/personal';
import { SectionHeading } from './ui/SectionHeading';
import { GlassCard } from './ui/GlassCard';
import { Toast } from './ui/Toast';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#06b6d4', '#10b981', '#ffffff'],
      });
    } catch (e) {
      // Ignore fallback if confetti fails
    }

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      {/* Toast Notification */}
      <Toast message="¡Correo copiado al portapapeles! ✓" isVisible={copied} />

      <SectionHeading
        category="Contacto Directo"
        title="¿Construimos algo juntos?"
        subtitle="Estoy abierto a nuevos proyectos, oportunidades profesionales y retos tecnológicos donde pueda generar un impacto real."
        icon={Send}
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard className="border-cyan-500/30 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950 p-8 sm:p-12 text-center space-y-8 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-emerald-500/10 pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 p-[1px] mx-auto shadow-xl shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center text-cyan-400">
                <MessageSquare className="w-8 h-8" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Hablemos de tu próximo proyecto o sistema
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Ya sea que necesites desarrollo de módulos personalizados en Odoo, la construcción de una SPA interactiva en React o asesoría en arquitectura de software, contáctame directamente.
            </p>
          </div>

          {/* Email Copy Box */}
          <div className="max-w-md mx-auto relative z-10">
            <div className="p-2 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-2 shadow-inner">
              <div className="flex items-center gap-3 px-3 overflow-hidden text-ellipsis">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-slate-200 select-all truncate">
                  {personal.email}
                </span>
              </div>

              <button
                onClick={copyEmailToClipboard}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:opacity-95 transition-opacity shrink-0 shadow-md"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar correo</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-800/80 relative z-10">
            <a
              href={`mailto:${personal.email}`}
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Enviar Mail Directo</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}

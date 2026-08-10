import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Play, RefreshCw, CheckCircle2, CornerDownLeft, Sparkles } from 'lucide-react';
import { personal } from '../data/personal';

const INITIAL_COMMANDS = [
  { cmd: 'whoami', output: `${personal.role} | ${personal.titleTag}` },
  { cmd: 'skills', output: 'React · Python · Odoo ERP · PostgreSQL · Docker · Git · Tailwind CSS' },
  { cmd: 'status', output: `${personal.status}` },
];

export function Terminal() {
  const [history, setHistory] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const terminalEndRef = useRef(null);

  // Simulated typing sequence on initial render
  useEffect(() => {
    let currentStep = 0;
    const runSequence = () => {
      if (currentStep < INITIAL_COMMANDS.length) {
        const item = INITIAL_COMMANDS[currentStep];
        setHistory((prev) => [...prev, { type: 'cmd', text: item.cmd }, { type: 'output', text: item.output }]);
        currentStep++;
        setTimeout(runSequence, 800);
      } else {
        setIsTyping(false);
      }
    };

    const timer = setTimeout(runSequence, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const scrollToSection = (id) => {
    setTimeout(() => {
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
    }, 150);
  };

  const handleCommand = (commandStr, shouldScroll = true) => {
    const cleanCmd = commandStr.trim().toLowerCase();
    if (!cleanCmd) return;

    const newHistory = [...history, { type: 'cmd', text: cleanCmd }];

    switch (cleanCmd) {
      case 'whoami':
      case 'about':
        newHistory.push({ type: 'output', text: `👤 ${personal.name} - ${personal.role}. Navegando a sección Sobre Mí...` });
        if (shouldScroll) scrollToSection('about');
        break;

      case 'skills':
      case 'stack':
        newHistory.push({ type: 'output', text: '⚡ Frontend: React, JS, Tailwind | Backend: Python, Node, APIs REST | ERP: Odoo | DB: PostgreSQL. Navegando a Stack...' });
        if (shouldScroll) scrollToSection('stack');
        break;

      case 'status':
        newHistory.push({ type: 'output', text: `🚀 ${personal.status}` });
        break;

      case 'experience':
        newHistory.push({ type: 'output', text: '💼 Navegando a la sección de Experiencia Profesional...' });
        if (shouldScroll) scrollToSection('experience');
        break;

      case 'projects':
        newHistory.push({ type: 'output', text: '📦 Proyectos destacados: Control de Obra Odoo ERP, SaaS Dashboard, Server Monitor. Navegando a Proyectos...' });
        if (shouldScroll) scrollToSection('projects');
        break;

      case 'contact':
        newHistory.push({ type: 'output', text: `📧 Email: ${personal.email} | LinkedIn: ${personal.linkedin}. Navegando a Contacto...` });
        if (shouldScroll) scrollToSection('contact');
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'help':
        newHistory.push({
          type: 'output',
          text: 'Comandos disponibles: whoami, skills, experience, projects, contact, status, clear, help',
        });
        break;

      default:
        newHistory.push({
          type: 'output',
          text: `Comando no reconocido: '${cleanCmd}'. Escribe 'help' para ver los comandos disponibles.`,
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const resetTerminal = () => {
    setHistory([]);
    setIsTyping(true);
    let currentStep = 0;
    const runSequence = () => {
      if (currentStep < INITIAL_COMMANDS.length) {
        const item = INITIAL_COMMANDS[currentStep];
        setHistory((prev) => [...prev, { type: 'cmd', text: item.cmd }, { type: 'output', text: item.output }]);
        currentStep++;
        setTimeout(runSequence, 600);
      } else {
        setIsTyping(false);
      }
    };
    runSequence();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-xl mx-auto rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl shadow-cyan-950/40 overflow-hidden font-mono-code backdrop-blur-xl"
    >
      {/* Top IDE / Terminal Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-sans font-medium text-slate-400 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            system_cli ~ bash
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetTerminal}
            title="Reiniciar consola"
            className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 sm:p-5 text-xs sm:text-sm h-64 sm:h-72 overflow-y-auto space-y-3 leading-relaxed text-slate-200">
        <div className="text-slate-500 text-xs mb-2">
          // Consola interactiva del sistema. Haz clic en los comandos para navegar a cada sección.
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.type === 'cmd' ? (
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-emerald-400 font-bold">&gt;</span>
                <span className="font-semibold">{item.text}</span>
              </div>
            ) : (
              <div className="pl-4 text-slate-300 border-l-2 border-slate-800 py-0.5">
                {item.text}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-cyan-400/70 animate-pulse">
            <span className="text-emerald-400">&gt;</span>
            <span>ejecutando...</span>
          </div>
        )}

        {/* Input prompt */}
        {!isTyping && (
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400 font-bold">&gt;</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Escribe un comando (ej. skills, projects, contact)..."
              className="flex-1 bg-transparent text-cyan-300 placeholder-slate-600 focus:outline-none text-xs sm:text-sm"
            />
            <button type="submit" className="text-slate-500 hover:text-cyan-400">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div ref={terminalEndRef} />
      </div>

      {/* Quick Command Navigation Presets */}
      <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto text-[11px] font-sans">
        <span className="text-slate-500 flex items-center gap-1 shrink-0 font-medium">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          Navegar con Presets:
        </span>
        {[
          { cmd: 'whoami', label: 'whoami' },
          { cmd: 'skills', label: 'skills' },
          { cmd: 'experience', label: 'experience' },
          { cmd: 'projects', label: 'projects' },
          { cmd: 'contact', label: 'contact' },
          { cmd: 'clear', label: 'clear' }
        ].map((item) => (
          <button
            key={item.cmd}
            onClick={() => handleCommand(item.cmd, true)}
            className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-cyan-950 hover:text-cyan-300 hover:border-cyan-500/50 text-slate-300 border border-slate-700/60 transition-all shrink-0 font-mono-code flex items-center gap-1"
          >
            <span>{item.cmd}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

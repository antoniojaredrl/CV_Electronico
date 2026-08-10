import React from 'react';
import { Heart, Terminal, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './ui/Icons';
import { personal } from '../data/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left: Branding & Role */}
        <div className="space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-bold text-slate-100">{personal.name}</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            {personal.role} · {personal.location}
          </p>
        </div>

        {/* Center: Built with React */}
        <div className="text-xs text-slate-500 font-mono flex items-center justify-center gap-1">
          <span>Built with</span>
          <span className="text-cyan-400 font-bold">React</span>
          <span>&</span>
          <span className="text-emerald-400 font-bold">Tailwind CSS</span>
          <span className="mx-1">·</span>
          <span>© {currentYear}</span>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-slate-900 hover:text-cyan-400 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-slate-900 hover:text-cyan-400 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

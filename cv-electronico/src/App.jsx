import React from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Workflow } from './components/Workflow';
import { GithubShowcase } from './components/GithubShowcase';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const sectionIds = ['inicio', 'about', 'experience', 'stack', 'projects', 'workflow', 'contact'];

export default function App() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans relative">
      {/* Global Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Workflow />
        <GithubShowcase />
        <Education />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

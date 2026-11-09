import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-200 scroll-smooth">
      {/* Global Navigation Layer */}
      <Navbar />
      
      <main className="relative">
        {/* SECTION 1: HERO (Clear/Transparent Backdrop) */}
        <section id="home" className="min-h-screen flex items-center justify-center relative px-4 border-b border-slate-900 bg-slate-950">
          <Hero />
        </section>
        
        {/* SECTION 2: ABOUT ME (Slightly lighter slate for visual break) */}
        <section id="about" className="min-h-screen py-24 sm:py-32 flex items-center justify-center relative px-4 bg-slate-900/40 border-b border-slate-900">
          <About />
        </section>
        
        {/* SECTION 3: PROJECTS (Dark background with structured grids) */}
        <section id="projects" className="min-h-screen py-24 sm:py-32 flex items-center justify-center relative px-4 bg-slate-950 border-b border-slate-900">
          <Projects />
        </section>
        
        {/* SECTION 4: CONTACT (Deepest tint to anchor the footer layout) */}
        <section id="contact" className="min-h-screen py-24 sm:py-32 flex items-center justify-center relative px-4 bg-slate-900/20">
          <Contact />
        </section>
      </main>

      {/* Mini Technical Footer */}
      <footer className="py-8 text-center text-xs text-slate-600 bg-slate-950 border-t border-slate-900">
        <p>&copy; {new Date().getFullYear()} Matthew Lee. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;

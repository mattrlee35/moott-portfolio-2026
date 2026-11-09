import React from 'react';

function Hero() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 py-12 relative">
      
      {/* Dynamic Background Blurs */}
      <div className="absolute top-10 left-10 -z-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-10 right-10 -z-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="flex-1 text-center md:text-left space-y-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-ping" />
          Available for Opportunities
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">Matthew Lee</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 font-medium tracking-wide">
          Full-Stack Web Developer
        </p>

        <p className="text-base sm:text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
          Based in Aurora, Illinois. I specialize in building highly interactive, modern single-page applications with clean user interfaces and lightning-fast performance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 text-center text-sm font-bold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-emerald-500/10"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 text-center text-sm font-bold rounded-xl border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900/50 active:scale-95 transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Visual Graphical Card Container */}
      <div className="flex-1 w-full max-w-sm aspect-square relative flex items-center justify-center group">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-[2rem] rotate-3 scale-95 blur-sm transition-transform group-hover:rotate-6 duration-500" />
        <div className="w-full h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-[2rem] flex items-center justify-center shadow-2xl relative z-10 overflow-hidden">
          <span className="font-mono text-5xl font-bold bg-gradient-to-b from-emerald-500/40 to-transparent bg-clip-text text-transparent select-none">&lt;/&gt;</span>
        </div>
      </div>

    </div>
  );
}

export default Hero;

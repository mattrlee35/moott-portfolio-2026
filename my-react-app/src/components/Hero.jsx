import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const socialLinks = [
  { name: 'Email', href: 'mailto:mattrlee35@gmail.com', icon: FaEnvelope },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/matthew-lee-69647126a/', icon: FaLinkedin },
  { name: 'GitHub', href: 'https://github.com/mattrlee35', icon: FaGithub },
];

function Hero() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 py-12 relative">
      
      {/* Dynamic Background Blurs */}
      <div className="absolute top-10 left-10 -z-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-10 right-10 -z-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="flex-1 text-center md:text-left space-y-6">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
          <FaMapMarkerAlt className="w-3 h-3" />
          Aurora, Illinois
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">Matthew Lee</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-300 font-medium tracking-wide">
          Full Stack Web Developer
        </p>

        <p className="text-base sm:text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
          Front end web developer at Key RE Solutions and freelance full stack developer, with a B.S. in Computer Science from Southern New Hampshire University.
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

        <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={name}
              className="p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Profile Photo Card */}
      <div className="flex-1 w-full max-w-sm aspect-square relative flex items-center justify-center group">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 rounded-[2rem] rotate-3 scale-95 blur-sm transition-transform group-hover:rotate-6 duration-500" />
        <div className="w-full h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-[2rem] shadow-2xl relative z-10 overflow-hidden">
          <img
            src="https://i.imgur.com/y6nipxG.png"
            alt="Matthew Lee"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
}

export default Hero;

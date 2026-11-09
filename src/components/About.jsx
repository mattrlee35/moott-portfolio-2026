import React, { useState } from 'react';

function About() {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Core",
      colorClass: "hover:border-emerald-500/30 hover:bg-emerald-500/5 text-emerald-400",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit", "HTML5/CSS3"]
    },
    {
      id: "backend",
      title: "Backend & Database",
      colorClass: "hover:border-blue-500/30 hover:bg-blue-500/5 text-blue-400",
      skills: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      colorClass: "hover:border-purple-500/30 hover:bg-purple-500/5 text-purple-400",
      skills: ["AWS (S3/EC2)", "Docker", "Git/GitHub", "Vercel", "CI/CD Pipelines", "Linux"]
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
      <div className="flex-1 space-y-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="h-1 w-12 bg-emerald-400 rounded-full" />
        </div>
        
        <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light">
          Hello! I'm a full-stack engineer who loves building clean, accessible, and fast web ecosystems. My passion for engineering started with finding ways to automate workflows, which quickly grew into building interactive user interfaces.
        </p>

        <p className="text-slate-400 leading-relaxed text-sm sm:text-base font-light">
          I focus on writing semantic, efficient code and creating highly responsive designs. Whether designing structured database schemas or building out smooth client-side state transitions, I try to keep user experience front and center.
        </p>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="p-5 rounded-2xl border border-slate-900 bg-slate-950/40">
            <div className="text-3xl font-black text-white">20+</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-bold mt-1">Projects Built</div>
          </div>
          <div className="p-5 rounded-2xl border border-slate-900 bg-slate-950/40">
            <div className="text-3xl font-black text-emerald-400">Available</div>
            <div className="text-xs text-slate-500 uppercase tracking-wider font-bold mt-1">Freelance & Full-Time</div>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full space-y-6">
        <h3 className="text-lg font-bold text-slate-200 tracking-tight uppercase tracking-wider text-xs">
          Technical Focus Areas
        </h3>

        <div className="space-y-4">
          {skillCategories.map((cat) => (
            <div 
              key={cat.id}
              onMouseEnter={() => setActiveCategory(cat.id)}
              onMouseLeave={() => setActiveCategory(null)}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'border-slate-700 bg-slate-900/50 translate-x-1 shadow-xl' 
                  : 'border-slate-900 bg-slate-900/20'
              }`}
            >
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${activeCategory === cat.id ? 'bg-emerald-400 scale-125' : 'bg-slate-700'} transition-all`} />
                {cat.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`px-3 py-1.5 rounded-xl border border-slate-900 bg-slate-950/60 text-xs font-medium text-slate-300 transition-all duration-300 cursor-default select-none ${cat.colorClass} hover:-translate-y-0.5`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

import React from 'react';

function Projects() {
  const projectList = [
    {
      id: 1,
      title: "E-Commerce Cloud Engine",
      description: "A next-gen headless shopping cart API engine capable of processing 10k requests per minute with built-in telemetry.",
      tags: ["React", "Node.js", "GraphQL", "AWS"],
      size: "md:col-span-2 md:row-span-2",
      accent: "from-emerald-500/10 to-teal-500/5 border-emerald-500/10"
    },
    {
      id: 2,
      title: "AI-Powered Markdown Editor",
      description: "A gorgeous, distraction-free markdown note-taking web app running local client-side LLM autocomplete models.",
      tags: ["React", "TypeScript", "WebLLM"],
      size: "md:col-span-1 md:row-span-2",
      accent: "from-blue-500/10 to-indigo-500/5 border-blue-500/10"
    },
    {
      id: 3,
      title: "Realtime Cryptograph Dashboard",
      description: "Live streaming canvas web sockets tracking global digital asset liquidity fluctuations map layout.",
      tags: ["React", "WebSockets", "Tailwind"],
      size: "md:col-span-1 md:row-span-1",
      accent: "from-purple-500/10 to-pink-500/5 border-purple-500/10"
    },
    {
      id: 4,
      title: "TaskFlow Kanban Studio",
      description: "A sleek project management workspace with intuitive drag-and-drop layout layers and workspace filtering mechanics.",
      tags: ["React", "Zustand", "Tailwind"],
      size: "md:col-span-2 md:row-span-1",
      accent: "from-amber-500/10 to-orange-500/5 border-amber-500/10"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Featured <span className="text-emerald-400">Projects</span>
        </h2>
        <div className="h-1 w-12 bg-emerald-400 rounded-full mt-3 mx-auto md:mx-0" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
        {projectList.map((project) => (
          <div
            key={project.id}
            className={`group relative rounded-[2rem] border bg-gradient-to-br ${project.accent} bg-slate-900/30 backdrop-blur-sm p-8 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-slate-700/60 ${project.size}`}
          >
            <div className="space-y-4 z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-900 text-slate-500 group-hover:text-white group-hover:bg-emerald-500 group-hover:border-emerald-400 transition-all duration-300">
                  <svg className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-light max-w-md">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 z-10">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-slate-950/40 border border-slate-900 text-xs font-semibold text-slate-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

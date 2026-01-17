import React, { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Code2, Sparkles, X, Terminal, Layers } from "lucide-react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  const projectList = useMemo(() => projects, [projects]);

  return (
    <section id="projects" className="relative py-32 px-6 bg-[#050505] text-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-20 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-teal-400 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Featured Work
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">Digital <span className="text-gray-500">Showcase.</span></h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[280px]">
          {projectList.map((proj, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={proj.name}
                layoutId={`card-${proj.name}`}
                onClick={() => setSelectedProject(proj)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className={`relative group cursor-pointer flex flex-col justify-between overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-8 hover:border-teal-500/50 transition-colors duration-500 ${
                  isLarge ? "md:col-span-6 lg:col-span-8" : "md:col-span-3 lg:col-span-4"
                }`}
              >
                <div className="absolute top-8 right-8 text-white/10 group-hover:text-teal-400/20 transition-colors">
                  {isLarge ? <Sparkles size={48} /> : <Code2 size={32} />}
                </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-teal-400 transition-colors">{proj.name}</h3>
                  <p className="text-gray-400 text-sm md:text-base line-clamp-3">{proj.description}</p>
                </div>

                <div className="relative z-10 mt-6 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {proj.tech?.slice(0, 3).map((t, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-[10px] font-bold text-teal-400">
                        {t[0]}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-teal-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details <ExternalLink size={14} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] cursor-zoom-out"
            />
            <motion.div 
              layoutId={`card-${selectedProject.name}`}
              className="fixed inset-4 md:inset-20 lg:inset-x-60 lg:inset-y-32 z-[70] bg-[#121212] border border-white/10 rounded-[3rem] p-8 md:p-12 overflow-y-auto shadow-2xl"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                <X size={24} />
              </button>

              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-3 text-teal-400 mb-6 font-mono text-sm uppercase tracking-widest">
                  <Terminal size={16} /> Project Overview
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">{selectedProject.name}</h2>
                
                <p className="text-xl text-gray-400 leading-relaxed mb-12">{selectedProject.longDescription || selectedProject.description}</p>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold mb-4 text-white"><Layers size={20} className="text-teal-400"/> Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech?.map(t => (
                        <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300">{t}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-end gap-4">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">
                        <Github size={20} /> View Source Code
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a href={selectedProject.demo} target="_blank" className="flex items-center justify-center gap-3 w-full py-4 bg-teal-400 text-black rounded-2xl font-bold hover:bg-teal-300 transition-all">
                        <ExternalLink size={20} /> Launch Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

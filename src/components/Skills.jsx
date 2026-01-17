import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Wrench, Zap } from "lucide-react";

const Skills = () => {
  const [skills, setSkills] = useState({ frontend: [], backend: [], tools: [] });

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error loading skills:", err));
  }, []);

  const skillData = useMemo(() => skills, [skills]);

  const renderSection = (title, items, icon, delayOffset) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delayOffset, ease: "easeOut" }}
      className="group relative flex flex-col bg-[#121212] border border-white/5 p-8 rounded-[2.5rem] overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-2xl bg-teal-400/10 text-teal-400 group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <h3 className="text-2xl font-black tracking-tight">{title}</h3>
        </div>

        <div className="space-y-6">
          {items.map((skill, idx) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delayOffset + (idx * 0.1) }}
              className="relative"
            >
              <div className="flex justify-between items-end mb-2">
                <span className="text-lg font-bold text-gray-200">{skill.name}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-teal-500/50">Expertise</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                {skill.desc}
              </p>
              {idx !== items.length - 1 && (
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-white/5 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="relative py-32 px-6 bg-[#050505] text-white">
      {/* Heading Group */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-tighter text-gray-400 mb-4"
        >
          <Zap size={14} className="text-teal-400" /> STACK & TOOLS
        </motion.div>
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
          Technical <span className="text-gray-500">Arsenal.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {renderSection("Frontend", skillData.frontend, <Layout size={24} />, 0.1)}
        {renderSection("Backend", skillData.backend, <Server size={24} />, 0.2)}
        {renderSection("Tools", skillData.tools, <Wrench size={24} />, 0.3)}
      </div>
    </section>
  );
};

export default Skills;

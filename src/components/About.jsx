import React from "react";
import { motion } from "framer-motion";
import { Code2, BookOpen, GraduationCap, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    { label: "Focus", value: "Python Full Stack", icon: <Code2 size={20}/> },
    { label: "Education", value: "BCA Student", icon: <GraduationCap size={20}/> },
    { label: "Learning", value: "Daily Learner", icon: <BookOpen size={20}/> },
  ];

  return (
    <section id="about" className="relative py-32 px-6 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col items-center mb-16">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-bold uppercase tracking-widest mb-4"
          >
            Aspiring Software Engineer
          </motion.span>
          <h2 className="text-5xl font-black tracking-tight text-center">
            Merging Logic with <span className="text-teal-400">Efficiency.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Main Bio Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 p-8 rounded-[2.5rem] bg-gradient-to-br from-gray-900 to-[#121212] border border-white/5 relative overflow-hidden group"
          >
            <Sparkles className="absolute top-6 right-6 text-teal-400/20 group-hover:text-teal-400 transition-colors" />
            <p className="text-xl text-gray-300 leading-relaxed">
              I am a <span className="text-white font-semibold">BCA Undergraduate</span> specializing in Python-driven web development. My passion lies in architecting robust backends with <span className="text-white">Django</span> while ensuring seamless frontend integration.
              <br /><br />
              As a developer who values clean code architecture, I focus on building applications that are not just functional but scalable. I am actively seeking an internship to apply my technical skills in a collaborative environment and contribute to real-world software solutions.
            </p>
            
            {/* Traits Grid */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {highlights.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-center md:text-left">
                  <div className="text-teal-400 mb-2 flex justify-center md:justify-start">{stat.icon}</div>
                  <div className="text-lg font-bold">{stat.value}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Bento Card - Django Focused */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-[2.5rem] bg-[#121212] border border-white/5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                Tech Stack <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Django", "DRF", "React", "JavaScript", "PostgreSQL", "Tailwind CSS", "Git", "REST APIs"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-400 hover:border-teal-400/50 hover:text-white transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-sm font-bold text-teal-400 mb-2">Internship Ready:</p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Strong fundamentals in Data Structures, Python, and Web Frameworks. Committed to writing PEP 8 compliant, readable code.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

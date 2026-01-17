import React from "react";
import { motion } from "framer-motion";
import { Terminal, Code, Sparkles, ChevronDown } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 bg-[#050505] overflow-hidden">
      
      {/* Background: Animated Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-5xl"
      >
        {/* Status Badge */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-teal-400 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
          </span>
          Available for new projects
        </motion.div>

        {/* Heading with Highlight */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6"
        >
          I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-purple-500">Manish.</span>
        </motion.h1>

        {/* Animated Description */}
        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-10 font-medium"
        >
          Building <span className="text-white">scalable digital experiences</span> with a focus on performance, accessibility, and modern aesthetics.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-teal-400 text-gray-900 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">Explore Work</span>
            <Code className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Tech Stack Floating Icons */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 flex flex-wrap justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all"
        >
          {['React', 'Next.js', 'Node.js', 'Python', 'Tailwind', 'PostgreSQL'].map((tech) => (
            <span key={tech} className="text-sm font-mono text-gray-500 px-3 py-1 border border-white/5 rounded-md">
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;

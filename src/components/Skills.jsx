import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState({ frontend: [], backend: [], tools: [] });

  useEffect(() => {
    fetch("src/assets/data/skills.json") // should be in public folder
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error loading skills:", err));
  }, []);

  const renderSection = (title, items, delayOffset) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delayOffset }}
      className="flex flex-col gap-4 bg-gray-800/60 p-8 rounded-3xl shadow-2xl 
                 hover:scale-105 transition-transform duration-300 min-w-[280px]"
    >
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      <ul className="space-y-3 text-gray-300">
        {items.map((skill, idx) => (
          <li key={idx} className="border-b border-gray-700 pb-2 last:border-none">
            <p className="text-lg font-semibold">{skill.name}</p>
            <p className="text-sm text-gray-400">{skill.desc}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="skills" className="relative py-28 px-6 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center relative z-10">Skills</h2>

      <div className="flex flex-col md:flex-row justify-center gap-10 relative z-10">
        {renderSection("Frontend", skills.frontend, 0.2)}
        {renderSection("Backend", skills.backend, 0.4)}
        {renderSection("Tools", skills.tools, 0.6)}
      </div>
    </section>
  );
};

export default Skills;

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState({ frontend: [], backend: [], tools: [] });

  useEffect(() => {
    fetch("/data/skills.json") // keep in public folder
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error loading skills:", err));
  }, []);

  // Memoize to avoid unnecessary re-renders
  const skillData = useMemo(() => skills, [skills]);

  const renderSection = (title, items, delayOffset) => (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // animate once, not every scroll
      transition={{ duration: 0.5, delay: delayOffset }}
      className="flex flex-col gap-4 bg-gray-800/60 p-8 rounded-3xl shadow-2xl 
                 md:hover:scale-105 transition-transform duration-300 min-w-[280px]"
    >
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      <ul className="space-y-3 text-gray-300">
        {items.map((skill) => (
          <li
            key={skill.name} // stable key
            className="border-b border-gray-700 pb-2 last:border-none"
          >
            <p className="text-lg font-semibold">{skill.name}</p>
            <p className="text-sm text-gray-400">{skill.desc}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="skills" className="relative py-28 px-6 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center relative z-10">
        Skills
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-10 relative z-10">
        {renderSection("Frontend", skillData.frontend, 0.1)}
        {renderSection("Backend", skillData.backend, 0.2)}
        {renderSection("Tools", skillData.tools, 0.3)}
      </div>
    </section>
  );
};

export default Skills;

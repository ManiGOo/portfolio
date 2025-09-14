import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  // Memoize project list to avoid unnecessary re-renders
  const projectList = useMemo(() => projects, [projects]);

  return (
    <section id="projects" className="relative py-28 px-6 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center z-10 relative">
        Projects
      </h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto z-10 relative">
        {projectList.map((proj, index) => (
          <motion.div
            key={proj.name} // use unique key instead of index
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // only animate once
            transition={{ duration: 0.5, delay: index * 0.1 }} // faster + lighter
            className="flex flex-col justify-between bg-gray-800/60 p-8 rounded-3xl shadow-lg 
                       md:hover:scale-105 md:hover:shadow-teal-500/20 
                       transition-transform duration-300 min-h-[280px]"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">{proj.name}</h3>
              <p className="mb-4 text-gray-300">{proj.description}</p>
              {proj.tech?.length > 0 && (
                <p className="mb-4 text-gray-400">
                  <strong>Tech:</strong> {proj.tech.join(", ")}
                </p>
              )}
            </div>
            <div className="flex gap-4 mt-4">
              {proj.github && (
                <a
                  href={proj.github}
                  className="text-teal-400 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
              {proj.demo && (
                <a
                  href={proj.demo}
                  className="text-teal-400 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

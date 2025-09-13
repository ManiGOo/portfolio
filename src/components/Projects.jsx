import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("src/assets/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <section id="projects" className="relative py-28 px-6 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center z-10 relative">
        Projects
      </h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto z-10 relative">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="flex flex-col justify-between bg-gray-800/60 p-8 rounded-3xl shadow-lg 
                       hover:scale-105 hover:shadow-teal-500/20 
                       transition-all duration-300 min-h-[280px]"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-3">{proj.name}</h3>
              <p className="mb-4 text-gray-300">{proj.description}</p>
              {proj.tech.length > 0 && (
                <p className="mb-4 text-gray-400">
                  <strong>Tech:</strong> {proj.tech.join(", ")}
                </p>
              )}
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={proj.github}
                className="text-teal-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={proj.demo}
                className="text-teal-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-28 px-6 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am a passionate software engineer with experience in building scalable
          and modern full-stack applications. I enjoy working with both frontend
          and backend technologies to deliver seamless user experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default About;

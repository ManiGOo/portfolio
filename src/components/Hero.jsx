import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 text-white">
      {/* Hero Text */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Hi, I’m Many
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-300 leading-relaxed">
          I build modern, responsive web applications using React, Tailwind CSS, and Node.js.
        </p>
        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-teal-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-teal-500 transition"
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

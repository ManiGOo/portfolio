import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

// Floating 3D shapes component
const FloatingShape = ({ size, color, top, left, delay }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, 30, 0] }} // only vertical
    transition={{
      repeat: Infinity,
      duration: 12, // slower = smoother
      delay,
      ease: "easeInOut",
    }}
    className={`absolute rounded-full ${color}`}
    style={{
      width: size,
      height: size,
      top,
      left,
      filter: "blur(50px)", // reduced blur
      willChange: "transform", // GPU hint
      zIndex: 0,
    }}
  />
);

function App() {
  return (
    <div className="relative  text-white scroll-smooth overflow-x-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Global 3D background floating shapes */}
      <FloatingShape size="300px" color="bg-purple-500/20" top="-100px" left="10%" delay={0} />
      <FloatingShape size="200px" color="bg-teal-400/20" top="200px" left="70%" delay={2} />
      <FloatingShape size="250px" color="bg-pink-400/20" top="500px" left="20%" delay={1} />
      <FloatingShape size="350px" color="bg-yellow-400/20" top="800px" left="60%" delay={3} />
      <FloatingShape size="150px" color="bg-cyan-400/20" top="1200px" left="40%" delay={1.5} />

      {/* Main page content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;

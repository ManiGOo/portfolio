import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative text-white bg-[#050505] scroll-smooth overflow-x-hidden">
      {/* Background Layer: Simple Gradient for Depth */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-tr from-black via-[#0a0a0a] to-[#050505]" />

      {/* Content Layer */}
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;

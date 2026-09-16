import AtmosphereBackground from "./components/AtmosphereBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="top" className="relative min-h-screen bg-[#f1f3f0] text-zinc-900 antialiased dark:bg-[#060807] dark:text-zinc-100">
      <AtmosphereBackground />
      {/* faint engineering grid wash */}
      <div aria-hidden="true" className="grid-texture pointer-events-none fixed inset-0 z-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)] dark:opacity-[0.35]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;

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
    <div id="top" className="container-lines relative min-h-screen bg-[#060807] text-zinc-100 antialiased">
      <AtmosphereBackground />
      {/* faint engineering grid wash */}
      <div aria-hidden="true" className="grid-texture pointer-events-none fixed inset-0 z-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />

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

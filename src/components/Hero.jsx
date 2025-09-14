import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 text-white">
      <motion.div
        className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Hi, I’m Many
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-2xl text-gray-300 leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          I build modern, responsive web applications using React, Tailwind CSS, and Node.js.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#projects"
          className="bg-teal-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-teal-500 transition"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

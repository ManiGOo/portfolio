import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-28 px-6 text-white">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} // animate once, when 20% visible
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I am a passionate software engineer with experience in building scalable
          and modern full-stack applications. I enjoy working with both frontend
          and backend technologies to deliver seamless user experiences.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;

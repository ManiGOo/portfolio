import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 px-6 text-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12 text-center relative z-10">
        Contact Me
      </h2>

      {/* Content wrapper */}
      <motion.div
        className="relative z-10 max-w-xl mx-auto flex flex-col gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Contact Form */}
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-2xl bg-gray-800/60 border border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-2xl bg-gray-800/60 border border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="p-4 rounded-2xl bg-gray-800/60 border border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-teal-400 transition resize-none"
          />
          <button
            type="submit"
            className="bg-teal-400 text-gray-900 px-8 py-4 rounded-2xl font-semibold 
                       hover:bg-teal-500 shadow-lg transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-8">
          <a href="https://github.com/ManiGOo/ManiGOo" target="_blank" className="hover:text-teal-400 transition">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/manishforyou/?trk=profile-badge&originalSubdomain=in" target="_blank" className="hover:text-teal-400 transition">
            <Linkedin size={32} />
          </a>
          <a
            href="mailto:its.nathmanish#gmail.com"
            className="hover:text-teal-400 transition"
          >
            <Mail size={32} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

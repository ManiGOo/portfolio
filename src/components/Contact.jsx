import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="relative py-28 px-6 text-white overflow-hidden">
      {/* Decorative blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-teal-400/20 rounded-full blur-3xl top-20 left-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-0 right-10"
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4 text-center relative z-10">Connect with me</h2>
      <p className="text-gray-400 text-center mb-12 relative z-10">
        Let’s build something amazing together 🚀
      </p>

      {/* Content wrapper */}
      <motion.div
        className="relative z-10 max-w-xl mx-auto flex flex-col gap-8 
                   p-8 rounded-3xl bg-gray-800/50 border border-gray-700 
                   shadow-xl backdrop-blur-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Contact Form */}
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-2xl bg-gray-900/60 border border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-2xl bg-gray-900/60 border border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="p-4 rounded-2xl bg-gray-900/60 border border-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-teal-400 transition resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(45, 212, 191, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-400 text-gray-900 px-8 py-4 rounded-2xl font-semibold 
                       hover:bg-teal-500 shadow-lg transition"
          >
            Send Message
          </motion.button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-8">
          {[ 
            { Icon: Github, href: "https://github.com/ManiGOo/ManiGOo" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/manishforyou/?trk=profile-badge&originalSubdomain=in" },
            { Icon: Mail, href: "mailto:its.nathmanish#gmail.com" },
          ].map(({ Icon, href }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              whileHover={{ y: -5, scale: 1.2, color: "#2dd4bf" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="transition"
            >
              <Icon size={36} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

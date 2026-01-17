import React from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactLinks = [
    { 
      Icon: Mail, 
      label: "Email", 
      val: "its.nathmanish@gmail.com", 
      href: "mailto:its.nathmanish@gmail.com",
      color: "hover:text-teal-400"
    },
    { 
      Icon: Linkedin, 
      label: "LinkedIn", 
      val: "manishforyou", 
      href: "https://www.linkedin.com",
      color: "hover:text-blue-400"
    },
    { 
      Icon: Github, 
      label: "GitHub", 
      val: "ManiGOo", 
      href: "https://github.com",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="relative py-32 px-6 bg-[#050505] text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-500/5 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            GET IN TOUCH.
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            I’m always looking for new opportunities and interesting projects. 
            Feel free to reach out through any of these platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group p-8 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden transition-all hover:border-white/20"
            >
              <div className="absolute top-4 right-4 text-white/20 group-hover:text-white group-hover:rotate-45 transition-all">
                <ArrowUpRight size={20} />
              </div>
              
              <div className={`mb-6 flex justify-center transition-colors ${item.color}`}>
                <item.Icon size={40} strokeWidth={1.5} />
              </div>
              
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">
                {item.label}
              </p>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {item.val}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-gray-600 text-sm font-medium tracking-widest uppercase"
        >
          Designed & Built by Manish • 2025
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;

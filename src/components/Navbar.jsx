import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.div
          className="text-2xl font-extrabold tracking-wide text-teal-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          ManyGOo
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {links.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <a
                href={link.href}
                className="hover:text-teal-400 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Hamburger */}
        <div className="md:hidden z-50 mr-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gray-800/50 shadow-lg backdrop-blur-sm hover:bg-gray-700/60 transition"
          >
            {/* Circle glow */}
            <motion.div
              className="absolute w-12 h-12 rounded-full bg-teal-400/20"
              animate={{ scale: isOpen ? 1 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />

            {/* Lines */}
            <motion.span
              className="absolute block h-0.5 w-6 bg-white rounded origin-center"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -5 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="absolute block h-0.5 w-6 bg-white rounded origin-center"
              animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0.8 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute block h-0.5 w-6 bg-white rounded origin-center"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 5 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md flex flex-col items-center gap-6 py-8 text-lg font-medium shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-teal-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

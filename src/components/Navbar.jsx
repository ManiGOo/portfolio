import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  // Hide Navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 py-4 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl pointer-events-auto">
        {/* Logo with Modern Glow */}
        <motion.div
          className="text-xl font-black tracking-tighter text-white group cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent group-hover:from-emerald-400 group-hover:to-teal-400 transition-all">
            ManyGOo
          </span>
        </motion.div>

        {/* Desktop Menu - Minimalist Maximalism style */}
        <ul className="hidden md:flex gap-1 text-sm font-semibold">
          {links.map((link) => (
            <li key={link.name}>
              <motion.a
                href={link.href}
                className="px-4 py-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all relative block"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Action Button (Optional) */}
        <div className="hidden md:block">
           <a href="#contact" className="px-5 py-2 bg-teal-400 text-black text-xs font-bold rounded-xl hover:bg-teal-300 transition-colors">
             HIRE ME
           </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <motion.span 
              animate={{ width: isOpen ? "100%" : "100%", rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} 
              className="h-0.5 w-full bg-white rounded-full origin-center" 
            />
            <motion.span 
              animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 10 : 0 }} 
              className="h-0.5 w-2/3 bg-teal-400 rounded-full" 
            />
            <motion.span 
              animate={{ width: isOpen ? "100%" : "100%", rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} 
              className="h-0.5 w-full bg-white rounded-full origin-center" 
            />
          </div>
        </button>
      </div>

      {/* Modern Full-Screen Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-black/60 z-[-1] md:hidden flex items-center justify-center pointer-events-auto"
          >
            <motion.ul 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col gap-8 text-center"
            >
              {links.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-bold text-white hover:text-teal-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

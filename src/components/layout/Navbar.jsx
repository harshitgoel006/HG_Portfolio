import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function RoyalNavbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? "py-3" : "py-8"}`}
    >
      <nav className={`mx-auto max-w-7xl relative flex items-center justify-between px-10 transition-all duration-500 rounded-full 
        ${scrolled 
          ? "h-16 bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-b border-orange-500/20" 
          : "h-20 bg-orange-50/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/5"}`}>
        
        {/* BRAND LOGO */}
        <motion.a 
          href="#home" 
          variants={itemVariants}
          className="flex items-baseline group relative"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
            Harshit
          </span>
          <span className="text-2xl md:text-3xl font-extralight tracking-[0.2em] text-orange-500 ml-1 uppercase transition-all duration-500 group-hover:tracking-[0.35em]">
            Goel
          </span>
          {/* Subtle Logo Glow */}
          <div className="absolute -inset-x-4 -inset-y-2 bg-orange-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.li key={link.label} variants={itemVariants} className="relative">
                <motion.a 
                  href={link.href} 
                  whileHover={{ y: -2 }}
                  className="relative px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300 hover:text-orange-500 transition-colors block group"
                >
                  <span className="relative z-10">{link.label}</span>
                  {/* Premium Underline Slide */}
                  <span className="absolute bottom-1 left-0 w-full h-[1.5px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
                </motion.a>
              </motion.li>
            ))}
          </ul>

          <div className="h-6 w-[1px] bg-gradient-to-b from-transparent via-orange-500/30 to-transparent mx-2" />

          {/* THEME TOGGLE */}
          <motion.button
            variants={itemVariants}
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180, backgroundColor: "rgba(249, 115, 22, 0.15)" }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 transition-colors"
          >
            {dark ? "☀️" : "🌙"}
          </motion.button>

          {/* RESUME BUTTON: PREMIUM SHIMMER */}
          <motion.a
            variants={itemVariants}
            href="/resume.pdf"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 15px 30px -10px rgba(249, 115, 22, 0.6)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white px-9 py-3.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] shadow-xl border border-orange-400/20 group"
          >
            <span className="relative z-10">Resume</span>
            {/* Animated Shimmer Sweep */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            />
          </motion.a>
        </div>

        {/* MOBILE TOGGLE (Animated Hamburger) */}
        <motion.button 
          variants={itemVariants}
          onClick={() => setOpen(!open)} 
          className="md:hidden p-2 text-orange-500"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <motion.span animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }} className="w-full h-0.5 bg-current rounded-full" />
            <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="w-full h-0.5 bg-current rounded-full" />
            <motion.span animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }} className="w-full h-0.5 bg-current rounded-full" />
          </div>
        </motion.button>

        {/* THE ROYAL THREAD (Refined Glow) */}
        <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-[85%] h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent shadow-[0_0_20px_rgba(249,115,22,0.3)]" />
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden mt-4 mx-6 bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl rounded-[2.5rem] border border-orange-500/20 p-8 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((l, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={l.label} 
                  href={l.href} 
                  onClick={() => setOpen(false)} 
                  className="text-xl font-bold tracking-[0.2em] uppercase text-slate-800 dark:text-white hover:text-orange-500 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a 
                href="/resume.pdf" 
                className="w-full text-center bg-gradient-to-r from-orange-500 to-orange-600 py-4 rounded-2xl text-white font-black uppercase text-xs tracking-[0.3em] shadow-lg shadow-orange-500/20"
              >
                RESUME
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
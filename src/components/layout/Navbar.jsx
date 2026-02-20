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
  const [scrolled, setScrolled] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 relative">
        {/* --- MAIN FLOATING CONTAINER --- */}
        <div
          className={`relative flex items-center justify-between px-10 transition-all duration-500 rounded-full border
          ${
            scrolled
              ? "h-16 bg-white/70 dark:bg-slate-950/70 backdrop-blur-3xl border-orange-500/30 shadow-[0_20px_50px_rgba(249,115,22,0.15)] ring-1 ring-orange-500/20"
              : "h-20 bg-white/5 dark:bg-white/5 backdrop-blur-md border-white/20 dark:border-white/10 shadow-none"
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            className="group relative flex items-center z-10"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative flex items-center tracking-tighter">
              <span className="text-2xl md:text-3xl font-[900] text-slate-900 dark:text-white uppercase transition-colors duration-300 group-hover:text-orange-500">
                Harshit
              </span>
              <span className="text-2xl md:text-3xl font-[900] uppercase ml-1.5 bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                Goel
              </span>

              <motion.div
                className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r from-orange-500 to-rose-500 rounded-full"
                initial={{ width: "20%", opacity: 0.3 }}
                whileHover={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="absolute -inset-x-6 -inset-y-2 bg-gradient-to-r from-orange-500/10 to-rose-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1 px-2 py-1.5 bg-slate-900/5 dark:bg-white/5 rounded-full border border-slate-200/50 dark:border-white/10 shadow-inner">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -1 }}
                  className="px-6 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-all relative group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-orange-500 group-hover:w-1/2 transition-all duration-300 shadow-[0_0_10px_#f97316]" />
                </motion.a>
              ))}
            </div>

            <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-orange-500/40 to-transparent mx-2" />

            

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px -10px rgba(249, 115, 22, 0.7)",
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 text-white px-9 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.25em] shadow-[0_15px_30px_-5px_rgba(249,115,22,0.4)] border border-white/20"
            >
              <span className="relative z-10">Resume</span>
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20"
              />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/30 shadow-lg"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                className="w-full h-[3px] bg-current rounded-full"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-[3px] bg-current rounded-full"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                className="w-full h-[3px] bg-current rounded-full"
              />
            </div>
          </motion.button>
        </div>

        {/* Bottom Glow */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "70%" }}
              exit={{ opacity: 0, width: 0 }}
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-[1px]"
            />
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden mx-6 mt-4 p-10 bg-white/95 dark:bg-slate-950/95 backdrop-blur-3xl rounded-[3rem] border-2 border-orange-500/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] flex flex-col gap-8 items-center"
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setOpen(false)}
                className="text-xl font-black tracking-[0.3em] uppercase text-slate-900 dark:text-white hover:text-orange-500 transition-all"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="/resume.pdf"
              className="w-full text-center bg-orange-500 py-5 rounded-2xl text-white font-black tracking-widest shadow-2xl shadow-orange-500/40"
            >
              DOWNLOAD RESUME
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
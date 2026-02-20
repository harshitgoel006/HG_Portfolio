import { motion } from "framer-motion";
import { Github, Linkedin, Code, ArrowUp } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#030712] overflow-hidden">
      
      {/* --- DYNAMIC GRADIENT BACKGROUND BLOB --- */}
      {/* Yeh background mein orange-rose ka ek soft gradient glow add karega */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-orange-500/5 via-rose-500/5 to-transparent pointer-events-none" />

      {/* --- GLASS MARQUEE SECTION --- */}
      <div className="relative py-6 border-b border-slate-200 dark:border-white/5 overflow-hidden backdrop-blur-md bg-white/30 dark:bg-white/[0.02]">
        {/* Top & Bottom Gradient Borders (The "Glow" lines) */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-12 items-center shrink-0">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                Available for Projects
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316]" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500">
                UI/UX Designer
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_12px_#f43f5e]" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316]" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
          
          {/* Left - Copyright & Status */}
          <div className="order-3 md:order-1 flex flex-col items-center md:items-start gap-2">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              © {year} Harshit Goel.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">System Online</span>
            </div>
          </div>

          {/* Center - Navigation Glass Pill */}
          <div className="order-1 md:order-2 flex justify-center">
            <nav className="flex items-center p-1.5 bg-slate-100/50 dark:bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl">
              {["Home", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-6 py-2 text-xs font-black uppercase tracking-tighter text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-white transition-all rounded-xl hover:bg-white dark:hover:bg-white/10"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right - Socials & Scroll Top */}
          <div className="order-2 md:order-3 flex items-center justify-center md:justify-end gap-3">
            {[
              { icon: <Code size={18} />, href: "https://leetcode.com/u/goelharshit006/" },
              { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/harshit-goel-73b90b290/" },
              { icon: <Github size={18} />, href: "https://github.com/harshitgoel006" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 hover:text-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
            
            <div className="w-[1px] h-8 bg-slate-200 dark:bg-white/10 mx-2 hidden md:block" />
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-500/20"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>

        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 text-center">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent mb-6" />
            <span className="text-[10px] font-mono text-slate-300 dark:text-slate-800 tracking-[1em] uppercase">
                Built with precision
            </span>
        </div>
      </div>
    </footer>
  );
}
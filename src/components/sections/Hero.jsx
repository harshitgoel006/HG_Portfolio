import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // 🔥 Mobile detection (for orbit radius only)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fafafa] dark:bg-[#030712] px-6"
    >
      {/* Background Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto flex flex-col lg:flex-row items-center gap-12 max-w-7xl pt-28 sm:pt-32 lg:pt-20"
      >
        {/* LEFT */}
        <div className="lg:w-1/2 text-center lg:text-left z-20">
          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
              Available for Projects
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
            Turning ideas into <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-orange-500">production-ready</span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500/20 fill-current" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5 L 100 10 L 0 10 Z" />
              </svg>
            </span>{" "}
            <br />
            web apps.
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-4 leading-relaxed">
            Hi, I’m <span className="text-slate-900 dark:text-white font-semibold">Harshit Goel</span> — a Full Stack Developer (MERN) focused on building scalable, real-world web applications.
          </motion.p>

          <motion.p variants={itemVariants} className="text-[11px] font-medium text-slate-500 dark:text-slate-500 mb-8 flex items-center justify-center lg:justify-start gap-2">
            <span className="text-orange-500">✔</span> Built real-world projects like Smart Cart
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            100+ DSA problems solved
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-4 mb-10 text-[11px] font-bold tracking-widest uppercase text-slate-400 dark:text-slate-600">
            <span>Clean Architecture</span>
            <span className="h-1 w-1 rounded-full bg-orange-500" />
            <span>Modern UI</span>
            <span className="h-1 w-1 rounded-full bg-orange-500" />
            <span>Reliable Backend</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -15px rgba(249, 115, 22, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-bold uppercase text-[11px] tracking-[0.15em] shadow-xl shadow-orange-500/25 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Explore Projects</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl font-bold text-sm backdrop-blur-sm"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-1/2 relative flex items-center justify-center h-[600px] w-full overflow-hidden sm:overflow-visible">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="relative w-80 h-80 md:w-[500px] md:h-[500px]"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 dark:opacity-30 stroke-orange-500 fill-none">
              <circle cx="50" cy="50" r="48" strokeWidth="0.2" strokeDasharray="2 2" />
              <ellipse cx="50" cy="50" rx="15" ry="48" strokeWidth="0.1" />
              <ellipse cx="50" cy="50" rx="32" ry="48" strokeWidth="0.1" />
              <line x1="2" y1="50" x2="98" y2="50" strokeWidth="0.1" />
            </svg>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <OrbitingNode label="MongoDB" radius={isMobile ? 90 : 140} duration={25} delay={0} />
            <OrbitingNode label="React" radius={isMobile ? 130 : 200} duration={35} delay={-4} />
            <OrbitingNode label="Node.js" radius={isMobile ? 90 : 140} duration={25} delay={-12} />
            <OrbitingNode label="Express" radius={isMobile ? 130 : 200} duration={35} delay={-15} />
          </div>

          <motion.div className="absolute z-30 w-32 h-32 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border border-white/40 dark:border-slate-800/50 rounded-full shadow-[0_0_50px_-12px_rgba(249,115,22,0.3)] flex flex-col items-center justify-center p-4 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)] pointer-events-none" />
            <div className="relative mb-2">
              <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 bg-orange-500 rounded-full blur-lg" />
              <div className="relative w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/40">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            <p className="relative z-10 text-[8px] font-black uppercase tracking-[0.1em] text-slate-800 dark:text-slate-200">
              Software Developer
            </p>
            <div className="mt-2 h-[1px] w-8 bg-orange-500/20 rounded-full overflow-hidden relative z-10">
              <motion.div animate={{ x: [-32, 32] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-full h-full bg-orange-500" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const OrbitingNode = ({ label, radius, duration, delay }) => (
  <motion.div
    style={{ position: "absolute", width: radius * 2, height: radius * 2 }}
    animate={{ rotate: 360 }}
    transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    className="pointer-events-none"
  >
    <motion.div
      whileHover={{
        scale: 1.1,
        borderColor: "rgba(249, 115, 22, 0.8)",
        boxShadow: "0 0 20px rgba(249, 115, 22, 0.2)",
      }}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        x: radius,
        y: "-50%",
        translateX: "-50%",
      }}
      className="bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-lg shadow-sm cursor-pointer transition-colors duration-300 pointer-events-auto"
    >
      <span className="text-[7px] font-bold text-slate-600 dark:text-slate-400 uppercase whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  </motion.div>
);

export default Hero;


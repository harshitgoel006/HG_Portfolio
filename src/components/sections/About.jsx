import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-32 px-6 overflow-hidden bg-[#fafafa] dark:bg-[#020617] text-slate-900 dark:text-slate-100"
    >
      {/* Subtle Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* LEFT: Content Area */}
        <div className="space-y-8">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-orange-500/5 border border-orange-500/20 backdrop-blur-md">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              The Developer
            </span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95]">
            About <span className="bg-gradient-to-br from-orange-500 via-orange-400 to-rose-500 bg-clip-text text-transparent">Me.</span>
          </motion.h2>
          
          <motion.div variants={fadeInUp} className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg max-w-xl">
            <p className="first-letter:text-6xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:bg-gradient-to-b first-letter:from-orange-500 first-letter:to-orange-700 first-letter:bg-clip-text first-letter:text-transparent">
              I’m a 3rd-year Computer Science undergrad at <span className="text-slate-900 dark:text-white font-bold italic underline decoration-orange-500/30 underline-offset-8">DIT University</span> with a strong foundation in Full Stack Development.
            </p>
            <p>
              I focus on building scalable backend architectures and intuitive frontend interfaces using the <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent font-bold">MERN stack</span>.
            </p>
            <div className="bg-gradient-to-r from-slate-100 to-transparent dark:from-slate-900/60 dark:to-transparent backdrop-blur-sm p-6 rounded-2xl border-l-4 border-orange-500 italic shadow-sm">
              "Recently, I developed Smart Cart, a production-grade e-commerce platform featuring JWT authentication."
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 gap-3 pt-4">
            <LuxuryCard 
              icon="⚙️" 
              title="Production Backend" 
              desc="JWT auth, RBAC, & API optimization" 
              variants={fadeInUp}
            />
            <LuxuryCard 
              icon="🧠" 
              title="Problem Solving" 
              desc="100+ LeetCode problems & regular contests" 
              variants={fadeInUp}
            />
            <LuxuryCard 
              icon="🚀" 
              title="MERN Stack Projects" 
              desc="React, Node.js, Express, MongoDB in real-world apps" 
              variants={fadeInUp}
            />
          </div>
        </div>

        {/* RIGHT: Image Area */}
        <motion.div
          style={{ y: imgY, rotate: imgRotate }}
          variants={fadeInUp}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group perspective-1000">
            <div className="absolute -inset-8 bg-gradient-to-tr from-orange-500/20 via-transparent to-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[520px] p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] transform transition-transform duration-700 group-hover:rotate-2 group-hover:scale-[1.02]">
              
              <div className="relative w-full h-full overflow-hidden rounded-[1.8rem]">
                <img
                  src="/about.png" 
                  alt="Harshit Goel"
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-8 left-8">
                  <p className="text-white text-3xl font-black tracking-tighter">HARSHIT</p>
                  <div className="h-1 w-12 bg-orange-500 mt-1" />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-orange-500/30 rounded-tr-[3rem]" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-orange-500/30 rounded-bl-[3rem]" />
            </div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-20 bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 z-30"
            >
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-orange-500">3rd</span>
                <span className="text-[9px] uppercase tracking-tighter font-bold text-slate-500">Year Student</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function LuxuryCard({ icon, title, desc, variants }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ 
        x: 12, 
        transition: { duration: 0.4, ease: "easeOut" } 
      }}
      // Card background ab hover par subtle glow aur border reveal karega
      className="group relative flex gap-6 p-6 rounded-[2rem] border border-transparent 
                 hover:border-orange-500/20 hover:bg-gradient-to-br hover:from-orange-500/[0.05] hover:to-transparent
                 dark:hover:border-orange-400/10 dark:hover:bg-orange-500/[0.02] 
                 transition-all duration-500 ease-out cursor-default"
    >
      {/* Icon Styling: Glassmorphism look */}
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white dark:bg-slate-900 
                      shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]
                      border border-slate-100 dark:border-slate-800 
                      flex items-center justify-center text-2xl 
                      group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-rose-500 
                      group-hover:text-white group-hover:shadow-orange-500/40
                      transition-all duration-500">
        <span className="group-hover:animate-pulse">{icon}</span>
      </div>

      <div className="flex flex-col justify-center">
        {/* Title with Gradient Look */}
        <h4 className="font-extrabold text-lg tracking-tight mb-1
                       text-slate-800 dark:text-slate-100
                       group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 
                       group-hover:bg-clip-text group-hover:text-transparent
                       transition-all duration-300">
          {title}
        </h4>

        {/* Description: Subtle reveal animation */}
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug 
                      group-hover:text-slate-700 dark:group-hover:text-slate-300
                      transition-colors duration-300">
          {desc}
        </p>
      </div>

      {/* Subtle Right Arrow: Jo hover par reveal hota hai */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
        <svg className="w-5 h-5 text-orange-500/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
}
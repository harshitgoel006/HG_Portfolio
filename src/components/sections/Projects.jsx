import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../data/projects";
import { 
  ShoppingCart, 
  DollarSign, 
  IndianRupee, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Globe, 
  RefreshCw 
} from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 bg-white dark:bg-[#020617] overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
               <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">Selected Works</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-4 text-slate-900 dark:text-white">
              Projects<span className="text-orange-500 not-italic">.</span>
            </h2>
            <p className="mt-8 text-slate-500 dark:text-slate-400 font-medium tracking-wide max-w-md">
               Crafting production-grade digital experiences with focus on architecture and performance.
            </p>
          </motion.div>

          {/* System Status Visualizer */}
          <div className="relative hidden lg:flex w-64 h-40 items-center justify-center">
             {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [i * 10, i * 15, i * 10]
                  }}
                  transition={{ 
                    duration: 4 + i, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className={`absolute p-4 rounded-2xl border border-orange-500/20 bg-white/5 dark:bg-slate-900/50 backdrop-blur-md shadow-2xl
                             ${i === 0 ? "z-30 translate-x-4" : i === 1 ? "z-20 -translate-x-12 translate-y-8" : "z-10 translate-x-16 -translate-y-10"}`}
                >
                   <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${i === 0 ? "bg-orange-500" : "bg-rose-500"}`} />
                      <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full" />
                   </div>
                </motion.div>
             ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-48">
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 60, damping: 20 };
  const yPos = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), springConfig);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={container} style={{ opacity }} className="relative group">
      {/* Background Project Index */}
      <span className="absolute -top-32 -left-16 text-[300px] font-black text-slate-900/[0.03] dark:text-white/[0.02] italic select-none pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:text-orange-600/5">
        0
      </span>

      <div className="relative overflow-hidden rounded-[4rem] border border-white/40 dark:border-slate-800/50 bg-gradient-to-br from-white/60 via-slate-50/40 to-white/60 dark:from-slate-900/60 dark:via-[#020617]/40 dark:to-slate-900/60 backdrop-blur-3xl p-8 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] transition-all duration-700 group-hover:border-orange-500/30 group-hover:shadow-orange-500/5">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Content Side */}
          <motion.div style={{ y: yPos }} className="z-10">
            <div className="flex items-center gap-4 mb-10">
               <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-transparent" />
               <span className="text-[11px] font-black uppercase tracking-[0.4em] text-orange-500">
                 {project.featured ? "Featured Architecture" : "Core Module"}
               </span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-500 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-rose-500 transition-all duration-500">
              {project.title}
            </h3>

            {/* Project Tagline */}
            <div className="overflow-hidden mb-8">
              <motion.p 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                className="text-xl md:text-2xl font-bold italic tracking-tight leading-snug bg-gradient-to-r from-slate-800 to-slate-500 dark:from-slate-200 dark:to-slate-500 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-rose-500 transition-all duration-500"
              >
                {project.tagline}
              </motion.p>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2"
              />
            </div>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 font-medium">
              {project.description}
            </p>

            {/* Feature List */}
            <ul className="space-y-4 mb-12">
               {project.features.slice(0, 3).map((f, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-500">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                    {f}
                 </li>
               ))}
            </ul>

            {/* Tech Stack */}
            <motion.div 
              initial="initial" whileInView="animate" viewport={{ once: true }}
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-wrap gap-3 mb-16"
            >
              {project.tech.map((t) => (
                <motion.span 
                  key={t}
                  variants={{ initial: { opacity: 0, scale: 0.8, y: 10 }, animate: { opacity: 1, scale: 1, y: 0 } }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="relative overflow-hidden px-6 py-2.5 rounded-2xl bg-white/50 dark:bg-slate-800/20 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 group-hover:border-orange-500/40 transition-all duration-300 shadow-sm"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-orange-500/20 to-transparent -translate-x-full" whileHover={{ x: '200%' }} transition={{ duration: 0.8 }} />
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 group-hover:bg-clip-text group-hover:text-transparent">
                    {t}
                  </span>
                </motion.span>
              ))}
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6">
              {project.github && (
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={project.github} target="_blank" className="px-12 py-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl">
                  View Source
                </motion.a>
              )}
              {project.live && (
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={project.live} target="_blank" className="px-12 py-5 rounded-2xl border-2 border-orange-600 text-orange-600 font-black text-[10px] uppercase tracking-[0.3em] hover:bg-orange-600 hover:text-white transition-all shadow-lg">
                  Launch App
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Right: Floating Architecture Visual */}
          <div className="relative flex items-center justify-center min-h-[450px] group/viz">
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Floating Core */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotateY: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-64 h-72 rounded-[3rem] bg-white/10 dark:bg-slate-900/40 border border-white/20 dark:border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
              
              <div className="relative z-10 flex flex-col items-center gap-4">
                {project.id === "smart-cart" ? (
                  <>
                    <div className="relative">
                      <ShoppingCart className="w-20 h-20 text-slate-800 dark:text-white group-hover/viz:text-orange-500 transition-colors" strokeWidth={1} />
                      <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white dark:border-slate-800" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">MERN_ENGINE</span>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-center">
                      <RefreshCw className="absolute w-28 h-28 text-orange-500/10 animate-spin-slow" strokeWidth={1} />
                      <div className="flex items-baseline gap-1">
                        <span className="text-6xl font-black italic text-slate-800 dark:text-white group-hover/viz:text-orange-500">$</span>
                        <span className="text-4xl font-black italic text-slate-400">₹</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">LIVE_EXCHANGE</span>
                  </>
                )}
              </div>

              <div className="absolute bottom-6 w-full px-8">
                  <div className="h-1 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="h-full w-1/3 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
                  </div>
              </div>
            </motion.div>

            {/* Floating Tags */}
            <div className="absolute inset-0 pointer-events-none">
              {project.id === "smart-cart" ? (
                <>
                  <FloatingTag icon={<ShieldCheck size={14}/>} text="RBAC" delay={0} top="15%" left="15%" />
                  <FloatingTag icon={<Zap size={14}/>} text="Fast API" delay={1} top="75%" left="12%" />
                  <FloatingTag icon={<Activity size={14}/>} text="Inventory" delay={0.5} top="20%" right="15%" />
                </>
              ) : (
                <>
                  <FloatingTag icon={<Globe size={14}/>} text="Global" delay={0} top="15%" left="15%" />
                  <FloatingTag icon={<DollarSign size={14}/>} text="Rates" delay={1.2} top="70%" left="18%" />
                  <FloatingTag icon={<IndianRupee size={14}/>} text="Precise" delay={0.7} top="25%" right="18%" />
                </>
              )}
            </div>
            <div className="absolute w-[450px] h-[450px] bg-orange-500/10 blur-[120px] rounded-full group-hover:bg-rose-500/15 transition-all duration-1000" />
          </div>

        </div>
      </div>
    </motion.div>
  );
}

// Global Helper Component for Architecture Tags
function FloatingTag({ icon, text, delay, top, left, right }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
      className="absolute px-4 py-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-xl flex items-center gap-2.5 z-20"
      style={{ top, left, right }}
    >
      <div className="text-orange-500">{icon}</div>
      <span className="text-[9px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-200">{text}</span>
    </motion.div>
  );
}

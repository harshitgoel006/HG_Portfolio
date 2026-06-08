import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  ShieldCheck, 
  Zap, 
  Activity, 
  CloudSun,
  Newspaper,
  Database,
  Lock,
  ArrowUpRight,
  Github,
  Wind,
  Sun,
  Cpu
} from "lucide-react";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-white dark:bg-[#020617] overflow-hidden">
      {/* Dynamic Ambient Background Canvas */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/[0.02] dark:bg-orange-500/[0.04] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/[0.02] dark:bg-rose-500/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
               <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 dark:text-orange-400">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Projects<span className="text-orange-500 not-italic">.</span>
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base max-w-xl leading-relaxed">
               Crafting production-grade architecture with an emphasis on performance, scalability, and robust security workflows.
            </p>
          </motion.div>
        </div>

        {/* Project Cards Core Stack */}
        <div className="space-y-40">
          {projects
            .filter((p) => p.id !== "currency-converter")
            .map((p, idx) => (
              <ProjectCard key={p.id} project={p} index={idx} />
            ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
      className="relative group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
    >
      {/* THE OVAL BREAKOUT "0" */}
      <span className="absolute -top-24 -left-12 text-[240px] md:text-[280px] font-black text-slate-900/[0.02] dark:text-white/[0.01] italic select-none pointer-events-none transition-all duration-1000 transform scale-x-110 tracking-tighter group-hover:scale-x-125 group-hover:scale-y-95 group-hover:text-orange-500/[0.035] group-hover:-translate-x-2">
        0
      </span>

      {/* LEFT SIDE: Interactive Details (7 Columns) */}
      <div className="lg:col-span-7 z-10 space-y-6">
        
        {/* Tagline Line Header & Dynamic Actively Building Badge */}
        <div className="flex flex-wrap items-center gap-4 transition-transform duration-500 group-hover:translate-x-2">
          <div className="flex items-center gap-3">
             <div className="w-8 h-[1px] bg-orange-500/50 transition-all duration-500 group-hover:w-12 group-hover:bg-orange-500" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">
               {project.featured ? "Featured Architecture" : "Core Module"}
             </span>
          </div>

          {/* Conditional Smart Cart Neon Badge */}
          {project.id === "smart-cart" && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.05)]">
              <Cpu size={10} className="animate-spin-slow" />
              Actively Building
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 dark:from-white dark:via-white dark:to-white group-hover:from-orange-500 group-hover:to-rose-500 bg-clip-text group-hover:text-transparent transition-all duration-700 ease-out transform group-hover:translate-x-1">
          {project.title}
        </h3>

        {/* Tagline Animation */}
        <p className="text-base md:text-lg font-bold italic text-slate-700 dark:text-slate-300 leading-snug max-w-xl transition-all duration-500 group-hover:text-slate-900 dark:group-hover:text-slate-100 group-hover:translate-x-1">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-2xl transition-colors duration-500 group-hover:text-slate-600 dark:group-hover:text-slate-300">
          {project.description}
        </p>

        {/* Feature Checklists */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl pt-2">
           {project.features.map((f, i) => (
             <li 
               key={i} 
               className="flex items-start gap-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400 transition-all duration-500 group-hover:translate-x-1.5"
               style={{ transitionDelay: `${i * 40}ms` }}
             >
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500/60 shrink-0 transition-transform duration-500 group-hover:scale-125 group-hover:bg-orange-500" />
                <span className="leading-tight">{f}</span>
             </li>
           ))}
        </ul>

        {/* Tech Badges Stack */}
        <div className="flex flex-wrap gap-2 pt-4">
          {project.tech.map((t, idx) => (
            <span 
              key={t}
              className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 shadow-sm transition-all duration-500 group-hover:border-orange-500/20 group-hover:bg-white dark:group-hover:bg-slate-900 group-hover:-translate-y-0.5 group-hover:shadow-md"
              style={{ transitionDelay: `${idx * 20}ms` }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-6 transition-transform duration-500 group-hover:translate-x-1">
          {project.github && (
            <motion.a 
              whileTap={{ scale: 0.98 }} 
              href={project.github} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-[10px] uppercase tracking-[0.2em] shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-orange-600 dark:hover:bg-orange-500 dark:hover:text-white"
            >
              <Github size={14} />
              Source Code
            </motion.a>
          )}
          {project.live && (
            <motion.a 
              whileTap={{ scale: 0.98 }} 
              href={project.live} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-orange-500/30 text-orange-600 dark:text-orange-400 font-black text-[10px] uppercase tracking-[0.2em] bg-orange-500/5 hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white transition-all duration-300"
            >
              Launch App
              <ArrowUpRight size={14} />
            </motion.a>
          )}
        </div>
      </div>

      {/* RIGHT SIDE: Smooth Micro-Floating Visualization Box (5 Columns) */}
      <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] group/viz mt-6 lg:mt-0">
        
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-25">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        {/* Micro-floating Card Container */}
        <motion.div 
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-60 h-64 rounded-[2.5rem] bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-xl flex flex-col items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-orange-500/30 group-hover:shadow-[0_30px_60px_-15px_rgba(249,115,22,0.06)]"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
          
          <div className="flex flex-col items-center gap-3">
            {project.id === "news-nexus" && (
              <>
                <Newspaper className="w-14 h-14 text-slate-700 dark:text-slate-200 group-hover/viz:text-orange-500 transition-colors duration-500" strokeWidth={1.2} />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 group-hover/viz:text-orange-500/80 transition-colors">NEWS_ENGINE</span>
              </>
            )}
            {project.id === "smart-cart" && (
              <>
                <ShoppingCart className="w-14 h-14 text-slate-700 dark:text-slate-200 group-hover/viz:text-orange-500 transition-colors duration-500" strokeWidth={1.2} />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 group-hover/viz:text-orange-500/80 transition-colors">MERN_STACK</span>
              </>
            )}
            {project.id === "skycast" && (
              <>
                <CloudSun className="w-14 h-14 text-slate-700 dark:text-slate-200 group-hover/viz:text-orange-500 transition-colors duration-500" strokeWidth={1.2} />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 group-hover/viz:text-orange-500/80 transition-colors">METEO_INSIGHTS</span>
              </>
            )}
          </div>

          {/* Micro Progress Bar */}
          <div className="absolute bottom-6 w-full px-10">
              <div className="h-[2px] w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ["-100%", "100%"] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                  />
              </div>
          </div>
        </motion.div>

        {/* Dynamic Context Chips */}
        <div className="absolute inset-0 pointer-events-none">
          {project.id === "news-nexus" && (
            <>
              <FloatingNode icon={<Database size={11}/>} text="Redis" delay={0} top="22%" left="10%" />
              <FloatingNode icon={<Lock size={11}/>} text="OTP Auth" delay={0.8} top="68%" left="6%" />
              <FloatingNode icon={<Zap size={11}/>} text="JWT" delay={0.4} top="25%" right="8%" />
            </>
          )}
          {project.id === "smart-cart" && (
            <>
              <FloatingNode icon={<ShieldCheck size={11}/>} text="RBAC" delay={0} top="22%" left="10%" />
              <FloatingNode icon={<Activity size={11}/>} text="Pipelines" delay={0.8} top="68%" left="6%" />
              <FloatingNode icon={<Zap size={11}/>} text="Secure" delay={0.4} top="25%" right="8%" />
            </>
          )}
          {project.id === "skycast" && (
            <>
              <FloatingNode icon={<Sun size={11}/>} text="OpenWeather" delay={0} top="20%" left="8%" />
              <FloatingNode icon={<Wind size={11}/>} text="Air Quality" delay={0.8} top="70%" left="6%" />
              <FloatingNode icon={<Zap size={11}/>} text="Motion UI" delay={0.4} top="26%" right="8%" />
            </>
          )}
        </div>
        
        <div className="absolute w-72 h-72 bg-orange-500/[0.02] dark:bg-orange-500/[0.04] blur-[80px] rounded-full transition-colors duration-1000 group-hover:bg-rose-500/[0.05]" />
      </div>
    </motion.div>
  );
}

function FloatingNode({ icon, text, delay, top, left, right }) {
  return (
    <motion.div
      animate={{ y: [-4, 4, -4] }}
      transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
      className="absolute px-2.5 py-1 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm shadow-md flex items-center gap-1.5 z-20 transition-all duration-500 group-hover/viz:border-orange-500/20"
      style={{ top, left, right }}
    >
      <div className="text-orange-500">{icon}</div>
      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">{text}</span>
    </motion.div>
  );
}
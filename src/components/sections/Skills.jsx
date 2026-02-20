import { motion } from "framer-motion";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-4 bg-white dark:bg-[#020617] overflow-hidden">
      
      {/* --- Background Decorative Elements --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* --- Header Format (Combined V1 & V3) --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] border border-orange-500/20">
                Technical Stack
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
              Skills<span className="text-orange-500">.</span>
            </h2>
            <p className="mt-8 text-slate-500 dark:text-slate-400 font-medium tracking-wide max-w-md">
              Crafting production-grade digital experiences with focus on architecture and performance.
            </p>
          </motion.div>

          {/* Efficiency Index Metric (V1) */}
          <div className="hidden lg:flex items-center gap-6 text-right group/globe">
  {/* Data Labels */}
  <div className="flex flex-col items-end">
    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-1">
      Skill_Stack
    </p>
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-mono font-bold text-orange-500/70 italic">Full_Stack_Profile</span>
      <div className="h-[1px] w-8 bg-gradient-to-l from-orange-500/50 to-transparent" />
    </div>
  </div>

  {/* Minimal Wireframe Globe */}
  <div className="relative w-16 h-16 flex items-center justify-center">
    {/* Outer Orbiting Ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border border-dashed border-orange-500/20"
    />
    
    {/* Vertical Ring (The Globe Look) */}
    <motion.div
      animate={{ rotateY: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      className="absolute w-full h-full rounded-full border border-orange-500/30"
      style={{ transformStyle: "preserve-3d" }}
    />

    {/* Horizontal Ring */}
    <motion.div
      animate={{ rotateX: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute w-full h-full rounded-full border border-rose-500/20"
      style={{ transformStyle: "preserve-3d" }}
    />

    {/* Core Blinking Node */}
    <div className="relative w-3 h-3">
      <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-40" />
      <div className="relative w-3 h-3 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]" />
    </div>

    {/* Floating Satellites (Small dots on the ring) */}
    <motion.div 
       animate={{ rotate: -360 }}
       transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
       className="absolute w-full h-full"
    >
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]" />
    </motion.div>
  </div>
</div>
        </div>

        {/* --- Skills Grid (Combined Styling) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Animated Gradient Glow Background (V3) */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-rose-500 rounded-[2.5rem] opacity-0 group-hover:opacity-50 transition-all duration-700 blur-2xl -z-10 group-hover:-inset-1" />

              {/* Card Border/Frame (V2 & V3 Mixed) */}
              <div className="relative h-full rounded-[2.5rem] p-[1.5px] bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 transition-all duration-500 group-hover:from-orange-500 group-hover:to-rose-500">
                
                <div className="h-full w-full rounded-[calc(2.5rem-1.5px)] bg-white dark:bg-[#020617] p-8 transition-colors duration-500 group-hover:bg-white/95 dark:group-hover:bg-[#020617]/90 backdrop-blur-3xl overflow-hidden relative">
                  
                  {/* Floating "Node" Icon (V2) */}
                  <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-100 group-hover:text-rose-500 transition-all duration-500">
                    <div className="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-current rounded-full animate-ping" />
                    </div>
                  </div>

                  {/* Category Title with Gradient Animation (V3) */}
                  <div className="mb-8 relative z-10">
                    <h3 className="text-2xl font-black bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-rose-500 transition-all duration-500">
                      {group.category}
                    </h3>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mt-1 group-hover:text-orange-500/70 transition-colors">
                      {group.tagline || "System Component"}
                    </p>
                    <div className="h-1 w-10 bg-orange-500/20 rounded-full mt-3 group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 transition-all duration-500" />
                  </div>

                  {/* Improved Chips (V2 & V3 Style) */}
                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {group.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ y: -3, scale: 1.05 }}
                        className="px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide
                                 bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50
                                 text-slate-600 dark:text-slate-300
                                 group-hover:bg-white dark:group-hover:bg-slate-800 group-hover:text-orange-600 dark:group-hover:text-orange-400
                                 group-hover:shadow-[0_10px_20px_rgba(249,115,22,0.1)] transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Bottom Scan-line Animation (V2) */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-1/2 h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                    />
                  </div>

                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
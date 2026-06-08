import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experienceData } from "../../data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-2 bg-white dark:bg-[#020617] overflow-hidden"
    >
      {/* Background Soft Ambient Canvas Blur Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Bounded Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* --- Header Format with Right-Side Visualizer System --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 dark:text-orange-400">
                Professional Journey
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
              Experience<span className="text-orange-500 not-italic">.</span>
            </h2>
            
            {/* Cohesive Description Text */}
            <p className="mt-6 text-slate-500 dark:text-slate-400 font-medium tracking-wide max-w-md text-base leading-relaxed">
              Contributing to production-grade products, backend integrations, and engineering high-performance systems.
            </p>
          </motion.div>

          {/* Right Side Visuality Module: Interactive Core Engine Nodes */}
          <div className="hidden lg:flex items-center gap-6 text-right group/metrics">
            <div className="flex flex-col items-end">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-1">
                Engine_Status
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-orange-500/70 italic">Live_Deployment</span>
                <div className="h-[1px] w-8 bg-gradient-to-l from-orange-500/50 to-transparent" />
              </div>
            </div>

            {/* Micro Floating Wireframe Panel */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border border-dashed border-orange-500/20 group-hover/metrics:border-orange-500/40 transition-colors"
              />
              <motion.div
                animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-2 rounded-xl bg-gradient-to-br from-orange-500/10 to-rose-500/5 blur-sm"
              />
              <div className="relative w-3 h-3 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 shadow-[0_0_15px_#f97316]">
                <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-40" />
              </div>
            </div>
          </div>
        </div>

        {/* Core Main Wrapper Section Container with Main Card Background Hover Effects */}
        <div className="relative group grid grid-cols-1 lg:grid-cols-12 gap-12 items-start p-8 md:p-12 rounded-[2.5rem] bg-white/40 dark:bg-slate-900/10 border border-slate-200 dark:border-slate-800/60 overflow-hidden transition-all duration-500 hover:border-slate-300 dark:hover:border-slate-700/40 hover:shadow-[0_40px_80px_-30px_rgba(0,0,0,0.03)]">
          
          {/* Main Container Hover Background Effect (Subtle Gradient Reveal) */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] dark:group-hover:opacity-[0.03] bg-gradient-to-tr from-orange-500 via-pink-500 to-rose-500 transition-opacity duration-700 pointer-events-none z-0" />
          
          {/* Main Container Extra Hover Ambient Spot Glow */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

          {/* THE BREAKOUT OVAL BACKGROUND "0" */}
          <span className="absolute -top-24 -left-12 text-[240px] md:text-[280px] font-black text-slate-900/[0.015] dark:text-white/[0.01] italic select-none pointer-events-none transition-all duration-1000 transform scale-x-110 tracking-tighter group-hover:scale-x-125 group-hover:text-orange-500/[0.02] z-0">
            0
          </span>

          {/* LEFT COLUMN: Timeline Panel Module (4 Columns) */}
          <div className="lg:col-span-4 relative pl-12 py-2 z-10 space-y-4 transition-transform duration-500 group-hover:translate-x-1">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-slate-200 dark:via-slate-800 to-transparent transition-all duration-500 group-hover:via-pink-500" />

            {/* Floating Anchor Node */}
            <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center shadow-md transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-pink-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              <Briefcase size={14} />
            </div>

            <h3 className="font-black text-3xl tracking-tight text-slate-900 dark:text-white transition-all duration-500">
              {experienceData.company}
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 text-slate-600 dark:text-slate-300">
                {experienceData.duration}
              </span>
              <span className="text-orange-500 font-bold uppercase tracking-wider text-[9px] px-2.5 py-1 rounded-xl bg-orange-500/10 border border-orange-500/20 shadow-sm">
                {experienceData.mode}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Descriptions & Sub Highlight Cards Grid (8 Columns) */}
          <div className="lg:col-span-8 z-10 space-y-10">
            
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 dark:from-white dark:via-white dark:to-white group-hover:from-orange-500 group-hover:via-pink-500 group-hover:to-rose-500 bg-clip-text group-hover:text-transparent transition-all duration-700 ease-out">
                {experienceData.role}
              </h3>

              <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-3xl">
                {experienceData.description}
              </p>
            </div>

            {/* --- Refined Sub Cards Container with Micro Gradient Borders & Hover BG Effects --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {experienceData.highlights.map((item, index) => {
                const HighlightIcon = item.icon;

                return (
                  <div
                    key={index}
                    className="group/card relative rounded-[2rem] p-[1.5px] bg-gradient-to-br from-slate-200/80 to-slate-100 dark:from-slate-800/60 dark:to-slate-900/60 transition-all duration-500 hover:from-orange-500 hover:via-pink-500 hover:to-rose-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(249,115,22,0.06)]"
                    style={{ transitionDelay: `${index * 20}ms` }}
                  >
                    {/* Inner Card Frame Wrapper with Subtle Hover Background Blur & Gradients */}
                    <div className="relative h-full w-full rounded-[calc(2rem-1.5px)] bg-slate-50/50 dark:bg-slate-900/30 group-hover/card:bg-white dark:group-hover/card:bg-[#020617] p-6 space-y-4 backdrop-blur-sm overflow-hidden transition-colors duration-500">
                      
                      {/* Inside Card Micro Hover BG Canvas Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-[0.03] dark:group-hover/card:opacity-[0.04] bg-gradient-to-br from-orange-500 via-pink-500 to-rose-500 transition-opacity duration-500 pointer-events-none" />

                      {/* Highlight Icon Container */}
                      <div className="relative z-10 w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center transition-all duration-300 group-hover/card:border-orange-500/20 group-hover/card:shadow-[0_4px_12px_rgba(249,115,22,0.05)]">
                        <HighlightIcon
                          className="text-slate-600 dark:text-slate-400 transition-colors duration-300 group-hover/card:text-orange-500"
                          size={18}
                        />
                      </div>

                      <div className="relative z-10 space-y-1.5">
                        <h4 className="font-black text-sm tracking-tight text-slate-900 dark:text-white transition-colors duration-300 group-hover/card:text-orange-500 dark:group-hover/card:text-orange-400">
                          {item.title}
                        </h4>

                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Bottom Active Linear Scan-line Animation */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <motion.div 
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-pink-500 to-transparent"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experienceData } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-white dark:bg-[#020617] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 dark:text-orange-400">
              Professional Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            Experience<span className="text-orange-500">.</span>
          </h2>
          <p className="mt-6 text-slate-500 dark:text-slate-400 font-medium tracking-wide max-w-xl text-base leading-relaxed">
            Building practical full-stack products, backend systems, and database-driven workflows in collaborative teams.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experienceData.map((experience, experienceIndex) => (
            <motion.article
              key={experience.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: experienceIndex * 0.1 }}
              className="relative group grid grid-cols-1 lg:grid-cols-12 gap-10 items-start p-8 md:p-12 rounded-[2.5rem] bg-white/60 dark:bg-slate-900/20 border border-slate-200 dark:border-slate-800/60 overflow-hidden transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_30px_80px_-30px_rgba(249,115,22,0.18)]"
            >
              <div className="lg:col-span-4 relative pl-12 py-2">
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-slate-200 dark:via-slate-800 to-transparent" />
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 flex items-center justify-center shadow-md group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Briefcase size={14} />
                </div>
                <h3 className="font-black text-2xl md:text-3xl tracking-tight text-slate-900 dark:text-white">
                  {experience.company}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span className="px-3 py-1 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50">
                    {experience.duration}
                  </span>
                  <span className="text-orange-500 font-bold uppercase tracking-wider text-[9px] px-2.5 py-1 rounded-xl bg-orange-500/10 border border-orange-500/20">
                    {experience.mode}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    {experience.role}
                  </h3>
                  <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-3xl">
                    {experience.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {experience.highlights.map((item, index) => {
                    const HighlightIcon = item.icon;
                    return (
                      <div key={index} className="group/card rounded-[2rem] p-6 bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/60 hover:border-orange-500/30 hover:-translate-y-1 transition-all duration-500">
                        <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-center mb-4 group-hover/card:border-orange-500/30">
                          <HighlightIcon className="text-slate-600 dark:text-slate-400 group-hover/card:text-orange-500 transition-colors" size={18} />
                        </div>
                        <h4 className="font-black text-sm tracking-tight text-slate-900 dark:text-white group-hover/card:text-orange-500 transition-colors">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

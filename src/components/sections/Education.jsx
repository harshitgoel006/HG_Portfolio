


import { motion, useMotionValue, useTransform } from "framer-motion";
import { education } from "../../data/education";

export default function Education() {
  // Mouse hover effect for the whole card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <section
      id="education"
      className="relative py-32 px-6 overflow-hidden bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100"
    >
      {/* Animated Background Blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none z-0" 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mx-auto max-w-7xl relative z-10"
      >
        {/* Header with Slide-in effect */}
        <motion.div variants={itemVariants} className="mb-20">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-rose-500/10 border border-orange-500/20 mb-6 cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
              Academic Excellence
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
            My <span className="bg-gradient-to-br from-orange-500 via-orange-400 to-rose-500 bg-clip-text text-transparent">
              Education.
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                
              />
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-xl font-medium leading-relaxed">
            {education[0]?.tagline || "Specializing in Cloud Computing and Blockchain architectures."}
          </p>
        </motion.div>

        {/* 3D Tilt Card */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={itemVariants}
          className="group relative w-full rounded-[4rem] border border-slate-200/50 dark:border-slate-800/50 
                     bg-white/80 dark:bg-slate-900/40 backdrop-blur-3xl p-10 md:p-16
                     shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] dark:shadow-none transition-shadow hover:shadow-orange-500/5"
        >
          {/* Animated Border Border Chase */}
          <div className="absolute inset-0 rounded-[4rem] overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-[500%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#f97316_360deg)]"
            />
            <div className="absolute inset-[1px] bg-white dark:bg-[#020617]/90 rounded-[4rem]" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16">
              
              <div className="flex-1 space-y-10 w-full text-center lg:text-left">
                <div className="space-y-4">
                  <motion.h3 
                    layout
                    className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight"
                  >
                    {education[0].degree}
                  </motion.h3>
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                    <span className="text-2xl font-extrabold text-orange-500 bg-orange-500/5 px-4 py-1 rounded-lg italic">
                      {education[0].institution}
                    </span>
                    <span className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-full">
                      <span className="animate-bounce">📍</span> {education[0].duration}
                    </span>
                  </div>
                </div>

                {/* Coursework with Hover Pop */}
                <div className="space-y-6">
  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
    Core Curriculum
  </h4>
  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
    {education[0].coursework?.map((course, idx) => (
      <motion.span
        key={idx}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: idx * 0.05 }}
        // Hover par background solid orange aur text white ho jayega
        whileHover={{ 
          scale: 1.05, 
          
          transition: { duration: 0.2 } 
        }}
        className="group relative px-5 py-2.5 rounded-2xl text-xs font-bold 
                   /* Glass Effect */
                   bg-white/10 dark:bg-slate-800/20 backdrop-blur-md
                   border border-slate-200/50 dark:border-white/10
                   shadow-[0_4px_12px_rgba(0,0,0,0.03)]
                   transition-all duration-300 cursor-default overflow-hidden"
      >
        {/* Gradient Text logic */}
        <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent 
                          transition-colors duration-200">
          {course}
        </span>
      </motion.span>
    ))}
  </div>
</div>
              </div>

              {/* Enhanced CGPA Orb with "Breathe" effect */}
              {education[0].cgpa && (
                <motion.div 
                  initial={{ rotate: -10, scale: 0.9 }}
                  whileInView={{ rotate: 0, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="relative group/orb"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -inset-8 bg-orange-500 rounded-full blur-3xl"
                  />
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-50 dark:border-slate-800 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.15)] overflow-hidden">
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Grade Point</p>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-5xl font-black bg-gradient-to-b from-orange-500 to-rose-600 bg-clip-text text-transparent"
                    >
                      {education[0].cgpa}
                    </motion.p>
                    <div className="absolute -bottom-2 w-full h-12 bg-orange-500/10 blur-xl animate-pulse" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Highlights with Staggered Slide */}
            <div className="mt-20 pt-12 border-t border-slate-100 dark:border-slate-800/50">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
    {education[0].highlights?.map((point, idx) => (
      <motion.div 
        key={idx}
        whileHover={{ x: 10, scale: 1.02 }}
        className="flex items-center gap-5 group/list p-4 rounded-3xl 
                   /* Glass Effect on Hover */
                   hover:bg-white/40 dark:hover:bg-slate-800/20 
                   hover:backdrop-blur-md transition-all duration-300"
      >
        {/* Number Box with Gradient & Glass */}
        <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl 
                        bg-gradient-to-br from-orange-500/10 to-rose-500/10 
                        border border-orange-500/20 flex items-center justify-center 
                        group-hover/list:from-orange-500 group-hover/list:to-rose-500 
                        transition-all duration-500 shadow-sm overflow-hidden">
          
          <span className="relative z-10 font-black text-sm 
                           bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent 
                           group-hover/list:text-white transition-colors duration-300">
            0{idx + 1}
          </span>

          {/* Subtle Inner Glow on Hover */}
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/list:opacity-100 transition-opacity" />
        </div>

        {/* Highlight Text */}
        <p className="flex-1 text-sm md:text-base font-bold text-slate-600 dark:text-slate-400 
                      transition-colors group-hover/list:text-slate-900 dark:group-hover/list:text-white 
                      leading-tight">
          {point}
        </p>
      </motion.div>
    ))}
  </div>
</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


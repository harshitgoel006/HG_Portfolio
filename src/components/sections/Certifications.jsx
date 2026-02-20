import { motion } from "framer-motion";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Card Floating Animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 } 
    },
  };

  return (
    <section
      id="certifications"
      className="relative py-32 px-6 overflow-hidden bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100"
      style={{ perspective: "1200px" }} // For 3D floating effect
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header with Floating Code Blocks (Instead of Globe) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6 mx-auto md:mx-0">
               <motion.span 
                 animate={{ scale: [1, 1.2, 1] }} 
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,1)]" 
               />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">Badges & Credentials</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-4">
              Certifications<span className="text-orange-500">.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-lg">
               Professional validations and technical milestones from global learning platforms.
            </p>
          </motion.div>

          {/* RIGHT SIDE: Animated Tech "Node-Grid" (New Element) */}
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

        {/* Grid: 3D Floating Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {certifications.map((c, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -20, 
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 } 
              }}
              // Floating effect on mount/idle
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: idx * 0.2 
              }}
              className="group relative h-full rounded-[2.8rem] p-[1px] overflow-hidden shadow-2xl"
            >
              {/* Animated Inner Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 dark:from-slate-800 to-transparent group-hover:from-orange-500 group-hover:to-rose-500 transition-all duration-500" />
              
              <div className="relative h-full bg-white/90 dark:bg-[#030712]/95 rounded-[2.8rem] p-9 flex flex-col backdrop-blur-3xl">
                
                {/* Year Badge: Floating style */}
                <div className="flex justify-between items-start mb-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    </div>
                  </div>
                  <span className="text-xs font-black px-4 py-1.5 rounded-full bg-orange-500/5 text-orange-600 border border-orange-500/10 tracking-widest">
                    {c.year}
                  </span>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                   <p className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-500 mb-3 group-hover:translate-x-1 transition-transform">{c.platform}</p>
                   <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-[1.1] mb-5 group-hover:text-orange-500 transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                    {c.tagline}
                  </p>
                </div>

                {/* Skills: Neumorphic Glass effect */}
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {c.skills?.map((s, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-wider bg-white dark:bg-slate-900 shadow-sm border border-slate-200/50 dark:border-slate-800 group-hover:border-orange-500/30 transition-all duration-300 text-slate-500 dark:text-slate-400">
                      {s}
                    </span>
                  ))}
                </div><div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-1/2 h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                    />
                  </div>


                {/* Action Link: Magnetic feel */}
                {c.link && (
  <motion.a
    href={c.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-10 flex items-center gap-4 relative z-30 w-fit cursor-pointer group/link pointer-events-auto"
    whileHover="hover"
    whileTap={{ scale: 0.96 }}
  >
    {/* Line Container: Is par bhi hover trigger hoga */}
    <div className="flex items-center">
      <motion.div 
        variants={{
          hover: { width: 48, backgroundColor: "#f97316" } // Orange-500
        }}
        initial={{ width: 32 }}
        className="h-[2px] bg-slate-200 dark:bg-slate-800 transition-colors duration-300" 
      />
    </div>

    {/* Text Container */}
    <motion.span 
      variants={{
        hover: { x: 4 }
      }}
      className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover/link:text-orange-500 dark:group-hover/link:text-orange-400 transition-colors duration-300"
    >
      Verify Now
    </motion.span>

    {/* Hit Area Expansion: Desktop aur Mobile dono ke liye clickable zone bada karta hai */}
    <span className="absolute -inset-3 z-[-1]" aria-hidden="true" />
  </motion.a>
)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
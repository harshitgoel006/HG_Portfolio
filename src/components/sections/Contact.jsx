import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  const contactData = [
    {
      category: "Email",
      tagline: "Quick Communication",
      content: "harshitgoel885@gmail.com",
      link: "mailto:harshitgoel885@gmail.com",
      icon: <Mail size={24} />,
      items: ["Freelance", "Collaboration", "Queries"]
    },
    {
      category: "Phone",
      tagline: "Direct Connection",
      content: "+91 84392 91501",
      link: "tel:+918439291501",
      icon: <Phone size={24} />,
      items: ["Voice Call", "Immediate"]
    },
    {
  category: "Socials",
  tagline: "Stay Connected",
  content: "Active on Socials",
  // LinkedIn ki jagah ek Status Dot icon jo pulse karega (Dynamic feel ke liye)
  icon: (
    <div className="relative flex items-center justify-center">
      <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping absolute" />
      <div className="w-2 h-2 bg-orange-500 rounded-full relative" />
    </div>
  ),
  items: ["LinkedIn", "GitHub"],
  isSocial: true
}
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-[#030712] transition-colors duration-500">
      <div className="mx-auto max-w-7xl">
        
        {/* --- HEADING (As per your current setup) --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
               <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">Contact Methods</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
              Contact <span className="text-orange-500">Me.</span>
            </h2>
            <p className="mt-8 text-slate-500 dark:text-slate-400 font-medium tracking-wide max-w-md">
               Have a project in mind or just want to connect?
              <br className="hidden md:block" />
              Drop a message and let's build something iconic.
            </p>
          </motion.div>
        </div>

         

        {/* --- BENTO CONTACT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {contactData.map((item, idx) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Animated Gradient Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-rose-500 rounded-[2.5rem] opacity-0 group-hover:opacity-40 transition-all duration-700 blur-2xl -z-10 group-hover:-inset-1" />

              {/* Card Frame */}
              <div className="relative h-full rounded-[2.5rem] p-[1.5px] bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 transition-all duration-500 group-hover:from-orange-500 group-hover:to-rose-500">
                
                <div className="h-full w-full rounded-[calc(2.5rem-1.5px)] bg-white dark:bg-[#020617] p-8 backdrop-blur-3xl overflow-hidden relative flex flex-col">
                  
                  {/* Top "Node" Icon */}
                  <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-100 group-hover:text-orange-500 transition-all duration-500">
                    <div className="w-10 h-10 border border-current rounded-full flex items-center justify-center">
                       {item.icon}
                    </div>
                  </div>

                  {/* Title & Content */}
                  <div className="mb-8 relative z-10">
                    <h3 className="text-2xl font-black bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent group-hover:from-orange-500 group-hover:to-rose-500 transition-all duration-500">
                      {item.category}
                    </h3>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mt-1 group-hover:text-orange-500/70 transition-colors">
                      {item.tagline}
                    </p>
                    <div className="h-1 w-10 bg-orange-500/20 rounded-full mt-3 group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 transition-all duration-500" />
                  </div>

                  {/* Main Link/Content */}
                  <div className="mb-8 relative z-10">
                    {item.isSocial ? (
                      <div className="flex gap-4">
                        <a href="https://linkedin.com/in/harshit-goel-73b90b290/" target="_blank" className="text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors"><Linkedin size={20}/></a>
                        <a href="https://github.com/harshitgoel006" target="_blank" className="text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors"><Github size={20}/></a>
                      </div>
                    ) : (
                      <a href={item.link} className="text-lg font-bold text-slate-700 dark:text-slate-200 hover:text-orange-500 transition-colors break-words">
                        {item.content}
                      </a>
                    )}
                  </div>

                  {/* Tags (Skills-style chips) */}
                  <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                    {item.items.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-wide
                                   bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50
                                   text-slate-500 dark:text-slate-400
                                   group-hover:bg-white dark:group-hover:bg-slate-800 group-hover:text-orange-600
                                   transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Scan-line Animation */}
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
import { motion } from 'motion/react';
import { Github, ChevronDown } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center text-center space-y-6 pt-10 relative min-h-[70vh] justify-center"
    >
      <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-sm border border-cyan-500/20 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
        Available for Open Source
      </motion.div>
      
      <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 pb-2">
        Nur Islam
      </motion.h1>
      
      <motion.div variants={item} className="h-12 sm:h-16 flex items-center justify-center w-full max-w-[90vw] overflow-hidden -my-2">
        <img 
          src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=24&duration=3500&pause=1200&color=00E5FF&center=true&vCenter=true&width=900&lines=Hey+there!+I'm+Nur+Islam;Android+Developer;Telegram+Automation;Creator+of+Study+Sphere;JavaScript+Developer;Linux+Enthusiast;Open+Source+Contributor"
          alt="Typing Animation"
          className="w-full max-w-[700px] object-contain"
        />
      </motion.div>
      
      <motion.p variants={item} className="max-w-2xl text-slate-400 text-lg leading-relaxed">
        Hey there! I build elegant software that solves real problems. 
        Passionate about mobile experiences, backend automation, and crafting useful tools.
      </motion.p>
      
      <motion.div variants={item} className="flex flex-wrap justify-center gap-4 pt-6">
        <a 
          href="https://github.com/nur12islam" 
          target="_blank" 
          rel="noreferrer" 
          className="group flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-700 rounded-full hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
        >
          <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium">GitHub Profile</span>
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-0 text-slate-600"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

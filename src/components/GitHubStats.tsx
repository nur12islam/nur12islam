import { motion } from 'motion/react';
import { Activity } from 'lucide-react';

export default function GitHubStats() {
  return (
    <section className="space-y-12 pt-10">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">GitHub Metrics</h2>
          <p className="text-slate-400">Real-time statistics and tech stack.</p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
          <Activity className="w-6 h-6" />
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-2xl bg-[#0d1117] border border-slate-800 flex flex-col items-center justify-center group hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all overflow-hidden"
        >
          <img 
            src="https://github-readme-stats.vercel.app/api?username=nur12islam&show_icons=true&theme=dark&bg_color=0d1117&border_color=1e293b&title_color=22d3ee&icon_color=22d3ee" 
            alt="GitHub Stats" 
            className="w-full max-w-[450px] object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-2xl bg-[#0d1117] border border-slate-800 flex flex-col items-center justify-center group hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all overflow-hidden"
        >
          <img 
            src="https://github-readme-tech-stack.vercel.app/api/cards?title=Tech%20Stack&align=center&titleAlign=center&fontSize=18&lineCount=2&theme=github_dark&line1=JavaScript,JavaScript,F7DF1E;Node.js,Node.js,339933;HTML5,HTML5,E34F26;CSS3,CSS3,1572B6;&line2=Firebase,Firebase,FFCA28;SQLite,SQLite,003B57;Git,Git,F05032;Linux,Linux,FCC624;" 
            alt="Tech Stack" 
            className="w-full max-w-[450px] object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 pt-4"
      >
        <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="https://github.com/nur12islam" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/github/followers/nur12islam?label=Followers&style=for-the-badge&color=00bfff" alt="Followers" className="h-8" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="https://github.com/nur12islam" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/github/stars/nur12islam?affiliations=OWNER&style=for-the-badge&color=00bfff" alt="Stars" className="h-8" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="https://github.com/nur12islam" target="_blank" rel="noreferrer">
          <img src="https://komarev.com/ghpvc/?username=nur12islam&style=for-the-badge&color=00bfff" alt="Profile Views" className="h-8" />
        </motion.a>
      </motion.div>
    </section>
  );
}

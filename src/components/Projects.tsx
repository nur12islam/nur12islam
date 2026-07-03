import { motion } from 'motion/react';
import { FolderGit2, CheckCircle2, CircleDashed } from 'lucide-react';
import CodeWindow from './CodeWindow';

const projects = [
  {
    title: "Study Sphere",
    description: "Student productivity platform with notes, PDF management, document scanner, cloud sync and modern UI.",
    status: "Active",
    tags: ["Android", "Firebase", "Java/Kotlin"],
    features: ["Smart Notes", "File Manager", "Cloud Sync", "Document Scanner"]
  },
  {
    title: "Telegram Userbot",
    description: "Powerful automation framework with AI utilities, media tools, admin features and productivity commands.",
    status: "Active",
    tags: ["Node.js", "Telegram API", "JavaScript"],
    features: ["AI Commands", "Automation Workflows", "Admin Tools", "Plugins"]
  },
  {
    title: "Modern Web Projects",
    description: "Responsive websites featuring glassmorphism, animations and premium UI.",
    status: "Active",
    tags: ["React", "Tailwind CSS", "Web"],
    features: ["Premium UI", "Animations", "Responsive"]
  },
  {
    title: "AI Utilities",
    description: "AI-powered tools for automation, productivity and learning.",
    status: "In Progress",
    tags: ["AI", "Python", "Automation"],
    features: ["Learning Tools", "Productivity", "Integrations"]
  }
];

export default function Projects() {
  const statusArt = `╭──────────────────────────────────────────────╮
│                                              │
│        🚀 CURRENT DEVELOPMENT STATUS         │
│                                              │
│   📚 Study Sphere                 ████████░░ │
│   🤖 Telegram Automation          ██████████ │
│   ⚡ AI Utilities                 ███████░░░ │
│   🌐 Web Development              ████████░░ │
│   🎨 UI / UX                      █████████░ │
│                                              │
╰──────────────────────────────────────────────╯`;

  return (
    <section className="space-y-12 pt-10">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Featured Projects</h2>
          <p className="text-slate-400">Current focus and 2026 goals.</p>
        </div>
        <div className="px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-sm border border-cyan-500/20 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Actively Building
        </div>
      </motion.div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex flex-col h-full p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/30 border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.05)] transition-all group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full border ${project.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                {project.status === 'Active' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <CircleDashed className="w-3.5 h-3.5" />}
                {project.status}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
              {project.description}
            </p>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                {project.features.map((feature, j) => (
                  <motion.span 
                    key={feature} 
                    initial={{ opacity: 0, x: -5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (j * 0.05) }}
                    className="text-sm text-slate-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                    {feature}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-800/80">
                {project.tags.map((tag, j) => (
                  <motion.span 
                    key={tag} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (j * 0.05) }}
                    className="px-3 py-1.5 text-xs font-mono rounded-md bg-slate-950 text-slate-400 border border-slate-800"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-12">
        <CodeWindow 
          title="status.txt" 
          code={statusArt} 
          language="text"
          className="max-w-[500px] mx-auto text-center"
          typingSpeed={2}
          delay={0.3}
        />
      </div>
    </section>
  );
}

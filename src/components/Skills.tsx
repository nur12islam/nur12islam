import { motion } from 'motion/react';
import { Smartphone, Database, Terminal, FileCode2, Layout, Bot } from 'lucide-react';
import CodeWindow from './CodeWindow';

const skillCategories = [
  {
    title: "Languages",
    icon: <FileCode2 className="w-6 h-6" />,
    skills: ["JavaScript", "Python", "HTML5", "CSS3", "Node.js"]
  },
  {
    title: "Android & Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    skills: ["Android Studio", "Gradle", "Firebase", "Material Design"]
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["Firebase", "SQLite", "MongoDB"]
  },
  {
    title: "Tools & Env",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["Linux", "Bash", "Git", "GitHub", "VS Code"]
  },
  {
    title: "Design",
    icon: <Layout className="w-6 h-6" />,
    skills: ["Figma", "Photoshop", "UI/UX"]
  },
  {
    title: "Focus Areas",
    icon: <Bot className="w-6 h-6" />,
    skills: ["Telegram Bots", "Automation", "AI Integration"]
  }
];

export default function Skills() {
  const devEnv = `OS:
  - Linux

Editor:
  - VS Code

Version Control:
  - Git
  - GitHub

Package Manager:
  - npm

Database:
  - Firebase
  - SQLite

Design:
  - Figma
  - Photoshop

Deployment:
  - GitHub Pages
  - Linux Server`;

  return (
    <section className="space-y-12 pt-10">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4 max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tech Stack & Tools</h2>
        <p className="text-slate-400 text-lg">The foundational technologies and environments I use to build scalable applications.</p>
      </motion.div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all overflow-hidden relative">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: i * 0.2 }}
              >
                {cat.icon}
              </motion.div>
            </div>
            <h3 className="font-bold text-xl mb-4 text-slate-200">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 text-xs font-mono rounded-md bg-slate-950 text-slate-300 border border-slate-800/60 group-hover:border-cyan-500/30 group-hover:text-cyan-100 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="pt-8">
        <CodeWindow 
          title="dev_env.yml" 
          code={devEnv} 
          language="yaml"
          className="max-w-2xl mx-auto"
          typingSpeed={10}
        />
      </div>
    </section>
  );
}

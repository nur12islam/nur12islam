import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import CodeWindow from './CodeWindow';

export default function About() {
  const codeString = `const nur = {
  name: "Nur Islam",
  alias: "DARKI",
  role: "Student • Android Developer",
  location: "India",
  focus: [
    "Android Applications",
    "Telegram Automation",
    "Artificial Intelligence"
  ],
  motto: "Build something today that makes tomorrow easier."
};`;

  const funFacts = `Name: Nur Islam
Alias: DARKI
OS: Linux 🐧
Editor: VS Code
Favorite Language: JavaScript

Currently Learning:
  - AI
  - Android
  - Cloud Technologies

Interests:
  - Open Source
  - Automation
  - UI/UX
  - Productivity
  - Linux`;

  return (
    <section className="pt-24 space-y-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-sm border border-cyan-500/20">
            <Code2 className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Developer Philosophy</h3>
          <blockquote className="text-xl text-slate-300 border-l-4 border-cyan-500 pl-6 py-2 italic leading-relaxed">
            "Code should solve problems, design should create experiences, and technology should make life easier."
          </blockquote>
        </motion.div>
        
        <CodeWindow 
          title="nur.js" 
          code={codeString} 
          language="javascript"
          className="min-h-[320px]"
          typingSpeed={10}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <CodeWindow 
            title="fun_facts.yml" 
            code={funFacts} 
            language="yaml"
            className="min-h-[380px]"
            typingSpeed={10}
            delay={0.5}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 order-1 lg:order-2 lg:pl-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Beyond the Code</h3>
          <p className="text-lg text-slate-400 leading-relaxed">
            I'm a Linux enthusiast who loves exploring new technologies.
            When I'm not building Android apps or Telegram bots, I focus on UI/UX and open source contributions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

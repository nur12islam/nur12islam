import { motion } from 'motion/react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Terminal() {
  const bootSequence = [
    "┌──────────────────────────────────────────────────────────────┐",
    "│                    JARVIS AI v3.0                            │",
    "├──────────────────────────────────────────────────────────────┤",
    "> Initializing system...",
    "[████████████████████████████████] 100%",
    "✓ Android Development Engine",
    "✓ Telegram Automation Framework",
    "✓ Study Sphere Workspace",
    "✓ JavaScript Runtime",
    "✓ Linux Environment",
    "───────────────────────────────────────────────────────────────",
    "Developer : Nur Islam",
    "Alias     : DARKI",
    "Status    : ONLINE",
    "> Welcome back, Nur.",
    "└──────────────────────────────────────────────────────────────┘"
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines(prev => {
        if (prev < bootSequence.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto pt-16"
    >
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#0a0a0a] shadow-[0_0_30px_rgba(6,182,212,0.05)]">
        <div className="flex items-center px-4 py-3 bg-slate-900/80 border-b border-slate-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="mx-auto flex items-center gap-2 text-slate-400 text-sm font-mono pr-8">
            <TerminalIcon className="w-4 h-4" />
            <span>bash — jarvis-boot</span>
          </div>
        </div>
        <div className="p-6 font-mono text-sm md:text-base text-cyan-400/90 whitespace-pre overflow-x-auto leading-relaxed min-h-[400px]">
          {bootSequence.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {line}
            </motion.div>
          ))}
          {visibleLines >= bootSequence.length && (
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2.5 h-5 bg-cyan-400 mt-2"
            />
          )}
        </div>
      </div>
    </motion.section>
  );
}

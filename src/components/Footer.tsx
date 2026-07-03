import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/50 py-12 mt-32 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 text-slate-400">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
            <Terminal className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="font-mono text-sm tracking-tight">System standing by...</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-slate-400 text-sm font-medium">
            Built with ⚡ by Nur Islam
          </p>
          <p className="text-slate-500 text-xs font-mono">
            Alias: DARKI • 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

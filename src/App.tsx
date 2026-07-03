import Hero from './components/Hero';
import Terminal from './components/Terminal';
import About from './components/About';
import Skills from './components/Skills';
import GitHubStats from './components/GitHubStats';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0F2027] to-slate-950 -z-10" />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-32">
        <Hero />
        <Terminal />
        <About />
        <Skills />
        <GitHubStats />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

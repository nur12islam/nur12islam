import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface CodeWindowProps {
  title: string;
  code: string;
  language?: 'javascript' | 'yaml' | 'text';
  delay?: number;
  className?: string;
  typingSpeed?: number;
}

export default function CodeWindow({ 
  title, 
  code, 
  language = 'text', 
  delay = 0,
  className = "",
  typingSpeed = 50
}: CodeWindowProps) {
  const [visibleChars, setVisibleChars] = useState(0);
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (delay > 0) {
      timeout = setTimeout(() => startTyping(), delay * 1000);
    } else {
      startTyping();
    }
    
    function startTyping() {
      const interval = setInterval(() => {
        setVisibleChars(prev => {
          if (prev < code.length) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, typingSpeed);
      return () => clearInterval(interval);
    }
    
    return () => clearTimeout(timeout);
  }, [code, delay, typingSpeed]);

  const visibleCode = code.slice(0, visibleChars);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.5, duration: 0.5 }}
      className={`rounded-xl overflow-hidden border border-slate-800 bg-[#0d1117] shadow-2xl flex flex-col ${className}`}
    >
      <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex text-sm font-mono text-slate-400 gap-2 items-center shrink-0">
        <div className="flex gap-1.5 mr-4">
          <div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-red-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-yellow-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-slate-700 hover:bg-green-500 transition-colors" />
        </div>
        {title}
      </div>
      <div className="p-6 overflow-auto grow">
        <pre className="text-sm md:text-base font-mono leading-relaxed whitespace-pre">
          <code>
            <span dangerouslySetInnerHTML={{ __html: highlight(visibleCode, language) }} />
            {visibleChars < code.length && (
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-cyan-400 ml-1 translate-y-1"
              />
            )}
          </code>
        </pre>
      </div>
    </motion.div>
  );
}

function highlight(code: string, language: string) {
  if (language === 'text') {
    // For text (like ASCII), just colorize some parts if we want, or return as is
    return code
      .replace(/(█+)/g, '<span class="text-cyan-400">$1</span>')
      .replace(/(░+)/g, '<span class="text-slate-600">$1</span>')
      .replace(/(📚|🤖|⚡|🌐|🎨|🚀)/g, '<span class="text-xl">$1</span>');
  }

  let stringMap = new Map();
  let counter = 0;
  
  let tempCode = code.replace(/"[^"]*"/g, (match) => {
    let key = `__STRING_${counter}__`;
    stringMap.set(key, `<span class="text-green-300">${match}</span>`);
    counter++;
    return key;
  });

  if (language === 'javascript') {
    tempCode = tempCode
      .replace(/\b(const|let|var)\b/g, '<span class="text-pink-400">$1</span>')
      .replace(/([{}[\]])/g, '<span class="text-yellow-300">$1</span>')
      .replace(/([a-zA-Z0-9_]+)(?=:)/g, '<span class="text-blue-300">$1</span>')
      .replace(/(=)/g, '<span class="text-cyan-400">$1</span>');
  } else if (language === 'yaml') {
    tempCode = tempCode
      .replace(/^([a-zA-Z0-9_ ]+):/gm, '<span class="text-blue-300">$1</span>:')
      .replace(/(-)/g, '<span class="text-cyan-400">$1</span>');
  }

  stringMap.forEach((val, key) => {
    tempCode = tempCode.replace(key, val);
  });

  return tempCode;
}

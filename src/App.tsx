import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'github-markdown-css/github-markdown-dark.css';
import readmeContent from '../README.md?raw';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-slate-300 font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between bg-slate-900 border border-slate-800 p-4 rounded-xl shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
              <svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" fill="currentColor" className="text-white">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </div>
            <div>
              <h1 className="font-semibold text-slate-200">nur12islam / README.md</h1>
              <p className="text-sm text-slate-500">Profile Preview</p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#0d1117] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="px-6 py-4 bg-slate-900/50 border-b border-slate-800 flex gap-2">
             <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
             <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="p-8 md:p-12 markdown-body !bg-transparent !text-slate-300">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              rehypePlugins={[rehypeRaw]}
              components={{
                td: ({ node, vAlign, ...props }: any) => <td valign={vAlign} {...props} />
              }}
            >
              {readmeContent}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFolder, FiFileText, FiCode, FiShield, FiTrendingUp, FiCpu, FiHash } from 'react-icons/fi';

// Mock Data for the "Files"
const FILES = [
  { 
    id: 'core',
    name: 'Strategic_Core.json', 
    icon: <FiCpu />, 
    color: 'text-blue-400',
    language: 'json',
    content: `{
  "system_role": "Senior_Marketing_Strategist",
  "knowledge_base": ["AARRR_Funnel", "Jobs_To_Be_Done"],
  "thinking_process": {
    "step_1": "Analyze_User_Intent_Deeply",
    "step_2": "Ignore_Surface_Level_Requests",
    "step_3": "Apply_Psychological_Triggers"
  },
  "constraints": {
    "ban_generic_advice": true,
    "require_data_backing": true
  }
}` 
  },
  { 
    id: 'slang',
    name: 'Egyptian_Slang.config', 
    icon: <FiHash />, 
    color: 'text-yellow-400',
    language: 'yaml',
    content: `dialect_settings:
  region: "Cairo_Modern"
  tone: "Friendly_Professional"
  
forbidden_words:
  - "عزيزي العميل"
  - "نقدم لكم"
  - "للغاية"
  - "الأمثل"

vocabulary_replacement:
  "great": "جامد"
  "problem": "حوار"
  "money": "فلوس"
  
# Inject local cultural references
cultural_context: active` 
  },
  { 
    id: 'hallucination',
    name: 'Anti_Hallucination.py', 
    icon: <FiShield />, 
    color: 'text-red-400',
    language: 'python',
    content: `def verify_facts(output):
    """
    Prevents the AI from making things up.
    """
    knowledge_source = load("client_brand_book.pdf")
    
    if output.contains_claim() and not knowledge_source.has_proof():
        return "Warning: Claim not supported by data."
        
    if output.tone == "Robot_Translated":
        return rewrite_to_native_arabic(output)
        
    return output.approve()` 
  },
  { 
    id: 'growth',
    name: 'Growth_Hacks.json', 
    icon: <FiTrendingUp />, 
    color: 'text-green-400',
    language: 'json',
    content: `{
  "objective": "Maximize_Conversion_Rate",
  "tactics": [
    {
      "name": "Scarcity_Loop",
      "trigger": "Limited_Seats"
    },
    {
      "name": "Social_Proof_Injection",
      "format": "Review_Snippet"
    }
  ],
  "kpis_to_track": ["CTR", "CAC", "LTV"]
}` 
  },
];

const TypewriterCode = ({ code, language }: { code: string, language: string }) => {
  // Simple syntax highlighting simulation
  const highlight = (text: string) => {
    if (language === 'json') {
      return text
        .replace(/"(.*?)":/g, '<span class="text-cyan-300">"$1"</span>:') // Keys
        .replace(/: "(.*?)"/g, ': <span class="text-green-300">"$1"</span>') // String Values
        .replace(/: (true|false)/g, ': <span class="text-purple-400 font-bold">$1</span>'); // Booleans
    }
    if (language === 'yaml') {
      return text
        .replace(/^(.*?):/gm, '<span class="text-pink-400">$1</span>:') // Keys
        .replace(/"(.*?)"/g, '<span class="text-yellow-200">"$1"</span>') // Strings
        .replace(/# (.*)/g, '<span class="text-slate-500 italic"># $1</span>'); // Comments
    }
    if (language === 'python') {
      return text
        .replace(/def (.*?)\(/g, 'def <span class="text-yellow-300">$1</span>(') // Functions
        .replace(/(return|if|and|not)/g, '<span class="text-purple-400 italic">$1</span>') // Keywords
        .replace(/"(.*?)"/g, '<span class="text-green-300">"$1"</span>') // Strings
        .replace(/# (.*)/g, '<span class="text-slate-500 italic"># $1</span>'); // Comments
    }
    return text;
  };

  return (
    <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
      <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
    </pre>
  );
};

export const CodeVisualizer: React.FC = () => {
  const [activeFileId, setActiveFileId] = useState(FILES[0].id);
  const activeFile = FILES.find(f => f.id === activeFileId) || FILES[0];

  return (
    <section className="py-24 bg-slate-950 border-y border-slate-800 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          {/* Text Content */}
          <div className="lg:w-5/12 text-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6">
                <FiCode />
                <span>System Architecture v2.0</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                أنت مش بتشتري "كلام".. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  أنت بتشتري هندسة كاملة.
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                AG-Mart مش شوية Prompts مكتوبة على نوتة. ده هيكل برمجي كامل (Files & Scripts) بنيناه عشان يشتغل مع بعضه بتناغم تام.
              </p>
              
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <FiCpu />
                  </div>
                  <span>ملفات بتفكر وتخطط (Strategic Core)</span>
                </li>
                <li className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                    <FiHash />
                  </div>
                  <span>ملفات بتظبط اللهجة المصرية (Context Engine)</span>
                </li>
                <li className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <FiTrendingUp />
                  </div>
                  <span>ملفات للنمو وزيادة المبيعات (Growth Hacks)</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* The Visualizer Window (IDE) */}
          <div className="lg:w-7/12 w-full">
            <motion.div 
              initial={{ opacity: 0, rotateX: 10, y: 40 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative group perspective-1000"
            >
              {/* Glow Behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Window Container */}
              <div className="relative bg-[#0d1117] rounded-xl shadow-2xl overflow-hidden border border-slate-700 font-mono text-sm md:text-base dir-ltr ring-1 ring-white/10">
                
                {/* Title Bar */}
                <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-[#30363d]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                  </div>
                  <div className="text-xs text-slate-500 font-medium select-none">ag-mart-engine — visual_studio_code</div>
                  <div className="w-10"></div> {/* Spacer */}
                </div>

                {/* IDE Body */}
                <div className="flex h-[400px]">
                  
                  {/* Sidebar (Explorer) */}
                  <div className="w-1/3 bg-[#0d1117] border-r border-[#30363d] p-3 flex flex-col gap-1 overflow-y-auto">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2">Explorer</div>
                    {FILES.map((file) => (
                      <button
                        key={file.id}
                        onClick={() => setActiveFileId(file.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all w-full text-left ${
                          activeFileId === file.id 
                            ? 'bg-[#1f2428] text-white border-l-2 border-cyan-500' 
                            : 'text-slate-400 hover:bg-[#161b22] hover:text-slate-200'
                        }`}
                      >
                        <span className={file.color}>{file.icon}</span>
                        <span className="truncate">{file.name}</span>
                      </button>
                    ))}

                    <div className="mt-auto pt-4 border-t border-[#30363d]">
                         <div className="text-[10px] text-slate-600 px-2 mb-1">Timeline</div>
                         <div className="h-1 w-full bg-[#21262d] rounded overflow-hidden">
                             <motion.div 
                                className="h-full bg-cyan-500" 
                                initial={{ width: "0%" }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 2 }}
                             />
                         </div>
                         <div className="text-[10px] text-slate-500 mt-1 flex justify-between">
                            <span>Compiling...</span>
                            <span className="text-green-400">Done</span>
                         </div>
                    </div>
                  </div>

                  {/* Code Area */}
                  <div className="w-2/3 bg-[#0d1117] p-0 flex flex-col relative">
                     {/* Tab Bar */}
                     <div className="flex bg-[#0d1117] border-b border-[#30363d]">
                        <div className="px-4 py-2 bg-[#1f2428] border-r border-[#30363d] border-t-2 border-t-cyan-500 text-slate-200 text-xs flex items-center gap-2">
                           <span className={activeFile.color}>{activeFile.icon}</span>
                           {activeFile.name}
                           <span className="ml-2 text-slate-500 hover:text-white cursor-pointer">×</span>
                        </div>
                     </div>

                     {/* Editor Content */}
                     <div className="p-4 overflow-auto flex-grow text-slate-300 relative">
                        {/* Line Numbers */}
                        <div className="absolute top-4 left-2 w-6 text-right text-slate-600 text-xs select-none leading-relaxed">
                            {Array.from({ length: 15 }).map((_, i) => (
                                <div key={i}>{i + 1}</div>
                            ))}
                        </div>

                        {/* Code */}
                        <div className="pl-8">
                             <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeFile.id}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <TypewriterCode code={activeFile.content} language={activeFile.language} />
                                </motion.div>
                             </AnimatePresence>
                             <motion.span 
                                animate={{ opacity: [0, 1, 0] }} 
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2 h-4 bg-cyan-500 ml-1 align-middle"
                             />
                        </div>
                     </div>
                     
                     {/* Status Bar */}
                     <div className="bg-[#161b22] px-3 py-1 text-[10px] text-slate-400 flex items-center justify-between select-none border-t border-[#30363d]">
                        <div className="flex gap-3">
                            <span className="flex items-center gap-1"><FiCode className="text-xs" /> main*</span>
                            <span className="flex items-center gap-1">0 errors</span>
                        </div>
                        <div className="flex gap-3">
                            <span>Ln 12, Col 42</span>
                            <span>UTF-8</span>
                            <span className="text-cyan-400">{activeFile.language.toUpperCase()}</span>
                        </div>
                     </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
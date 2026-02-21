import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiCpu, FiDollarSign, FiClock, FiCheckCircle, FiCode, FiZap, FiUnlock, FiTrendingDown, FiTrendingUp } from 'react-icons/fi';
import { FaMagic, FaInfinity } from 'react-icons/fa';
import { SiOpenai, SiGooglegemini, SiAnthropic } from 'react-icons/si';

const TypewriterText = ({ text, delay = 0, onComplete }: { text: string, delay?: number, onComplete?: () => void }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    const timeout = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            if (i === text.length) {
                clearInterval(interval);
                onComplete && onComplete();
            }
        }, 40);
        return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, onComplete]);

  return <span>{displayedText}</span>;
};

export const ExpertsCollaboration: React.FC = () => {
  const [terminalStep, setTerminalStep] = useState(0);

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Fun Background Elements */}
      <div className="absolute top-10 left-10 opacity-5 rotate-12 select-none text-white">
        <FiDollarSign size={80} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 -rotate-12 select-none text-white">
        <FiTrendingUp size={80} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        
        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mb-6 text-purple-300 border border-purple-500/30 backdrop-blur-sm">
               <FiUsers className="w-5 h-5 ml-2" />
               <span className="font-bold">Collaboration Event</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold leading-relaxed mb-6">
              روحنا تواصلنا مع <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-black">خبراء وناس تقيلة</span> في كل مجالات الـ Digital marketing وعملنا معاهم Collaboration
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              احنا هناخد خبراتهم وطريقة شغلهم وأفكارهم وهنحولها لـ <span className="font-mono text-cyan-300 bg-slate-800 px-2 py-1 rounded border border-cyan-900">كود برمجي</span> يشتغل مع:
            </p>
          </motion.div>
        </div>

        {/* Tech Stack Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-24 auto-rows-[160px]">
          
          {/* ChatGPT - Large Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 relative overflow-hidden rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-slate-900 p-6 flex flex-col justify-between hover:border-green-500/40 transition-colors group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl -z-10 group-hover:bg-green-500/20 transition-colors" />
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-2xl bg-green-500/10 text-green-400 shadow-lg shadow-green-900/20">
                <SiOpenai className="text-3xl" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/10 text-green-400 border border-green-500/20">Custom GPTs</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">ChatGPT</h3>
              <p className="text-slate-400 text-sm">بنبني لك مساعد شخصي مدرب على بياناتك.</p>
            </div>
          </motion.div>

          {/* Gemini - Small Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-slate-900 p-6 flex flex-col justify-between hover:border-blue-500/40 transition-colors group"
          >
             <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10 group-hover:bg-blue-500/20 transition-colors" />
             <div className="flex items-center justify-between mb-4">
               <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-900/20">
                 <SiGooglegemini className="text-3xl" />
               </div>
             </div>
             <div>
               <h3 className="text-xl font-bold text-white">Gemini Gems</h3>
               <p className="text-slate-400 text-xs mt-1">الأسرع والأذكى في التحليل.</p>
             </div>
          </motion.div>

          {/* Claude - Small Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 relative overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-900/20 to-slate-900 p-6 flex flex-col justify-between hover:border-orange-500/40 transition-colors group"
          >
             <div className="absolute top-0 left-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl -z-10 group-hover:bg-orange-500/20 transition-colors" />
             <div className="flex items-center justify-between mb-4">
               <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-400 shadow-lg shadow-orange-900/20">
                 <SiAnthropic className="text-3xl" />
               </div>
             </div>
             <div>
               <h3 className="text-xl font-bold text-white">Claude Artifacts</h3>
               <p className="text-slate-400 text-xs mt-1">للإبداع وكتابة الكود المعقد.</p>
             </div>
          </motion.div>

          {/* Programmatic - Large Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/20 to-slate-900 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-colors group"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -z-10 group-hover:bg-cyan-500/20 transition-colors" />
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-900/20">
                <FiCpu className="text-3xl" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Universal Agent</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Any Programmatic Agent</h3>
              <p className="text-slate-400 text-sm">نظام مرن يشتغل مع أي موديل أو API في العالم.</p>
            </div>
          </motion.div>
        </div>

        {/* The Conclusion Section - REDESIGNED */}
        <div className="relative mt-20 max-w-6xl mx-auto">
            
            {/* Background Style */}
            <div className="absolute inset-0 bg-slate-800/20 rounded-3xl -z-10 border border-white/5"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 items-center">
                
                {/* Right Side: Text & Value Prop */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col text-right"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center border border-yellow-400/20">
                            <FaMagic className="text-yellow-400" />
                        </div>
                        <h3 className="text-3xl font-black text-white">الخلاصة:</h3>
                    </div>
                    
                    <p className="text-xl text-slate-300 leading-loose mb-8">
                        الكود دا بيخلي الـ AI تقريبا عبارة عن <span className="text-white font-bold border-b-2 border-cyan-500/50">نسخة رقمية</span> من الأشخاص دي.
                    </p>

                    <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-700/50 space-y-6">
                        <div>
                            <p className="text-slate-400 text-sm font-bold mb-2">ودا معناه انك وظفت خبراء...</p>
                            <div className="flex items-center justify-between bg-slate-800/50 p-3 rounded-lg border border-red-500/10">
                                <span className="text-slate-400 text-sm">لو هتدفع لهم فلوس مش أقل من</span>
                                <span className="text-red-400 font-bold line-through decoration-red-500 decoration-2">1,000,000 جنيه/ شهرياً</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-green-500/10 blur-xl rounded-full"></div>
                            <div className="relative">
                                <p className="text-white font-bold mb-1">لكن حرفيًا انت دلوقتي</p>
                                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-l from-green-400 to-cyan-400">
                                    هتشغلهم ببلاش 24 ساعة
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Left Side: Minimal Interactive Code Block */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    onViewportEnter={() => setTerminalStep(1)} // Start animation when viewed
                    className="relative flex justify-center items-center"
                >
                    <div className="w-full max-w-md bg-[#0F1117] rounded-xl shadow-2xl shadow-cyan-900/20 border border-slate-800 overflow-hidden" dir="ltr">
                        {/* Terminal Header */}
                        <div className="bg-[#161b22] px-4 py-3 flex items-center gap-2 border-b border-slate-800/50">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                            <div className="ml-auto opacity-30 text-[10px] font-mono">expert_cloner.sh</div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 font-mono text-sm min-h-[160px] flex flex-col justify-center gap-3">
                             {terminalStep >= 1 && (
                                <div className="flex items-center gap-2 text-slate-300">
                                    <span className="text-cyan-500 font-bold">{'>'}</span>
                                    <TypewriterText text="...Cloning_Expertise_Module" delay={500} onComplete={() => setTerminalStep(2)} />
                                    {terminalStep === 1 && <span className="w-1.5 h-4 bg-cyan-500 animate-pulse"></span>}
                                </div>
                             )}

                             {terminalStep >= 2 && (
                                <div className="flex items-center gap-2 text-slate-300">
                                     <span className="text-purple-500 font-bold">{'>'}</span>
                                     <TypewriterText text=".Loading_Mental_Models..." delay={200} onComplete={() => setTerminalStep(3)} />
                                     {terminalStep === 2 && <span className="w-1.5 h-4 bg-purple-500 animate-pulse"></span>}
                                </div>
                             )}

                             {terminalStep >= 3 && (
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-green-500 font-bold">{'>'}</span>
                                    <span className="text-green-400 font-bold">.Success: Digital_Twin_Created</span>
                                    <span className="w-1.5 h-4 bg-green-500 animate-pulse ml-1"></span>
                                </div>
                             )}
                        </div>

                        {/* Scanline Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10px] w-full animate-[scan_3s_linear_infinite] pointer-events-none opacity-20"></div>
                    </div>
                    
                    {/* Glow Behind Terminal */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl -z-10 rounded-full"></div>
                </motion.div>

            </div>
        </div>

      </div>
    </section>
  );
};
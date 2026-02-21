

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiX, FiAlertCircle, FiCpu, FiRepeat, FiClock, FiHelpCircle, FiFrown, FiSlash, FiArrowLeft } from 'react-icons/fi';
import { FaRobot, FaBrain } from 'react-icons/fa';
import { SiOpenai, SiGooglegemini, SiAnthropic } from 'react-icons/si';

export const CommonPains: React.FC = () => {
  const navigate = useNavigate();

  const pains = [
    { icon: <FiAlertCircle />, text: "مشاكل هلوسة وتأليف معلومات" },
    { icon: <FiRepeat />, text: "محتاج كل مرة تشرح نفس الكلام" },
    { icon: <FiClock />, text: "مش Updated وآخره 2020" },
    { icon: <FiHelpCircle />, text: "مش بيفهم اللي انت محتاجه بالضبط" },
    { icon: <FiCpu />, text: "بيطلع عينك على ما يعرف انت عايز ايه" },
    { icon: <FiFrown />, text: "عمره ما ساعدك بنتيجة تبسطك" },
    { icon: <FiSlash />, text: "سطحي جداً في الردود" },
    { icon: <FaRobot />, text: "احيانا بتحسه غباء إصطناعي" },
    { icon: <FiX />, text: "بتفكر جديًا تلغي الإشتراك" },
  ];

  const getBentoStyle = (index: number) => {
    const base = "flex items-center gap-5 p-6 rounded-[2rem] border border-slate-200/80 dark:border-slate-800/80 hover:border-red-400/50 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 group relative overflow-hidden ";

    // Strategic asymmetric grid layout (lg: 3 cols, md: 2 cols)
    switch (index) {
      case 0: return base + "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-red-50/80 to-white dark:from-red-900/20 dark:to-slate-900";
      case 1: return base + "md:col-span-1 lg:col-span-1 bg-white dark:bg-slate-900/80";
      case 2: return base + "md:col-span-1 lg:col-span-1 bg-white dark:bg-slate-900/80";
      case 3: return base + "md:col-span-2 lg:col-span-2 bg-gradient-to-l from-slate-50 to-white dark:from-slate-800/30 dark:to-slate-900/80";
      case 4: return base + "md:col-span-1 lg:col-span-1 bg-white dark:bg-slate-900/80";
      case 5: return base + "md:col-span-1 lg:col-span-1 bg-white dark:bg-slate-900/80";
      case 6: return base + "md:col-span-2 lg:col-span-1 bg-white dark:bg-slate-900/80";
      case 7: return base + "md:col-span-1 lg:col-span-2 bg-gradient-to-tr from-red-50/40 to-white dark:from-red-900/10 dark:to-slate-900/80";
      case 8: return base + "md:col-span-1 lg:col-span-1 bg-white dark:bg-slate-900/80";
      default: return base;
    }
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 dark:bg-red-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300/10 dark:bg-slate-700/10 rounded-full blur-[100px] -z-10" />
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] dark:opacity-[0.05] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Logos */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-8 md:gap-12 mb-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            {/* Claude Representation */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center text-[#d97757] group-hover:scale-110 transition-transform">
                <SiAnthropic className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-[#d97757] transition-colors">Claude</span>
            </div>

            {/* Gemini Representation */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center text-[#4E88D4] group-hover:scale-110 transition-transform">
                <SiGooglegemini className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-[#4E88D4] transition-colors">Gemini</span>
            </div>

            {/* ChatGPT Representation */}
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center text-[#10A37F] group-hover:scale-110 transition-transform">
                <SiOpenai className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold text-slate-400 group-hover:text-[#10A37F] transition-colors">ChatGPT</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            كلنا بنواجه مشاكل كتيييييير مع الـ AI
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            الأدوات دي قوية، بس لما بتستخدمها "خام" من غير توجيه، بتتحول لعبء عليك بدل ما تساعدك.
          </p>
        </div>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto mb-16 auto-rows-[minmax(120px,auto)]">
          {pains.map((pain, index) => {
            const isWide = index === 0 || index === 3 || index === 7;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={getBentoStyle(index)}
              >
                {/* Decorative Faint Icon for wide Bento boxes */}
                {isWide && (
                  <div className="absolute -left-6 -bottom-6 opacity-[0.03] dark:opacity-[0.05] pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 text-slate-900 dark:text-white">
                    {React.cloneElement(pain.icon as React.ReactElement, { className: "w-48 h-48" })}
                  </div>
                )}
                
                {/* Visual Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800/30 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-sm flex-shrink-0 relative z-10">
                  {React.cloneElement(pain.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                
                {/* Content */}
                <span className="text-slate-800 dark:text-slate-200 font-bold text-lg md:text-xl leading-snug relative z-10">
                  {pain.text}
                </span>
              </motion.div>
            );
          })}
          
          {/* Final Callout Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-5 p-6 bg-red-500 text-white rounded-[2rem] hover:bg-red-600 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 group lg:col-span-3 md:col-span-2 justify-center relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
             
             <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0 relative z-10">
                <FiAlertCircle className="w-7 h-7" />
             </div>
             
             <span className="font-black text-xl md:text-2xl relative z-10">
                وغيييرها كتير من المشاكل اللي بتتكرر معاك كل يوم
             </span>
          </motion.div>
        </div>

        {/* The Solution / Bridge */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-b from-white to-cyan-50 dark:from-slate-900 dark:to-slate-800/50 border border-cyan-200 dark:border-cyan-900/30 rounded-3xl p-8 md:p-12 shadow-xl shadow-cyan-900/5"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
             عملنا حل هيخلي كل المشاكل دي <span className="text-red-500 line-through decoration-wavy">من الماضي</span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            هيخليك تستمتع وتستفيد بكل ثانية وانت بتستخدم الـ AI وهيوفر عليك وقت وفلوس كتيييير، لأننا برمجنا الخبرة البشرية جوه الأوامر دي.
          </p>
          
          <button 
            onClick={() => navigate('/marketplace')}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xl font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1"
          >
            استفيد بـخصم 30% دلوقتي حالاً
            <FiArrowLeft />
          </button>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">لفترة محدودة جداً</p>
        </motion.div>

      </div>
    </section>
  );
};

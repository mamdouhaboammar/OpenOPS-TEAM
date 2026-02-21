import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiX, FiMinus } from 'react-icons/fi';

export const ComparisonTable: React.FC = () => {
  const features = [
    {
      name: "اللهجة واللغة (Tone of Voice)",
      vanilla: "عربي ركيك، مترجم، ومحسوس إنه روبوت",
      openOps: "مصري أصيل، بياع، ومحدش يفرقه عن البشر",
    },
    {
      name: "فهم البيزنس (Context Awareness)",
      vanilla: "بينسى تفاصيل البراند بتاعك كل شوية",
      openOps: "ذاكرة حديدية، فاكر كل تفصيلة عن عميلك",
    },
    {
      name: "الاستراتيجية (Strategic Thinking)",
      vanilla: "منفذ للأوامر فقط (Reactive)",
      openOps: "مخطط وقائد، بيقترح عليك أفكار (Proactive)",
    },
    {
      name: "التجهيز (Setup Time)",
      vanilla: "ساعات من كتابة وتجربة البرومبتات",
      openOps: "جاهز للشغل فوراً (Plug & Play)",
    },
    {
      name: "الأمان والخصوصية (Data Privacy)",
      vanilla: "بيستخدم بياناتك لتدريب الموديل العام",
      openOps: "بياناتك معزولة ومحمية 100%",
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            مقارنة صريحة: ليه تدفع في AG-Mart؟
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            هل ينفع تقارن "سكينة المطبخ" بـ "مشرط الجراح"؟ الاتنين بيقطعوا، بس النتيجة مختلفة تماماً.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 mb-4 text-center pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="col-span-1 text-right font-bold text-slate-500 px-6">وجه المقارنة</div>
              <div className="col-span-1 font-bold text-slate-400 dark:text-slate-500">
                AI عادي (ChatGPT / Claude)
              </div>
              <div className="col-span-1">
                <span className="inline-block py-2 px-6 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 font-black text-lg border border-cyan-200 dark:border-cyan-700">
                  AG-Mart
                </span>
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="grid grid-cols-3 gap-4 items-center bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Feature Name */}
                  <div className="col-span-1 text-right font-bold text-slate-800 dark:text-slate-200">
                    {feature.name}
                  </div>

                  {/* Vanilla Result */}
                  <div className="col-span-1 text-center flex flex-col items-center gap-2 relative">
                     {/* Mobile connector line visuals could go here */}
                     <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                        <FiMinus />
                     </div>
                     <p className="text-sm text-slate-500 dark:text-slate-400">{feature.vanilla}</p>
                  </div>

                  {/* OpenOps Result */}
                  <div className="col-span-1 text-center flex flex-col items-center gap-2 bg-cyan-50 dark:bg-cyan-900/10 -my-6 py-6 rounded-xl border-x border-cyan-100 dark:border-cyan-900/20">
                     <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                        <FiCheck />
                     </div>
                     <p className="text-sm font-bold text-slate-800 dark:text-white">{feature.openOps}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Conclusion */}
            <div className="mt-8 text-center p-6 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                <p className="text-slate-600 dark:text-slate-300 font-medium">
                    النتيجة: <span className="text-red-500 font-bold">الـ AI العادي</span> هيديك محتوى "يمشي الحال"، بس <span className="text-cyan-600 dark:text-cyan-400 font-bold">AG-Mart</span> هيديك "بيزنس بيكبر".
                </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
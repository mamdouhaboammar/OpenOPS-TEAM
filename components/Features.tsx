import React from 'react';
import { FiTarget, FiMessageCircle, FiTrendingUp } from 'react-icons/fi';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">ليه AG-Mart مختلف؟</h2>
          <p className="text-slate-500 dark:text-slate-400">مش مجرد أدوات.. ده سيستم كامل بيفكر مكانك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:border-cyan-500/30 transition-all shadow-sm dark:shadow-none group">
            <div className="w-14 h-14 bg-cyan-50 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center mb-6 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
              <FiTarget className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">تفكير استراتيجي (Intent-First)</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              مش بيكتب وخلاص. السيستم متدرب يفهم "نية العميل" والمرحلة اللي هو فيها في الـ Sales Funnel قبل ما يكتب حرف.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:border-purple-500/30 transition-all shadow-sm dark:shadow-none group md:-mt-8">
            <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
              <FiMessageCircle className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">كتابة باللهجة المصرية (Human-like)</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              انسى اللغة العربية المكسرة. AG-Mart بيكتب مصري أصيل، "يودي" العميل ويجيبه، بلهجة قريبة ومقنعة جداً.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl hover:border-cyan-500/30 transition-all shadow-sm dark:shadow-none group">
            <div className="w-14 h-14 bg-green-50 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
              <FiTrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">تحليل ونمو (Growth Engine)</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              مش بس محتوى، ده بيحلل النتايج ويقولك ايه اللي شغال وايه اللي لا، عشان تكبر البيزنس بتاعك بأرقام حقيقية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
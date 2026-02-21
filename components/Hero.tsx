import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGrid, FiZap } from 'react-icons/fi';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 text-sm font-semibold mb-6">
             <FiZap className="w-4 h-4" /> AG-Mart = Agent Market
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-normal md:leading-snug">
            <span className="text-slate-900 dark:text-slate-100">استخدام الـ AI الخام</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 py-2 inline-block">
              Vanilla AI هيضيع وقتك وفلوسك
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            فريق ستديو <strong className="text-slate-900 dark:text-slate-200">AG-Mart</strong> قرر يشتغل على السوق المصري وعمل AI Packs مخصصة لكل وظائف الماركتنج تقريبًا في السوق عشان هدف واحد بس تستفيد بكل قدرات الـ AI المخفية في شغلك
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/marketplace"
              className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-lg shadow-cyan-900/20 dark:shadow-cyan-900/40 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <Logo className="w-6 h-6 fill-white stroke-white" />
              تصفح متجر العملاء (AG-Mart)
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { FiAlertTriangle, FiCpu, FiLayers, FiArrowLeft } from 'react-icons/fi';

export const CreativeAgitation: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-12">
      <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
        
        {/* Step 1: Pain */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-red-500/5 border border-red-500/20 rounded-2xl md:rounded-l-none md:rounded-r-2xl p-6 text-center relative group hover:bg-red-500/10 transition-colors"
        >
          <div className="w-12 h-12 mx-auto bg-red-500/10 rounded-full flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
            <FiAlertTriangle className="w-6 h-6" />
          </div>
          <p className="text-slate-300 text-sm font-medium leading-relaxed">
            "انت بنفسك بتعاني من هلوسة الـ AI أو من مشكلة عدم فهمه لـ سياق شغلك"
          </p>
          
          {/* Arrow Connector (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-900 rounded-full p-1 border border-slate-700 text-slate-500">
            <FiArrowLeft />
          </div>
          {/* Arrow Connector (Mobile) */}
          <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 bg-slate-900 rounded-full p-1 border border-slate-700 text-slate-500 rotate-[-90deg]">
            <FiArrowLeft />
          </div>
        </motion.div>

        {/* Step 2: Reality */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex-1 bg-slate-800/50 border-y border-x md:border-x-0 border-slate-700 rounded-2xl md:rounded-none p-6 text-center relative group hover:bg-slate-800 transition-colors"
        >
          <div className="w-12 h-12 mx-auto bg-slate-700/50 rounded-full flex items-center justify-center text-slate-400 mb-4 group-hover:scale-110 transition-transform">
            <FiCpu className="w-6 h-6" />
          </div>
          <p className="text-slate-300 text-sm font-medium leading-relaxed">
            "الـ AI الخام اتعمل عشان تستخدمه في الاسئلة البسيطة مش عشان يساعدك في شغلك"
          </p>

           {/* Arrow Connector (Desktop) */}
           <div className="hidden md:block absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-10 bg-slate-900 rounded-full p-1 border border-slate-700 text-slate-500">
            <FiArrowLeft />
          </div>
           {/* Arrow Connector (Mobile) */}
           <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 bg-slate-900 rounded-full p-1 border border-slate-700 text-slate-500 rotate-[-90deg]">
            <FiArrowLeft />
          </div>
        </motion.div>

        {/* Step 3: Solution */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-gradient-to-br from-cyan-900/10 to-blue-900/10 border border-cyan-500/30 rounded-2xl md:rounded-r-none md:rounded-l-2xl p-6 text-center relative shadow-lg shadow-cyan-900/5 hover:bg-cyan-900/20 transition-colors"
        >
          <div className="absolute inset-0 bg-cyan-500/5 animate-pulse rounded-2xl md:rounded-r-none md:rounded-l-2xl"></div>
          <div className="relative">
            <div className="w-12 h-12 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 mb-4 shadow-lg shadow-cyan-500/20">
                <FiLayers className="w-6 h-6" />
            </div>
            <h4 className="text-cyan-400 font-bold mb-2 text-lg">
                "طبقة واحدة بس ناقصة"
            </h4>
            <p className="text-slate-200 text-sm font-medium leading-relaxed">
                "عشان يساعدك في شغلك فعليًا وتشوف قدرات خارقة للـ AI عمرك ما كنت تتوقع انك تشوفها أو تتخيل انها موجودة"
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

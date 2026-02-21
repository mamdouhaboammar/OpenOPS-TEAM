import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

const faqs = [
  { 
    q: "هل أحتاج لاشتراك مدفوع (ChatGPT Plus) عشان أستخدم المنتجات؟", 
    a: "الـ Agents الخاصة بنا مصممة لتعمل بكفاءة عالية مع النسخ المجانية من ChatGPT و Claude و Gemini. ولكن بكل تأكيد، استخدام النسخ المدفوعة سيمنحك سرعة أكبر وقدرة أعلى في المهام التحليلية المعقدة جداً." 
  },
  { 
    q: "كيف أقوم بتركيب الـ Agent بعد الشراء؟", 
    a: "بمجرد الشراء، ستحصل على ملف يحتوي على التعليمات النظامية (System Instructions) الجاهزة. كل ما عليك فعله هو نسخ هذه التعليمات ولصقها في قسم 'Custom GPT' أو 'Claude Project' أو 'Gemini Gems' الخاص بك، وسيكون جاهزاً للعمل في أقل من دقيقة." 
  },
  { 
    q: "هل تدعم هذه الملفات والأنظمة اللغة العربية؟", 
    a: "بالتأكيد! جميع أنظمتنا مزودة بملفات 'Lexicon' مخصصة لفهم اللهجات العربية (خاصة المصرية والسعودية) لتوليد محتوى يبدو طبيعياً ومقنعاً جداً كأنه مكتوب بيد إنسان." 
  },
  { 
    q: "هل الدفع يتم لمرة واحدة أم هو اشتراك شهري؟", 
    a: "الدفع يتم لمرة واحدة فقط (One-time payment). بمجرد شرائك للـ Agent، ستمتلك الملفات للأبد، بالإضافة إلى حصولك على جميع التحديثات المستقبلية الخاصة بهذا المنتج مجاناً." 
  },
  { 
    q: "ماذا لو لم أحصل على النتيجة المتوقعة؟", 
    a: "نحن نضمن جودة الملفات وأنظمة التشغيل التي نقدمها. إذا واجهت أي مشكلة أو شعرت أن الـ AI لا يستجيب بشكل جيد، فريق الدعم الفني الخاص بنا (والذي يتكون من مهندسين ومتخصصين) سيكون متاحاً لمساعدتك في ضبط النظام حتى تحصل على أفضل نتيجة." 
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 dark:bg-cyan-900/30 mb-6 text-cyan-600 dark:text-cyan-400"
          >
            <FiHelpCircle className="w-8 h-8" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">الأسئلة الشائعة</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">كل الإجابات اللي محتاجها عشان تاخد قرار الشراء وأنت مطمن.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                openIndex === idx 
                ? 'bg-slate-50 dark:bg-slate-900 border-cyan-500/50 dark:border-cyan-500/50 shadow-md' 
                : 'bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-cyan-500/30'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-right focus:outline-none"
              >
                <span className="font-bold text-lg text-slate-900 dark:text-white">{faq.q}</span>
                <FiChevronDown className={`w-6 h-6 shrink-0 text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-cyan-500' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
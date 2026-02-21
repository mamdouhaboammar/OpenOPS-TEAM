
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiEye, FiClipboard, FiShoppingCart, FiArrowDown, FiUserCheck } from 'react-icons/fi';
import { FaWhatsapp, FaMoneyBillWave, FaBrain, FaCrown, FaRocket, FaLaptopCode } from 'react-icons/fa';

export const HowItWorks: React.FC = () => {
  const navigate = useNavigate();
  const steps = [
    { 
      text: "انت بتتصفح الستور بتاعنا", 
      icon: <FiEye className="w-6 h-6" />
    },
    { 
      text: "بتشوف كل الـ Agents المتاحة وتفاصيلها وسعرها", 
      icon: <FiClipboard className="w-6 h-6" />
    },
    { 
      text: "بتختار الـ Agent اللي تحس انه هيفيدك في شغلك ويوفر عليك وقت وفلوس ومجهود", 
      icon: <FaBrain className="w-6 h-6" />,
      highlight: true
    },
    { 
      text: "بتـ Add To Cart الـ Agents اللي تناسبك", 
      icon: <FiShoppingCart className="w-6 h-6" />
    },
    { 
      text: "بتحول قيمة الـ Cart على VF Cash أو Instapay حسب اللي يناسبك", 
      icon: <FaMoneyBillWave className="w-6 h-6" />
    },
    { 
      text: "بتبعت لنا على واتساب ايصال التحويل", 
      icon: <FaWhatsapp className="w-6 h-6" />
    },
    { 
      text: "فريقنا بيجهز ليك كل شيء وبيتابع معاك خطوة بخطوة لغاية ما تستفيد من الـ Agents فعليًا في شغلك", 
      icon: <FaLaptopCode className="w-6 h-6" />
    },
    { 
      text: "بعدها بتتحول لـ VIP Client وبيكون معاك فريق دعم بيساعدك في أي وقت تحتاجنا فيه", 
      icon: <FaCrown className="w-6 h-6" />,
      vip: true
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
       {/* Fun Background Blobs */}
       <div className="absolute top-20 right-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-[80px] -z-10 animate-pulse" />
       <div className="absolute bottom-20 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-[80px] -z-10 animate-pulse" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-100 to-purple-100 dark:from-cyan-900/40 dark:to-purple-900/40 rounded-3xl mb-6 shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300"
          >
            <FaRocket className="text-4xl text-cyan-600 dark:text-cyan-400" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            الخطوات سهلة وبسيطة
          </h2>
          <p className="text-slate-500 dark:text-slate-400">رحلتك من "الـ AI الغبي" لـ "الـ AI العبقري" في 8 خطوات بس</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-200 via-purple-200 to-yellow-200 dark:from-cyan-900 dark:via-purple-900 dark:to-yellow-900 -translate-x-1/2 rounded-full" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 md:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-4 h-4 bg-white dark:bg-slate-900 border-4 border-cyan-500 rounded-full shadow-lg" />
              </div>

              {/* Spacer for Desktop Layout */}
              <div className="hidden md:block w-1/2" />

              {/* Content Card */}
              <div className="flex-1 ml-12 md:ml-0 md:p-8">
                <div className={`p-6 rounded-2xl relative group transition-all duration-300 hover:-translate-y-2
                  ${step.vip 
                    ? 'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-2 border-yellow-400' 
                    : step.highlight 
                      ? 'bg-white dark:bg-slate-900 border-2 border-purple-500 shadow-purple-200 dark:shadow-purple-900/20 shadow-lg'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm'
                  }
                `}>
                  {/* Floating Number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl flex items-center justify-center font-black shadow-lg transform rotate-6 group-hover:rotate-12 transition-transform">
                    {index + 1}
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner ${
                      step.vip ? 'bg-yellow-400 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}>
                      {step.icon}
                    </div>
                    <div>
                      <p className={`text-lg font-medium leading-relaxed ${
                        step.highlight ? 'text-purple-700 dark:text-purple-300' : 'text-slate-700 dark:text-slate-200'
                      }`}>
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/marketplace')}
            className="group relative inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xl font-bold py-5 px-10 rounded-full shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">تصفح كل العملاء (Agents)</span>
            <FiArrowDown className="relative z-10 group-hover:translate-y-1 transition-transform" />
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
